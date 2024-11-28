import React from "react";

const ChildComponent = ({ onButtonClick ,msg}) => {
  return (
    <div>
      <h2>Child Component</h2>
      <p>the message is {msg}</p>
      {/* <button onClick={onButtonClick}>Click Me</button> */}
    </div>
  );
};

export default ChildComponent;
