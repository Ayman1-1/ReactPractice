import React from "react";
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    description: "High-quality noise-canceling wireless headphones.",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 699.99,
    description: "Latest model smartphone with advanced features.",
  },
  {
    id: 3,
    name: "Gaming Laptop",
    price: 1299.99,
    description:
      "Powerful gaming laptop with high-end graphics and performance.",
  },
];

function Products() {
    return(
        <ul>
            {products.map((product)=>{
                return(
                    <li key={product.id}>
                    <h2>{product.name}</h2>
                    <p>price: ${product.price}</p>
                    <p>{product.description}</p>
                </li>
                )
            })}
        </ul>
    );
}

export default Products;
