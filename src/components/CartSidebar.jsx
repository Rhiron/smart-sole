import React from 'react';
import { useShoppingCart } from './ShoppingCartContext';
import { useNavigate } from 'react-router-dom';
import '../Styling/CartSidebar.css';

const CartSidebar = () => {
    const { cartItems, isCartOpen, closeCart, incrementItemQuantity, decrementItemQuantity } = useShoppingCart();
  let navigate = useNavigate(); 
  const handleCheckout = () => {
    closeCart(); 
    navigate('/checkout'); 
  };

    if (!isCartOpen) return null;

    return (
        <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
            <button onClick={closeCart} className="close-cart">X</button>
            {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                    <h4>{item.name}</h4>
                    <p>Price: ${item.price * item.quantity}</p>
                    <div className="quantity-adjuster">
                        <button onClick={() => decrementItemQuantity(item.id)}>\/</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => incrementItemQuantity(item.id)}>/\</button>
                    </div>
                </div>
            ))}
            <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
        </div>
    );
};

export default CartSidebar;

