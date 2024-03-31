import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShoppingCartProvider } from './components/ShoppingCartContext';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';
import ProductListing from './components/ProductListing';
import CartSidebar from './components/CartSidebar';

function App() {
  return (
    <ShoppingCartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      <CartSidebar />
      </Router>
    </ShoppingCartProvider>
  );
}

export default App;
