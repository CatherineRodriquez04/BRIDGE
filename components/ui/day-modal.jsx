//display when click on top right day visual
//Shows day # and limits for the day
//have button to task and next day / trigger next day

"use client";

import { usePlayer } from "@/components/ui/PlayerContent";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "@/lib/firebase";
import Link from "next/link";
import DailyRewardPopup from "@/components/ui/daily-reward-popup";

function DayModal({ isOpen, onClose }) {
  const { days } = usePlayer();

  const [shopCount, setShopCount] = useState(0);
  const [battleCount, setBattleCount] = useState(0);
  const [packCount, setPackCount] = useState(0);
  const [userId, setUserId] = useState(null);
  const [showDailyReward, setShowDailyReward] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserId(user.uid);
        const docRef = doc(db, "players", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          const currentDay = data.days || 1;
          //setDays(currentDay);
          setShopCount(data[`shopDay${currentDay}`] || 0);
          setBattleCount(data[`battlesDay${currentDay}`] || 0);
          setPackCount(data[`packsDay${currentDay}`] || 0);
        }
      }
    });
    return () => unsubscribe();
  }, []);

  const handleNextDay = async () => {
    if (!userId || days >= 5) return;

    const nextDay = days + 1;
    const docRef = doc(db, "players", userId);
    await updateDoc(docRef, { days: nextDay });

    setDays(nextDay);
    setShopCount(0);
    setBattleCount(0);
    setPackCount(0);

    setShowDailyReward(true);
    setTimeout(() => {
      onClose();
    }, 50);
  };

  return (
    <>
      {showDailyReward && (
        <div className="fixed inset-0 z-[9999]">
          <DailyRewardPopup isOpen={showDailyReward} onClose={() => setShowDailyReward(false)} />
        </div>
      )}

      {isOpen && !showDailyReward && (
        <div className="fixed top-[170px] left-[35%] z-[9999] h-[600px] w-[600px]">
          <img src="/assets/paper-mini-poster.svg" height={600} width={600} alt="Paper Poster" className="absolute -z-1" />

          <button
            onClick={onClose}
            className="absolute top-8 left-[510px] text-[#5E4112] hover:text-gray-300 transition-colors z-30"
            aria-label="Close"
          >
            <X size={56} />
          </button>

          <div className="absolute -top-[50px] left-[200px] text-black text-[150px] z-20">Day</div>
          <div className="absolute top-[180px] left-[250px] text-black text-8xl z-20">{days}/5</div>

          <div className="absolute top-[290px] left-[170px] text-black text-5xl z-20">Today's Limits</div>

          <div className="absolute w-full top-[350px] text-[#0B0C2A] z-20">
            <div className="flex justify-between mb-8">
              <div className="text-center w-1/3">
                <p className="text-5xl mb-1">Shop</p>
                <p className="text-4xl">{shopCount}/3</p>
              </div>
              <div className="text-center w-1/3">
                <p className="text-5xl mb-1">Battles</p>
                <p className="text-4xl">{battleCount}/5</p>
              </div>
              <div className="text-center w-1/3">
                <p className="text-5xl mb-1">Packs</p>
                <p className="text-4xl">{packCount}/5</p>
              </div>
            </div>
          </div>

          <div className="absolute top-[77%] left-[12%] text-5xl z-20">
            <Link href="/task">
              <button className="absolute h-[80px] w-[200px] flex items-center justify-center left-[19%] top-[120%]  bg-[#C9B080] border-[#5E4112] font-medium rounded-lg text-5xl px-5 py-4 border-[7px] text-black  transition active:scale-95 z-50">
                T.A.S.K
              </button>
            </Link>
          </div>

          <div className="absolute top-[77%] left-[51%]">
            <button
              onClick={handleNextDay}
              disabled={days >= 5}
              className={`absolute h-[80px] w-[230px] flex items-center justify-center left-[19%] top-[120%] bg-[#C9B080] border-[#5E4112] font-medium rounded-lg text-5xl px-5 py-4 border-[7px] text-black transition active:scale-95 z-50 ${
                days >= 5 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Next Day
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default DayModal;