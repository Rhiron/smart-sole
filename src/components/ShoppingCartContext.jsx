import React, { createContext, useContext, useState } from 'react';

const ShoppingCartContext = createContext();

export const useShoppingCart = () => useContext(ShoppingCartContext);

export const ShoppingCartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        // Try to load the cart from Local Storage on initial load
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });
  const [isCartOpen, setIsCartOpen] = useState(false); // New state for cart visibility
  const saveCartToLocalStorage = (items) => {
    localStorage.setItem('cart', JSON.stringify(items));
  };
  const addToCart = (product) => {
    setCartItems((currentItems) => {
      // Check if the product is already in the cart
      const itemIndex = currentItems.findIndex(item => item.id === product.id);
  
      // If the product is already in the cart, update the quantity
      let updatedItems;
      if (itemIndex > -1) {
        updatedItems = currentItems.map((item, index) => {
          if (index === itemIndex) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        // If the product is not in the cart, add it with quantity 1
        updatedItems = [...currentItems, { ...product, quantity: 1 }];
      }
  
      // Now save the updated cart to local storage
      saveCartToLocalStorage(updatedItems);
  
      // Return the updated items so the state gets updated
      return updatedItems;
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((currentItems) => {
      let updatedItems = [];
  
      const existingItem = currentItems.find(item => item.id === productId);
  
      if (existingItem && existingItem.quantity > 1) {
        // If item exists and quantity is greater than 1, decrease the quantity
        updatedItems = currentItems.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        // If quantity is 1, remove the item from the cart
        updatedItems = currentItems.filter((item) => item.id !== productId);
      }
  
      // Save the updated cart to local storage
      localStorage.setItem('cart', JSON.stringify(updatedItems));
      
      // Return the updated cart items
      return updatedItems;
    });
  };
  const incrementItemQuantity = (productId) => {
    setCartItems((currentItems) => {
      const updatedItems = currentItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );
      saveCartToLocalStorage(updatedItems); // Save updated cart to Local Storage
      return updatedItems;
    });
  };
  
  const decrementItemQuantity = (productId) => {
    setCartItems((currentItems) => {
      let updatedItems = currentItems.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
      );
  
      // If quantity is reduced to 0, filter out the item
      updatedItems = updatedItems.filter(item => item.quantity > 0);
  
      saveCartToLocalStorage(updatedItems); // Save updated cart to Local Storage
      return updatedItems;
    });
  };
  
  

  
  

  const toggleCart = () => { // New function to toggle cart visibility
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => { // Optionally, a function to just close the cart
    setIsCartOpen(false);
  };

  // Function to clear the cart
  const clearCart = () => {
    setCartItems([]); // Clear the cart state
    saveCartToLocalStorage([]); // Clear the cart in local storage
  };

  return (
    <ShoppingCartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeFromCart, 
      incrementItemQuantity, 
      decrementItemQuantity,
      isCartOpen, 
      setIsCartOpen, 
      toggleCart,
      closeCart,
      setCartItems,
      clearCart
    }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
