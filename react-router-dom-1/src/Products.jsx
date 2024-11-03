import React, { useEffect, useState } from "react";
import "./Products.css";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProduct] = useState([{}]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log("Error.........."));
  }, []);
  products.forEach((ele) => console.log(ele));
  return (
    <div className="products-container">
      {products.map((product) => (
        <div key={product.id} className="card">
          <img className="card-image" src={product.image} alt={product.title} />
          <div className="card-body">
            <h2 className="card-title">{product.title}</h2>
            {/* <p className="card-description">{product.description}</p> */}
            <p className="card-category">{product.category}</p>
            <div className="card-footer">
              <span className="card-price">${product.price}</span>
              <span className="card-rating">
                ⭐ {product?.rating?.rate} ({product?.rating?.count})
              </span>
            </div>
            <Link to={`/products/${product.id}`} className="card-button">
              View
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
