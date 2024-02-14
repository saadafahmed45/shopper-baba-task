"use client";

import React, { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { IoLogoBuffer } from "react-icons/io";
import Link from "next/link";
import { CartContext } from "@/app/CartContext";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  const isLogin = false;

  return (
    <div className="">
      <nav className=" h-[110px] md:h-[70px] bg-green-500 flex justify-around flex-col md:flex-row items-center">
        <Link href={"/"} className="flex items-center text-xl md:text-2xl ">
          <IoLogoBuffer />
          Shopper Baba
        </Link>
        <ul className="flex  gap-5 cursor-pointer text-[16px] md:text-[18px] uppercase">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          {/* <li>
            <Link href={"/product"}>Product</Link>
          </li> */}
          <li>
            <Link href="/cart">Cart</Link>
          </li>
          <li>
            <Link href="/blog">blog</Link>
          </li>
          <li>
            <Link href="/">contact</Link>
          </li>
        </ul>
        <div className="flex text-[16px] md:text-[20px] gap-4 uppercase ">
          <Link
            href="/cart"
            className="relative inline-flex items-center text-2xl text-black  focus:ring-2 focus:outline-none"
          >
            <FaCartShopping />
            <span
              className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-4 -end-4 
          "
            >
              {" "}
              {cartItems.length}
            </span>
          </Link>
          {!isLogin ? (
            <>
              {/* <Link href="/register">Register</Link> */}
              <Link href="/login">Login</Link>
            </>
          ) : (
            <>
              <Link href="/">Logout</Link>
              <Link href="/profile">Profile</Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
