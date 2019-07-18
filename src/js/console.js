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

console.log = function() {
  const consoleLogs = getConsoleLogs();
  consoleLogs.push({ dateTime: new Date(), type: 'log', message: Array.from(arguments) });
  debugger
  localStorage.setItem("consoleLogs", JSON.stringify(consoleLogs));
  console.stdlog.apply(console, arguments);
};

console.debug = function() {
  const consoleLogs = getConsoleLogs();
  consoleLogs.push({ dateTime: new Date(), type: 'debug', message: Array.from(arguments) });
  localStorage.setItem("consoleLogs", JSON.stringify(consoleLogs));
  console.stdDebug.apply(console, arguments);
};

console.error = function() {
  const consoleLogs = getConsoleLogs();
  consoleLogs.push({ dateTime: new Date(), type: 'error', message: Array.from(arguments) });
  localStorage.setItem("consoleLogs", JSON.stringify(consoleLogs));
  console.stdError.apply(console, arguments);
};


console.warn = function() {
  const consoleLogs = getConsoleLogs();
  consoleLogs.push({ dateTime: new Date(), type: 'warn', message: Array.from(arguments) });
  localStorage.setItem("consoleLogs", JSON.stringify(consoleLogs));
  console.stdWarn.apply(console, arguments);
};
