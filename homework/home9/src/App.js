import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ProductListPage from './pages/ProductListPage';
import ViewProductPage from './pages/ViewProductPage';
import { useSelector } from 'react-redux';

function App() {
  const token = useSelector((state) => state.auth.token);

  return (
    <Routes>
  <Route path="/" element={<RegisterPage />} />  
  <Route path="/register" element={<RegisterPage />} />
  <Route path="/login" element={<LoginPage />} />
  <Route
    path="/products"
    element={token ? <ProductListPage /> : <Navigate to="/login" />}
  />
  <Route
    path="/product/:id"
    element={token ? <ViewProductPage /> : <Navigate to="/login" />}
  />
</Routes>

  );
}

export default App;
