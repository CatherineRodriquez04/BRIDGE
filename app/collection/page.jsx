// Collection Page

"use client"

import Link from "next/link";
import Image from "next/image";
import GameNavbar from "@/components/ui/game-navbar.jsx";
import CollectionDisplay from "@/components/ui/collection-display.jsx"

 function Collection() {
  return (
    <>
      <div className="h-full min-h-screen w-screen flex fade-in bg-gradient-to-b from-accent to-accent2 overflow-auto">
        {/* Navbar */}
        <div className="top-6 right-[520px] absolute">
          <Link href="/collection">
              <GameNavbar/>
          </Link>
        </div>
        <div className="absolute flex justify-center items-center top-[150px] right-0 left-0 text-6xl z-10 ">
            Collection
        </div>
            <CollectionDisplay/>
      </div>
    </>
  );
}

export default Collection