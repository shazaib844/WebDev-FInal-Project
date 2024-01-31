import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; 
import Homepage from './Homepage';
import ProductDetails from './ProductDetails';
import AddToCartPage from './Addtocart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} /> {}
        <Route path="/home" element={<Homepage />} />
        <Route path="/cart" element={<AddToCartPage />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
