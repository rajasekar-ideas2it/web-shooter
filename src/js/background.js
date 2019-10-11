"use strict";

// Ignore net::ERR_BLOCKED_BY_CLIENT initiated by AdPlus & etc
var ignoredUrlsHashes = {};
var ignoredUrlsLimit = 100;

const constants = {
  START_CONSOLE_RECORDING: "START_CONSOLE_RECORDING",
  STOP_CONSOLE_RECORDING: "STOP_CONSOLE_RECORDING",
  SET_SCREENSHOT: "SET_SCREENSHOT",
  GET_SCREENSHOTS: "GET_SCREENSHOTS"
};

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

// for screen-shot
var screenshot = {

  init: function () {
    this.initEvents();
  },

  initEvents: function () {
    chrome.tabs.captureVisibleTab(null, {
      format: "png",
      quality: 100
    },
      function (data) {
        let blob = dataURItoBlob(data)
        if (blob instanceof Blob) {
          blobList.push(blob)
          chrome.tabs.query({
            active: true,
            currentWindow: true
          },
            function (tabs) {
              let title = ''
              if (tabs != undefined & tabs[0] != undefined)
                title = tabs[0].title
              // let screenshotTime = new Date().toString()
              let screenshotTime = getPSTFromUTC(new Date())

              let screentShot = {
                time: screenshotTime,
                image: ''
              }

              screentShot.image = title + '_' + screenshotTime + ".png";
              let msg = {
                payload: screentShot,
                action: 'SET_SCREENSHOT'
              }
              // console.log(msg);

              chrome.tabs.sendMessage(tabs[0].id, msg, (response) => {
                if (chrome.runtime.lastError) {

                }
                new Notification('Screen-shot', {
                  icon: 'assets/images/bug32.png',
                  body: screentShot.image + ' image captured.'
                });
                // }
              });
            });
        }
        else {
          alert('invalid image captured')
        }
      });
  }
}

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  chrome.extension.getBackgroundPage().startRecording(tabId);
});

function updateIcon() {
  var iconName = loading ?
    './assets/images/cloud-upload64-' + ((iconIndex % 2) + 1) + '.png' : './assets/images/bug16.png';
  chrome.browserAction.setIcon({ path: iconName });
}

