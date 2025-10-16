import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

function Navbar() {
  return (
    <nav className="nav nav-pills justify-content-center bg-light p-3">
      <NavLink className="nav-link" to="/">Home</NavLink>
      <NavLink className="nav-link" to="/about">About</NavLink>
      <NavLink className="nav-link" to="/contact">Contact</NavLink>
    </nav>
  );
}

export default Navbar;
