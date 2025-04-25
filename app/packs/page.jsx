//Packs Page

"use client"

import Link from "next/link";
import { useState } from "react";
import { useMemo } from "react";


//import Poster from "/assets/poster.png";

import GameNavbar from "@/components/ui/game-navbar.jsx";

import PackOpenCarousel from "@/components/ui/pack-open-carousel.jsx";

const cardPack = [
  {id: "1"},
  {id: "2"},
  {id: "3"},
  {id: "4"},
  {id: "5"},
]

function getRandomId() {
  const num = Math.floor(Math.random() * 18) + 1; // 1–18
  return num < 10 ? `0${num}` : `${num}`; // pad with leading zero
}

export default function Packs() {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false); //pack psin opening animation

  const [animatingPack, setAnimatingPack] = useState(null);

  

  const randomCardIds = useMemo(() => Array.from({ length: 5 }, () => getRandomId()), []);
  


  return (
    <>
      <div className="h-screen w-screen flex fade-in bg-gradient-to-b from-accent to-accent2 relative overflow-none">{/*  (for some reason, breaks styling / placement of cards*/}
        
        <div className="top-6 right-[520px] absolute">
          <Link href="/packs">
              <GameNavbar/>
          </Link>
        </div>

      <div className="relative top-[12%] text-6xl left-[58%]">
            Packs
      </div>
      {/* Conditionally render when opening a pack */}
      <PackOpenCarousel cards={cardPack} isOpen={isCarouselOpen} onClose={() => setIsCarouselOpen(false)} />


      <div className="flex items-center h-screen fade-in">
          {/* Poster New Char Display (make component?)*/}
          <div className="fixed w-[28%] h-full -z-1 left-[6%] top-[15%]">
            <img src={'/assets/limited-paper-poster.svg'} width={500} height={600} alt="Poster" className="-z-1"></img>
            <img src={'/assets/limited-image-lean.svg'} width={380} height={430} alt="Poster" className="z-20 absolute top-[195px] left-[65px]"></img>

            {/* <button type="button" className="flex items-center text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-10 mx-auto border-2"></button> */}
            <Link href="/shop">

            <button
                type="button"
                className="absolute w-[40%] left-[30%] flex items-center justify-center bg-[#0B0C2A] text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-4xl px-5 py-1.5 mt-4 border-4">
              Go to Shop
              </button>

            </Link>
              {/* <div className="absolute h-[370px] w-[320px] skew-x-6 inset-0 transform origin-center  top-[48%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-4 border-[#5E4112] text-center text-white text-4xl font-bold ">

              </div>  Inner box for char image in limited*/}
          </div>

        
        <div className="flex m-auto w-[20%] items-center">
          {/* Packs Display */}
            <div className="flex space-x-8 top-[30%] absolute right-[10%]">
              {/* 1st pack */}
              <div className="absolute bottom-[17%] -left-6 text-4xl">
                  Buy 1
              </div>
              <div className="absolute bottom-[2%] -left-16 text-4xl">
                  Buy 10
              </div>
              <div className="flip-card">   
                  <img src="/assets/standard-pack.svg" height={400} width={260} alt="Temp-Card-Pack-1" className={`w-[280px] flip-pack-inner ${animatingPack === 'pack1' ? 'animate-spin' : ''}`} />
                  <button type="button" onClick={() => { setAnimatingPack('pack1'); setTimeout(() => setAnimatingPack(null), 800); setTimeout(() => setIsCarouselOpen(true), 900); }} className="flex items-center bg-[#0B0C2A] text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-xl px-5 py-2.5 text-center mt-10 mx-auto border-2">
                  <img src="/assets/icon-coin.svg" width={25} height={25} alt="Coins" className="inline-block mr-2"/>
                      100 Coins
                  </button>
                  <button type="button" onClick={() => { setAnimatingPack('pack1'); setTimeout(() => setAnimatingPack(null), 800); setTimeout(() => setIsCarouselOpen(true), 900); }}  className="flex items-center bg-[#0B0C2A] text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-xl px-5 py-2.5 text-center mt-8 mx-auto border-2">
                      <img src="/assets/icon-coin.svg" width={25} height={25} alt="Coins" className="inline-block mr-2"/>
                      750 Coins
                  </button>
              </div>
              {/* Add buttons below */}
              {/* 2nd pack */}
              <div className="relative bottom-4 flip-card">
                  <img src="/assets/medium-pack.svg" height={400} width={260} alt="Temp-Card-Pack-2" id="pack2"className={`w-[280px] flip-pack-inner ${animatingPack === 'pack2' ? 'animate-spin' : ''}`}></img>
                      <div className="ml-2">
                          <button type="button" onClick={() => { setAnimatingPack('pack2'); setTimeout(() => setAnimatingPack(null), 800); setTimeout(() => setIsCarouselOpen(true), 900); }} className="items-center bg-[#0B0C2A] text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-xl px-4 py-2.5 text-center mt-10 mr-2 border-2">
                              <img src="/assets/icon-coin.svg" width={25} height={25} alt="Coins" className="inline-block mr-2"/>
                              500 coins
                              </button>
                          <button type="button" onClick={() => { setAnimatingPack('pack2'); setTimeout(() => setAnimatingPack(null), 800); setTimeout(() => setIsCarouselOpen(true), 900); }} className="items-center bg-[#0B0C2A] text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-xl px-4 py-2.5 text-center mt-10 border-2">
                              <img src="/assets/icon-gem.svg" width={25} height={25} alt="Gem" className="inline-block mr-2"/>
                              150 Gems
                          </button>
                      </div>
                      <div className="">
                          <button type="button" onClick={() => { setAnimatingPack('pack2'); setTimeout(() => setAnimatingPack(null), 800); setTimeout(() => setIsCarouselOpen(true), 900); }} className="items-center bg-[#0B0C2A] text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-xl px-4 py-2.5 text-center mt-10 mr-2 border-2">
                              <img src="/assets/icon-coin.svg" width={25} height={25} alt="Coins" className="inline-block mr-2"/>
                              2500 coins</button>
                          <button type="button" onClick={() => { setAnimatingPack('pack2'); setTimeout(() => setAnimatingPack(null), 800); setTimeout(() => setIsCarouselOpen(true), 900); }} className="items-center bg-[#0B0C2A] text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-xl px-5 py-2.5 text-center mt-10  border-2">
                              <img src="/assets/icon-gem.svg" width={25} height={25} alt="Gem" className="inline-block mr-2"/>
                              450 gems</button>
                      </div>
                      </div>

              {/* 3rd pack */}
              <div className="flip-card">
                  <img src="/assets/premium-pack.svg" height={400} width={260} alt="Temp-Card-Pack-3" id="pack3" className={`w-[280px] flip-pack-inner ${animatingPack === 'pack3' ? 'animate-spin' : ''}`}></img>
                  <button type="button" onClick={() => { setAnimatingPack('pack3'); setTimeout(() => setAnimatingPack(null), 800); setTimeout(() => setIsCarouselOpen(true), 900); }} className="flex items-center bg-[#0B0C2A] text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-xl px-5 py-2.5 text-center mt-10 mx-auto border-2">
                      <img src="/assets/icon-gem.svg" width={25} height={25} alt="Gem" className="inline-block mr-2"/>
                      600 gems
                  </button>
                  <button type="button" onClick={() => { setAnimatingPack('pack3'); setTimeout(() => setAnimatingPack(null), 800); setTimeout(() => setIsCarouselOpen(true), 900); }} className="flex items-center bg-[#0B0C2A] text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-xl px-5 py-2.5 text-center mt-8 mx-auto border-2">
                      <img src="/assets/icon-gem.svg" width={25} height={25} alt="Gem" className="inline-block mr-2"/>                    
                      1200 gems
                  </button>
              </div>
          </div>
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