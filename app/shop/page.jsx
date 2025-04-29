// Shop Page

"use client"

import Link from "next/link";
import Image from "next/image";

import GameNavbar from "@/components/ui/game-navbar.jsx";
import ShopDisplay from "@/components/ui/shop-display.jsx";

function Shop() {
  return (
    <>
      <div className="h-screen w-screen flex fade-in bg-gradient-to-b from-accent to-accent2 relative">

        <div className="top-6 right-[520px] absolute z-40">
        <Link href="/shop">
            <GameNavbar/>
        </Link>

        <div className="fixed top-[10%] text-7xl left-[46.7%]">
            Shop
        </div>
        <div className="fixed top-[19%] right-[46.5%] text-white text-4xl">
              Limit {}#/5 {/*daily battle limit to be insterted here      */}
        </div>

          <ShopDisplay/>
        </div>
      </div>
    </>
  );
}

export default Shop