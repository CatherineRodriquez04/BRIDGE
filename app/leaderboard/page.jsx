// Leaderboard Page

"use client"

import Link from "next/link";
import Image from "next/image";
import GameNavbar from "@/components/ui/game-navbar.jsx";

export default function Leaderboard() {
  return (
    <>
      <div className="top-6 right-[520px] absolute">
      <Link href="/leaderboard">
          <GameNavbar/>
      </Link>
      </div>
    </>
  );
}