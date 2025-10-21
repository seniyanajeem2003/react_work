import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = "https://worksheet-catalogue.mashupstack.com/products";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(API_URL);
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchProducts(); 
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product Catalog</h2>

      <input
        type="text"
        placeholder="Search product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "20px", padding: "5px" }}
      />

      <div>
        <Link to="/add">
          <button style={{ marginBottom: "20px" }}>Add New Product</button>
        </Link>
      </div>

      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price (₹)</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>{product.quantity}</td>
              <td>
                <Link to={`/edit/${product.id}`}>
                  <button>Edit</button>
                </Link>
                <button
                  onClick={() => handleDelete(product.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
