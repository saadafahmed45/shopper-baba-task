"use client";
import React from "react";
import { BallTriangle } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="flex justify-center items-center mt-40">
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
