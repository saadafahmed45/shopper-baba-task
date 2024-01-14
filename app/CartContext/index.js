"use client";

import { createContext, useContext, useState } from "react";

const CartContext = createContext();
export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
// console.log(cart);
  // Add more functions for other actions like removing items, updating quantities, etc.

  const contextValue = {
    cart,
    addToCart,
    // Add more functions to update the cart state
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
