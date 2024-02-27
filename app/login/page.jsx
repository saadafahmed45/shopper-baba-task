"use client";

import InputField from "@/components/InputField";
import SubButton from "@/components/SubButton";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { CartContext } from "../CartContext";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.init";

const LoginPage = () => {
  const { user, handleGoogleSignIn, handleSingOut } = useContext(CartContext);

  const handleSignIn = () => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="h-screen bg-slate-100  flex items-center justify-center">
      <div className="bg-gray-300 h-1/2  w-full md:h-1/2   md:w-1/2 p-4 flex flex-col items-center justify-evenly">
        {user.length === 0 ? (
          <div>
            {" "}
            <div className=" p-2 ">
              <h2 className=" text-2xl md:text-3xl bg-green-500 p-2 ">
                Login your account
              </h2>
            </div>
            <div>
              <form className="" onSubmit={handleSignIn}>
                <InputField
                  placeholder="email"
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
                <Link href="/register" className="ml-2 text-red-700">
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
