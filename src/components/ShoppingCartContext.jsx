import React, { createContext, useContext, useState } from 'react';

const ShoppingCartContext = createContext();

export const useShoppingCart = () => useContext(ShoppingCartContext);

export const ShoppingCartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const saveCartToLocalStorage = (items) => {
    localStorage.setItem('cart', JSON.stringify(items));
  };
  const addToCart = (product) => {
    setCartItems((currentItems) => {
      const itemIndex = currentItems.findIndex(item => item.id === product.id);
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
        updatedItems = [...currentItems, { ...product, quantity: 1 }];
      }
  
      saveCartToLocalStorage(updatedItems);
      return updatedItems;
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((currentItems) => {
      let updatedItems = [];
  
      const existingItem = currentItems.find(item => item.id === productId);
  
      if (existingItem && existingItem.quantity > 1) {
        updatedItems = currentItems.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        updatedItems = currentItems.filter((item) => item.id !== productId);
      }
      localStorage.setItem('cart', JSON.stringify(updatedItems));
      
      return updatedItems;
    });
  };
  const incrementItemQuantity = (productId) => {
    setCartItems((currentItems) => {
      const updatedItems = currentItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );
      saveCartToLocalStorage(updatedItems);
      return updatedItems;
    });
  };
  
  const decrementItemQuantity = (productId) => {
    setCartItems((currentItems) => {
      let updatedItems = currentItems.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
      );
  

      updatedItems = updatedItems.filter(item => item.quantity > 0);
  
      saveCartToLocalStorage(updatedItems);
      return updatedItems;
    });
  };
  
  

  
  

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };
  const clearCart = () => {
    setCartItems([]);
    saveCartToLocalStorage([]);
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
