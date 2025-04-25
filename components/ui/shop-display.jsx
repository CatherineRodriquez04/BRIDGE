"use client";

import { useMemo } from "react";
import Card from "@/components/ui/card.jsx";

function getRandomId() {
  const num = Math.floor(Math.random() * 18) + 1; // 1–18
  return num < 10 ? `0${num}` : `${num}`; // pad with leading zero
}

function ShopDisplay() {
  // generate 5 random IDs once
  const randomCardIds = useMemo(() => Array.from({ length: 5 }, () => getRandomId()), []);

  return (
    <>
      <div className="max-w-[100%] w-[100%] mx-auto fixed top-[15%] left-44 right-0 z-10">
        <div className="grid grid-cols-12 gap-3 auto-rows-[50%]">
          {randomCardIds.map((cardId, index) => (
            <div
              key={index}
              className={`relative col-span-4 h-[300px] w-[300px] ${
                index < 2 ? `col-start-${index === 0 ? 3 : 7}` : 'row-start-2'
              }`}
            >
              <div className="absolute h-full w-full flex justify-center mx-auto z-10">
                <Card cardId={cardId} />
              </div>
              <div className="relative h-[40px] w-[100%] top-[360px] rounded-md bg-[#957046] m-auto z-40" />
              {/* <button
                type="button"
                className="absolute w-[60%] flex items-center justify-center left-[19%] top-[120%] text-black  bg-[#C9B080] hover:text-white border-[#A67C4E] hover:border-[#A67C4E] hover:bg-[#A67C4E] active:ring-2 active:ring-[#A67C4E] active:outline-none font-medium rounded-lg text-2xl px-5 py-2 mt-4 border-[7px] z-50"
              >
                <img src="/assets/icon-coin.svg" width={25} height={25} alt="Coins" className="inline-block mr-3"/>
                300 coins
              </button> */}
              <button class="absolute w-[60%] flex items-center justify-center left-[19%] top-[120%] rotate-[3deg]  bg-[#C9B080] border-[#A67C4E]  font-medium rounded-lg text-2xl px-5 py-2 mt-4 border-[7px]  text-white  transition active:scale-95 z-50">
                <img src="/assets/icon-coin.svg" width={25} height={25} alt="Coins" className="inline-block mr-3"/>
                300 coins
              </button>

            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ShopDisplay;

// Button Gem icon
{/* <img src="/assets/icon-gem.svg" width={25} height={25} alt="Gem" className="inline-block mr-2"/> */}
//Button Coin Icon
{/* <img src="/assets/icon-coin.svg" width={25} height={25} alt="Coins" className="inline-block mr-2"/> */}
