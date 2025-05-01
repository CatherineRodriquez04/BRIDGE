// Trigger at beginnign of each day
//have corner X button to close(use from pack open carousel)
//know day and show the reward for that day
//have claim reward button
//auto close once grab reward? or have close button too?

"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "@/lib/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const rewards = [
  { day: 1, reward: "250 Coins", amount: 250, type: "coins" },
  { day: 2, reward: "500 Coins", amount: 500, type: "coins" },
  { day: 3, reward: "750 Coins", amount: 750, type: "coins" },
  { day: 4, reward: "1000 Coins", amount: 1000, type: "coins" },
  { day: 5, reward: "300 Gems", amount: 300, type: "gems" },
];

function DailyRewardPopup({ isOpen, onClose }) {
  const [userId, setUserId] = useState(null);
  const [currentDay, setCurrentDay] = useState(1);
  const [claimedDays, setClaimedDays] = useState([]);

  useEffect(() => {
    const auth = getAuth();
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserId(user.uid);
        const docRef = doc(db, "players", user.uid);
        const snap = await getDoc(docRef);
        if (snap.exists()) {
          const data = snap.data();
          setCurrentDay(data.days || 1);
          setClaimedDays(data.claimedDays || []);
        }
      }
    });
    return () => unsub();
  }, []);

  const claimReward = async (day, amount, type) => {
    if (!userId || claimedDays.includes(day)) return;

    const docRef = doc(db, "players", userId);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) return;

    const data = docSnap.data();
    const updatedClaimed = [...(data.claimedDays || []), day];
    const newValue = (data[type] || 0) + amount;

    await updateDoc(docRef, {
      [type]: newValue,
      claimedDays: updatedClaimed,
    });

    setClaimedDays(updatedClaimed);
  };

  const collectAllAvailable = () => {
    rewards.forEach(({ day, amount, type }) => {
      if ((day === currentDay || day < currentDay) && !claimedDays.includes(day)) {
        claimReward(day, amount, type);
      }
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black bg-opacity-50 flex items-center justify-center">
      <div className="relative w-[90%] max-w-[1200px] h-[55%] bg-gradient-to-b from-accent to-accent2 border-4 border-[#C4F7BC] rounded-lg p-4 text-white">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
        >
          <X size={32} />
        </button>

        <div className="text-6xl text-center mb-10">Daily Rewards</div>

        <div className="flex justify-between items-start px-8 h-[65%]">
          {rewards.map(({ day, reward, amount, type }) => {
            let bgClass = "bg-gradient-to-b from-accent to-accent2";
            if (day < currentDay) bgClass = "bg-accent4";
            else if (day === currentDay) bgClass = "bg-accent3";

            const isLocked = day > currentDay;

            return (
              <div
                key={day}
                className={`relative h-full w-[18%] ${bgClass} rounded-lg text-white text-4xl flex flex-col items-center pt-6`}
              >
                <p className="text-4xl font-bold mb-2">Day {day}</p>
                <img
                  src={type === "coins" ? "/assets/coins-bundle.svg" : "/assets/gems-bundle.svg"}
                  height={150}
                  width={150}
                  alt="Reward Icon"
                  className="z-30 mb-3"
                />
                <p className="text-center mb-4">
                  {reward}
                </p>
                <div className="min-w-[150px] border border-accent2"></div>
                <button
                  onClick={() => !isLocked && claimReward(day, amount, type)}
                  disabled={claimedDays.includes(day) || isLocked}
                  className={`mt-auto mb-4 text-white px-4 py-2 rounded-lg disabled:opacity-50 cursor-${isLocked ? 'not-allowed' : 'pointer'}`}
                >
                  {isLocked ? "Locked" : "Claim Reward"}
                </button>
              </div>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => {
            collectAllAvailable();
            onClose();
          }}
          className="absolute w-[30%] top-[80%] left-[35%] flex items-center justify-center bg-[#0B0C2A] text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-4xl px-5 py-1.5 mt-4 border-4"
        >
          Collect Reward
        </button>
      </div>
    </div>
  );
}

export default DailyRewardPopup;