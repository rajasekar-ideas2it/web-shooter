// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

"use strict";

function WebRequest () {};
const constants = {
  START_CONSOLE_RECORDING: "START_CONSOLE_RECORDING",
  STOP_CONSOLE_RECORDING: "STOP_CONSOLE_RECORDING"
};
let recordingVideoId = null;
let recordedVideoBlobs = [];
let stream = null;
let mediaRecorder = null;
const videoMimeType = "video/webm";
let ports = {};
let networkLog = null;
let tabId = null;
let recordingStartedTime = null;
var req;
var startTime=0;

var requests = [];
var requestsMap = {};
var pages = {};

function startRecording(id) {
  tabId = id;

  startScreenRecording(id);
  startConsoleRecording(id);
  startNetworkRecording(id);
}

// VIDEO RECORDING START
const startScreenRecording = tabId => {
  recordingVideoId = chrome.desktopCapture.chooseDesktopMedia(
    ["screen"],
    onMediaSelected
  );
};

const onMediaSelected = id => {
  if (!id) {
    alert("Permission denied for recording");
  }
  recordingStartedTime = new Date();
  const options = {
    mandatory: {
      chromeMediaSource: "desktop",
      chromeMediaSourceId: id
    }
  };
  navigator.webkitGetUserMedia({
      audio: options,
      video: {
        mandatory: {
          chromeMediaSource: "desktop",
          chromeMediaSourceId: id,
          maxWidth: 1280,
          maxHeight: 720
        }
      }
    },
    onVideoStreamSuccess,
    onVideoStreamFailure
  );
};

const onVideoStreamSuccess = stream => {
  stream = stream;
  const options = {
    mimeType: videoMimeType
  };
  mediaRecorder = new MediaRecorder(stream, options);
  mediaRecorder.onstop = () => {
    console.info("Recording has ended");
  };
  mediaRecorder.ondataavailable = event => {
    if (event.data && event.data.size > 0) {
      recordedVideoBlobs.push(event.data);
    }
  };
  // mediaRecorder.start(10); seperate chunks of 10 milliseconds
  mediaRecorder.start();

  // Stop sharing button handler
  stream.getVideoTracks()[0].onended = function () {
    console.info("Recording has ended");
    // stopVideoRecording();
    stopRecording();
  };
};

const onVideoStreamFailure = () => {
  console.log("onVideoStreamFailure ");
};

const stopVideoRecording = async () => {
  return new Promise((resolve, reject) => {
    if (recordingVideoId != null) {
      chrome.desktopCapture.cancelChooseDesktopMedia(recordingVideoId);
      recordingVideoId = null;
      if (mediaRecorder.state === "recording") {
        mediaRecorder.stop();
      }
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
      resolve();
    }
  });
};

const getVideoDataUrl = async () => {
  return new Promise((resolve, reject) => {
    if (recordedVideoBlobs.length > 0) {
      var superBuffer = new Blob(recordedVideoBlobs, {
        type: 'video/webm'
      });
      var reader = new window.FileReader();
      reader.readAsDataURL(superBuffer);
      reader.onloadend = function () {
        return resolve(reader.result);
      }
    } else {
      return reject(null);
    }
  });
};

async function stopRecording() {

  await stopVideoRecording();
  setTimeout(
    async () => {
      const networkLog = await stopNetworkRecording();
      const consoleLog = await stopConsoleRecording(tabId);
      const video = await getVideoDataUrl();
      var obj = {};
      networkLog.recordingStartedTime = recordingStartedTime;
      obj.networkLog = JSON.stringify(networkLog);
      obj.consoleLog = JSON.stringify(consoleLog);
      obj.video = video;
      obj.key = (new Date).getTime();
      obj.recordingStartedTime = recordingStartedTime;
      recordingStartedTime = null;
      console.log('obj', obj);
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          alert(obj.key);
          window.open(`http://web-shooter-preview.s3-website-us-east-1.amazonaws.com/view/${obj.key}`, '_blank');
        }
      };
      xmlHttp.open("POST", ' http://ec2-3-95-132-124.compute-1.amazonaws.com:3000/upload'); // false for synchronous request
      xmlHttp.setRequestHeader("Content-type", "application/json");
      xmlHttp.send(JSON.stringify(obj));

    }, 2000);
}

