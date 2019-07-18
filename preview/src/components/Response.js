import React from "react";
import JsonRenderer from "./JsonRenderer";

function Response(props) {
  const {
    log: { response }
  } = props;
  debugger
  return (
    <div className="p-2">
      <JsonRenderer json={response} />
    </div>
  );
}

export default Response;
