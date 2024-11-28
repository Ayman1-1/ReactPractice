import React from "react";

function Counter() {
  return (
    <>
      <PersonelInfo  name='Ayman' age="21" girl="hiba"/>
    </>
  );
}
function PersonelInfo({name,age,girl}) {
  return (
    <>
      <MyName name={name} />
      <Age age={age}/>
      <Girl girl={girl}/>
    </>
  );
}
function MyName({name}) {
  return <h3>Hello {name}</h3>;
}
function Age({age}) {
  return <h3>Your age is {age}</h3>;
}
function Girl({girl}) {
  return girl==="hibaton"? <p style={{color:'red'}}>your name is {girl}</p> : <p>Ecrice the correct name</p>
}
export default Counter;
