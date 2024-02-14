"use client";

import React, { useContext } from "react";
import { CartContext } from "../CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  return (
    <div className="h-screen w-full ">
      <h2 className="text-center text-gray-900 text-2xl my-5">
        {/* Shopping Cart {cartItems.length} */}
      </h2>

      {cartItems.length === 0 ? (
        <h3 className="text-center text-3xl mt-5 ">Your Cart is empty!!</h3>
      ) : (
        <>
          <div className="flex justify-evenly font-bold">
            <p>Item Name:</p>
            <p>Amount:</p>
            <p>Price:</p>
            <p>Remove Item:</p>
          </div>
          <div className="p-10 flex flex-col justify-between gap-2">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="cart__box flex justify-around items-center  border-2  p-2 "
              >
                <div className="cart__img">
                  <img
                    src={item.thumbnail}
                    className="h-[100px] w-[150px]"
                    alt={""}
                  />
                </div>
                <div className="flex gap-2">
                  <button className="px-[5] py-[10] ">{item.title}</button>
                  {/* <button className="px-[5] py-[10] ">
                {" "}
                <FaMinus />
              </button> */}
                </div>
                <h4>${item.price}</h4>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-400 text-white p-2"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="cart__total flex justify-center px-5">
            <h2 className="text-2xl  text-red-600">
              {/* Total: <span>${totalPrice.toFixed(2)}</span> */}
            </h2>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
