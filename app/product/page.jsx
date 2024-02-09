"use client";
// import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import toast, { Toaster } from "react-hot-toast";
import loadProduct from "../api/loadProduct";
import { useState } from "react";

const Products = async () => {
  //  products data fetching
  const products = await loadProduct();

  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch(`https://dummyjson.com/products/`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProducts(data.products);
  //     });
  // }, []);

  return (
    <div className="w-full px-[50px]">
      {/* ml-[90px] grid sm:grid-cols-1 md:grid-cols-3 items-center gap-5 */}
      <div className=" flex flex-col justify-evenly md:flex-row lg:flex-row flex-wrap gap-4 items-center">
        {products?.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
