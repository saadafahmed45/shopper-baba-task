"use client";
// import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import toast, { Toaster } from "react-hot-toast";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext";
import Paganiation from "@/components/paganiation";
import SearchBtn from "@/components/SearchBtn";
import loadProduct from "../api/loadProduct";

const Products = async () => {
  const { cartItems, handleCartAdded } = useContext(CartContext);
  const products = await loadProduct();

  // data search
  // const [quary, setQuary] = useState([]);
  // const dataFilter = products.filter((pr) =>
  //   pr.title.toLowerCase().includes(quary)
  // );
  // console.log(quary);

  // console.log(cartItems);

  return (
    <div className="w-full py-10 ">
      {/* search bar  */}
      <div className="text-center w-[50%] my-[50px] mx-auto">
        {/* <input
          type="text"
          placeholder="search you product"
          className="w-[70%] md:w-[30%] h-[35px] p-2 rounded-sm text-gray-800 border border-slate-700	 border-solid	"
        /> */}
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Search"
            // onChange={(e) => setQuary(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70">
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        {/* <SearchBtn /> */}
      </div>

      {/* ml-[90px] grid sm:grid-cols-1 md:grid-cols-3 items-center gap-5 */}
      <div className=" flex flex-col  justify-evenly md:flex-row lg:flex-row flex-wrap gap-4  items-center">
        {products?.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            handleCartAdded={handleCartAdded}
          />
        ))}
      </div>
      {/* <Paganiation /> */}
    </div>
  );
};

export default Products;
