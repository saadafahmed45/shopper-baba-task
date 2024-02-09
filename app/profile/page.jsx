import InputField from "@/components/InputField";
import SubButton from "@/components/SubButton";
import Link from "next/link";
import React from "react";

const ProfilePage = () => {
  return (
    <div className="h-screen bg-slate-300  flex items-center justify-center relative">
      <div className="bg-gray-100 h-1/2   w-full md:h-1/2    md:w-1/2 p-4 flex flex-col items-center justify-evenly">
        <div className=" h-28 w-full justify-center items-center flex ">
          <h2 className=" text-2xl md:text-3xl bg-green-500 p-2 ">
            welcome back Saadaf..
          </h2>
        </div>
        <div>
          <form className="h-full mx-auto">
            <InputField
              placeholder="Enter your first Name"
              type="text"
              name="email"
              label="email"
            />
            <InputField
              placeholder="Enter your first Name"
              type="text"
              name="email"
              label="email"
            />
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

export default ProfilePage;
