import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Homepage from "./Homepage";
import Detail from "./ProductPage";

const openDetail = () => {
  console.log("kliknuto");
};

const Product = (props) => {
  return (
    <>
      <div className="box">
        <div className="product" onClick={openDetail}>
          <div className="product__img">
            <img
              className="props__img"
              src={props.image}
              alt="poster"
              className="img"
            />
          </div>
          <div className="product__title">{props.name}</div>
        </div>
      </div>
    </>
  );
};

export default Product;
