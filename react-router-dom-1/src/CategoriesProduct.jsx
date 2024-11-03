import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Products.css";
export const CategoriesProduct = () => {
  const [products, setProducts] = useState([]);
  const productName = useParams();
  useEffect(() => {
    async function getProducts() {
      const res = await fetch(
        `https://fakestoreapi.com/products/category/${productName.product_name}`
      );
      const data = await res.json();
      setProducts(data);
    }
    getProducts();
  }, [productName.product_name]);

  return (
    <div className="products-container">
      {products.map((product) => {
        return (
          <div key={product.id} className="card">
            <img
              className="card-image"
              src={product.image}
              alt={product.title}
            />
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
              <Link to={`/products/${product.id}`} className="card-button">View</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
