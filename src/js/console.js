console.stdlog = console.log.bind(console);
console.log = function() {
  const consoleLogs = JSON.parse(
    localStorage.getItem("consoleLogs")
      ? localStorage.getItem("consoleLogs")
      : "[]"
  );
  consoleLogs.push(Array.from(arguments));
  localStorage.setItem("consoleLogs", JSON.stringify(consoleLogs));
  console.stdlog.apply(console, arguments);
};
