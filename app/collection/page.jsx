// Collection Page

"use client"

import Link from "next/link";
import Image from "next/image";

import Card from "../../components/ui/card.jsx"; // Import the Card component

export default function Collection() {
  return (
    <div className="h-screen flex justify-center items-center fade-in">
      <div className="flex flex-col">
        <p>Collection Page</p>
        <Card/>
      </div>
    </div>
  );
}