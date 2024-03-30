import Products from "@/app/product/page";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" px-8  bg-gray-50">
      {/* <Header/> */}
      <Hero/>
      <Products />
    </div>
  );
}
