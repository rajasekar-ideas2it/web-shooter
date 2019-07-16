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

function startRecording(tabId) {
  // startScreenRecording(tabId);
  startConsoleRecording(tabId);
  // startNetworkRecording(tabId);
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
    // stopVideoeRecording();
    stopRecording();
  };
};

const onVideoStreamFailure = () => {
  console.log("onVideoStreamFailure ");
};

const stopVideoeRecording = () => {
  if (recordingVideoId != null) {
    chrome.desktopCapture.cancelChooseDesktopMedia(recordingVideoId);
    recordingVideoId = null;
    if (mediaRecorder.state === "recording") {
      mediaRecorder.stop();
      // To Be removed and fixed properly
      setTimeout(() => {
        getVideoDataUrl();
      }, 2000);
    }
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }
  }
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
  }
};

const stopRecording = () => {
  // stopConsoleRecording().then(logs => {

  //   const data  = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(logs));
  //   const a       = document.createElement('a');
  //   a.href      = 'data:' + data;
  //   a.download  = 'data.txt';
  //   a.click();

  //   stopVideoeRecording();
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
    networkLog = null;
    stopVideoeRecording();
    stopConsoleRecording();
  });
};

// CONSOLE RECORDING START
const startConsoleRecording = tabId => {
  debugger;
  const attachVersion = "1.2";
  chrome.debugger.attach({ tabId }, attachVersion, (a, b, c) => {
    if (chrome.runtime.lastError) {
      console.log(chrome.runtime.lastError);
    } else {  
      console.log('a, b, c', a, b, c);
      debugger;
      console.log("Debugger attached to the tab");
      chrome.debugger.onEvent.addListener((source, method, params) => {
        console.log('\nSource - ', source);
        console.log('\nMethod - ', method);
        console.log('\nParams- ', params);
        chrome.debugger.sendCommand(tabId, 'Debugger.enable', {}, (result) => {
          console.log('\nsend command result', result);
          chrome.debugger.sendCommand(tabId, 'Console.enable', {}, (result) => {
            console.log('\nsend command result Console', result);
          });
        });
      });
    }
  });
};

const stopConsoleRecording = () => {
  return new Promise((res, rej) => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: constants.STOP_CONSOLE_RECORDING },
        response => {
          console.log(response);
          res(response);
        }
      );
    });
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
