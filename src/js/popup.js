"use strict";

const startRecordingBtn = document.getElementById("startRecordingBtn");
const makeZip = document.getElementById("makeZip");
let selectedTabId = ''

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  const { id: currentTabId } = tabs[0];
  if (localStorage.getItem('current_tab') == null || localStorage.getItem('current_tab') == 'null' || localStorage.getItem('current_tab') == currentTabId) {
    startRecordingBtn.style.background = 'red'
    startRecordingBtn.disabled = false
    makeZip.style.background = 'red'
    makeZip.disabled = false
  }
  else {
    startRecordingBtn.style.background = 'gray'
    startRecordingBtn.disabled = true
    makeZip.style.background = 'gray'
    makeZip.disabled = true
  }
});

startRecordingBtn.onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const { id: currentTabId } = tabs[0];
    localStorage.setItem('current_tab', currentTabId)
    chrome.extension.getBackgroundPage().initiateScreenShot(currentTabId);
  });
};

makeZip.onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const { id: currentTabId } = tabs[0];
    chrome.extension.getBackgroundPage().stopRecording(currentTabId);
  });
  localStorage.setItem('current_tab', null)
};


