"use client";
import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

const ProductCard = ({ product, handleCartAdded }) => {
  const products = product;

  // add to cart
  // const handleAddToCart = () => {
  //   toast.success("Product Added");
  //   console.log("add cart clicked");
  // };

  return (
    // <div classNameName=" border shadow-xl hover:shadow-4xl bg-white   rounded-md h-[440px] w-[250px] my-5 mx-2 ">
    //   {/* product_card */}

    //   <Link href={`/product/${products?.id}`}>
    //     <div classNameName=" bg-slate-500 relative h-[280px] w-[250px]">
    //       <Image
    //         classNameName=" rounded-sm"
    //         src={products?.thumbnail}
    //         alt="thumbnai"
    //         fill
    //         // width={80}
    //         // height={80}
    //       />
    //     </div>
    //   </Link>
    //   <div classNameName="flex flex-col   p-2 gap-2">
    //     <h4 classNameName="text-xl ">{products?.title}</h4>
    //     <span classNameName="p text-xl text-right font-bold">
    //       $ {products?.price}
    //     </span>
    //     <button
    //       onClick={() => handleCartAdded(products)}
    //       classNameName="bg-slate-950 hover:bg-green-500 hover:text-black
    //         text-white py-[5px] px-[10px]"
    //     >
    //       Add cart
    //     </button>
    //   </div>
    // </div>
    <div>
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
          <img
            src={products?.thumbnail}
            alt="card-image"
            className="object-contain w-full h-full"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              {products?.title}
            </p>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              ${products?.price}
            </p>
          </div>
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
            {products?.description}
          </p>
        </div>
        <div className="p-6 pt-0">
          <button
            onClick={() => handleCartAdded(products)}
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            type="button"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
