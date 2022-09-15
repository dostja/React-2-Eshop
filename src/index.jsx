import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/homepage";
import Detail from "./components/ProductPage";
import Logo from "./components/header";

const Home = () => {
  return (
    <>
      <h2>Aktuální nabídka</h2>
      <Homepage />
    </>
  );
};

const DetailPage = () => {
  return (
    <>
      <Detail />
    </>
  );
};

const App = () => {
  return (
    <>
      <Logo />
      <BrowserRouter>
        <nav>
          <Link to="/">Domů</Link>
          <Link to="/detail">Detail Produktu</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

createRoot(document.querySelector("#app")).render(<App />);
