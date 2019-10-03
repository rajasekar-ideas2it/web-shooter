"use strict";

const startRecordingBtn = document.getElementById("startRecordingBtn");

startRecordingBtn.onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const { id: currentTabId } = tabs[0];
    chrome.extension.getBackgroundPage().initiateScreenShot(currentTabId);
  });
};

const makeZip = document.getElementById("makeZip");

makeZip.onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const { id: currentTabId } = tabs[0];
    chrome.extension.getBackgroundPage().stopRecording(currentTabId);
  });
};
