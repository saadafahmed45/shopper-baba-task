"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Cart from "@/app/cart/page";
import Navbar from "./Navbar";
import toast, { Toaster } from "react-hot-toast";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  // cart

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    if (cartItems.indexOf(product) !== -1) return;
    setCartItems([...cartItems, product]);
    toast.success("Product Added");
    // console.log(cartItems);
  };

  // rmv cart
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    toast.success("Product Remove");
  };

  // cart show
  const [show, setShow] = useState(true);
  console.log(show);

  return (
    <div>
      <Navbar cartItems={cartItems} setShow={setShow} />
      {show ? (
        <div className="ml-[90px] grid  sm:grid-cols-1 md:grid-cols-3  items-center gap-5">
          {products?.map((product) => (
            <ProductCard
              product={product}
              key={product.id}
              addToCart={addToCart}
            />
          ))}
        </div>
      ) : (
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      )}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Products;
