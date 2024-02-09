"use client";

import { createContext, useState } from "react";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  function handleAddToCart(getCurrentItem) {
    let copyCartItem = [...cartItems];
    const indexOfCurrentItem = copyCartItem.findIndex(
      (item) => item.id === getCurrentItem.id
    );
    console.log(indexOfCurrentItem);

    if (indexOfCurrentItem === -1) {
      copyCartItem.push(getCurrentItem);
    }
    setCartItems(copyCartItem);
  }

  return (
    <CartContext.Provider value={{ cartItems, handleAddToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
