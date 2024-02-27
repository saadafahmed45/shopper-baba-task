"use client";
import React from "react";
import { Bars } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="w-screen bg-white shadow-lg rounded-lg overflow-hidden">
      <Bars
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loading;
