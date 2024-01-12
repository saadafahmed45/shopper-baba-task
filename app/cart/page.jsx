import React from "react";

const Cart = () => {
  return (
    <div>
      <h2 className="text-center text-gray-900 text-2xl my-5">
        hi
        {/* Shopping Cart {cartItems.length} */}
      </h2>
      <div className="flex justify-evenly font-bold">
        <p>Item Name:</p>
        <p>Amount:</p>
        <p>Price:</p>
        <p>Remove Item:</p>
      </div>
      <div className="p-10 flex flex-col justify-between gap-2">
        <div className="cart__box flex justify-around items-center  border-2  p-2 ">
          <div className="cart__img">
            <img src={""} className="h-[100px] w-[150px]" alt={""} />
          </div>
          <div className="flex gap-2">
            <button className="px-[5] py-[10] ">Product Name:</button>
            {/* <button className="px-[5] py-[10] ">
                {" "}
                <FaMinus />
              </button> */}
          </div>
          <h4>$</h4>
          <button className="bg-red-400 text-white p-2">Remove</button>
        </div>
      </div>
      <div className="cart__total flex justify-center px-5">
        <h2 className="text-2xl  text-red-600">
          {/* total: <span>${total}</span>{" "} */}
        </h2>
      </div>
    </div>
  );
};

export default Cart;
