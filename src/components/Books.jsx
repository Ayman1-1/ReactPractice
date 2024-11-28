
import React from "react";
import "../App.css";

const data = [
  {
    id: 1,
    title: "How to Catch a Reindeer",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/91TBEE7LPsL._AC_UL210_SR195,210_.jpg",
    price: "15",
    discount: true,
  },
  {
    id: 2,
    title: "Who Wrestle with God: Perceptions of the Divine",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71B18dU7xnL._AC_UL210_SR195,210_.jpg",
    price: "55",
    discount: false,
  },
  {
    id: 3,
    title: "The Book of Unusual Knowledge",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71WC3z4Wt0L._AC_UL210_SR195,210_.jpg",
    price: "90",
    discount: true,
  },
];
function Discount({discount,price}) {
  return (
    <p>{discount ? `$${Number(price) - 10}` : "No reduction available"}</p>
  );
}

function Books() {
  return (
    <>
      <h1> Welcome To Books Store</h1>
      {/* ======================= */}
      {/* the fist method without array data */}

      {/* <Book name="BOOk1" image="https://images-na.ssl-images-amazon.com/images/I/91TBEE7LPsL._AC_UL381_SR381,381_.jpg" price="9"/>
      <Book name="BOOk2" image="https://images-na.ssl-images-amazon.com/images/I/71WC3z4Wt0L._AC_UL381_SR381,381_.jpg" price="15"/>
      <Book name="BOOk3" image="https://images-na.ssl-images-amazon.com/images/I/71K+9YJ7VbL._AC_UL381_SR381,381_.jpg" price="13"/> */}
      {/* ======================= */}
      {/* the second method using array data */}

      {/* {data.map((Element) => {return <Book key={Element.id} {...Element}/>} )} */}
   
      {data.map(Element=>{
        return <Book key={Element.id}{...Element}/>
        
      })}
    </>
  );
}
function Book({ name, image, price ,discount}) {
  return (
    <>
      <Image image={image} />
      <Name name={name} />
      <Price price={price} />
      <Discount discount={discount} price={price}/>
    </>
  );
}

function Image({ image }) {
  return (
    <>
      <img src={image} alt="Book image" />
    </>
  );
}
function Name({ name }) {
  return (
    <>
      <h3>{name}</h3>
    </>
  );
}
function Price({ price }) {
  return (
    <>
      <h4>{price}$</h4>
    </>
  );
}

export default Books;
