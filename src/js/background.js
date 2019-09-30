"use strict";

function WebRequest() { };
const constants = {
  START_CONSOLE_RECORDING: "START_CONSOLE_RECORDING",
  STOP_CONSOLE_RECORDING: "STOP_CONSOLE_RECORDING",
  SCREENSHOT: "SCREENSHOT",
  GET_SCREENSHOTS: "GET_SCREENSHOTS"
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
var startTime = 0;

var requests = [];
var requestsMap = {};
var pages = {};
var loading = false;
var intervalId;
var iconIndex = 0;
let blobList = []
let imageList = []



// for screent shot
var screenshot = {
  content: document.createElement("canvas"),
  data: '',

  init: function () {
    this.initEvents();
  },

  saveScreenshot: function (tabs) {
    var image = new Image();
    image.onload = function () {
      var canvas = screenshot.content;
      canvas.width = image.width;
      canvas.height = image.height;
      var context = canvas.getContext("2d");
      context.drawImage(image, 0, 0);

      // save the image
      var link = document.createElement('a');
      // link.href=window.location.href
      let title = ''
      if (tabs != undefined & tabs[0] != undefined)
        title = tabs[0].title
      let screenshotTime = new Date()
      link.download = title + '_' + screenshotTime + ".png";

      link.href = screenshot.content.toDataURL();

      canvas.toBlob(function (blob) {
        blobList.push(blob)
        console.log(blob instanceof Blob);

      });

      let screentShots = {
        time: screenshotTime,
        image: link.download
      }

      let msg = {
        payload: screentShots,
        action: 'SCREENSHOT'
      }

      chrome.tabs.sendMessage(tabs[0].id, msg, (response) => {
        console.log(response);
      });


      screenshot.data = '';
    };
    image.src = screenshot.data;
  },

  initEvents: function () {

    // chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.captureVisibleTab(null, {
      format: "png",
      quality: 100
    }, function (data) {
      screenshot.data = data;

      // send an //alert message to webpage
      chrome.tabs.query({
        active: true,
        currentWindow: true
      }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { ready: "ready" }, function (response) {
          console.log("tabs")
          console.log(tabs)
          // 	if (response.download === "download") {
          // 		console.log(response);
          // if (1) {
          screenshot.saveScreenshot(tabs);
          // }
          // else {
          // 	screenshot.data = '';
          // }
        });
      });

    });
    // });
  }
};
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {

  console.log(tabId, changeInfo, tab)
  chrome.extension.getBackgroundPage().startRecording2(tabId);
});

// VIDEO RECORDING START
/* const startScreenRecording = tabId => {
  recordingVideoId = chrome.desktopCapture.chooseDesktopMedia(
    ["screen"],
    onMediaSelected
  );
};

const onMediaSelected = id => {
  if (!id) {
    // //alert("Permission denied for recording");
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
*/

function updateIcon() {
  var iconName = loading ?
    './assets/images/cloud-upload64-' + ((iconIndex % 2) + 1) + '.png' : './assets/images/bug16.png';
  chrome.browserAction.setIcon({ path: iconName });
}

const getBlobDataUrl = (blob) => {
  var reader = new FileReader();
  reader.readAsDataURL(blob);
  reader.onloadend = function () {
    var base64data = reader.result;
    console.log(base64data);
  }
};


