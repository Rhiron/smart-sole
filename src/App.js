import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Corrected import
import { ShoppingCartProvider } from './components/ShoppingCartContext';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';
import CartSidebar from './components/CartSidebar';
import Header from './components/header.jsx';
import Productlistmen from './components/productlistmen.jsx';
import Productlistwomen from './components/productlistwomen.jsx';
import Home from './components/home.jsx';
import Footer from './components/footer.jsx';
 
function App() {
    return (
      <BrowserRouter>
          <ShoppingCartProvider>
              <Header />
                  <Routes> {/* Correct use of Routes */}
                      <Route path="/" element={<Home />} />
                      <Route path="/men" element={<Productlistmen />} />
                      <Route path="/women" element={<Productlistwomen />} />
                      <Route path="/cart" element={<ShoppingCart />} />
                      <Route path="/checkout" element={<Checkout />} />
                  </Routes>
              <CartSidebar />
              <Footer />
          </ShoppingCartProvider>
      </BrowserRouter>
    );
  }
  
export default App;
