import React from "react";
import products from "../products";
import ProductList from "./ProductList";

const Homepage = () => (
  <>
    <ProductList furniture={products} />
  </>
);

export default Homepage;
