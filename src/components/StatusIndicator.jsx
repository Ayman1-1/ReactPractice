import React from "react";

function StatusIndicator({ status }) {
  if (status != "online" && status != "ofline" && status != "busy") {
    return <p>Please provide a correct status.</p>;
  }
  let message = "";
  let statusColor = "";

  switch (status) {
    case "online":
      message = "the user is online";
      statusColor = "green";
      break;
    case "ofline":
      message = "the user is ofline";
      statusColor = "red";
      break;
    case "busy":
      message = "the user is busy";
      statusColor = "orange";
      break;

    default:
      // This case won't occur because of the initial validation.
      statusMessage = "Invalid status.";
      statusColor = "black";

      break;
  }

  return (
    <>
      <p style={{ color: statusColor  }}> {message}</p>
    </>
  );
}

export default StatusIndicator;
