import { Roboto } from "next/font/google";
import { Toaster } from "react-hot-toast";
import clsx from "clsx";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Masud Rana Shawon | Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={clsx(roboto.className, "text-dark bg-light uppercase")}>
        <Toaster />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
