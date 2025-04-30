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


    </div>
    </>

  );
}