import React from 'react';
import { useShoppingCart } from './ShoppingCartContext';
import { useNavigate } from 'react-router-dom';
import '../Styling/CartSidebar.css';
import productData from './Data.json';

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
                <div key={`${item.productId}-${item.color}-${item.size}`} className="cart-item">
                    <img className="sidebar-img" src={item.image} alt={item.name} />
                    <h4>{item.name}</h4>
                    <h5>Size: {item.size}</h5>
                    <h5>Color: {item.color}</h5>
                    <p>Price: ${ (item.price * item.quantity).toFixed(2) }</p>
                    <div className="quantity-adjuster">
                        <button onClick={() => decrementItemQuantity(item.productId, item.size, item.color)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => incrementItemQuantity(item.productId, item.size, item.color)}>+</button>
                    </div>
                </div>
            ))}
            <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
        </div>
    );
};

export default CartSidebar;


