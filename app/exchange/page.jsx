// Exchange Page

"use client"

import Link from "next/link";
import Image from "next/image";

import GameNavbar from "@/components/ui/game-navbar.jsx";
import ExchangePosters from "@/components/ui/exchange-posters.jsx";

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
          <ExchangePosters/>


        <div className="fixed bottom-0 right-16">
          <img src={'/assets/sign.svg'} width={300} height={300} alt="Exchange Sign"></img>
        </div>
    </div>
    </>

  );
}