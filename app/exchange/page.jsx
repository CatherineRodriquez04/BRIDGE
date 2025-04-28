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
          <Link href="/exchange">
              <GameNavbar/>
          </Link>
        </div>
        <div className="fixed top-[9%] text-6xl left-[43%]">
            Exchange
        </div>
          <ExchangeDisplay/>

        <div className="absolute bottom-0 right-16 ">
          <div className=" h-[53px] w-[160px] top-[275px] relative z-10 m-auto text-[#13122A] text-4xl bold flex justify-center  ">
            Conversion
          </div>
          <div className="">
              {/* Coin */}
              <div className=" h-[60%] w-[150px] top-[280px] left-[30px] relative z-10 text-[#13122A] text-3xl bold ">
                <img src={'/assets/coins-bundle.svg'} width={90} height={90} alt="Exchange Sign Coins" className=""></img>
              </div>
              {/* Arrow Left -> Right  */}
              <div className=" h-[60px] w-[150px] top-[205px] left-[125px] relative z-10 text-[#13122A] text-3xl bold ">
                <img src={'/assets/exchange-arrow.svg'} width={80} height={80} alt="Exchange Sign Gems" className=""></img>
              </div>
              
              {/* Gem */}
              <div className=" h-[60px] w-[150px] top-[138px] left-[190px] relative z-10 text-[#13122A] text-3xl bold ">
                <img src={'/assets/single-gem.svg'} width={90} height={90} alt="Exchange Sign Gems" className=""></img>
              </div>
              {/* Convert button (transfer ## gold -> gems (CHange amount each day (advertise)) */}
              {/* Convert Currency Button */}
              <div className="absolute top-[71%] left-[24%]">
              <button className="absolute h-[60px] w-[160px] flex items-center justify-center left-[19%] top-[120%] bg-[#A67C4E] border-[#5E4112] font-medium rounded-lg text-3xl px-5 py-4 border-[5px] text-black transition active:scale-95 z-50">
                Convert
              </button>
            </div>
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