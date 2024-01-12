"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import Cart from "@/app/cart/page";
import Navbar from "../../components/Navbar";
import toast, { Toaster } from "react-hot-toast";

const Products = () => {
  //  products data fetching

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  // add cart

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    if (cartItems.indexOf(product) !== -1) return;
    setCartItems([...cartItems, product]);
    toast.success("Product Added");
    // console.log(cartItems);
  };

  return (
    <div>
      <div className="ml-[90px] grid  sm:grid-cols-1 md:grid-cols-3  items-center gap-5">
        {products?.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            addToCart={addToCart}
          />
        ))}
      </div>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Products;
