// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

"use strict";

let recordingVideoId = null;
let recordedVideoBlobs = [];
let stream = null;
let mediaRecorder = null;
const videoMimeType = "video/webm";

function startRecording(tabId) {
  startScreenRecording(tabId);
};

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
    stopVideoeRecording();
  };
};

const onVideoStreamFailure = () => {
  console.log('onVideoStreamFailure ');
}

const stopVideoeRecording = () => {
  debugger
  if (recordingVideoId != null) {
    chrome.desktopCapture.cancelChooseDesktopMedia(recordingVideoId);
    recordingVideoId=null;
    if(mediaRecorder.state === "recording") {
      mediaRecorder.stop();
      // To Be removed and fixed properly
      setTimeout(() => {
        getVideoDataUrl();
      }, 2000);
    }
    if(stream) {
      stream.getTracks().forEach(track => track.stop());
    }
  }
}

const getVideoDataUrl = () => {
  if(recordedVideoBlobs.length>0) {
    const recordedobjectURL = window.URL.createObjectURL(new Blob(recordedVideoBlobs, { type: videoMimeType }));
    console.log('recordedobjectURL, ', recordedobjectURL);

    var a = document.createElement('a');
    document.body.appendChild(a);
    a.style = 'display: none';
    a.href = recordedobjectURL;
    a.download = 'test.webm';
    a.click();
    window.URL.revokeObjectURL(recordedobjectURL);
  }
}

const stopRecording = () => {
  stopVideoeRecording();
}