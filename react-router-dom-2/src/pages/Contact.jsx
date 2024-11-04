import React from "react";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <Link to="instagram">Instagram</Link>
      <Link to="twitter">Twitter</Link>
      <Link to="youtube">Youtube</Link>
      <Outlet />
    </div>
  );
};

export default Contact;
