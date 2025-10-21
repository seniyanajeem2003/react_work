import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const API_URL = "https://worksheet-catalogue.mashupstack.com/products";

function ProductForm() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    quantity: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const res = await axios.get(`${API_URL}/${id}`);
          setFormData(res.data);
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      };
      fetchProduct();
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await axios.put(`${API_URL}/${id}`, formData);
      } else {
        await axios.post(API_URL, formData);
      }
      navigate("/"); 
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>{id ? "Edit Product" : "Add New Product"}</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Price (₹):</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Quantity:</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" style={{ marginTop: "10px" }}>
          {id ? "Update Product" : "Add Product"}
        </button>
      </form>
    </div>
  );
}

export default ProductForm;
