import React from "react";
import Select from "react-select";
import "./Console.css";

const logOptions = [
  { value: "log", label: "Log" },
  { value: "debug", label: "Debug" },
  { value: "warn", label: "Warn" },
  { value: "error", label: "Error" }
];

const logs = [
  {
    dateTime: "2019-07-18T04:21:57.497Z",
    type: "debug",
    message: [
      'Join us for the upcoming webinar, "Enterprise JavaScript done right: the tools you love, the security you need."Sign up here »'
    ]
  },
  {
    dateTime: "2019-07-18T04:21:59.497Z",
    type: "error",
    message: [
      'Join us for the upcoming webinar, "Enterprise JavaScript done right: the tools you love, the security you need."Sign up here »'
    ]
  },
  {
    dateTime: "2019-07-18T04:22:00.497Z",
    type: "warn",
    message: [
      'Join us for the upcoming webinar, "Enterprise JavaScript done right: the tools you love, the security you need."Sign up here »'
    ]
  },
  {
    dateTime: "2019-07-18T04:22:05.497Z",
    type: "log",
    message: [
      'Join us for the upcoming webinar, "Enterprise JavaScript done right: the tools you love, the security you need."Sign up here »'
    ]
  }
];
const logClass = {
  log: "log",
  debug: "debug",
  warn: "warn",
  error: "error"
};
export default class Console extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLogTypes: logOptions,
      selectedLogTypesValues: logOptions.map(logType => logType.value)
    };
  }

  handleLogTypeChange = logTypes => {
    const selectedLogTypesValues = logTypes
      ? logTypes.map(logType => logType.value)
      : [];
    this.setState({
      selectedLogTypes: logTypes,
      selectedLogTypesValues
    });
  };

  render() {
    const { selectedLogTypes, selectedLogTypesValues } = this.state;
    const { recordingStartedDateTime, currentPlaybackTime } = this.props;
    return (
      <div className="mt-2">
        <Select
          value={selectedLogTypes}
          onChange={this.handleLogTypeChange}
          options={logOptions}
          isMulti
          className="w-50"
        />
        {/*
            // <div>
               {JSON.stringify(log)} 
              // </div>*/}
        <div className="logs">
          {logs &&
            logs.map(log =>
              selectedLogTypesValues.includes(log.type) ? (
                <Log
                  log={log}
                  recordingStartedDateTime={recordingStartedDateTime}
                  currentPlaybackTime={currentPlaybackTime}
                />
              ) : (
                ""
              )
            )}
        </div>
      </div>
    );
  }
}

function Log({ log: { type, message, dateTime }, recordingStartedDateTime, currentPlaybackTime }) {
  debugger
  return (
    <div
      className={`message ${logClass[type]} ${
        ((new Date(dateTime).getTime() -
          new Date(recordingStartedDateTime).getTime()) /
          1000 <
        currentPlaybackTime)
          ? ""
          : "d-none"
      }`}
    >
      {message &&
        message.map(message =>
          typeof message === "object"
            ? ` ${JSON.stringify(message)}`
            : ` ${message}`
        )}
    </div>
  );
}
