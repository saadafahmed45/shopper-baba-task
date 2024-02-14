import React from "react";

const Footer = () => {
  return (
    <div className="h-1/2">
      <div className="pt-[50px] px-[100px]  bg-green-500 ">
        <div className=" flex flex-col md:flex-row  justify-evenly  items-start">
          <div>
            <h2 className="text-xl ">Shopper Baba</h2>
          </div>
          {/* <div className="flex flex-col">
          <a href="#">Contact us</a>
          <a href="#">About</a>
        </div> */}
          <div className="md:flex flex-col hidden">
            <a href="#">Contact us</a>
            <a href="#">shop us</a>
            <a href="#">About</a>
          </div>
          <div className="md:flex gap-2 flex-col hidden ">
            <input
              className="p-[5px] w-40 "
              type="email"
              placeholder="type your email"
            />
            <input
              className="p-[5px] w-40 "
              type="password"
              placeholder="type your password"
            />
            <button>sign up</button>
          </div>
        </div>
        <div className="text-center ">
          <h2>©Shopper-Baba 2024</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
