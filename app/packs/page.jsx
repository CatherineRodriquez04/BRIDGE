//Packs Page

"use client"

import Link from "next/link";

//import Poster from "/assets/poster.png";

import GameNavbar from "@/components/ui/game-navbar.jsx";

import PacksDisplay from "@/components/ui/packs-display.jsx";


export default function Packs() {
  return (
    <>
          <div className="h-screen w-screen flex fade-in bg-gradient-to-b from-accent to-accent2 relative">{/*  (for some reason, breaks styling / placement of cards*/}

      <div className="top-6 right-[520px] absolute">
      <Link href="/packs">
          <GameNavbar/>
      </Link>
      </div>

      <div className="flex items-center h-screen fade-in">
          {/* Poster New Char Display (make component?)*/}
          <div className="fixed w-[28%] h-full -z-1 left-[6%] top-[15%]">
            <img src={'/assets/limited-paper-poster.svg'} width={8000} height={800} alt="Poster"></img>
          </div>
        <div className="flex m-auto w-[20%] items-center">
          <PacksDisplay/>
        </div>

      </div>
      </div> 
    </>
  );
}

//Original darrk poster large
// <div className="fixed w-[30%] h-full -z-1 left-24 top-28">
// <img src={'/assets/poster-2.svg'} width={1000} height={1000} alt="Poster"></img>
// </div>

// Limited Paper Poster Option
// <div className="fixed w-[28%] h-full -z-1 left-[6%] top-[15%]">
// <img src={'/assets/limited-paper-poster.svg'} width={8000} height={800} alt="Poster"></img>
// </div>