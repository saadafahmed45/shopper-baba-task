"use client";
import InputField from "@/components/InputField";
import SubButton from "@/components/SubButton";
import Link from "next/link";
import React, { useContext } from "react";
import { CartContext } from "../CartContext";

const ProfilePage = () => {
  const { user } = useContext(CartContext);

  return (
    <div className="h-screen bg-slate-300  flex items-center justify-center relative">
      {user ? (
        <div className="flex  flex-col gap-2 mt-4 bg-slate-700 h-[400px] w-[400px]">
          <div className="flex justify-center p-4 ">
            <img
              className="h-[200px] rounded-full"
              src={user.photoURL}
              alt=""
            />
          </div>
          <div className="p-2  text-center text-white">
            <h2 className="text-xl m-2 "> {user.displayName}</h2>
            <h2> {user.email}</h2>
          </div>
        </div>
      ) : (
        <p>nop</p>
      )}
    </div>
  );
};

export default ProfilePage;
