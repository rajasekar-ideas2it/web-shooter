if (!console.stdlog) { console.stdlog = console.log.bind(console); }
if (!console.stdDebug) { console.stdDebug = console.debug.bind(console); }
if (!console.stdError) { console.stdError = console.error.bind(console); }
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
  else if (typeof message === 'object') {
    return JSON.stringify(message);
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

console.error = function () {
  const consoleLogs = getConsoleLogs();
  consoleLogs.push({ dateTime: getPSTFromUTC(new Date()), type: 'error', message: arguments[1].stack });
  localStorage.setItem("consoleLogs", JSON.stringify(consoleLogs));
  console.stdlog.apply(console, arguments);

};

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
