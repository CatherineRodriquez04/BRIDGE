"use client";

import { useMemo, useState } from "react";
import Card from "@/components/ui/card.jsx";
import { usePlayer } from "@/components/ui/PlayerContent";

// firebase
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

function getRandomId() {
  const num = Math.floor(Math.random() * 18) + 1; // 1–18
  return num < 10 ? `0${num}` : `${num}`; // pad with leading zero
}

function ShopDisplay() {
  const { coins, setCoins, userId } = usePlayer();
  const [showNotEnoughModal, setShowNotEnoughModal] = useState(false);

  const randomCardIds = useMemo(() => Array.from({ length: 5 }, () => getRandomId()), []);

  const handlePurchase = async (cost, currency, cardID) => {
    if (!userId) return;

    if (currency === "coins") {
      if (coins >= cost) {
        const newCoins = coins - cost;
        setCoins(newCoins);

        const playerRef = doc(db, "players", userId);
        const playerSnap = await getDoc(playerRef);

        if (playerSnap.exists()) {
          const playerData = playerSnap.data();
          const currentCards = playerData.characterCards || {};

          // Add or increment the card
          const updatedCards = {
            ...currentCards,
            [cardID]: (currentCards[cardID] || 0) + 1,
          };

          await updateDoc(playerRef, {
            coins: newCoins,
            characterCards: updatedCards,
          });

          //console.log(`Purchased card ${cardID} successfully!`);
        }
      } else {
        setShowNotEnoughModal(true);
      }
    }
  };

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
              
              <button
                onClick={() => handlePurchase(300, "coins", cardId)}
                className="absolute w-[60%] flex items-center justify-center left-[19%] top-[120%] rotate-[3deg] bg-[#C9B080] border-[#A67C4E] font-medium rounded-lg text-2xl px-5 py-2 mt-4 border-[7px] text-white transition active:scale-95 z-50"
              >
                <img src="/assets/icon-coin.svg" width={25} height={25} alt="Coins" className="inline-block mr-3" />
                300 coins
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Not Enough Money Modal */}
      {showNotEnoughModal && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg relative w-[400px]">
              <button className="absolute top-2 right-2 text-black text-3xl hover:text-red-500" onClick={() => setShowNotEnoughModal(false)}>
                ×
              </button>
              <p className="text-black text-3xl text-center">Not enough coins available!</p>
            </div>
          </div>
        )}
    </>
  );
}

export default ShopDisplay;


// Button Gem icon
{/* <img src="/assets/icon-gem.svg" width={25} height={25} alt="Gem" className="inline-block mr-2"/> */}
//Button Coin Icon
{/* <img src="/assets/icon-coin.svg" width={25} height={25} alt="Coins" className="inline-block mr-2"/> */}
