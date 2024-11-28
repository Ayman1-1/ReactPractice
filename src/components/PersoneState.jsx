import React, { useState } from "react";

function PersoneState() {
  const [person, setPersone] = useState({
    name: "ahmed",
    age: "25",
    salary: "1500",
  });
  const { name, age, salary, girl } = person;
  const handlClick = () => {
    setPersone({ ...person, age: 21, salary: 2000 , girl:"hibaton"});
  };

  return (
    <>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>${salary}</h2>
      <h2>{girl ? girl: null}</h2>
      <button onClick={handlClick}>Click here</button>
    </>
  );
}

export default PersoneState;
