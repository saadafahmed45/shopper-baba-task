"use client";

import { createContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // add cart fun
  function handleCartAdded(getCurrentItem) {
    let copyCartItems = [...cartItems];
    const indexOfCurrentItem = copyCartItems.findIndex(
      (item) => item.id === getCurrentItem.id
    );
    // console.log(indexOfCurrentItem);
    if (indexOfCurrentItem === -1) {
      copyCartItems.push(getCurrentItem);
    }
    setCartItems(copyCartItems);
    localStorage.setItem("cartItems", JSON.stringify(copyCartItems));

    toast.success("Your Product is added to cart!");
  }

  // remove to cart
  function removeFromCart(getCurrentItem) {
    // console.log(getCurrentItem);
    let copyCartItems = [...cartItems];
    copyCartItems = copyCartItems.filter((item) => item.id !== getCurrentItem);
    setCartItems(copyCartItems);
    localStorage.setItem("cartItems", JSON.stringify(copyCartItems));

    toast.error("Removed Product from  cart!");
  }

  // localStorage save
  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("cartItems")) || []);
  }, []);

  return (
    <CartContext.Provider
      value={{ cartItems, handleCartAdded, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
