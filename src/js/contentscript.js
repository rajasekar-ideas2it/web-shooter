const constants = {
  START_CONSOLE_RECORDING: "START_CONSOLE_RECORDING",
  STOP_CONSOLE_RECORDING: "STOP_CONSOLE_RECORDING",
  SCREENSHOT: "SCREENSHOT",
  GET_SCREENSHOTS: "GET_SCREENSHOTS"
};
console.log("Content script screen recorder");
// localStorage.setItem('consoleLogs','[]')
// if(isNotChromeURL())
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  switch (request.action) {
    case constants.SCREENSHOT:
      addScreenShots(request.payload)
      break;
    case constants.START_CONSOLE_RECORDING:
      // console.stdlog = console.log.bind(console);
      // console.log = function() {
      //   // console.logs.push(Array.from(arguments));

      //   const consoleLogs = JSON.parse(
      //     localStorage.getItem('consoleLogs') ?
      //     localStorage.getItem('consoleLogs') :
      //     '[]'
      //   );
      //   consoleLogs.push(Array.from(arguments));
      //   localStorage.setItem('consoleLogs', JSON.stringify(consoleLogs));
      //   console.stdlog.apply(console, arguments);
      // }
      // setTimeout(() => {
      //   const a = document.getElementById('btn_addCandidates');

      //   console.log('btn_addCandidates', a);
      // }, 5000);
      // cleanConsoleLogs();

      AddConsolejs();
      sendResponse({ message: `Started logging` });
      break;
    case constants.STOP_CONSOLE_RECORDING:
      sendResponse({ logs: JSON.parse(localStorage.getItem("consoleLogs")) });
      cleanConsoleLogs();
      break;
    case constants.GET_SCREENSHOTS:
      sendResponse(JSON.parse(localStorage.getItem("screen_shots")));
      cleanConsoleLogs();
      break;
    default:
      sendResponse({ error: "Unhandled action" });
  }
});

const cleanConsoleLogs = () => {
  // alert(localStorage.getItem("consoleLogs"))
  // localStorage.setItem("consoleLogs", '[]');
};

function addScreenShots(payload) {

  let screenShots = JSON.parse(localStorage.getItem('screen_shots'))
  if (screenShots == undefined)
    screenShots = []
  screenShots.push(payload)
  localStorage.setItem('screen_shots', JSON.stringify(screenShots))
}

function AddConsolejs() {
  console.log("entried in add console11");
  if (IsTopWindow()) {
    try {
      console.log("entried in add console");

      var body = document.getElementsByTagName("body")[0];
      var consoleJS = document.createElement("script");
      consoleJS.setAttribute("type", "text/javascript");
      consoleJS.setAttribute("src", chrome.extension.getURL("console.js"));

      body.appendChild(consoleJS);
    } catch (e) { }
  }
}

function IsTopWindow() {
  try {
    if (window.location == window.parent.location) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
}


function isNotChromeURL() {
  let url = window.location.toString()
  if (url.substr(0, 9) != "chrome://")
    return true;
}