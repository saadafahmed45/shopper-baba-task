import React from "react";

const Loading = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden animate-pulse">
      {/* Product image skeleton */}
      <div className="h-56 bg-gray-300"></div>

      <div className="p-4">
        {/* Product title skeleton */}
        <div className="h-4 w-3/4 bg-gray-300 mb-2"></div>
        {/* Product price skeleton */}
        <div className="h-4 w-1/4 bg-gray-300"></div>
      </div>
    </div>
  );
};

export default Loading;