function makeZip(logs, imageList) {

  let link = document.createElement('a');
  link.download = 'attachment.zip';

  var zip = new JSZip();
  zip.file("console.log", JSON.stringify(filtered.console, null, 4));
  zip.file("network.log", JSON.stringify(filtered.network, null, 4));
  var img = zip.folder("images");

  let promises = []

  promises = blobList.map((eachBlob) => {
    return new Promise((res, rej) => {
      var reader = new FileReader();
      reader.readAsDataURL(eachBlob);

      reader.onloadend = function () {
        var base64data = reader.result.split(',')[1];
        // console.log(base64data);
        res(base64data)
      }
    });
  });

  Promise.all(promises).then(values => {
    values.forEach((base64data, index) => {
      img.file(imageList[index].image, base64data, { base64: true });
    })
    var generateOptions = { compression: 'STORE', type: 'blob' };

    /*
    //to check node application
     if (!process.browser) {
      generateOptions.type = 'nodebuffer';
    } */
    var content = zip.generateAsync(generateOptions);
    content.then((x) => {
      // console.log(x)
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
function resetData() {
  blobList = []
  imageList = []
  filtered = {
    console: [],
    network: []
  }
}
async function stopRecording(tabId) {
  loading = true;
  intervalId = setInterval(function () {
    iconIndex++;
    // updateIcon();
  }, 500);
  setTimeout(
    async () => {
      const networkLog = await stopNetworkRecording(tabId);
      const consoleLog = await stopConsoleRecording(tabId);
      imageList = await getScreenShots(tabId)

      logs = {
        console: consoleLog,
        network: networkLog
      }
      let logIndex = 0
      let imageIndex = 0

      if (logs.console == undefined || imageList == undefined) {
        resetData()
        alert('No log or screen shots found.')
        return 0
      }

      if (logs.console)
        logIndex = logs.console.logs.length - 1

      if (imageList != undefined)
        imageIndex = imageList.length - 1


      if (logIndex < 0 || imageIndex < 0) {
        alert('No log or screen shots found.')
        resetData()
        return 0;

      }

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
        // console.log('obj', obj);
        // console.log(JSON.stringify(obj));

        // var xmlHttp = new XMLHttpRequest();
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
      if (chrome.runtime.lastError) {
        // alert('runtime error')
      } else {
        // console.log(response);
      }
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
        if (chrome.runtime.lastError) {
          // alert('runtime error')
        } else {
          res(response);
        }
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
        if (chrome.runtime.lastError) {
          // alert('called runtime error')
        } else {
          res(response);
        }

      }
    );
  });
});

function compareLog(logIndex, imageIndex) {
  let timeInSecs = Math.round(new Date(imageList[imageIndex].time).getTime() / 1000)
  let logTimeInSecs = Math.round(new Date(logs.console.logs[logIndex].dateTime).getTime() / 1000)
  // console.log(imageList[imageIndex].time,logs.console.logs[logIndex].dateTime)
  // console.log(parseDate(imageList[imageIndex].time),new Date(logs.console.logs[logIndex].dateTime),(timeInSecs - 3 < logTimeInSecs),(logTimeInSecs < timeInSecs + 3));

  if ((timeInSecs - 3 < logTimeInSecs) && (logTimeInSecs < timeInSecs + 3)) {
    // console.log(new Date(imageList[imageIndex].time), new Date(logs.console.logs[logIndex].dateTime), logIndex, imageIndex);
    filtered.console.push(logs.console.logs[logIndex])
    if (logIndex != 0)
      return compareLog(logIndex - 1, imageIndex)
  }
  else if (logTimeInSecs > timeInSecs + 3) {
    // console.log(new Date(imageList[imageIndex].time), new Date(logs.console.logs[logIndex].dateTime), logIndex, imageIndex);
    if (logIndex != 0)
      return compareLog(logIndex - 1, imageIndex)
  }
  else if (timeInSecs - 3 > logTimeInSecs) {
    // console.log(new Date(imageList[imageIndex].time), new Date(logs.console.logs[logIndex].dateTime), logIndex, imageIndex);
    if (imageIndex != 0)
      return compareLog(logIndex, imageIndex - 1)
  }
  else {
    // console.log(timeInSecs, logTimeInSecs, 'in else');
    if (logIndex != 0)
      return compareLog(logIndex - 1, imageIndex)
  }
}

function compareNetworkLog(logIndex, imageIndex) {
  let timeInSecs = Math.round(new Date(imageList[imageIndex].time).getTime() / 1000)
  let networkTimeInSecs = Math.round(getPSTFromUTC(new Date(logs.network.entries[logIndex].startedDateTime)).getTime() / 1000)

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

function dataURItoBlob(dataURI) {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  var byteString = atob(dataURI.split(',')[1]);

  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

  // write the bytes of the string to an ArrayBuffer
  var ab = new ArrayBuffer(byteString.length);

  // create a view into the buffer
  var ia = new Uint8Array(ab);

  // set the bytes of the buffer to the correct values
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  // write the ArrayBuffer to a blob, and you're done
  var blob = new Blob([ab], { type: mimeString });
  return blob;

}


function filterLogs(log, logIndex, imageIndex) {
  filtered = {
    console: [],
    network: []
  }

  compareLog(logIndex, imageIndex)
  // console.log(log)
  if (log.network.entries.length == 0) {
    alert('No Networklog found.')
    return 0
  }
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
      // console.log("Messages - - - - ", message);
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
  console.log(ports)
  // alert(JSON.stringify(ports))
  port.onMessage.addListener(message => {
    // setTimeout(function() {
    switch (port.name) {
      case "devtools":
        handleDevtoolsMessages(message);
        break;
      default:
        console.log("Unhandled port connection");
    }
    // },100)
    // return true
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
  //catch chrome.runtime error
  if (chrome.runtime.lastError) {
    // alert(chrome.runtime.lastError.message);
    // return
  }
  else {
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
  // alert("allEventHandler called")
  let request = requestsMap[params.requestId];
  console.log(request)
  if (!request) {
    request = {
      startedDateTime: new Date().toISOString()
      // startedDateTime: getPSTFromUTC(new Date())
    };
    requestsMap[params.requestId] = request;
    requests.push(request);
  }
  switch (message) {
    case "Network.responseReceived":
      request.received = new Date().toISOString();
      // request.received = getPSTFromUTC(new Date())

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
          // created: getPSTFromUTC(new Date()),
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
            //catch chrome.runtime.lastError
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

function getPSTFromUTC(date) {
  let pstDate = date.setHours(date.getHours() - 7)
  return new Date(pstDate);
}