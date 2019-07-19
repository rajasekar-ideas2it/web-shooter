// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

"use strict";

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

function startRecording(id) {
  tabId = id;

  startScreenRecording(id);
  startConsoleRecording(id);
  // startNetworkRecording(id);
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
  const options = {
    mandatory: {
      chromeMediaSource: "desktop",
      chromeMediaSourceId: id
    }
  };
  navigator.webkitGetUserMedia(
    {
      audio: options,
      video: {
        mandatory: {
          chromeMediaSource: "desktop",
          chromeMediaSourceId: id,
          maxWidth: screen.width,
          maxHeight: screen.height
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
  stream.getVideoTracks()[0].onended = function() {
    console.info("Recording has ended");
    // stopVideoRecording();
    stopRecording();
  };
};

const onVideoStreamFailure = () => {
  console.log("onVideoStreamFailure ");
};

const stopVideoRecording = () => {
  return new Promise((resolve, reject) => {
    if (recordingVideoId != null) {
      chrome.desktopCapture.cancelChooseDesktopMedia(recordingVideoId);
      recordingVideoId = null;
      if (mediaRecorder.state === "recording") {
        mediaRecorder.stop();
        // To Be removed and fixed properly
        setTimeout(() => {
          resolve(getVideoDataUrl());
        }, 2000);
      }
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    }
  });
};

const getVideoDataUrl = () => {
  if (recordedVideoBlobs.length > 0) {
    const recordedobjectURL = window.URL.createObjectURL(
      new Blob(recordedVideoBlobs, { type: videoMimeType })
    );
    console.log("recordedobjectURL, ", recordedobjectURL);
    // Creates a invisible anchor tag and downloads video.
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    a.href = recordedobjectURL;
    a.download = "screenrecording.webm";
    a.click();
    window.URL.revokeObjectURL(recordedobjectURL);
    return recordedobjectURL;
  }
};

function stopRecording() {
  // stopConsoleRecording().then(logs => {

  //   const data  = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(logs));
  //   const a       = document.createElement('a');
  //   a.href      = 'data:' + data;
  //   a.download  = 'data.txt';
  //   a.click();

  //   stopVideoRecording();
  // });

  stopNetworkRecording().then(networkLog => {
    console.log("Network log", networkLog);
    const data =
      "text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(networkLog));
    const a = document.createElement("a");
    a.href = "data:" + data;
    a.download = "network-logs.txt";
    a.click();
    var xhrReq = networkLog.entries.filter(log => log._resourceType === "xhr");
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", 'http://192.168.1.248:3000/write'); // false for synchronous request
    xmlHttp.setRequestHeader("Content-type", "application/json");
    xmlHttp.send(JSON.stringify(xhrReq));
    networkLog = null;
    stopVideoRecording().then(videoObjectUrl => {
      // chrome.tabs.create({ url: 'edit.html' });

      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        stopConsoleRecording(tabId).then(consoleLogs => {
          tabId = null;
          console.log("Console logs ", consoleLogs);
          console.log("Network log", networkLog);
          const data =
            "text/json;charset=utf-8," +
            encodeURIComponent(JSON.stringify(consoleLogs));
          const a = document.createElement("a");
          a.href = "data:" + data;
          a.download = "console-logs.txt";
          var xmlHttp = new XMLHttpRequest();
          xmlHttp.open("POST", 'http://192.168.1.248:3000/write/console'); // false for synchronous request
          xmlHttp.setRequestHeader("Content-type", "application/json");
          let request = JSON.parse(consoleLogs.logs)
          xmlHttp.send(JSON.stringify(request));
          networkLog = null;
          a.click();
        });
      });
    });
  });
}

// CONSOLE RECORDING START
const startConsoleRecording = tabId => {
  // chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  chrome.tabs.sendMessage(
    tabId,
    { action: constants.START_CONSOLE_RECORDING },
    response => {
      console.log(response);
    }
  );
  // });
};

const stopConsoleRecording = tabId => {
  return new Promise((res, rej) => {
    chrome.tabs.sendMessage(
      tabId,
      { action: constants.STOP_CONSOLE_RECORDING },
      response => {
        console.log(response);
        res(response);
      }
    );
  });
};

// const startNetworkRecording = (tabid) => {
//   // chrome.webRequest.onCompleted.addListener(object => {
//   //   console.log('Object - - - ', object);
//   // });
//   // chrome.webRequest.onCompleted.addListener(
//   //   details => {
//   //     console.log('Object - - - ', details);
//   //   },
//   //   {
//   //     urls: ["<all_urls>"],
//   //     tabId: tabid,
//   //     types: ["main_frame", "sub_frame", "xmlhttprequest"]
//   //   }
//   // );

//   ports['devtools'].postMessage({ source: 'background', action: 'startNetworkRecording' });
// }

const stopNetworkRecording = () => {
  ports["devtools"].postMessage({
    source: "background",
    action: "getNetworkHar"
  });
  return new Promise((resolve, reject) => {
    const networkLogListener = window.setInterval(() => {
      console.log("Checking if network is recevied");
      if (networkLog) {
        console.log("Network is received");
        resolve(networkLog);
        window.clearInterval(networkLogListener);
      }
    }, 100);
  });
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
  ports = { ...ports, [`${port.name}`]: port };
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
