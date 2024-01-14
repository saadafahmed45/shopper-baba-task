"use client";
import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const products = product;
  // console.log(product);

  // add to cart



  return (
    <div className=" border shadow-xl hover:shadow-4xl bg-white rounded-md h-[440px] w-[250px] my-5 mx-2 ">
      {/* product_card */}

      <Link href={`/product/${products.id}`}>
        <div className="p-5">
          <img
            className="h-[250px] w-[320px] rounded-sm"
            src={products?.thumbnail}
            alt="thumbnai"
          />
        </div>
      </Link>
      <div className="flex flex-col items- p-5">
        <h4 className="text-xl text-right">{products?.title}</h4>
        <span className="p-2 font-bold">Price: $ {products?.price}</span>
        <button
          // onClick={() => HandleAddToCart(product?.tile)}
          onClick={handleAddToCart}
          className="bg-slate-950 hover:bg-green-500 hover:text-black 
            text-white py-[5px] px-[10px]"
        >
          Add cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
