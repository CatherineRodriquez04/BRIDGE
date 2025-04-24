"use client";

import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "@/lib/firebase";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

function Navbar() {
  const [coins, setCoins] = useState("");
  const [gems, setGems] = useState("");
  const [days, setDays] = useState("");

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
          setDays(data.days || "1");
        }
      }
    });
    return () => unsubscribe();
  }, []);

  function NavButton({ label, href, index }) {
    const isLeftSide = index < 6;
    return (
      <div className="relative h-[40px] w-[150px]">
        <div
          className={cn(
            "absolute inset-0 bg-[#0B0C2A] border-2 border-[#C8E3B8] rounded-lg transform origin-center",
            isLeftSide && "skew-x-[15deg]"
          )}
        ></div>
        <Link
          href={href}
          className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm uppercase tracking-wider z-10 hover:text-[#C8E3B8] transition-colors"
        >
          {label}
        </Link>
      </div>
    );
  }

  const navItems = [
    { label: "HOME", href: "/homescreen" },
    { label: "PACKS", href: "/packs" },
    { label: "SHOP", href: "/shop" },
    { label: "EXCHANGE", href: "/exchange" },
    { label: "COLLECTION", href: "/collection" },
    { label: "LEADERBOARD", href: "/leaderboard" },
  ];

  return (
    <>
      <nav className="fixed top-4 left-4 flex items-center gap-3 p-4">
        {navItems.map((item, index) => (
          <NavButton key={item.label} label={item.label} href={item.href} index={index} />
        ))}
      </nav>

      <div className="relative left-[20px] top-[5px]">
        <Link href="/task">
          <button
            type="button"
            className="h-[43px] w-[200%] flex items-center justify-center bg-[#0B0C2A] text-white hover:text-[#0B0C2A] border-[#C8E3B8] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-2xl border-2"
          >
            T.A.S.K
          </button>
        </Link>
      </div>

      <div className="fixed top-0 right-0 left-0 z-10">
        {/* Coins */}
        <div className="top-8 right-[270px] absolute">
          <p className="h-10 w-38 pl-[80px] pr-[45px] text-[20px] rounded-lg border border-[#C8E3B8] text-white bg-[#382966] flex items-center">
            {coins}
          </p>
          <img src="/assets/icon-coin.svg" width={25} height={25} alt="Coins" className="absolute left-2 top-2" />
          <Link href="/exchange">
            <div className="h-6 w-6 bg-[#C8E3B8] hover:scale-105 absolute right-2 top-2 rounded-sm flex items-center justify-center">
              <p className="text-2xl text-black font-bold">+</p>
            </div>
          </Link>
        </div>

        {/* Gems */}
        <div className="top-8 right-[109px] absolute">
          <p className="h-10 w-38 pl-[80px] pr-[45px] text-[20px] rounded-lg border border-[#C8E3B8] text-white bg-[#382966] flex items-center">
            {gems}
          </p>
          <img src="/assets/icon-gem.svg" width={25} height={25} alt="Gems" className="absolute left-2 top-[11px]" />
          <Link href="/exchange">
            <div className="h-6 w-6 bg-[#C8E3B8] hover:scale-105 absolute right-2 top-2 rounded-sm flex items-center justify-center">
              <p className="text-2xl text-black font-bold">+</p>
            </div>
          </Link>
        </div>

        {/* Day Display */}
        <div className="absolute h-20 w-20 top-2 right-[15px] flex items-center justify-center text-[32px] font-semibold leading-none">
          <div className="z-10 text-black text-center">
            Day
            <div>{days}</div>
          </div>
          <img src="/assets/paper-mini-poster.svg" width={300} height={300} alt="Day Poster" className="absolute -z-1" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
