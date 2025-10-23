import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ViewProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = useSelector((state) =>
    state.product.list.find((p) => p.id === id)
  );

  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p><b>Description:</b> {product.description}</p>
      <p><b>Price:</b> ${product.price}</p>
      <p><b>Quantity:</b> {product.quantity}</p>
      <button onClick={() => navigate('/products')}>Back to List</button>
    </div>
  );
}

export default ViewProductPage;