function makeZip(logs, imageList) {

  let link = document.createElement('a');
  link.download = 'attachment.zip';

  var zip = new JSZip();
  zip.file("info.txt", "Hello World\n");
  var img = zip.folder("images");

  /* 
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
  }); */

  /*  blobList.forEach((eachBlob, index) => {
     var reader = new FileReader();
     reader.readAsDataURL(eachBlob);
 
     reader.onloadend = function () {
       var base64data = reader.result;
       console.log(base64data);
       // base64data=''
       img.file(index + "png", base64data, { base64: true });
     }
 
   }); */

  let promises = []

  promises = blobList.map((eachBlob) => {
    return new Promise((res, rej) => {
      var reader = new FileReader();
      reader.readAsDataURL(eachBlob);

      reader.onloadend = function () {
        var base64data = reader.result.split(',')[1];
        console.log(base64data);
        res(base64data)
      }
    });
  });

  Promise.all(promises).then(values => {
    values.forEach((base64data, index) => {
      img.file(imageList[index].image, base64data, { base64: true });
    })
    var generateOptions = { compression: 'STORE', type: 'blob' };

    // if (!process.browser) {
    //   generateOptions.type = 'nodebuffer';
    // }
    var content = zip.generateAsync(generateOptions);
    content.then((x) => {
      console.log(x)
      var a = document.createElement("a");
      document.body.appendChild(a);
      let url = window.URL.createObjectURL(x);
      a.href = url;
      a.download = 'attachment.zip';
      a.click();
    })
  }).then(() => {
    blobList = []
    promises = []
  })

  // var generateOptions = { compression: 'STORE', type: 'blob' };

  // // if (!process.browser) {
  // //   generateOptions.type = 'nodebuffer';
  // // }
  // var content = zip.generateAsync(generateOptions);
  // content.then((x) => {
  //   console.log(x)
  //   var a = document.createElement("a");
  //   document.body.appendChild(a);
  //   let url = window.URL.createObjectURL(x);
  //   a.href = url;
  //   a.download = 'hello.zip';
  //   a.click();

  // })
  // console.log(content);
  // window.location.href = "data:application/zip;base64," + content;
  // console.log(window.location.href)

}
async function stopRecording(tabId) {
  // //alert('function called in backjs 211')
  // await stopVideoRecording();
  loading = true;
  intervalId = setInterval(function () {
    iconIndex++;
    updateIcon();
  }, 500);
  setTimeout(
    async () => {
      const networkLog = await stopNetworkRecording();
      const consoleLog = await stopConsoleRecording(tabId);
      imageList = await getScreenShots(tabId)

      let logs = {
        console: consoleLog,
        network: networkLog
      }
      logs = cleanLogs(logs, imageList)

      makeZip(logs, imageList)

      var obj = {};
      networkLog.recordingStartedTime = recordingStartedTime;

      obj.networkLog = networkLog;
      obj.consoleLog = consoleLog;
      obj.key = (new Date).getTime();
      obj.recordingStartedTime = recordingStartedTime;
      recordingStartedTime = null;
      console.log('obj', obj);
      console.log(JSON.stringify(obj));
      var xmlHttp = new XMLHttpRequest();

      xmlHttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          loading = false;
          updateIcon();
          clearInterval(intervalId)
          // //alert(obj.key);
          // window.open(`http://web-shooter-preview.s3-website-us-east-1.amazonaws.com/view/${obj.key}`, '_blank');
        }
      };
      // xmlHttp.open("POST", ' http://ec2-3-95-132-124.compute-1.amazonaws.com:3000/upload'); // false for synchronous request
      // xmlHttp.setRequestHeader("Content-type", "application/json");
      // xmlHttp.send(JSON.stringify(obj));

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

const getScreenShots = ((tabId) => {
  return new Promise((res, rej) => {
    chrome.tabs.sendMessage(
      tabId, {
        action: constants.GET_SCREENSHOTS
      },
      response => {
        // //alert(452)
        // //alert(JSON.stringify(response))
        res(response);
      }
    );
  });
});

function cleanLogs(logs, imageList) {

  let filtered = {
    console: [],
    network: []
  }
   logs.console.log.forEach(eachLog=>{
     imageList.forEach(eachImage => {
       let tempDate=
       if(eachImage.geteachLog.dateTime)
       filtered.console.push(eachLog)
     });
   })

  // //alert("logs", JSON.stringify(logs))
  // //alert('imageList', JSON.stringify(imageList))

}

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
  console.log('start network recording')
  chrome.debugger.attach({ //debug at current tab
    tabId: tabid
  }, "1.0", onAttach.bind(null, tabid));
}

function onAttach(tabId) {
  console.log("on attach called")
  chrome.debugger.sendCommand({
    tabId: tabId
  }, "Network.enable");
  chrome.debugger.sendCommand({
    tabId: tabId
  }, "Network.clearBrowserCache");
  chrome.debugger.onEvent.addListener(allEventHandler);
}

function allEventHandler(debuggeeId, message, params) {
  //alert("allEventHandler called")
  var request = requestsMap[params.requestId];
  console.log(request)
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
          created: new Date().toISOString(),
          response: ''
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



function startRecording2(id) {
  tabId = id;
  //alert('started')
  // startScreenRecording(id);
  startConsoleRecording(id);
  startNetworkRecording(id);
  // screenshot.init();

}

function startRecording(id) {
  tabId = id;
  //alert('started')
  // startScreenRecording(id);
  // startConsoleRecording(id);
  // startNetworkRecording(id);
  screenshot.init();

}

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { greeting: "hello" }, function (response) {
      console.log(response);
    });
  });
});
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    // //alert('req')
    console.log(request);
  });

  /* 
  // for (let i = 0,j=2; i < 30,j=i%4+1; i++,j++) {
//     // for (let j = 2; j < 4; j++) {
//         console.log(i, j)
//     // }
// }

for (let i = 0; i < 30; i++) {
    // for (let j = 2; j < 4; j++) {
        console.log(i)
    // }
}

 */