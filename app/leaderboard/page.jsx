// Leaderboard Page

"use client"

import Link from "next/link";
import Image from "next/image";
import GameNavbar from "@/components/ui/game-navbar.jsx";

export default function Leaderboard() {
  return (
    <>
      <div className="h-screen w-screen flex fade-in bg-gradient-to-b from-accent to-accent2 relative">

        <div className="top-6 right-[520px] absolute">
        <Link href="/leaderboard">
            <GameNavbar/>
        </Link>
        </div>
      </div>
    </>
  );
}