// CONSOLE RECORDING START
const startConsoleRecording = tabId => {
  // chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  chrome.tabs.sendMessage(
    tabId, {
      action: constants.START_CONSOLE_RECORDING
    },
    response => {
      console.log(response);
    }
  );
  // });
};

const stopConsoleRecording = async (tabId) => {
  return new Promise((res, rej) => {
    chrome.tabs.sendMessage(
      tabId, {
        action: constants.STOP_CONSOLE_RECORDING
      },
      response => {
        res(response);
      }
    );
  });
};

async function stopNetworkRecording() {
  // ports["devtools"].postMessage({
  //   source: "background",
  //   action: "getNetworkHar"
  // });
  // return new Promise((resolve, reject) => {
  //   const networkLogListener = window.setInterval(() => {
  //     if (networkLog) {
  //       resolve(networkLog);
  //       window.clearInterval(networkLogListener);
  //     }
  //   }, 100);
  // });
  chrome.debugger.detach({ tabId: tabId });
  requestsMap = {};
  var body = {
    entries: requests.filter(obj => obj.type === 'XHR'),
    pages: Object.keys(pages)
  };
  requests = [];
  pages = {};
  return body;
};

const handleDevtoolsMessages = message => {
  switch (message.action) {
    case "setNetworkLog":
      console.log("Messages - - - - ", message);
      networkLog = message.message;
      break;
    default:
      console.log("Unhandled message");
  }
};

chrome.runtime.onConnect.addListener(port => {
  ports = {
    ...ports,
    [`${port.name}`]: port
  };
  port.onMessage.addListener(message => {
    switch (port.name) {
      case "devtools":
        handleDevtoolsMessages(message);
        break;
      default:
        console.log("Unhandled port connection");
    }
  });
});

function startNetworkRecording(tabid) {
    chrome.debugger.attach({ //debug at current tab
      tabId: tabid
    }, "1.0", onAttach.bind(null, tabid));
}

function onAttach(tabId) {
  chrome.debugger.sendCommand({
    tabId: tabId
  }, "Network.enable");
  chrome.debugger.sendCommand({
    tabId: tabId
  }, "Network.clearBrowserCache");
  chrome.debugger.onEvent.addListener(allEventHandler);
}

function allEventHandler(debuggeeId, message, params) {
  var request = requestsMap[params.requestId];
  if (!request) {
    request = {
      startedDateTime: new Date().toISOString()
    };
    requestsMap[params.requestId] = request;
    requests.push(request);
  }
  switch (message) {
    case "Network.responseReceived":
      request.received = new Date().toISOString();
      request.response = {
        headers: params.response.headers,
        serverIPAddress: params.response.remoteIPAddress,
        status: params.response.status,
        statusText: params.response.statusText
      };
      break;
    case "Network.requestWillBeSent":
      if (params.redirectResponse && request.request) {
        var location = params.redirectResponse.headers['Location'] || params.redirectResponse.headers['location'];
        if (location && request.request.url.endsWith(location)) {
          break;
        }
        request.response = {
          headers: params.redirectResponse.headers,
          serverIPAddress: params.redirectResponse.remoteIPAddress,
          status: params.redirectResponse.status,
          statusText: params.redirectResponse.statusText,
          body: {
            base64Encoded: false,
            body: params.redirectResponse.statusText
          }
        };
        request = {
          created: new Date().toISOString()
        };
        requests.push(request);
        requestsMap[params.requestId] = request;
      }
      request.request = params.request;
      request.initiator = params.initiator;
      request.type = params.type;
      request.documentUrl = params.documentURL;
      if (request.documentUrl) {
        pages[request.documentUrl] = true;
      }
      break;
    case "Network.dataReceived":
      break;
    case "Network.loadingFinished":
      chrome.debugger.sendCommand({
        tabId: debuggeeId.tabId
      }, "Network.getResponseBody", {
          "requestId": params.requestId
        }, function (response) {
          if (response) {
            request.response.body = response;
          }
        });
      break;
  }
}