import Products from "@/app/product/page";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full bg-gray-50">
      <Products />
    </div>
  );
}
