import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#f2f2f2" }}>
      <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
      <Link to="/add">Add Product</Link>
    </nav>
  );
}
