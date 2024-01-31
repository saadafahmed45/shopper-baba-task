"use client";

import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { IoLogoBuffer } from "react-icons/io";
import Link from "next/link";

const Navbar = () => {

  
  return (
    <div className="px-20 py-3 bg-green-500">
      <nav className="flex justify-between flex-col md:flex-row items-center">
        <Link href={"/"} className="flex items-center text-xl">
          <IoLogoBuffer />
          Shopper Baba
        </Link>
        <ul className="flex  gap-5 cursor-pointer text-[16px] md:text-[20px]">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href="/product">Product</Link>
          </li>
          <li>
            <Link href={"/cart"}>Cart</Link>
          </li>
          <li>
            <Link href="/">contact</Link>
          </li>
        </ul>
        <div>
          <button
            className="font-bold cursor-pointer flex
           flex-row items-center gap-2"
          >
            cart : <FaCartShopping />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
