import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import { Home } from "./pages/Home";
import Contact from "./pages/Contact";
import { About } from "./pages/About";
import Help from "./pages/Help";
import Social from "./components/Social";
export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="contact" element={<Contact />}>
              <Route path=":social" element={<Social />}></Route>
            </Route>
            <Route path="help" element={<Help />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
