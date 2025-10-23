import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../Redux/productSlice';
import { useNavigate } from 'react-router-dom';

function ProductListPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const products = useSelector((state) => state.product.list);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('https://worksheet-product.mashupstack.com/product', {
          headers: { Authorization: `Bearer ${token}` },
        });
        dispatch(setProducts(res.data));
      } catch (error) {
        alert('Failed to load products');
      }
    };
    fetchProducts();
  }, [dispatch, token]);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <strong>{p.name}</strong> — ${p.price}
            <button onClick={() => navigate(`/product/${p.id}`)}>View</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListPage;
