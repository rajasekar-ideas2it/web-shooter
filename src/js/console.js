console.stdlog = console.log.bind(console);
console.stdDebug = console.debug.bind(console);
console.stdError = console.error.bind(console);
console.stdWarn = console.warn.bind(console);

const getConsoleLogs = () => {
  return JSON.parse(
    localStorage.getItem("consoleLogs")
      ? localStorage.getItem("consoleLogs")
      : '[]'
  );
}

const formattedMessages = messages => {
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
};

console.log = function() {
  const consoleLogs = getConsoleLogs();
  consoleLogs.push({ dateTime: new Date(), type: 'log', message: formattedMessages(Array.from(arguments)) });
  debugger
  localStorage.setItem("consoleLogs", JSON.stringify(consoleLogs));
  console.stdlog.apply(console, arguments);
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
