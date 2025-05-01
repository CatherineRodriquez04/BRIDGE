"use client";

import { useMemo, useState, useEffect } from "react";
import Card from "@/components/ui/card.jsx";
import shopSold from "@/components/ui/shop-sold.jsx";
import { usePlayer } from "@/components/ui/PlayerContent";

// firebase
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, updateDoc, increment } from "firebase/firestore";
import { db } from "@/lib/firebase";

import ShopSold from "@/components/ui/shop-sold.jsx";

function getRandomId() {
  const num = Math.floor(Math.random() * 18) + 1;
  return num < 10 ? `0${num}` : `${num}`;
}

function ShopDisplay() {
  const [showNotEnoughModal, setShowNotEnoughModal] = useState(false);
  const [notEnoughMessage, setNotEnoughMessage] = useState("");

  const [shopCount, setShopCount] = useState(0);
  const [shopKey, setShopKey] = useState("");
  const [userId, setUserId] = useState(null);

  const [ownedCards, setOwnedCards] = useState({});


  const dayCardMap = {
    1: ["15", "11", "12", "07", "05"],
    2: ["14", "12", "10", "09", "03"],
    3: ["13", "11", "08", "04", "02"],
    4: ["10", "07", "06", "09", "01"],
    5: ["12", "08", "05", "04", "02"],
  };

  
  const { coins, setCoins, gems, setGems, days } = usePlayer();

  const cardIds = dayCardMap[days] || [];

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserId(user.uid);
        const docRef = doc(db, "players", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          const shopKey = `shopDay${days}`;
          setShopKey(shopKey);
          setShopCount(data[shopKey] || 0);
          setCoins(data.coins || 0);
          setGems(data.gems || 0);
          setOwnedCards(data.characterCards || {});
        }
      }
    });
    return () => unsubscribe();
  }, [days, setCoins, setGems]);

  const handlePurchase = async (cost, currency, cardID) => {
    if (!userId || !shopKey) return;

    if (shopCount >= 3) {
      setNotEnoughMessage("You've reached today's shop limit!");
      setShowNotEnoughModal(true);
      return;
    }

    const playerRef = doc(db, "players", userId);
    const playerSnap = await getDoc(playerRef);
    if (!playerSnap.exists()) return;

    const playerData = playerSnap.data();
    const currentCards = playerData.characterCards || {};
    if (currentCards[cardID]) {
      setNotEnoughMessage("You already own this card!");
      setShowNotEnoughModal(true);
      return;
    }

    // Handle coins
    if (currency === "coins") {
      if (coins < cost) {
        setNotEnoughMessage("Not enough coins available!");
        setShowNotEnoughModal(true);
        return;
      }
      const newCoins = coins - cost;
      setCoins(newCoins);
      await updateDoc(playerRef, { coins: newCoins });

      //track total coins spent track
      await updateDoc(doc(db, "players", userId), {
       totalCoinsSpent: increment(cost),
      });

    }

    // Handle gems
    if (currency === "gems") {
      if (gems < cost) {
        setNotEnoughMessage("Not enough gems available!");
        setShowNotEnoughModal(true);
        return;
      }
      const newGems = gems - cost;
      setGems(newGems);
      await updateDoc(playerRef, { gems: newGems });

      //track total gems spent track
      await updateDoc(doc(db, "players", userId), {
        totalGemsSpent: increment(cost),
       });
      
    }

    // Add or increment card in characterCards
    const updatedCards = {
      ...currentCards,
      [cardID]: (currentCards[cardID] || 0) + 1,
    };

    await updateDoc(playerRef, {
      characterCards: updatedCards,
      [shopKey]: shopCount + 1,
    });

    setOwnedCards((prev) => ({
      ...prev,
      [cardID]: 1,
    }));

    setShopCount(prev => prev + 1);
  };

  return (
    <>
      <div className="max-w-[100%] w-[100%] mx-auto fixed top-[15%] left-44 right-0">
        <div className="fixed top-[19%] right-[46.5%] text-white text-4xl">
          Limit {shopCount}/3
        </div>

        <div className="grid grid-cols-12 gap-3 auto-rows-[50%]">
        {cardIds.slice(0, 5).map((cardId, index) => {

            const priceConfig = [
              { cost: 250, currency: "coins", icon: "/assets/icon-coin.svg", label: "coins" },
              { cost: 500, currency: "coins", icon: "/assets/icon-coin.svg", label: "coins" },
              { cost: 750, currency: "coins", icon: "/assets/icon-coin.svg", label: "coins" },
              { cost: 350, currency: "gems", icon: "/assets/icon-gem.svg", label: "gems" },
              { cost: 600, currency: "gems", icon: "/assets/icon-gem.svg", label: "gems" },
            ];

            const { cost, currency, icon, label } = priceConfig[index];

            return (
              <div
                key={index}
                className={`relative col-span-4 h-[300px] w-[300px] ${
                  index < 2 ? `col-start-${index === 0 ? 3 : 7}` : 'row-start-2'
                }`}
              >
                <div className="absolute h-full w-full flex justify-center mx-auto z-10 top-2">
                  <Card cardId={cardId} />
                  {ownedCards[String(cardId)] && <ShopSold />}
                </div>



                <div className="relative h-[40px] w-[100%] top-[360px] rounded-md bg-[#957046] m-auto z-40" />

                <button
                  onClick={() => {
                    if (!ownedCards[cardId]) {
                      handlePurchase(cost, currency, cardId);
                    }
                  }}
                  disabled={ownedCards[cardId]}
                  className={`absolute w-[60%] flex items-center justify-center left-[19%] top-[120%] rotate-[3deg] 
                    border-[#A67C4E] font-medium rounded-lg text-2xl px-5 py-2 mt-4 border-[7px] transition z-50
                    ${ownedCards[cardId] ? "bg-[#C9B080] text-white cursor-not-allowed" : "bg-[#C9B080] text-white hover:bg-[#A67C4E] active:scale-95"}
                  `}
                >
                  {!ownedCards[cardId] && (
                    <img
                      src={icon}
                      width={25}
                      height={25}
                      alt={label}
                      className="inline-block mr-3"
                    />
                  )}
                  {ownedCards[cardId] ? "Owned" : `${cost} ${label}`}
                </button>


              </div>
            );
          })}
        </div>
      </div>

      {/* Not Enough Currency Modal */}
      {showNotEnoughModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg relative w-[400px]">
            <button
              className="absolute top-2 right-2 text-black text-3xl hover:text-red-500"
              onClick={() => setShowNotEnoughModal(false)}
            >
              ×
            </button>
            <p className="text-black text-3xl text-center">{notEnoughMessage}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default ShopDisplay;
