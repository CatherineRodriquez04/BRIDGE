/** @format */

import { Roboto } from "next/font/google";
import "./globals.css";

//components
import Footer from "../components/Footer";
import Header from "@/components/Header";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "title",
  description: "Are You Playing the Game, or is the Game Playing You?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`flex flex-col flex-grow ${roboto.variable}`}>
        <Header />
        <div className="container">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
