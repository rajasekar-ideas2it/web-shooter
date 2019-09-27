if (!console.stdlog) {console.stdlog = console.log.bind(console);}
if (!console.stdDebug) {console.stdDebug = console.debug.bind(console);}
if (!console.stdError) {console.stdError = console.error.bind(console);}
if (!console.stdWarn) {console.stdWarn = console.warn.bind(console);}

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
  else if (typeof message === 'object') {
    return JSON.stringify(message);
  } else if (message.stack) {
    return message.stack;
  } 
  // const formattedMessages = messages.map(message => {
   
  //   return message;
  // });
  // return formattedMessages;
};

console.log = function(arguments) {
  // console.log('calling custom console.log')
  // alert('calling custom console.log')
  const consoleLogs = getConsoleLogs();
  // consoleLogs.push({ dateTime: new Date(), type: 'log', message: formattedMessages(Array.from(arguments)) });
  consoleLogs.push({ dateTime: new Date(), type: 'log', message: formattedMessages(arguments) });

  // console.log("arguments")
  // console.log(arguments)
  // console.log("consoleLogs")
  // console.log(consoleLogs)
  localStorage.setItem("consoleLogs", JSON.stringify(consoleLogs));
  console.stdlog.call(console, arguments);
  // console.stdlog.apply(console, arguments);

};

console.debug = function() {
  const consoleLogs = getConsoleLogs();
  consoleLogs.push({ dateTime: new Date(), type: 'debug', message: formattedMessages(Array.from(arguments)) });
  localStorage.setItem("consoleLogs", JSON.stringify(consoleLogs));
  console.stdDebug.apply(console, arguments);
};

console.error = function() {
  const consoleLogs = getConsoleLogs();
  consoleLogs.push({ dateTime: new Date(), type: 'error', message: formattedMessages(Array.from(arguments)) });
  localStorage.setItem("consoleLogs", JSON.stringify(consoleLogs));
  console.stdError.apply(console, arguments);
};


console.warn = function() {
  const consoleLogs = getConsoleLogs();
  consoleLogs.push({ dateTime: new Date(), type: 'warn', message: formattedMessages(Array.from(arguments)) });
  localStorage.setItem("consoleLogs", JSON.stringify(consoleLogs));
  console.stdWarn.apply(console, arguments);
};
