//Packs Page

"use client"

import { usePlayer } from "@/components/ui/PlayerContent";

import Link from "next/link";
import { useState, useEffect, useMemo } from "react";

// database
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

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


export default function Packs() {
  const { coins, gems, setCoins, setGems, userId } = usePlayer();
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [showNotEnoughModal, setShowNotEnoughModal] = useState(false);
  const [animatingPack, setAnimatingPack] = useState(null);

  const handlePurchase = async (cost, currency, packId) => {
    if (userId === null) return;

    if (currency === "coins") {
      if (coins >= cost) {
        const newCoins = coins - cost;
        setCoins(newCoins);
        await updateDoc(doc(db, "players", userId), { coins: newCoins });
        openPackAnimation(packId);
      } else {
        setShowNotEnoughModal(true);
      }
    } else if (currency === "gems") {
      if (gems >= cost) {
        const newGems = gems - cost;
        setGems(newGems);
        await updateDoc(doc(db, "players", userId), { gems: newGems });
        openPackAnimation(packId);
      } else {
        setShowNotEnoughModal(true);
      }
    }
  };

  const openPackAnimation = (packId) => {
    setAnimatingPack(packId);
    setTimeout(() => setAnimatingPack(null), 800);
    setTimeout(() => setIsCarouselOpen(true), 900);
  };
  return (
    <>
      <div className="h-screen w-screen flex fade-in bg-gradient-to-b from-accent to-accent2 relative overflow-none">{/*  (for some reason, breaks styling / placement of cards*/}
        
        <div className="top-6 right-[520px] absolute z-50">
          <Link href="/packs">
              <GameNavbar/>
          </Link>
        </div>

      <div className="relative top-[10.5%] text-7xl left-[61.5%]">
            Packs
      </div>
      <div className=" absolute top-[18%] right-[31.3%] z-20 text-white text-4xl">
              Limit {}#/5 {/*daily battle limit to be insterted here      */}
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
            <div className="flex space-x-8 top-[25%] absolute right-[10%]">
              {/* 1st pack */}
              <div className="absolute bottom-[18.3%] -left-[2.4%] text-4xl">
                  Buy 1
              </div>
              <div className="absolute bottom-[4.9%] -left-[6%] text-4xl">
                  Buy 3
              </div>
              <div className="flip-card">   
                  <img src="/assets/standard-pack.svg" height={400} width={260} alt="Card-Pack-1" className={`w-[280px] flip-pack-inner ${animatingPack === 'pack1' ? 'animate-spin' : ''}`} />
                  {/* Wish display/ tracker */}
                    <div className="relative  flex justify-center mx-auto text-3xl top-4">
                      Wish:  3/5
                    </div>
                  {/* Purchase buttons */}
                  <button type="button" onClick={() => handlePurchase(100, "coins", "pack1")} className="flex items-center bg-[#0B0C2A] text-white hover:bg-[#C4F7BC] font-medium rounded-lg text-xl px-5 py-2.5 text-center mt-10 mx-auto border-2">
                      <img src="/assets/icon-coin.svg" width={25} height={25} alt="Coins" className="inline-block mr-2" />
                      100 Coins
                  </button>

                  <button type="button" onClick={() => handlePurchase(750, "coins", "pack1")} className="flex items-center bg-[#0B0C2A] text-white hover:bg-[#C4F7BC] font-medium rounded-lg text-xl px-5 py-2.5 text-center mt-8 mx-auto border-2">
                      <img src="/assets/icon-coin.svg" width={25} height={25} alt="Coins" className="inline-block mr-2" />
                      750 Coins
                  </button>
              </div>
              {/* 2nd pack */}
              <div className="relative bottom-4 flip-card left-3.5">
                  <img src="/assets/medium-pack.svg" height={400} width={260} alt="Card-Pack-2" id="pack2"className={`w-[280px] flip-pack-inner ${animatingPack === 'pack2' ? 'animate-spin' : ''}`}></img>
                      <div className="ml-2">
                        {/* Wish display/ tracker */}
                        <div className="relative flex justify-center mx-auto text-3xl top-4 -left-2">
                          Wish:  3/15
                        </div>
                  {/* Purchase buttons */}
                          <button type="button" onClick={() => handlePurchase(500, "coins", "pack2")} className="items-center bg-[#0B0C2A] text-white hover:bg-[#C4F7BC] font-medium rounded-lg text-xl px-4 py-2.5 text-center mt-10 mr-2 border-2">
                              <img src="/assets/icon-coin.svg" width={25} height={25} alt="Coins" className="inline-block mr-2" />
                              500 Coins
                          </button>

                          <button type="button" onClick={() => handlePurchase(150, "gems", "pack2")} className="items-center bg-[#0B0C2A] text-white hover:bg-[#C4F7BC] font-medium rounded-lg text-xl px-4 py-2.5 text-center mt-10 border-2">
                              <img src="/assets/icon-gem.svg" width={25} height={25} alt="Gem" className="inline-block mr-2" />
                              150 Gems
                          </button>
                      </div>
                      <div className="">
                          <button type="button" onClick={() => handlePurchase(2500, "coins", "pack2")} className="items-center bg-[#0B0C2A] text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-xl px-4 py-2.5 text-center mt-10 mr-2 border-2">
                              <img src="/assets/icon-coin.svg" width={25} height={25} alt="Coins" className="inline-block mr-2"/>
                              2500 coins</button>
                          <button type="button" onClick={() => handlePurchase(450, "gems", "pack2")} className="items-center bg-[#0B0C2A] text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-xl px-5 py-2.5 text-center mt-10  border-2">
                              <img src="/assets/icon-gem.svg" width={25} height={25} alt="Gem" className="inline-block mr-2"/>
                              450 gems</button>
                      </div>
                      </div>

              {/* 3rd pack */}
              <div className="flip-card">
                  <img src="/assets/premium-pack.svg" height={400} width={260} alt="Card-Pack-3" id="pack3" className={`w-[280px] flip-pack-inner ${animatingPack === 'pack3' ? 'animate-spin' : ''}`}></img>
                    {/* Wish display/ tracker */}
                    <div className="relative  flex justify-center mx-auto text-3xl top-4">
                      Wish:  3/10
                    </div>
                  {/* Purchase buttons */}
                  <button type="button" onClick={() => handlePurchase(600, "gems", "pack3")} className="flex items-center bg-[#0B0C2A] text-white hover:bg-[#C4F7BC] font-medium rounded-lg text-xl px-5 py-2.5 text-center mt-10 mx-auto border-2">
                      <img src="/assets/icon-gem.svg" width={25} height={25} alt="Gem" className="inline-block mr-2" />
                      600 Gems
                  </button>
                  <button type="button" onClick={() => handlePurchase(1200, "gems", "pack3")} className="flex items-center bg-[#0B0C2A] text-white hover:bg-[#C4F7BC] font-medium rounded-lg text-xl px-5 py-2.5 text-center mt-8 mx-auto border-2">
                      <img src="/assets/icon-gem.svg" width={25} height={25} alt="Gem" className="inline-block mr-2" />
                      1200 Gems
                  </button>
              </div>
          </div>
        </div>

      </div>

      {/* Not Enough Money Modal */}
      {showNotEnoughModal && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg relative w-[400px]">
              <button className="absolute top-2 right-2 text-black text-3xl hover:text-red-500" onClick={() => setShowNotEnoughModal(false)}>
                ×
              </button>
              <p className="text-black text-3xl text-center">Not enough money available!</p>
            </div>
          </div>
        )}

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