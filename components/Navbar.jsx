"use client";

import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { IoLogoBuffer } from "react-icons/io";
import Link from "next/link";

const Navbar = () => {
  const isLogin = false;

  return (
    <div className="">
      <nav className="h-[70px]  bg-green-500 flex justify-around flex-col md:flex-row items-center">
        <Link href={"/"} className="flex items-center text-2xl">
          <IoLogoBuffer />
          Shopper Baba
        </Link>
        <ul className="flex  gap-5 cursor-pointer text-[16px] md:text-[18px] uppercase">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href="/product">Product</Link>
          </li>
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
        <div className="flex text-[20px]  gap-4 uppercase">
          <button
            className="font-bold cursor-pointer flex
           flex-row items-center gap-2"
          >
            cart : <FaCartShopping />
          </button>
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
