import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Link to="/products">All Products</Link>
      <Link to="/products/category">Categories</Link>
    </>
  );
};

export default NavBar;
