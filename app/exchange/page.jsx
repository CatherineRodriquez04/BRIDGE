// Exchange Page

"use client"

import Link from "next/link";
import Image from "next/image";

import GameNavbar from "@/components/ui/game-navbar.jsx";
import ExchangeDisplay from "@/components/ui/exchange-display.jsx";

export default function Exchange() {
  return (
    <>
    <div className="h-screen w-screen flex fade-in bg-gradient-to-b from-accent to-accent2 relative">
      <div className="h-screen w-screen flex fade-in bg-gradient-to-b from-accent to-accent2 relative"></div>
        <div className="top-6 right-[520px] absolute">
          <Link href="/exchange">
              <GameNavbar/>
          </Link>
        </div>
          <ExchangeDisplay/>

        <div className="absolute bottom-0 right-16 ">
          <div className=" h-[53px] w-[160px] top-[150px] relative z-10 m-auto text-[#13122A] text-4xl bold flex justify-center  ">
            Conversion
          </div>
          <div className=" h-[60px] w-[150px] top-[170px] relative z-10 text-[#13122A] text-3xl bold flex justify-center">
            <img src={'/assets/icon-coin.svg'} width={100} height={100} alt="Exchange Sign" className=""></img>
          </div>
{/* 
          <div className="bg-red-500 h-[53px] w-[160px] top-[170px] relative z-10 m-auto text-[#13122A] text-3xl bold flex justify-center">
            <img src={'/assets/icon-coin.svg'} width={300} height={300} alt="Exchange Sign" className=""></img>
          </div>  */}
          <img src={'/assets/wood-sign.svg'} width={300} height={300} alt="Exchange Sign" className="-z-1"></img> {/*Can Swap with sign.svg for bright version  */}
          
        </div>
    </div>
    </>

  );
}