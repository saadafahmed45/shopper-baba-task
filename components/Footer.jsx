import React from 'react'

const Footer = () => {
  return (
    <div className="pt-[50px] px-[100px]  bg-green-500 ">
      <div className=" flex  justify-between  items-start">
        <div>
          <h2 className="text-2xl">Shopper Baba</h2>
        </div>
        <div className="flex flex-col">
          <a href="#">Contact us</a>
          <a href="#">produc</a>
          <a href="#">Contact us</a>
          <a href="#">About</a>
        </div>
        <div className="flex flex-col">
          <a href="#">Contact us</a>
          <a href="#">Contact us</a>
          <a href="#">Contact us</a>
          <a href="#">About</a>
        </div>
        <div className="flex gap-2 flex-col ">
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
      <div className='text-center p-5'>
        <h2>© Programming Hero 2024</h2>
      </div>
    </div>
  );
}

export default Footer