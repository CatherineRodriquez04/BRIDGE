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
        <div className="top-6 right-[520px] absolute z-50">
              <GameNavbar/>
        </div>
        <div className="fixed top-[9%] text-6xl left-[43%]">
            Exchange
        </div>
          <ExchangeDisplay/>

        <div className="absolute bottom-0 right-16 ">
          <div className=" h-[53px] w-[160px] top-[264px] relative z-10 m-auto text-[#13122A] text-4xl bold flex justify-center  ">
            Conversion
          </div>
          <div className="">
             
              {/* Gem */}
              <div className=" h-[60px] w-[150px]  top-[16.2rem] left-[20px] relative z-10 text-[#13122A] text-3xl bold ">
                <img src={'/assets/single-gem.svg'} width={90} height={90} alt="Exchange Sign Gems" className=""></img>
                <p className="absolute text-white bottom-[35px] left-[25px]">100</p>
              </div>
              {/* Arrow Left -> Right  */}
              <div className=" h-[60px] w-[150px] top-[205px] left-[105px] relative z-10 text-[#13122A] text-3xl bold ">
                <img src={'/assets/exchange-arrow.svg'} width={80} height={80} alt="Exchange Sign Gems" className=""></img>
              </div>
              
              {/* Coin */}
              <div className=" h-[60%] w-[150px] top-[10.1rem] left-[190px] relative z-10 text-[#13122A] text-3xl bold ">
                <img src={'/assets/coins-bundle.svg'} width={90} height={90} alt="Exchange Sign Coins" className=""></img>
                <p className="absolute text-white bottom-[50px] right-[85px]">1000</p>

              </div>
          </div>
          <img src={'/assets/wood-sign.svg'} width={300} height={300} alt="Exchange Sign" className="-z-1"></img> {/*Can Swap with sign.svg for bright version  */}
          
        </div>
    </div>
    </>

  );
}