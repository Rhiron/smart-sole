import React, { createContext, useContext, useState } from 'react';
import productData from './Data.json';

const ShoppingCartContext = createContext();

export const useShoppingCart = () => useContext(ShoppingCartContext);

const enrichCartItem = (product) => {
  const productInfo = productData.product.find(p => p.productId === product.id);
  return {
    ...product,
    image: productInfo?.image,
    price: productInfo?.price
  };
};
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
      // Find if the item already exists considering id, color, and size
      const itemIndex = currentItems.findIndex(item =>
        item.productId === product.productId && item.color === product.color && item.size === product.size
        
      );
      
  
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
  const incrementItemQuantity = (productId, size, color) => {
    setCartItems(currentItems => {
      const updatedItems = currentItems.map(item => {
        if (item.productId === productId && item.size === size && item.color === color) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      saveCartToLocalStorage(updatedItems);
      return updatedItems;
    });
  };
  
  
  const decrementItemQuantity = (productId, size, color) => {
    setCartItems(currentItems => {
      const updatedItems = currentItems.reduce((acc, item) => {
        // Check if this is the item to update
        if (item.productId === productId && item.size === size && item.color === color) {
          // Only add the item back to the array if the quantity is more than 1
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          // If not the item to update, just add it back to the array
          acc.push(item);
        }
        return acc;
      }, []);
  
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
