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

        <div className="top-6 right-[520px] absolute">
        <Link href="/shop">
            <GameNavbar/>
        </Link>

        <div className="fixed top-[10%] text-6xl left-[47%]">
            Shop
        </div>

          <ShopDisplay/>
        </div>
      </div>
    </>
  );
}

export default Shop