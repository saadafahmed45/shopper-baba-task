"use client";

import InputField from "@/components/InputField";

import SubButton from "@/components/SubButton";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.init";
import toast, { Toaster } from "react-hot-toast";
import { CartContext } from "../CartContext";

const LoginPage = () => {
  const { user, handleGoogleSignIn, handleSingOut } = useContext(CartContext);

  return (
    <div className="h-screen bg-slate-100  flex items-center justify-center">
      <div className="bg-gray-300 h-1/2  w-full md:h-1/2   md:w-1/2 p-4 flex flex-col items-center justify-evenly">
        {user.length == 0 ? (
          <div>
            {" "}
            <div className=" p-2 ">
              <h2 className=" text-2xl md:text-3xl bg-green-500 p-2 ">
                Login your account
              </h2>
            </div>
            <div>
              <form className="">
                <InputField
                  placeholder={user.email}
                  type="text"
                  name="email"
                  label="email"
                />
                <InputField
                  placeholder="Enter your password"
                  type="password"
                  name="password"
                  label="password"
                />

                <SubButton label="login" />
              </form>
            </div>
            <div>
              <span>
                Don't have account?
                <Link href={"/register"} className="ml-2 text-green-500">
                  Register Here
                </Link>
              </span>
            </div>
            <div>
              <button onClick={handleGoogleSignIn} className="text-3xl">
                {" "}
                <FaGoogle />
              </button>
            </div>
          </div>
        ) : (
          <div>
            {" "}
            <div className="">
              <img
                className="rounded-full h-[150px]"
                src={user.photoURL}
                alt=""
              />
            </div>
            <h3>{user.displayName}</h3>
            <h3>{user.email}</h3>
            <button
              onClick={() => handleSingOut()}
              className="p-2 m-2 bg-green-500"
            >
              sign out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
