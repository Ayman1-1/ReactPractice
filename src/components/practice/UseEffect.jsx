import axios from "axios";
import React, { useEffect, useState } from "react";

function UseEffect() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllUsers = async () => {
    // setLoading(true)
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
    //   console.log(response);

      const data = await response.data;

      setUsers(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  
  localStorage.setItem("ayman",users[3].name)
  return (
    <>
      <h1>Practice Use Effect</h1>
      {users.map((user) => {
          return <h2 key={user.id}>{user.name}</h2>;
        })}
        
        {console.log(localStorage.getItem("ayman"))}
    </>
  );
}

export default UseEffect;
