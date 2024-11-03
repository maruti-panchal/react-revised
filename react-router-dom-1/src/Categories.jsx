import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function getCatagory() {
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const data = await res.json();
      setCategories(data);
    }
    getCatagory();
  }, []);
  return (
    <div>
      {
        <ul>
          {categories.map((ele) => (
            <li key={ele}>
              <Link to={`${ele}`}>{ele}</Link>
            </li>
          ))}
        </ul>
      }
      <Outlet />
    </div>
  );
};

export default Categories;
