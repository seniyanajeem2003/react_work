import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);
  const token = useSelector(state => state.user.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login'); // redirect if not logged in
      return;
    }

    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://worksheet-product.mashupstack.com/product', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setProducts(response.data);
      } catch (error) {
        console.error(error);
        alert('Failed to fetch products.');
      }
    };

    fetchProducts();
  }, [token, navigate]);

  return (
    <div>
      <h2>Product List</h2>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.description}</td>
              <td>${p.price}</td>
              <td>{p.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
