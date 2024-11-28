import React from 'react'



function Child({incriment,decriment}) {
  return (
    <>
      <button onClick={incriment}>Incriment</button>
      <button onClick={decriment}>Decriment</button>
    </>
  )
}

export default Child
