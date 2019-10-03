"use strict";

function WebRequest() { };
const constants = {
  START_CONSOLE_RECORDING: "START_CONSOLE_RECORDING",
  STOP_CONSOLE_RECORDING: "STOP_CONSOLE_RECORDING",
  SCREENSHOT: "SCREENSHOT",
  GET_SCREENSHOTS: "GET_SCREENSHOTS"
};
/* let recordingVideoId = null;
let recordedVideoBlobs = [];
let stream = null;
let mediaRecorder = null;
const videoMimeType = "video/webm";
var req;
var startTime = 0; */
let ports = {};
let networkLog = null;
let tabId = null;
let recordingStartedTime = null;

var requests = [];
var requestsMap = {};
var pages = {};
var loading = false;
var intervalId;
var iconIndex = 0;

let blobList = []
let imageList = []

let logs = {}
let filtered = {
  console: [],
  network: []
}

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
      let screenshotTime = new Date().toString()
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

      // if (isNotChromeURL())
      chrome.tabs.sendMessage(tabs[0].id, msg, (response) => {
        console.log(response);
      });


      screenshot.data = '';
    };
    image.src = screenshot.data;
  },

  initEvents: function () {

    // chrome.browserAction.onClicked.addListener(function(tab) {
    // if (!isChromeURL())
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

// if (!isChromeURL())
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {

  console.log(tabId, changeInfo, tab)
  chrome.extension.getBackgroundPage().startRecording(tabId);
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
  // zip.file("info.txt", "Hello World\n");
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

    /* if (!process.browser) {
      generateOptions.type = 'nodebuffer';
    } */
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

}
async function stopRecording(tabId) {
  loading = true;
  /* intervalId = setInterval(function () {
    iconIndex++;
    updateIcon();
  }, 500); */
  setTimeout(
    async () => {
      // console.log(requests)
      const networkLog = await stopNetworkRecording(tabId);
      const consoleLog = await stopConsoleRecording(tabId);
      imageList = await getScreenShots(tabId)
      // const networkLog=[]
      // const consoleLog=[]
      // imageList=[]  

      logs = {
        console: consoleLog,
        network: networkLog
      }
      let logIndex = logs.console.logs.length - 1
      let imageIndex = imageList.length - 1
      if (logIndex < 0 || imageIndex < 0)
        alert('No log or screen shots found.')
      else {
        filterLogs(logs, logIndex, imageIndex)
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

        // xmlHttp.onreadystatechange = function () {
        //   if (this.readyState == 4 && this.status == 200) {
        //     loading = false;
        //     // updateIcon();
        //     clearInterval(intervalId)
        //     // //alert(obj.key);
        //     // window.open(`http://web-shooter-preview.s3-website-us-east-1.amazonaws.com/view/${obj.key}`, '_blank');
        //   }
        // };
        // xmlHttp.open("POST", ' http://ec2-3-95-132-124.compute-1.amazonaws.com:3000/upload'); // false for synchronous request
        // xmlHttp.setRequestHeader("Content-type", "application/json");
        // xmlHttp.send(JSON.stringify(obj));
      }
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
        res(response);
      }
    );
  });
});



/* function parseDate(input) {
  var parts = input.match(/(\d+)/g);
  // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
  return new Date(parts[0], parts[1] - 1, parts[2], parts[3], parts[4], parts[5], parts[6]); // months are 0-based
} */

/* function compare(m, n) {
  if (m == 0 || n == 0) {
    return 0;
  }
  else if (Math.round(parseDate(imageList[n].time).getTime() / 1000) - 1 < Math.round(logs.console.logs[m].dateTime) / 1000 < Math.round(parseDate(imageList[n].time).getTime() / 1000) + 1) {
    filtered.console.push(logs.console.logs[m])
    return compare(m - 1, n)
    // return 1;
  }
  else
    return compare(m - 1, n - 1)
} */


