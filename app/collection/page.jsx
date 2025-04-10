// Collection Page

"use client"

import Link from "next/link";
import Image from "next/image";
import GameNavbar from "@/components/ui/game-navbar.jsx";
import CollectionDisplay from "@/components/ui/collection-display.jsx"

 function Collection() {
  return (
    <>
      <div className="h-screen w-screen flex fade-in bg-gradient-to-b from-accent to-accent2 relative">
        {/* Navbar */}
        <div className="top-6 right-[520px] absolute">
          <Link href="/collection">
              <GameNavbar/>
          </Link>
        </div>

        <CollectionDisplay/>
      </div>
    </>
  );
}

export default Collection