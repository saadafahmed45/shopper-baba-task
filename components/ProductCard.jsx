"use client";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product, handleCartAdded }) => {
  const products = product;

  // add to cart
  // const handleAddToCart = () => {
  //   toast.success("Product Added");
  //   console.log("add cart clicked");
  // };

  return (
    <div className=" border shadow-xl hover:shadow-4xl dark:text-white dark:bg-black bg-white    rounded-md h-[440px] w-[250px] my-5 mx-2 ">
      {/* product_card */}

      <Link href={`/product/${products?.id}`}>
        <div className=" bg-slate-500 relative h-[280px] w-[250px]">
          <Image
            className=" rounded-sm"
            src={products?.thumbnail}
            alt="thumbnai"
            fill
            // width={80}
            // height={80}
          />
        </div>
      </Link>
      <div className="flex flex-col   p-2 gap-2">
        <h4 className="text-xl ">{products?.title}</h4>
        <span className="p text-xl text-right font-bold">
          $ {products?.price}
        </span>
        <button
          onClick={() => handleCartAdded(products)}
          className="bg-slate-950 dark:bg-green-500 hover:bg-green-500 hover:text-black 
            text-white py-[5px] px-[10px]"
        >
          Add cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
