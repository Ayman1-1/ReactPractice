import React from "react";
import Books from "./components/Books";
import Greeting from "./components/Greeting";
import UserCard from "./components/UserCard";
import Products from "./components/Products";
import Default from "./components/Default";
import StatusIndicator from "./components/StatusIndicator";
import Card from "./components/Card";
import Counter from "./components/Counter";
import ParentComponent from "./components/Parent";
import State from "./components/State";
import PersoneState from "./components/PersoneState";
import Peoples from "./components/peoples";
import Show from "./components/Show";
import Countere from "./components/Countere";
import Players from "./components/Players";
import Parents from "./components/practice/Parents";
import UseEffect from "./components/practice/UseEffect";

const userInfo = [
  {
    id: 1,
    name: "John Doe",
    age: 28,
    email: "john.doe@example.com",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 34,
    email: "jane.smith@example.com",
  },
  {
    id: 3,
    name: "Michael Johnson",
    age: 40,
    email: "michael.johnson@example.com",
  },
];

function App() {
  return (
    <>
      <Greeting name="Ayman" />
      {/* <Default text="green"/>
      <StatusIndicator status='reed'/>
      <StatusIndicator status='online'/>
      <StatusIndicator status='ofline'/>
      <StatusIndicator status='busy'/>
      <Card content='ayman hanine content'/> */}

      {/* <Products/> */}
      {/* <Books/> */}
      {/* {userInfo.map((user)=>{
        return <UserCard key={user.id}{...user}/>
      })} */}

      {/* <Counter />

      <ParentComponent /> */}

      {/* <State/>
      <PersoneState/>
      <Peoples/> */}

      {/* <Show/>

      <Countere/> */}

      {/* <Players/> */}

      {/* <Parents/> */}
      <UseEffect/>
    </>
  );
}

export default App;
