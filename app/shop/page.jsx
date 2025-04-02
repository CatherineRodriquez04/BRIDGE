// Shop Page

"use client"

import Link from "next/link";
import Image from "next/image";

import PacksDisplay from "@/components/ui/packs-display.jsx";


export default function Shop() {
  return (
    <div className="h-screen flex justify-center items-center fade-in">
      <PacksDisplay/>
      <div className="flex flex-col">
        <p>Shop Page</p>
      </div>
    </div>
  );
}