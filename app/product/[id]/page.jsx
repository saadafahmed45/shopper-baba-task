"use client";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


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

  return (
    <div className="p-[50px] m-2">
      <h2 className="text-2xl font-bold"> Product Details:</h2>

      <div
        className="flex sm:flex-col  lg:flex-row  justify-around items-center gap-5
      border shadow-xl hover:shadow-4xl bg-white rounded-md h-full  my-7 mx-5 p-2 "
      >
        {/* product_card */}
        <div className="p-2">
          <img
            className="h-[250px] w-[320px] rounded-sm"
            src={products?.thumbnail}
            alt="thumbnai"
          />
        </div>
        <div className="flex flex-col gap-2 p-2 ">
          <h4 className="text-xl">{products?.title}</h4>
          <span className=" font-bold">$ {products?.price}</span>
          <span className=" font-semibold">Brand: {products?.brand}</span>{" "}
          <span className=" font-semibold">rating</span>
          <h3 className="text-bold">
            Description: <span>{products?.description} </span>
          </h3>
          <div className="flex mt-5">
            <button
              className="bg-slate-800 hover:bg-green-500 hover:text-black 
            text-white py-[5px] px-[8px]"
            >
              Add cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
