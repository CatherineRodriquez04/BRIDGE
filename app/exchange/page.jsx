// Exchange Page

"use client"

import Link from "next/link";
import Image from "next/image";

import GameNavbar from "@/components/ui/game-navbar.jsx";
import ExchangePoster from "@/components/ui/exchange-poster.jsx";

export default function Exchange() {
  return (
    <>
    <div className="top-6 right-[520px] absolute">
    <Link href="/exchange">
        <GameNavbar/>
    </Link>
    </div>
      <div className="max-w-8xl mx-auto fixed top-[160px] left-48 right-0 z-10">
        {/* Grid using Tailwind CSS */}
        <div className="grid grid-cols-12 gap-2.5 auto-rows-[325px]">
          {/* First 3 columns span 4 grid columns each */}
          <ExchangePoster/>

          <ExchangePoster/>

          <ExchangePoster/>

          {/* Second-to-last column - starts at row 2, spans from column 3 to 7 / larger */}
          <div className="col-start-3 col-span-4 row-start-2 h-[300px] w-[300px]">
          <img src={'/assets/mini-poster.svg'} width={300} height={300} alt="Exchange Sign"></img>

          </div>

          {/* Last column - starts at row 2, spans from column 7 to 11 */}
          <div className="col-start-7 col-span-4 row-start-2 h-[300px] w-[300px]">
            <img src={'/assets/mini-poster.svg'} width={300} height={300} alt="Exchange Sign"></img>
          </div>
        </div>
      </div>


    <div className="fixed bottom-0 right-16">
      <img src={'/assets/sign.svg'} width={300} height={300} alt="Exchange Sign"></img>
    </div>
    </>
    // <div className="h-screen flex justify-center items-center fade-in">
    //   <div className="flex flex-col">
    //     <p>ExchangePage</p>
    //   </div>
    // </div>
  );
}