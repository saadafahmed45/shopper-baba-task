import React from "react";
import loadProduct from "../api/loadProduct";
import Link from "next/link";
import Image from "next/image";

const Blog = async () => {
  const blog = await loadProduct();

    return (
      <div>
        Blog {blog.length}
        <div className="w-full px-[50px]">
          {/* ml-[90px] grid sm:grid-cols-1 md:grid-cols-3 items-center gap-5 */}
          <div className=" flex flex-col justify-evenly md:flex-row lg:flex-row flex-wrap gap-4 items-center">
            {blog?.map((product) => (
              <div className=" border shadow-xl hover:shadow-4xl bg-white   rounded-md h-[440px] w-[250px] my-5 mx-2 ">
                {/* product_card */}

                <Link href={`/product/${product.id}`}>
                  <div className=" bg-slate-500 relative h-[280px] w-[250px]">
                    <Image
                      className=" rounded-sm"
                      src={product?.thumbnail}
                      alt="thumbnai"
                      fill
                      // width={80}
                      // height={80}
                    />
                  </div>
                </Link>
                <div className="flex flex-col   p-2 gap-2">
                  <h4 className="text-xl ">{product?.title}</h4>
                  <span className="p text-xl text-right font-bold">
                    $ {product?.price}
                  </span>
                  <button
                    // onClick={() => HandleAddToCart(product?.tile)}
                    // onClick={handleAddToCart}
                    className="bg-slate-950 hover:bg-green-500 hover:text-black 
            text-white py-[5px] px-[10px]"
                  >
                    Add cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Blog;
