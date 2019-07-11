const constants = {
  START_CONSOLE_RECORDING: 'START_CONSOLE_RECORDING',
  STOP_CONSOLE_RECORDING: 'STOP_CONSOLE_RECORDING',
};
console.log('Content script screen recorder');

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    switch (request.action) {
      case constants.START_CONSOLE_RECORDING:
        console.stdlog = console.log.bind(console);
        console.log = function() {
          // console.logs.push(Array.from(arguments));
          
          const consoleLogs = JSON.parse(
            localStorage.getItem('consoleLogs') ?
            localStorage.getItem('consoleLogs') :
            '[]'
          );
          consoleLogs.push(Array.from(arguments));
          localStorage.setItem('consoleLogs', JSON.stringify(consoleLogs));
          console.stdlog.apply(console, arguments);
        }
        setTimeout(() => {
          const a = document.getElementById('btn_addCandidates');
          
          console.log('btn_addCandidates', a);
        }, 5000);
        cleanConsoleLogs();
        sendResponse({ message: `Started logging` });
        break;
      case constants.STOP_CONSOLE_RECORDING:
        
        sendResponse({ logs: localStorage.getItem('consoleLogs') });
      default:
        sendResponse({ error: 'Unhandled action' });
    }
  }
);

const cleanConsoleLogs = () => {
  localStorage.setItem('consoleLogs', '[]');
}