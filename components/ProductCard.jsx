import React from "react";
import Image from "next/image";

const ProductCard = ({ product, addToCart }) => {
  const products = product;

  // console.log(product);
  return (
    <div className=" border shadow-xl hover:shadow-4xl bg-white rounded-md h-[440px] w-[250px] my-5 mx-2 ">
      {/* product_card */}

      <div className="p-5">
        {/* <Image
          src={thumbnail}
          width={200}
          height={200}
          alt="Picture of the author"
        /> */}
        <img
          className="h-[250px] w-[320px] rounded-sm"
          src={products?.thumbnail}
          alt="thumbnai"
        />
      </div>
      <div className="flex flex-col items- p-5">
        <h4 className="text-xl text-right">{products?.title}</h4>
        <span className="p-2 font-bold">Price: $ {products?.price}</span>
        <button
          onClick={() => addToCart(product)}
          
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
