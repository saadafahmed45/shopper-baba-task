"use client";

import InputField from "@/components/InputField";
import SubButton from "@/components/SubButton";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import Link from "next/link";
import React, { useState } from "react";
import app from "../firebase/firebase.init";
import { BsEyeSlash } from "react-icons/bs";
import { IoEyeSharp } from "react-icons/io5";

const RegisterPage = () => {
  const [regError, setRegError] = useState("");
  const [regSuccess, setRegSuccess] = useState("");
  const [showpass, setShowPass] = useState(false);

  const auth = getAuth(app);
  const handleReg = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("email", email, "password", password);

    if (password.length < 6) {
      setRegError(" Password should be at least 6 characters!");
      return;
    }
    // reset error and sucess
    setRegError("");
    setRegSuccess("");
    // create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user);
        setRegSuccess("user Create Sucessfully");
      })
      .catch((error) => {
        console.error(error);
        setRegError(error.message);
      });
  };

  return (
    <div className="h-screen bg-slate-100  flex items-center justify-center">
      <div className="bg-gray-300 h-1/2  w-full md:h-[500px]   md:w-1/2 p-4 flex flex-col items-center justify-evenly">
        <div className=" p-2 ">
          <h2 className=" text-2xl md:text-3xl bg-green-500 p-2 ">
            Welcome to Register.
          </h2>
        </div>
        <div>
          <form className="" onSubmit={handleReg}>
            <InputField
              placeholder="Enter your email"
              type="email"
              name="email"
              label="email"
              required
            />
            <InputField
              placeholder="Enter your password"
              type={showpass ? "text" : "password"}
              name="password"
              label="password"
              required
            />
            <span
              className="cursor-pointer"
              onClick={() => setShowPass(!showpass)}
            >
              {showpass ? <BsEyeSlash /> : <IoEyeSharp />}
            </span>
            <br />
            <SubButton label="login" />
          </form>
        </div>
        <div>
          <span>
            Already have account!
            <Link href={"/login"} className="ml-2 text-red-700">
              Login Here
            </Link>
          </span>
        </div>
        <div>
          {regError && <p className="text-red-500">{regError}</p>}
          {regSuccess && <p className="text-green-700">{regSuccess}</p>}
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
