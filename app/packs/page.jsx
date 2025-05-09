// Packs Page

"use client"

import { usePlayer } from "@/components/ui/PlayerContent";
import Link from "next/link";
import { useState, useEffect } from "react";

// Firebase
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, updateDoc, increment } from "firebase/firestore";
import { db } from "@/lib/firebase";

// UI
import GameNavbar from "@/components/ui/game-navbar.jsx";
import PackOpenCarousel from "@/components/ui/pack-open-carousel.jsx";

const cardPack = [
  { id: "1" },
  { id: "2" },
  { id: "3" },
];

export default function Packs() {
  const { days, coins, gems, setCoins, setGems } = usePlayer();

  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [showHitLimitModal, setShowHitLimitModal] = useState(false);
  const [showNoCoinsModal, setShowNoCoinsModal] = useState(false);
  const [showNoGemsModal, setShowNoGemsModal] = useState(false);
  const [animatingPack, setAnimatingPack] = useState(null);
  const [currentPack, setCurrentPack] = useState(null);

  const [packKey, setPackKey] = useState("");
  const [userId, setUserId] = useState(null);
  const [packCount, setPackCount] = useState(0);
  // const [] = useState(0);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserId(user.uid);
        const docRef = doc(db, "players", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          const packsKey = `packsDay${days}`;
          setPackKey(packsKey);
          setPackCount(data[packsKey] || 0);
          setCoins(data.coins || 0);
          setGems(data.gems || 0);
        }
      }
    });
    return () => unsubscribe();
  }, [days, setCoins, setGems]);

  const handlePurchase = async (cost, currency, packId) => {
    if (!userId || !packKey) return;

    const docRef = doc(db, "players", userId);

    if (packCount >= 5) {
      setShowHitLimitModal(true);
      return;
    }

    if (currency === "coins") {
      if (coins >= cost) {
        const newCoins = coins - cost;
        setCoins(newCoins);
        await updateDoc(docRef, {
          coins: newCoins,
          [packKey]: packCount + 1,
        });

        //track total coins spent track
      await updateDoc(doc(db, "players", userId), {
        totalCoinsSpent: increment(cost),
      });

        setPackCount((prev) => prev + 1);
        setCurrentPack(packId); // store which pack was clicked
        openPackAnimation(packId);
      } else {
        setShowNoCoinsModal(true);
      }
    } else if (currency === "gems") {
      if (gems >= cost) {
        const newGems = gems - cost;
        setGems(newGems);
        await updateDoc(docRef, {
          gems: newGems,
          [packKey]: packCount + 1,
        });

        //track total gems spent track
      await updateDoc(doc(db, "players", userId), {
        totalGemsSpent: increment(cost),
      });

        setPackCount((prev) => prev + 1);
        setCurrentPack(packId); // store which pack was clicked
        openPackAnimation(packId);
      } else {
        setShowNoGemsModal(true);
      }
    }
  };

  const openPackAnimation = (packId) => {
    setAnimatingPack(packId);
    setTimeout(() => {
      setAnimatingPack(false);
      setIsCarouselOpen(true);
    }, 800);
  };

  const leanAnimalMap = {
    1: "/assets/poster/wanted-swan.svg",
    2: "/assets/poster/wanted-racoon.svg",
    3: "/assets/poster/wanted-platypus.svg",
    4: "/assets/poster/wanted-whale.svg",
    5: "/assets/poster/wanted-owl.svg"
  };
  
  const leanAnimalSrc = leanAnimalMap[days] || "/assets/swan.svg"; // fallback
  
  return (
    <>
      <div className="h-screen w-screen flex fade-in bg-gradient-to-b from-accent to-accent2 relative overflow-none">{/*  (for some reason, breaks styling / placement of cards*/}
        
        <div className="top-6 right-[520px] absolute z-50">
              <GameNavbar/>
        </div>

      <div className="relative top-[10.5%] text-7xl left-[61.7%]">
            Packs
      </div>
      <div className=" absolute top-[19%] right-[31.3%] z-20 text-white text-4xl">
              Limit {packCount}/5 {/*daily battle limit to be insterted here  packCount    */} 
      </div>
      {/* Conditionally render when opening a pack */}
      <PackOpenCarousel
        isOpen={isCarouselOpen}
        onClose={() => setIsCarouselOpen(false)}
        selectedPack={currentPack}
      />

      <div className="flex items-center h-screen fade-in">
          {/* Poster New Char Display (make component?)*/}
          <div className="fixed w-[28%] h-full -z-1 left-[6%] top-[15%]">
            <img src={leanAnimalSrc} width={500} height={600} alt="Poster" className="-z-1"></img>


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
              <div className="flip-card">   
                  <img src="/assets/standard-pack.svg" height={400} width={260} alt="Card-Pack-1" className={`w-[280px] flip-pack-inner ${animatingPack === 'pack1' ? 'animate-spin' : ''}`} />
                  {/* Wish display/ tracker */}
                    <div className="relative  flex justify-center mx-auto text-3xl top-4">
                      Wish: 3/5
                    </div>
                  {/* Purchase buttons */}
                  <button
                    type="button"
                    onClick={() => {
                      handlePurchase(100, "coins", "pack1");

                      (async () => {
                        const user = getAuth().currentUser;
                        if (!user) return;

                        const docRef = doc(db, "players", user.uid);
                        await updateDoc(docRef, {
                          totalStandardPacks: increment(1),
                        });
                      })();
                    }}
                    className="flex items-center bg-[#0B0C2A] text-white hover:bg-[#C4F7BC] font-medium rounded-lg text-xl px-5 py-2.5 text-center mt-10 mx-auto border-2"
                  >
                    <img src="/assets/icon-coin.svg" width={25} height={25} alt="Coins" className="inline-block mr-2" />
                    100 Coins
                  </button>

              </div>
              {/* 2nd pack */}
              <div className="relative bottom-4 flip-card left-2">
                  <img src="/assets/medium-pack.svg" height={400} width={260} alt="Card-Pack-2" id="pack2"className={`w-[280px] flip-pack-inner ${animatingPack === 'pack2' ? 'animate-spin' : ''}`}></img>
                      <div className="ml-2">
                        {/* Wish display/ tracker */}
                        <div className="relative flex justify-center mx-auto text-3xl -left-2 mt-2">
                          Wish:  3/15
                        </div>
                  {/* Purchase buttons */}
                  <button
                    type="button"
                    onClick={() => {
                      handlePurchase(500, "coins", "pack2");

                      (async () => {
                        const user = getAuth().currentUser;
                        if (!user) return;

                        const docRef = doc(db, "players", user.uid);
                        await updateDoc(docRef, {
                          totalMediumPacks: increment(1),
                        });
                      })();
                    }}
                    className="relative items-center bg-[#0B0C2A] text-white hover:bg-[#C4F7BC] font-medium rounded-lg text-xl px-4 py-2.5 text-center mt-6 mr-2 border-2 -left-2"
                  >
                    <img src="/assets/icon-coin.svg" width={25} height={25} alt="Coins" className="inline-block mr-2" />
                    500 Coins
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      handlePurchase(150, "gems", "pack2");

                      (async () => {
                        const user = getAuth().currentUser;
                        if (!user) return;

                        const docRef = doc(db, "players", user.uid);
                        await updateDoc(docRef, {
                          totalMediumPacks: increment(1),
                        });
                      })();
                    }}
                    className="relative items-center bg-[#0B0C2A] text-white hover:bg-[#C4F7BC] font-medium rounded-lg text-xl px-4 py-2.5 text-center mt-6 border-2 -left-2"
                  >
                    <img src="/assets/icon-gem.svg" width={25} height={25} alt="Gem" className="inline-block mr-2" />
                    150 Gems
                  </button>
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
                  <button
                    type="button"
                    onClick={() => {
                      handlePurchase(600, "gems", "pack3");

                      (async () => {
                        const user = getAuth().currentUser;
                        if (!user) return;

                        const docRef = doc(db, "players", user.uid);
                        await updateDoc(docRef, {
                          totalPremiumPacks: increment(1),
                        });
                      })();
                    }}
                    className="flex items-center bg-[#0B0C2A] text-white hover:bg-[#C4F7BC] font-medium rounded-lg text-xl px-5 py-2.5 text-center mt-10 mx-auto border-2"
                  >
                    <img src="/assets/icon-gem.svg" width={25} height={25} alt="Gem" className="inline-block mr-2" />
                    600 Gems
                  </button>
              </div>
          </div>
        </div>

      </div>

      {/*showHitLimitModal  */}
      {showHitLimitModal && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg relative w-[400px]">
              <button className="absolute top-2 right-2 text-black text-3xl hover:text-red-500" onClick={() => setShowHitLimitModal(false)}>×</button>
              <p className="text-black text-3xl text-center">You have reached today's battle limit!</p>
            </div>
          </div>
        )}

        {/*  */}
        {showHitLimitModal && (
           <div className="fixed inset-0 bg-opacity-70 flex justify-center items-center z-50">
              <div className="bg-[#0B0C2A] border-4 border-[#C4F7BC] p-8 rounded-lg relative w-[40%] h-[30%] flex  justify-center">
               {/* Close button */}
                <button className="absolute top-1 right-6
                 text-white text-7xl hover:text-red-500" onClick={() => setShowHitLimitModal(false)}>
                ×
                </button>
                <p className="absolute text-5xl text-white text-center top-[30%] ">You've Hit your Daily Limit!</p>
                {/* Designated Large close button */}
                <button 
                  onClick={() => setShowHitLimitModal (false)}
                  className="z-10 h-[25%] w-[35%] bg-[#13122A] border-[7px] border-[#86CEBC] absolute top-[70%] flex items-center justify-center top-[60px] m-auto rounded-lg text-3xl text-bold hover:bg-[#86CEBC] hover:text-[#13122A] active:border-8 active:ring-4 active: ring-[#9CF7E1]">
                    Close
                </button>
              </div>
            </div>
          )}



        

        {/* ShowNoCoinsModal */}
        {showNoCoinsModal && (
                    <div className="fixed inset-0 bg-opacity-70 flex justify-center items-center z-50">
                        <div className="bg-[#0B0C2A] border-4 border-[#C4F7BC] p-8 rounded-lg relative w-[40%] h-[30%] flex  justify-center">
                            {/* Close button */}
                        <button className="absolute top-1 right-6
                         text-white text-7xl hover:text-red-500" onClick={() => setShowNoCoinsModal(false)}>
                            ×
                        </button>
                        <p className="absolute text-5xl text-white text-center top-[30%] ">Insufficient Funds!</p>
                        {/* Designated Large close button */}
                            <button 
                            onClick={() => setShowNoCoinsModal(false)}
                            className="z-10 h-[25%] w-[35%] bg-[#13122A] border-[7px] border-[#86CEBC] absolute top-[70%] flex items-center justify-center top-[60px] m-auto rounded-lg text-3xl text-bold hover:bg-[#86CEBC] hover:text-[#13122A] active:border-8 active:ring-4 active: ring-[#9CF7E1]">
                                Close
                            </button>
                        </div>
                    </div>
                    )}

          {/* ShowNoGemsModal */}
          {showNoGemsModal && (
                    <div className="fixed inset-0 bg-opacity-70 flex justify-center items-center z-50">
                        <div className="bg-[#0B0C2A] border-4 border-[#C4F7BC] p-8 rounded-lg relative w-[40%] h-[30%] flex  justify-center">
                            {/* Close button */}
                        <button className="absolute top-1 right-6
                         text-white text-7xl hover:text-red-500" onClick={() => setShowNoGemsModal(false)}>
                            ×
                        </button>
                        <p className="absolute text-5xl text-white text-center top-[30%] ">Insufficient Funds!</p>
                        {/* Designated Large close button */}
                            <button 
                            onClick={() => setShowNoGemsModal(false)}
                            className="z-10 h-[25%] w-[35%] bg-[#13122A] border-[7px] border-[#86CEBC] absolute top-[70%] flex items-center justify-center top-[60px] m-auto rounded-lg text-3xl text-bold hover:bg-[#86CEBC] hover:text-[#13122A] active:border-8 active:ring-4 active: ring-[#9CF7E1]">
                                Close
                            </button>
                        </div>
                    </div>
                    )}

      </div> 
    </>
  );
}

