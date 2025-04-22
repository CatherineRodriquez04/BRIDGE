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
      <div className="max-w-[100%] mx-auto fixed top-[115px] left-48 right-0 z-10">
        <div className="grid grid-cols-12 gap-3 auto-rows-[325px]">
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
              <div className="relative h-[40px] w-[100] top-[330px] rounded-md bg-[#A67C4E] m-auto z-40" />
              <button
                type="button"
                className="absolute w-[45%] flex items-center justify-center left-[80px] top-[390px] text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-xl px-5 py-1.5 mt-2 mx-auto border-4"
              >
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
