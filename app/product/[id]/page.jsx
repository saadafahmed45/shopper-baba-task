"use client";

import { CartContext } from "@/app/CartContext";
import React, { useContext, useEffect, useState } from "react";

const SingleProduct = ({ params }) => {
  const id = params.id;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const { cartItems, handleCartAdded } = useContext(CartContext);

  return (
    <div className="h-[100vh] md:h-[80vh] mx-5  ">
      <div className="p-4 ">
        <h2 className="text-xl md:text-2xl font-bold"> Product Details:</h2>

        <div
          className="flex flex-col  lg:flex-row  justify-around items-center gap-5
        border shadow-xl hover:shadow-4xl bg-white rounded-md h-full  my-7  p-4 "
          key={products.id}>
          {/* product_card */}
          <div className="">
            <img
              className="h-[270px]  md:h-[300px] rounded-sm"
              src={products?.thumbnail}
              alt="thumbnai"
            />
          </div>
          <div className="flex flex-col gap-2 p-4 ">
            <h4 className="text-2xl">{products?.title}</h4>
            <span className="text-2xl font-bold">$ {products?.price}</span>
            <span className="text-xl md:text-md font-semibold">
              Brand: {products?.brand}
            </span>{" "}
            <span className=" font-semibold">rating</span>
            <h3 className="text-bold text-md md:text-xl">
              Description: <span>{products?.description} </span>
            </h3>
            <div className="flex mt-5">
              <button
                onClick={() => handleCartAdded(products)}
                className="bg-slate-800 text-md md:text-xl hover:bg-green-500 hover:text-black 
            text-white py-[5px] px-[8px] duration-300 ">
                Add cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
