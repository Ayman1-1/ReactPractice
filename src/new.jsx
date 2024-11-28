


import "./App.css";

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

// function Discount({ discount }) {
//   return discount ? "exist" : "not existe";
// }

function Reduction({ discount, price }) {
  return (
    <p>{discount ? `$${Number(price) - 10}` : "No reduction available"}</p>
  );
}

function Books() {
  return (
    <>
      <h1>Store Books</h1>
      <hr />
      {/* <Book />
      <Book />
      <Book />
      <Book /> */}

      {/* ! Map method */}
      {data.map((element) => {
        return <Book key={element.id} {...element} />;
      })}
    </>
  );
}

function Book({ title, image, price, discount, calcDiscount }) {
  return (
    <>
      <BookName title={title} />
      <BoookImage image={image} />
      <BookPrice price={price} />
      {/* <Discount discount={discount} /> */}
      <Reduction discount={discount} price={price} />
      {/* <h2>Discount:$ {discount ? calcDiscount(price):'no discount'}</h2> */}
    </>
  );
}

function BookName({ title }) {
  return (
    <>
      <h2>{title}</h2>
    </>
  );
}
function BoookImage({ image }) {
  return (
    <>
      <img src={image} alt="image book" />
    </>
  );
}
function BookPrice({ price }) {
  return (
    <>
      <h3>{price}$</h3>
    </>
  );
}

export default Books;
