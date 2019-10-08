if (!console.stdlog) { console.stdlog = console.log.bind(console); }
if (!console.stdDebug) { console.stdDebug = console.debug.bind(console); }
// if (!console.stdError) { console.stdError = console.error.bind(console); }
if (!console.stdWarn) { console.stdWarn = console.warn.bind(console); }
if (!console.stdTable) { console.stdTable = console.table.bind(console); }

if (!console.stdInfo) { console.stdInfo = console.info.bind(console); }
if (!console.stdGroup) { console.stdGroup = console.group.bind(console); }
if (!console.stdGroupEnd) { console.stdGroupEnd = console.groupEnd.bind(console); }
if (!console.stdTime) { console.stdTime = console.time.bind(console); }
if (!console.stdTimeEnd) { console.stdTimeEnd = console.timeEnd.bind(console); }
console.log('logging from console.js')

function getConsoleLogs() {
  return JSON.parse(
    localStorage.getItem("consoleLogs")
      ? localStorage.getItem("consoleLogs")
      : '[]'
  );
}



/* function formattedMessages(messages) {
  const formattedMessages = messages.map(message => {
    if (typeof message === 'string') {
      return message;
    } else if (message.stack) {
      return message.stack;
    } else if (typeof message === 'object') {
      return JSON.stringify(message);
    }
    return message;
  });
  return formattedMessages;
}; */
function formattedMessages(message) {
  if (typeof message === 'string') {
    return message;
  }
  // else if (message.stack) {
  //   return message.stack;
  // }
  else if (typeof message === 'object') {
    return JSON.stringify(message);
    // } else if (message.stack) {
    //   return message.stack;
  }
};

console.log = function (arguments) {
  const consoleLogs = getConsoleLogs();
  consoleLogs.push({ dateTime: getPSTFromUTC(new Date()), type: 'log', message: formattedMessages(arguments) });
  localStorage.setItem("consoleLogs", JSON.stringify(consoleLogs));
  console.stdlog.call(console, arguments);

};

console.debug = function () {
  const consoleLogs = getConsoleLogs();
  consoleLogs.push({ dateTime: getPSTFromUTC(new Date()), type: 'debug', message: formattedMessages(Array.from(arguments)) });
  localStorage.setItem("consoleLogs", JSON.stringify(consoleLogs));
  console.stdDebug.apply(console, arguments);
};

/* console.error = function () {
  const consoleLogs = getConsoleLogs();
  consoleLogs.push({ dateTime: getPSTFromUTC(new Date()), type: 'error', message: formattedMessages(Array.from(arguments)) });
  localStorage.setItem("consoleLogs", JSON.stringify(consoleLogs));
  console.stdlog.apply(console, arguments);

}; */


console.warn = function () {
  const consoleLogs = getConsoleLogs();
  consoleLogs.push({ dateTime: getPSTFromUTC(new Date()), type: 'warn', message: formattedMessages(Array.from(arguments)) });
  localStorage.setItem("consoleLogs", JSON.stringify(consoleLogs));
  console.stdlog.apply(console, arguments);

};

console.table = function () {
  const consoleLogs = getConsoleLogs();
  consoleLogs.push({ dateTime: getPSTFromUTC(new Date()), type: 'table', message: formattedMessages(Array.from(arguments)) });
  localStorage.setItem("consoleLogs", JSON.stringify(consoleLogs));
  console.stdTable.apply(console, arguments);
};

console.info = function () {
  const consoleLogs = getConsoleLogs();
  consoleLogs.push({ dateTime: getPSTFromUTC(new Date()), type: 'info', message: formattedMessages(Array.from(arguments)) });
  localStorage.setItem("consoleLogs", JSON.stringify(consoleLogs));
  console.stdInfo.apply(console, arguments);
};

console.group = function () {
  const consoleLogs = getConsoleLogs();
  consoleLogs.push({ dateTime: getPSTFromUTC(new Date()), type: 'group', message: formattedMessages(Array.from(arguments)) });
  localStorage.setItem("consoleLogs", JSON.stringify(consoleLogs));
  console.stdGroup.apply(console, arguments);
};

console.groupEnd = function () {
  const consoleLogs = getConsoleLogs();
  consoleLogs.push({ dateTime: getPSTFromUTC(new Date()), type: 'groupEnd', message: formattedMessages(Array.from(arguments)) });
  localStorage.setItem("consoleLogs", JSON.stringify(consoleLogs));
  console.stdGroupEnd.apply(console, arguments);
};

console.time = function () {
  const consoleLogs = getConsoleLogs();
  consoleLogs.push({ dateTime: getPSTFromUTC(new Date()), type: 'time', message: formattedMessages(Array.from(arguments)) });
  localStorage.setItem("consoleLogs", JSON.stringify(consoleLogs));
  console.stdTime.apply(console, arguments);
};

console.timeEnd = function () {
  const consoleLogs = getConsoleLogs();
  consoleLogs.push({ dateTime: getPSTFromUTC(new Date()), type: 'timeEnd', message: formattedMessages(Array.from(arguments)) });
  localStorage.setItem("consoleLogs", JSON.stringify(consoleLogs));
  console.stdTimeEnd.apply(console, arguments);
};

