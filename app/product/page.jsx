"use client";
// import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import toast, { Toaster } from "react-hot-toast";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext";

const Products = () => {
  //  products data fetching
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  // data search
  const [quary, setQuary] = useState("");
  const dataFilter = products.filter((pr) =>
    pr.title.toLowerCase().includes(quary)
  );
  // console.log(quary);

  // cart
  // const [cart, setCart] = useState([]);

  // const handleCartAdded = (product) => {
  //   const newCart = [...cart, product];
  //   setCart(newCart);
  //   console.log(product);
  // };

  const { cartItems, handleCartAdded } = useContext(CartContext);

  // console.log(cartItems);

  return (
    <div className="w-full p-2 h-full">
      {/* <h1 className="text-3xl text-center">product cart {cartItems.length} </h1> */}

      {/* search bar  */}
      <div className="text-center my-[50px]">
        <input
          type="text"
          placeholder="search you product"
          className="w-[70%] md:w-[30%] h-[35px] p-2 rounded-sm text-gray-800 border border-slate-700	 border-solid	"
          onChange={(e) => setQuary(e.target.value)}
        />
      </div>

      {/* ml-[90px] grid sm:grid-cols-1 md:grid-cols-3 items-center gap-5 */}
      <div className=" flex flex-col justify-evenly md:flex-row lg:flex-row flex-wrap gap-4 items-center">
        {dataFilter?.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            handleCartAdded={handleCartAdded}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
