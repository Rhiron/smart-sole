import React from 'react';
import { useShoppingCart } from './ShoppingCartContext'; 

const ShoppingCart = () => {
    const { cartItems, removeFromCart } = useShoppingCart();

    return (
        <div className="shopping-cart">
            <h2>Shopping Cart</h2>
            {cartItems.length > 0 ? (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id}>
                            {item.name} - ${item.price} 
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};

export default ShoppingCart;
