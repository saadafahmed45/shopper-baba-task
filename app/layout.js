import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import toast, { Toaster } from "react-hot-toast";
import CartProvider from "./CartContext";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shopper baba",
  description: "E-commerce site in Bangladesh",
};

export default function RootLayout({ children, ...props }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider

          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>

          <CartProvider>
            <Navbar />
            {/* <Cart /> */}
            <Toaster position="right-bottom" reverseOrder={false} />
            {children}
            {/* <Footer /> */}
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
