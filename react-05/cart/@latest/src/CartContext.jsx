import { createContext, useState } from "react";

// 1. Create Context
export const CartContext = createContext();

// 2. CartProvider to wrap all components
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]); // Global cart state

  // Function to add item to cart
  const addItem = (item) => {
    if (item.trim() !== "") {
      setCart([...cart, item]); // Updates the global cart
    }
  };

  // Function to remove item from cart
  const removeItem = (index) => {
    setCart(cart.filter((_, i) => i !== index)); // Removes the item
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}
