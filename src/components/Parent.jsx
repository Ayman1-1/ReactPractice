import React from "react";
import ChildComponent from "./Child";

const ParentComponent = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent onButtonClick={handleClick} msg="Bonjour Ayman" />
    </div>
  );
};

export default ParentComponent;
