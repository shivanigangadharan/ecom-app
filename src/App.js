import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import ProductList from './pages/ProductList/productList';
import Navbar from './components/navbar/navbar';
import Cart from './pages/cart/cart';
import Wishlist from './pages/wishlist/wishlist';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
