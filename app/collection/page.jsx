// Collection Page

"use client"

import Link from "next/link";
import Image from "next/image";
import GameNavbar from "@/components/ui/game-navbar.jsx";

export default function Collection() {
  return (
    <>
      <div className="top-6 right-[520px] absolute">
      <Link href="/collection">
          <GameNavbar/>
      </Link>
      </div>
    </>
  );
}