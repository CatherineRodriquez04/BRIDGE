// Leaderboard Page

"use client"

import Link from "next/link";
import Image from "next/image";
import GameNavbar from "@/components/ui/game-navbar.jsx";
import LeaderboardDisplay from "@/components/ui/leaderboard-display.jsx";
import LeaderboardTopDisplay from "@/components/ui/leaderboard-top-display.jsx";

export default function Leaderboard() {
  return (
    <>
      <div className=" h-full min-h-screen w-screen flex fade-in bg-gradient-to-b from-accent to-accent2 overflow-hidden">

        <div className="top-6 right-[520px] absolute">
        <Link href="/leaderboard">
            <GameNavbar/>
        </Link>
        </div>
          {/* Leaderboard */}
          <div className="absolute flex justify-center items-center top-[125px] right-0 left-0 text-6xl z-10 ">
            Leaderboard
          </div>
          <LeaderboardTopDisplay/>     
          <LeaderboardDisplay/>
          
        </div>
    </>
  );
}