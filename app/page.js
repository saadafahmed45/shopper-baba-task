import Products from "@/app/product/page";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full bg-gray-50">
      {/* <Header/> */}
      <Products />
    </div>
  );
}
