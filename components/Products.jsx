"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Cart from "@/app/cart/page";

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
    setCartItems([...cartItems, product]);
    console.log(cartItems);
  };
  // rmv cart
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  return (
    <div>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      {/* Products {products.length} */}
      <div className="ml-[90px] grid  grid-cols-3 items-center gap-5">
        {products?.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
