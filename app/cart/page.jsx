"use client";

import React from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

function Cart({ cartItems, removeFromCart, handleChange }) {
  // price

  // const [price, setPrice] = useState(0);

  const total = cartItems.reduce((total, item) => {
    return total + item.price;
  }, 0);
  console.log(total);

  return (
    <div>
      <h2 className="text-center text-gray-900 text-2xl my-5">
        Shopping Cart {cartItems.length}
      </h2>
      <div className="p-10 flex flex-col justify-between gap-2">
        {cartItems?.map((item) => (
          <div className="cart__box flex justify-around items-center  border-2  p-2 ">
            <div className="cart__img">
              <img
                src={item.thumbnail}
                className="h-[100px] w-[150px]"
                alt={item.title}
              />
            </div>
            <div className="flex gap-3">
              <button
                className="px-[5] py-[10] "
                onClick={() => handleChange(item, 1)}
              >
                <FaPlus />
              </button>
              <button>{item.amount}</button>
              <button
                className="px-[5] py-[10] "
                onClick={() => handleChange(item, 1)}
              >
                {" "}
                <FaMinus />
              </button>
            </div>
            <li key={item.id}>
              {item.title} - ${item.price}
            </li>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="cart__total flex justify-center px-5">
        <h2 className="text-2xl  text-red-600">
          total: <span>${total}</span>{" "}
        </h2>
      </div>
    </div>
  );
}

export default Cart;
