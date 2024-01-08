"use client";

import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { IoLogoBuffer } from "react-icons/io";
import Link from "next/link";

const Navbar = ({ cartItems, setShow }) => {
  return (
    <div className="px-20 py-3 bg-green-500">
      <nav className="flex justify-between">
        <button
          className="flex items-center text-xl"
          onClick={() => setShow(true)}
        >
          <IoLogoBuffer />
          Shopper Baba
        </button>
        <ul className="flex gap-5 cursor-pointer text-[20px]">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/cart">my cart</Link>
          </li>
          <li>
            <Link href="/">contact</Link>
          </li>
        </ul>
        <div>
          <button
            onClick={() => setShow(!true)}
            className="font-bold cursor-pointer flex flex-row items-center gap-2"
          >
            cart : <FaCartShopping />
            {cartItems.length}{" "}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
