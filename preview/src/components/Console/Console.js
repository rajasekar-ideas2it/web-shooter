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
  { type: "log", message: ["dscsdcd", { sdc: { dsc: { dsc: "dscsdcds" } } }] },
  {
    type: "error",
    message: ["dscsdcd", { sdc: { dsc: { dsc: "dscsdcds" } } }]
  },
  { type: "warn", message: ["dscsdcd", { sdc: { dsc: { dsc: "dscsdcds" } } }] },
  { type: "debug", message: ["dscsdcd", { sdc: { dsc: { dsc: "dscsdcds" } } }] }
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
    const selectedLogTypesValues = logTypes ? logTypes.map(logType => logType.value) : [];
    this.setState({
      selectedLogTypes: logTypes,
      selectedLogTypesValues
    });
  };

  render() {
    const { selectedLogTypes, selectedLogTypesValues } = this.state;
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
              selectedLogTypesValues.includes(log.type) ? <Log log={log} /> : ""
            )}
        </div>
      </div>
    );
  }
}

function Log({ log: { type, message } }) {
  return (
    <div className={`message ${logClass[type]}`}>
      {message &&
        message.map(message =>
          typeof message === "object"
            ? ` ${JSON.stringify(message)}`
            : ` ${message}`
        )}
    </div>
  );
}
