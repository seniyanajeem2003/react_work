import React from 'react';
import Navbar from './Navbar';
import AppRouter from './Router';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
