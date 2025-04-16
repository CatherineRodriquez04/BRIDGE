//Packs Page

"use client"

import Link from "next/link";

//import Poster from "/assets/poster.png";

import GameNavbar from "@/components/ui/game-navbar.jsx";
import CardSelectDisplay from "@/components/ui/card-select-display.jsx"
import CardSelectGrid from "@/components/ui/card-select-grid.jsx"



function ChooseDeck() {
  return (
    <>
      <div className="h-screen w-screen flex fade-in bg-gradient-to-b from-accent to-accent2 relative overscroll-y-none">{/*  (for some reason, breaks styling / placement of cards*/}
        {/* Hide Navbar during gameplay setup? */}
        {/* <div className="top-6 right-[520px] absolute">
          <Link href="/choose-deck">
              <GameNavbar/>
          </Link>
        </div> */}

        <CardSelectDisplay/>
        {/* <div className="flex mx-auto items-center text-3xl">
            Choose Deck Page
        </div> */}
        

      </div> 
    </>
  )
}
  export default ChooseDeck