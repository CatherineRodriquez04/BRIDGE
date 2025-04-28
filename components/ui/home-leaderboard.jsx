"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { db } from "@/lib/firebase";
import { cn } from "@/lib/utils";

function RankDisplay({ rank }) {
  if (rank === 1) {
    return (
      <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    );
  } else if (rank === 2) {
    return (
      <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    );
  } else if (rank === 3) {
    return (
      <div className="w-6 h-6 rounded-full bg-orange-300 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    );
  } else {
    return <div className="w-6 h-6 flex items-center justify-center text-white text-sm">{rank}</div>;
  }
}

function HomeLeaderboard() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [currentDay, setCurrentDay] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) return;

      try {
        const playerRef = doc(db, "players", user.uid);
        const playerSnap = await getDoc(playerRef);
        if (!playerSnap.exists()) return;

        const userDay = playerSnap.data().days;
        setCurrentDay(userDay);

        const querySnapshot = await getDocs(collection(db, "players"));
        const filtered = querySnapshot.docs
          .map(doc => ({ id: doc.id, ...doc.data() }))
          .filter(player => player.days === userDay)
          .sort((a, b) => (b.coins ?? Infinity) - (a.coins ?? Infinity))
          .slice(0, 10);

        setLeaderboardData(filtered);
      } catch (error) {
        console.error("Error loading leaderboard:", error);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="fixed bottom-5 left-5 w-[375px] rounded-lg overflow-hidden border border-accent3 text-sm">
      <div className="bg-[#0B0C2A] py-2 text-center">
        <h2 className="text-accent4 text-xl font-light tracking-wider">Leaderboard</h2>
      </div>

      <div className="grid grid-cols-4 bg-[#0F1550] text-white py-1.5 px-3 text-center">
        <div className="text-sm font-light">Rank</div>
        <div className="text-sm font-light">Name</div>
        <div className="text-sm font-light">Coins</div>
        <div className="text-sm font-light">Collection</div>
      </div>

      {leaderboardData.map((player, index) => (
        <div
          key={player.id}
          className={cn("grid grid-cols-4 py-1.5 px-3 items-center text-center", index % 2 === 0 ? "bg-[#0B0C2A]" : "bg-[#0D0E35]")}
        >
          <div className="flex justify-center">
            <RankDisplay rank={index + 1} />
          </div>
          <div className="text-white text-sm font-light">{player.name}</div>
          <div className="text-white text-sm font-light">{player.coins}</div>
          <div className="text-white text-sm font-light">
            {Object.values(player.characterCards || {}).reduce((a, b) => a + b, 0)}
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeLeaderboard;
