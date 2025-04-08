//Packs Page

"use client"

import Link from "next/link";

//import Poster from "/assets/poster.png";

import GameNavbar from "@/components/ui/game-navbar.jsx";

import PacksDisplay from "@/components/ui/packs-display.jsx";


export default function Packs() {
  return (
    <>
      <div className="top-6 right-[520px] absolute">
      <Link href="/packs">
          <GameNavbar/>
      </Link>
      </div>
      <div className="flex items-center h-screen fade-in">
          {/* Poster New Char Display (make component?)*/}
          <div className="flex flex-items-center w-[480px] h-full z-1 mr-8">
              <img src={'/assets/poster-2.svg'} width={1000} height={1000} alt="Poster"></img>
          </div>
        <div className="flex">
          <PacksDisplay/>
        </div>

      </div>
    </>
  );
}