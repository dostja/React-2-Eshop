import React from "react";
import Product from "./Product";

const ProductList = (props) => {
  return (
    <>
      {props.furniture.map((piece) => (
        <Product key={piece.id} name={piece.name} image={piece.image} />
      ))}
    </>
  );
};

export default ProductList;
