import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import toast, { Toaster } from "react-hot-toast";
import CartProvider from "./CartContext";
import DsNav from "@/components/DsNav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shopper baba",
  description: "E-commerce site in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          {/* <Navbar /> */}
          <DsNav />
          {/* <Cart/> */}
          <Toaster position="right-bottom" reverseOrder={false} />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
