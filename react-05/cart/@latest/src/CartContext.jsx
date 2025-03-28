import React, { createContext, useContext, useState } from 'react';
import Cart from './Cart';
const CartContext = createContext();

export const CartProvider = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => setCart([...cart, item]);

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      <Cart /> 
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);