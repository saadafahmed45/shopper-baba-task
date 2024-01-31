import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "./CartContext";
import toast, { Toaster } from "react-hot-toast";

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
          <Navbar />
          {/* <Cart /> */}
          <Toaster position="top-center" reverseOrder={false} />

          {children}
          <Footer/>
        </CartProvider>
      </body>
    </html>
  );
}
