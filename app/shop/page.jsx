// Shop Page

"use client"

import Link from "next/link";
import Image from "next/image";

import Poster from "@/public/assets/poster.png";

import GameNavbar from "@/components/ui/game-navbar.jsx";

import PacksDisplay from "@/components/ui/packs-display.jsx";


export default function Shop() {
  return (
    <>
      <div className="top-6 right-[520px] absolute">
      <Link href="/collection">
          <GameNavbar/>
      </Link>
      </div>
      
      <div className="h-screen flex justify-center items-center fade-in">
        <PacksDisplay/>
        <div className="flex flex-col">
          <p>Shop Page</p>
        </div>
      </div>
    </>
  );
}