import React, { useState } from "react";

function State() {
  const [toggle, setToggle] = useState(false);
  const handelClick = () => {
    setToggle(!toggle);
  };
  return (
    <>
        {toggle? <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, expedita.</h1>: null} 
      <button onClick={handelClick}>{toggle ? "hide" : "show"}</button>
    </>
  );
}

export default State;
