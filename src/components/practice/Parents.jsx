import React, { useState } from "react";
import Child from "./Child";

function Parents() {
  const [counter, setCounter] = useState(0);
  const incriment = () => {
    setCounter(counter + 1);
  };
  const decriment = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h3>Number is: {counter}</h3>
      <Child incriment={incriment} decriment={decriment}/>
    </>
  );
}

export default Parents;