function getPSTFromUTC(date) {
  let pstDate = date.setHours(date.getHours() - 7)
  return new Date(pstDate);
}

window.addEventListener('error', function (e) {
  //  callImageError(item) 
  // this.alert('error')
  console.log(JSON.stringify(e))
  console.log(e.stack)
});


window.onerror = function (msg, url, line) {
  document.write("Message : " + msg + "<br/>" );
  document.write("url : " + url + "<br/>" );
  document.write("Line number : " + line + "<br/>" );
  console.log(msg, url, line)
}
window.onerror = function (msg, url, lineNo, columnNo, error) {
  var string = msg.toLowerCase();
  var substring = "script error";
  if (string.indexOf(substring) > -1) {
    alert('Script Error: See Browser Console for Detail');
  } else {
    var message = [
      'Message: ' + msg,
      'URL: ' + url,
      'Line: ' + lineNo,
      'Column: ' + columnNo,
      'Error object: ' + JSON.stringify(error)
    ].join(' - ');

    alert(message);
  }

  return false;
};
/* 
window.addEventListener('error', function(e) {
  console.log(e)
  alert(JSON.stringify(e))
  if(e.filename) {
    document.dispatchEvent(new CustomEvent('ErrorToExtension', {
      detail: {
        stack: e.error ? e.error.stack : null,
        url: e.filename,
        line: e.lineno,
        col: e.colno,
        text: e.message
      }
    }));
  }
}); */

new function () {

  var errors = [];
  var errorsLimit = 100;
  var timer;

  var isIFrame = window.top != window;

  function handleNewError(error) {
    var lastError = errors[errors.length - 1];
    var isSameAsLast = lastError && lastError.text == error.text && lastError.url == error.url && lastError.line == error.line && lastError.col == error.col;
    var isWrongUrl = !error.url || error.url.indexOf('://') === -1;
    if (!isSameAsLast && !isWrongUrl) {
      errors.push(error);
      if (errors.length > errorsLimit) {
        errors.shift();
      }
      if (!timer) {
        timer = window.setTimeout(function () {
          timer = null;
          chrome.runtime.sendMessage({
            _errors: true,
            errors: errors,
            url: window.top.location.href
          }, function (popupUrl) {
            if (popupUrl) {
              // showErrorNotification(popupUrl);
            }
          });
        }, 200);
      }
    }
  }

  document.addEventListener('ErrorToExtension', function (e) {
    var error = e.detail;
    if (isIFrame) {
      window.top.postMessage({
        _iframeError: true,
        _fromJEN: true,
        error: error
      }, '*');
    }
    else {
      // handleNewError(error);
    }
  });

  function codeToInject() {

    function handleCustomError(message, stack) {
      if (!stack) {
        stack = (new Error()).stack.split("\n").splice(2, 4).join("\n");
      }

      var stackLines = stack.split("\n");
      var callSrc = (stackLines.length > 1 && (/^.*?\((.*?):(\d+):(\d+)/.exec(stackLines[1]) || /(\w+:\/\/.*?):(\d+):(\d+)/.exec(stackLines[1]))) || [null, null, null, null];

      document.dispatchEvent(new CustomEvent('ErrorToExtension', {
        detail: {
          stack: stackLines.join("\n"),
          url: callSrc[1],
          line: callSrc[2],
          col: callSrc[3],
          text: message
        }
      }));
    }

    // handle uncaught promises errors
    window.addEventListener('unhandledrejection', function (e) {
      if (typeof e.reason === 'undefined') {
        e.reason = e.detail;
      }
      handleCustomError(e.reason.message, e.reason.stack);
    });

    // handle console.error()
    var consoleErrorFunc = window.console.error;
    window.console.error = function () {
      var argsArray = [];
      for (var i in arguments) { // because arguments.join() not working! oO
        argsArray.push(arguments[i]);
      }
      consoleErrorFunc.apply(console, argsArray);

      handleCustomError(argsArray.length == 1 && typeof argsArray[0] == 'string' ? argsArray[0] : JSON.stringify(argsArray.length == 1 ? argsArray[0] : argsArray));
    };

    // handle uncaught errors
    window.addEventListener('error', function (e) {
      if (e.filename) {
        document.dispatchEvent(new CustomEvent('ErrorToExtension', {
          detail: {
            stack: e.error ? e.error.stack : null,
            url: e.filename,
            line: e.lineno,
            col: e.colno,
            text: e.message
          }
        }));
      }
    });

    // handle 404 errors
    window.addEventListener('error', function (e) {
      var src = e.target.src || e.target.href;
      var baseUrl = e.target.baseURI;
      if (src && baseUrl && src != baseUrl) {
        document.dispatchEvent(new CustomEvent('ErrorToExtension', {
          detail: {
            is404: true,
            url: src
          }
        }));
      }
    }, true);
  }

  var script = document.createElement('script');
  script.textContent = '(' + codeToInject + '())';
  (document.head || document.documentElement).appendChild(script);
  script.parentNode.removeChild(script);
};
