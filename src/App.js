import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from './components/ShoppingCartContext';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';
import ProductListing from './components/ProductListing';
import CartSidebar from './components/CartSidebar';
import Header from './components/header.jsx';

function App() {
  return (
    <BrowserRouter>
    <ShoppingCartProvider>
      <Header />
      
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      <CartSidebar />
      
    </ShoppingCartProvider>
    </BrowserRouter>
  );
}

export default App;
