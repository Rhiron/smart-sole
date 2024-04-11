import React from 'react';
import { useShoppingCart } from './ShoppingCartContext';
import { useNavigate } from 'react-router-dom';
import '../Styling/CartSidebar.css';

const CartSidebar = () => {
    const { cartItems, isCartOpen, closeCart, incrementItemQuantity, decrementItemQuantity, getProductDetails } = useShoppingCart();
  let navigate = useNavigate(); 
  const handleCheckout = () => {
    closeCart(); 
    navigate('/checkout'); 
  };

    if (!isCartOpen) return null;

    {cartItems.map((item) => {
        const productDetails = getProductDetails(item.id);
        return (
          <div key={item.id} className="cart-item">
            <img src={productDetails.image} alt={item.name} /> {/* Show product image */}
            <h4>{productDetails.name || item.name}</h4>
            <p>Price: ${productDetails.price ? productDetails.price * item.quantity : item.price * item.quantity}</p>
            <div className="quantity-adjuster">
              <button onClick={() => decrementItemQuantity(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => incrementItemQuantity(item.id)}>+</button>
            </div>
          </div>
        );
      })}}
export default CartSidebar;
