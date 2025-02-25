/** @format */

import "./globals.css";
import localFont from 'next/font/local';

//components
import Footer from "../components/Footer";
import Header from "@/components/Header";

const jersey20 = localFont({
  src: '../public/fonts/Jersey20-Regular.ttf', 
  variable: '--font-jersey',  
});

export const metadata = {
  title: "Dead Man Hand",
  description: "Are You Playing the Game, or is the Game Playing You?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`flex flex-col flex-grow ${jersey20.className}`}>
        {/* <Header /> */}
        <div className="container">{children}</div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
