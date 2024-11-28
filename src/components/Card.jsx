import React from 'react'

function Card({content}) {
  return (
    <>
      <CardContent content={content}/>
    </>
  )
}

function CardContent({content}) {
    return(
        <>
            <p style={{color : 'red'}}>this the card component: <span style={{color:'black'}}>{content} </span></p>
        </>
    )
}

export default Card
