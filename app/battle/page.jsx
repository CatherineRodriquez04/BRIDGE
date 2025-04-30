"use client";

import { useEffect, useState } from "react";
import BattleOpponentDisplay from "@/components/ui/battle-opponent-display";
import BattlePlayerDisplay from "@/components/ui/battler-player-display";
import BattleVictoryDisplay from "@/components/ui/battle-victory-display";
import BattleLossDisplay from "@/components/ui/battle-loss-display";
import BattleDrawDisplay from "@/components/ui/battle-draw-display";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

import water from "@/public/assets/water-battle-bg.svg";
import trio from "@/public/assets/trio-battle-bg.svg";
import ground from "@/public/assets/ground-battle-bg.svg";
import air from "@/public/assets/air-battle-bg.svg";

function Battle() {
  const [selectedCards, setSelectedCards] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [battleResult, setBattleResult] = useState(null);
  const [countdown, setCountdown] = useState(4); // 4 = "READY"
  const [battleChecked, setBattleChecked] = useState(false);

  useEffect(() => {
    const cards = JSON.parse(localStorage.getItem("selectedCards") || "[]");
    setSelectedCards(cards);

    const backgrounds = [water, trio, ground, air];
    const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    setBackgroundImage(randomBg);

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, []);

  useEffect(() => {
    if (countdown !== 0 || battleChecked) return;

    const fetchStatsAndDecide = async () => {
      try {
        const playerSnap = await getDoc(doc(db, "battle", "Player"));
        const opponentSnap = await getDoc(doc(db, "battle", "Opponent"));

        if (!playerSnap.exists() || !opponentSnap.exists()) return;

        const playerData = playerSnap.data();
        const opponentData = opponentSnap.data();

        const playerRemaining = (playerData.totalHealth || 0) - (opponentData.totalDamage || 0);
        const opponentRemaining = (opponentData.totalHealth || 0) - (playerData.totalDamage || 0);

        if (playerRemaining > opponentRemaining) {
          setBattleResult("win");
        } else if (playerRemaining < opponentRemaining) {
          setBattleResult("loss");
        } else {
          setBattleResult("draw");
        }

        setBattleChecked(true);
      } catch (err) {
        console.error("Error fetching battle data:", err);
      }
    };

    fetchStatsAndDecide();
  }, [countdown, battleChecked]);

  return (
    <div
      className="h-screen w-screen fade-in bg-cover bg-center relative overscroll-y-none"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage.src})` : "none",
      }}
    >
      <BattleOpponentDisplay />
      <BattlePlayerDisplay selectedCards={selectedCards} />

      {countdown > 0 && (
        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-white text-[150px] font-bold z-50">
          {countdown === 4 ? "READY" : countdown}
        </div>
      )}

      {countdown === 0 && (
        <div className="absolute inset-0 z-50">
          {battleResult === "win" && <BattleVictoryDisplay />}
          {battleResult === "loss" && <BattleLossDisplay />}
          {battleResult === "draw" && <BattleDrawDisplay />}
        </div>
      )}
    </div>
  );
}

export default Battle;






//page needs
//1. Border frame
//2. background display (switch random between 3 svg backgrounds)
//3. player display (bottom)
//4. opponent display (top)
//win / loss display (centered)

//if win, show win display
//if loss, show loss display
//depending on outcome, give player rewards (coins, cards, etc.) ( add to their database entry / table)
//+coins
//when win, link should go to pack opening page (randomize rarity of pack?)