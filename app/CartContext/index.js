"use client";

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import app from "../firebase/firebase.init";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {


 //  products data fetching
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);





  const [cartItems, setCartItems] = useState([]);

  // add cart fun
  function handleCartAdded(getCurrentItem) {
    let copyCartItems = [...cartItems];
    const indexOfCurrentItem = copyCartItems.findIndex(
      (item) => item.id === getCurrentItem.id
    );
    console.log(copyCartItems);
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

  // login

  const [user, setUser] = useState([]);

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedInuser = result.user;
        console.log(loggedInuser);
        setUser(loggedInuser);
        toast.success("Your are login");
        localStorage.setItem("user", JSON.stringify(loggedInuser));
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };
  // sing out
  const handleSingOut = () => {
    signOut(auth)
      .then((result) => {
        // Sign-out successful.
        setUser("");
        toast.error("Your are log out");
        localStorage.setItem("user", JSON.stringify(""));
      })
      .catch((error) => {
        // An error happened.
      });
  };
  // localStorage save
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")) || []);
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        handleCartAdded,
        removeFromCart,
        user,
        handleGoogleSignIn,
        handleSingOut,
        products
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
