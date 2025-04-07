// Exchange Page

"use client"

import Link from "next/link";
import Image from "next/image";

import GameNavbar from "@/components/ui/game-navbar.jsx";

export default function Exchange() {
  return (
    <>
    <div className="top-6 right-[520px] absolute">
    <Link href="/exchange">
        <GameNavbar/>
    </Link>
    </div>
    </>
    // <div className="h-screen flex justify-center items-center fade-in">
    //   <div className="flex flex-col">
    //     <p>ExchangePage</p>
    //   </div>
    // </div>
  );
}