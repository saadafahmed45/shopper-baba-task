const loadProduct = async () => {
  const res = await fetch(`https://dummyjson.com/products/`, {
    cache: "force-cache",
  });
  const data = await res.json();
  return data.products;
};

export default loadProduct;
