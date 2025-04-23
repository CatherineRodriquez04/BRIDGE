//Packs Page

"use client"

import Link from "next/link";

//import Poster from "/assets/poster.png";

import GameNavbar from "@/components/ui/game-navbar.jsx";

import PacksDisplay from "@/components/ui/packs-display.jsx";


export default function Packs() {
  return (
    <>
          <div className="h-screen w-screen flex fade-in bg-gradient-to-b from-accent to-accent2 relative">{/*  (for some reason, breaks styling / placement of cards*/}

      <div className="top-6 right-[520px] absolute">
      <Link href="/packs">
          <GameNavbar/>
      </Link>
      </div>

      <div className="flex items-center h-screen fade-in">
          {/* Poster New Char Display (make component?)*/}
          <div className="fixed w-[28%] h-full -z-1 left-[6%] top-[15%]">
            <img src={'/assets/limited-paper-poster.svg'} width={500} height={600} alt="Poster" className="-z-1"></img>
            <img src={'/assets/limited-image-lean.svg'} width={380} height={430} alt="Poster" className="z-20 absolute top-[195px] left-[65px]"></img>

            {/* <button type="button" className="flex items-center text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-10 mx-auto border-2"></button> */}
            <Link href="/shop">

            <button
                type="button"
                className="absolute w-[40%] left-[30%] flex items-center justify-center bg-[#0B0C2A] text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-4xl px-5 py-1.5 mt-8 border-4">
              Go to Shop
              </button>

            </Link>
              {/* <div className="absolute h-[370px] w-[320px] skew-x-6 inset-0 transform origin-center  top-[48%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-4 border-[#5E4112] text-center text-white text-4xl font-bold ">

              </div>  Inner box for char image in limited*/}
          </div>
        <div className="flex m-auto w-[20%] items-center">
          <PacksDisplay/>
        </div>

      </div>
      </div> 
    </>
  );
}

//Original darrk poster large
// <div className="fixed w-[30%] h-full -z-1 left-24 top-28">
// <img src={'/assets/poster-2.svg'} width={1000} height={1000} alt="Poster"></img>
// </div>

// Limited Paper Poster Option
// <div className="fixed w-[28%] h-full -z-1 left-[6%] top-[15%]">
// <img src={'/assets/limited-paper-poster.svg'} width={8000} height={800} alt="Poster"></img>
// </div>