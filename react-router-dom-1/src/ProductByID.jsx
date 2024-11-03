import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductByID = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div key={product.id} className="card">
      <img className="card-image" src={product.image} alt={product.title} />
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p className="card-description">{product.description}</p>
        <p className="card-category">{product.category}</p>
        <div className="card-footer">
          <span className="card-price">${product.price}</span>
          <span className="card-rating">
            ⭐ {product?.rating?.rate} ({product?.rating?.count})
          </span>
        </div>
        <button className="card-button">add to cart</button>
      </div>
    </div>
  );
};