function compareLog(logIndex, imageIndex) {
  let timeInSecs = Math.round(new Date(imageList[imageIndex].time).getTime() / 1000)
  let logTimeInSecs = Math.round(new Date(logs.console.logs[logIndex].dateTime).getTime() / 1000)
  // console.log(imageList[imageIndex].time,logs.console.logs[logIndex].dateTime)
  // console.log(parseDate(imageList[imageIndex].time),new Date(logs.console.logs[logIndex].dateTime),(timeInSecs - 3 < logTimeInSecs),(logTimeInSecs < timeInSecs + 3));

  if ((timeInSecs - 3 < logTimeInSecs) && (logTimeInSecs < timeInSecs + 3)) {
    console.log(new Date(imageList[imageIndex].time), new Date(logs.console.logs[logIndex].dateTime), logIndex, imageIndex);
    filtered.console.push(logs.console.logs[logIndex])
    if (logIndex != 0)
      return compareLog(logIndex - 1, imageIndex)
  }
  else if (logTimeInSecs > timeInSecs + 3) {
    console.log(new Date(imageList[imageIndex].time), new Date(logs.console.logs[logIndex].dateTime), logIndex, imageIndex);
    if (logIndex != 0)
      return compareLog(logIndex - 1, imageIndex)
  }
  else if (timeInSecs - 3 > logTimeInSecs) {
    console.log(new Date(imageList[imageIndex].time), new Date(logs.console.logs[logIndex].dateTime), logIndex, imageIndex);
    if (imageIndex != 0)
      return compareLog(logIndex, imageIndex - 1)
  }
  else {
    console.log(timeInSecs, logTimeInSecs, 'in else');
    if (logIndex != 0)
      return compareLog(logIndex - 1, imageIndex)
  }
}

function compareNetworkLog(logIndex, imageIndex) {
  let timeInSecs = Math.round(new Date(imageList[imageIndex].time).getTime() / 1000)
  let networkTimeInSecs = Math.round(new Date(logs.network.entries[logIndex].startedDateTime).getTime() / 1000)

  if ((timeInSecs - 3 < networkTimeInSecs) && (networkTimeInSecs < timeInSecs + 3)) {
    filtered.network.push(logs.network.entries[logIndex])
    if (logIndex != 0)
      return compareNetworkLog(logIndex - 1, imageIndex)
  }
  else if (networkTimeInSecs > timeInSecs + 3) {
    if (logIndex != 0)
      return compareNetworkLog(logIndex - 1, imageIndex)
  }
  else if (timeInSecs - 3 > networkTimeInSecs) {
    if (imageIndex != 0)
      return compareNetworkLog(logIndex, imageIndex - 1)
  }
  else {
    if (logIndex != 0)
      return compareNetworkLog(logIndex - 1, imageIndex)
  }

}


function filterLogs(log, logIndex, imageIndex) {
  filtered = {
    console: [],
    network: []
  }

  compareLog(logIndex, imageIndex)
  console.log(log)
  let networkLogIndex = log.network.entries.length - 1
  compareNetworkLog(networkLogIndex, imageIndex)

}

async function stopNetworkRecording(tabId) {
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
  // chrome.debugger.detach({ tabId: tabId });
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
  console.log('start network recording', tabid)
  try {
    chrome.debugger.attach({ //debug at current tab
      tabId: tabid
    }, "1.0", onAttach.bind(null, tabid));
  } catch (err) {
    if (err = 'runtime.lastError')
      console.log('cought another debugger');
    else
      console.error(err);
  }

}

function onAttach(tabId) {
  if (chrome.runtime.lastError) {
    // alert(chrome.runtime.lastError.message);
    return
  }
  else {
    console.log("on attach called")
    chrome.debugger.sendCommand({
      tabId: tabId
    }, "Network.clearBrowserCache");
    chrome.debugger.sendCommand({
      tabId: tabId
    }, "Network.enable");
    chrome.debugger.onEvent.addListener(allEventHandler);
  }
}
function allEventHandler(debuggeeId, message, params) {
  //alert("allEventHandler called")
  let request = requestsMap[params.requestId];
  // console.log(request)
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
          if ('lastError' in chrome.runtime) {
            //console.log( chrome.runtime.lastError );
            if (chrome.runtime.lastError.message == '{"code":-32000,"message":"No resource with given identifier found"}') {
              //will error  occur when the query returns nothing
              return;
            }
          }
          if (response) {
            request.response.body = response;
          }
        });
      break;
  }
}


function startRecording(id) {
  tabId = id;
  startConsoleRecording(id);
  startNetworkRecording(id);
  // screenshot.init();
}

function initiateScreenShot(id) {
  tabId = id;
  screenshot.init();
}

/* function isChromeURL() {
  let url = window.location.toString()
  if (url.substr(0, 9) == "chrome://")
    return true;
} */