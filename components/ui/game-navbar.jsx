"use client"

import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "@/lib/firebase";

import { useEffect, useState } from "react";

import Link from "next/link"
import { cn } from "@/lib/utils"

// Simple navbar component with no props
function Navbar() {
  const [coins, setCoins] = useState("");
  const [gems, setGems] = useState("");

  useEffect(() => {
          const auth = getAuth();
      
          const unsubscribe = onAuthStateChanged(auth, async (user) => {
          if (user) {
              const docRef = doc(db, "players", user.uid);
              const docSnap = await getDoc(docRef);
              if (docSnap.exists()) {
              const data = docSnap.data();
              setCoins(data.coins || "");
              setGems(data.gems || "");
              }
          }
        });
      
          return () => unsubscribe();
      }, []);

  // Internal function for nav buttons
  function NavButton({ label, href, index, total }) {
    // Determine which skew direction to use based on position
    const isLeftSide = index < 6 // HOME, PACKS, SHOP are left-side buttons
    //const isRightSide = index >= 4 // EXCHANGE, COLLECTION, LEADERBOARD are right-side buttons
    //const isMiddle = index < 3 && index > 4

    return (
      <>
        <div className="relative h-[40px] w-[150px]">
          {/* Background shape with appropriate skew */}
          <div
            className={cn(
              "absolute inset-0 bg-[#0B0C2A] border-2 border-[#C8E3B8] rounded-lg transform origin-center",
              isLeftSide && "skew-x-[15deg]",
              //isRightSide && "-skew-x-[15deg]", // EXCHANGE now uses the same skew as COLLECTION and LEADERBOARD
              // isMiddle && "skew-x-6",
              //skew-x-[15deg]
            )}
          >
          </div>

          {/* Link text */}
          <Link
            href={href}
            className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm uppercase tracking-wider z-10 hover:text-[#C8E3B8] transition-colors"
          >
            {label}
          </Link>
        </div>
      </>
    )
  }

  // Hardcoded navigation items
  const navItems = [
    { label: "HOME", href: "/homescreen" },
    { label: "PACKS", href: "/packs" },
    { label: "SHOP", href: "/shop" },
    { label: "EXCHANGE", href: "/exchange" },
    { label: "COLLECTION", href: "/collection" },
    { label: "LEADERBOARD", href: "/leaderboard" },
  ]

  return (
    <>
      <nav className="fixed top-4 left-4 flex items-center gap-3 p-4">
        {navItems.map((item, index) => (
          <NavButton key={item.label} label={item.label} href={item.href} index={index} total={navItems.length} />
        ))}
      </nav>
      
      <div className="relative left-[20px] top-[5px]">
        <Link href="/task">
        <button type="button" className="h-[43px] w-[200%] flex items-center justify-center bg-[#0B0C2A] text-white hover:text-[#0B0C2A] border-[#C8E3B8] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-2xl border-2">T.A.S.K</button>
        </Link>
      </div>

      <div className="fixed top-0 right-0 left-0 z-10">
        {/* Money button */}
        <div className="top-8 right-[225px] absolute">
          <p className="h-10 w-38 pl-[80px] pr-[45px] text-[20px] rounded-lg border border-[#C8E3B8] text-white bg-[#382966] flex items-center ">
            {coins}
            <img
              src={"/assets/icon-coin.svg"}
              width={25}
              height={25}
              alt="Deadman's Logo"
              className="inline-block left-2 top-2 absolute"
            ></img>
            <Link href="/exchange">
              <button className="h-6 w-6 bg-[#C8E3B8] hover:scale-105 absolute right-2 top-2 rounded-sm">
                <p className="relative text-4xl text-black font-bold bottom-2 left-[1px]">+</p>
              </button>
            </Link>
          </p>
        </div>
        {/* Gem button */}
        <div className="top-8 right-[35px] absolute">
          <p className="h-10 w-38 pl-[80px] pr-[45px] text-[20px] rounded-lg border border-[#C8E3B8] text-white bg-[#382966] flex items-center ">
            {gems}
            <img
              src={"/assets/icon-gem.svg"}
              width={25}
              height={25}
              alt="Deadman's Logo"
              className="inline-block left-2.5 top-[12px] absolute"
            ></img>
            <Link href="/exchange">
            <button className="h-6 w-6 bg-[#C8E3B8] hover:scale-105 absolute right-2 top-2 rounded-sm">
              <p className="relative text-4xl text-black font-bold bottom-2 left-[1px]">+</p>
            </button>
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Navbar

