import React, { useEffect, useState } from "react";

const SingleProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return <div>page</div>;
};

export default SingleProduct;
