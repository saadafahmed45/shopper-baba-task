import InputField from "@/components/InputField";
import SubButton from "@/components/SubButton";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="h-screen bg-slate-100  flex items-center justify-center">
      <div className="bg-gray-300 h-1/2  w-full md:h-1/2   md:w-1/2 p-4 flex flex-col items-center justify-evenly">
        <div className=" p-2 ">
          <h2 className=" text-2xl md:text-3xl bg-green-500 p-2 ">
            Login your account
          </h2>
        </div>
        <div>
          <form className="">
            <InputField
              placeholder="Enter your email"
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
      </div>
    </div>
  );
};

export default LoginPage;
