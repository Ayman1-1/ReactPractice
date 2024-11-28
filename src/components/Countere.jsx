import React, { useState } from "react";

function Countere() {
  const [counter, setCounter] = useState(1);

  function Incriment() {
    setCounter(counter > 10 ? alert("you are rached the max") : counter + 1);
    return counter
  }
  function Decriment() {
    setCounter(counter <= 1 ? alert("you are rached the lower") : counter - 1);
    return counter

  }

  return (
    <>
      <h2>{counter}</h2>
      <button onClick={Incriment}>Incriment</button>
      <button onClick={Decriment}>Decrimente</button>
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        Reset
      </button>
    </>
  );
}

export default Countere;
