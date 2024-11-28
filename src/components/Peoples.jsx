import React, { useState } from "react";

function Peoples() {
  const peoples = [
    { id: 1, name: "ayman" },
    { id: 2, name: "hanine" },
    { id: 3, name: "hiba" },
  ];
  const [data, setData] = useState(peoples);

  const handelDelete = (id) => {
    const newData = data.filter((people) => {
      return people.id !== id;
    });
    setData(newData);
    console.log(newData);
  };

  const handClrear = () => {
    setData([]);
  };

  return (
    <div>
      {data.length ? (
        data.map((people) => {
          const { id, name } = people;
          return (
            <div key={id}>
              <h1>{name}</h1>
              <button
                type="delete"
                onClick={() => {
                  handelDelete(id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })
      ) : (
        <h1>no data</h1>
      )}
      <hr />
      {data.length ? (
        <button
          onClick={() => {
            setData([]);
          }}
        >
          Clear Items
        </button>
      ) : null}
      <br />
      {data.length == 0 ? (
        <button
          onClick={() => {
            setData(peoples);
          }}
        >
          Refresh
        </button>
      ) : null}
    </div>
  );
}

export default Peoples;
