// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

const startRecordingBtn = document.getElementById('startRecordingBtn');

startRecordingBtn.onclick = () => {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    const { id: currentTabId } = tabs[0];
    chrome.extension.getBackgroundPage().startRecording(currentTabId);
  });
}
