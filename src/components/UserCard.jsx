import React from "react";

function UserCard({ name, age, email }) {
  return (
    <>
      <h3>your Name is {name}</h3>
      <h3>your age is {age}</h3>
      <h3>your email is {email}</h3>
      <hr />
    </>
  );
}

export default UserCard;
