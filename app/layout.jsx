/** @format */

import "./globals.css";
import localFont from 'next/font/local';

const jersey20 = localFont({
  src: '../public/fonts/Jersey20-Regular.ttf', 
  variable: '--font-jersey',  
});

//Not Using ATM
const tungsten = localFont({
  src: '../public/fonts/Tungsten.ttf', 
  variable: '--font-tungsten',  
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
        <div className="">{children}</div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
