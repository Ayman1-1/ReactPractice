import React, { useState } from "react";

const players = [
  { id: 1, name: "ayman", age: 21, active: true },
  { id: 2, name: "hanine", age: 22, active: true },
  { id: 3, name: "hiba", age: 23, active: true },
  { id: 4, name: "lahmer", age: 24, active: true },
];

function Players() {
  const [myplayers, setMyplayers] = useState(players);
  const [index, setIndex] = useState(0);

  const { name, age, active } = myplayers[index];

  const handlPrivious = () => {
    setIndex(index <= 0 ? players.length-1: index - 1);
  };
  const handlNext = () => {
    setIndex(index < players.length - 1 ? index + 1 :  0);
  };
  const handlSurprice = () => {
    setIndex(Math.floor(Math.random()*players.length));
  };

  return (
    <>
      <h1>{name}</h1>
      <h3>{age}</h3>
      <h4>{active ? "active" : "desactive"}</h4>
      <br />

      <button onClick={handlPrivious}>Privous</button>
      <button onClick={handlSurprice}>Surprice</button>
      <button onClick={handlNext}>next</button>
    </>
  );
}

export default Players;
