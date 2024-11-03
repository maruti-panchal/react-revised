import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./Products";
import { ProductByID } from "./ProductByID";
import Categories from "./Categories";
import { CategoriesProduct } from "./CategoriesProduct";
import Home from "./Home";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="products" element={<Products />}></Route>
          <Route path="products/:id" element={<ProductByID />}></Route>
          <Route path="products/category" element={<Categories />}>
            <Route path=":product_name" element={<CategoriesProduct />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
