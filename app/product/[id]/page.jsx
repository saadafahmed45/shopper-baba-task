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



// id": 1,
//       "title": "iPhone 9",
//       "description": "An apple mobile which is nothing like apple",
//       "price": 549,
//       "discountPercentage": 12.96,
//       "rating": 4.69,
//       "stock": 94,
//       "brand": "Apple",
//       "category": "smartphones",
//       "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
//       "images": [

  return (
    <div className="px-[50px]">
      <h2> product id: {id} </h2>
      <div className="flex justify-evenly font-bold">
        <p>Item Name:</p>
        <p>Name:</p>
        <p>Price:</p>
      </div>
      <div
        className="flex justify-around items-center gap-5
      
      border shadow-xl hover:shadow-4xl bg-white rounded-md h-full  my-5 mx-5 p-2 "
      >
        {/* product_card */}
        <div className="p-2">
          <img
            className="h-[250px] w-[320px] rounded-sm"
            src={products?.thumbnail}
            alt="thumbnai"
          />
        </div>
        <div className="flex flex-row gap-5 items-center p-2 ">
          <h4 className="text-xl text-right">{products?.title}</h4>
          <span className=" font-bold">$ {products?.price}</span>
        </div>
        <div>
          <button
            className="bg-slate-950 hover:bg-green-500 hover:text-black 
            text-white py-[5px] px-[10px]"
          >
            Add cart
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-bold">
          Description:    <span>{products?.description} </span>
        </h3>
      </div>
    </div>
  );
};

export default SingleProduct;
