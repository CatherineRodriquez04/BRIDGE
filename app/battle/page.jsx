"use client";

import { useEffect, useState } from "react";
import BattleOpponentDisplay from "@/components/ui/battle-opponent-display"; 
import BattlePlayerDisplay from "@/components/ui/battler-player-display";
import BattleVictoryDisplay from "@/components/ui/battle-victory-display";
import BattleLossDisplay from "@/components/ui/battle-loss-display";

// backgrounds
import water from "@/public/assets/water-battle-bg.svg";
import trio from "@/public/assets/trio-battle-bg.svg";
import ground from "@/public/assets/ground-battle-bg.svg";
import air from "@/public/assets/air-battle-bg.svg";

function Battle() {
  const [selectedCards, setSelectedCards] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState(null);

  useEffect(() => {
    const cards = JSON.parse(localStorage.getItem("selectedCards") || "[]");
    setSelectedCards(cards);

    const backgrounds = [water, trio, ground, air];
    const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    setBackgroundImage(randomBg);
  }, []);

  return (
    <>
      <div
        className="h-screen w-screen fade-in bg-cover bg-center relative overscroll-y-none"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage.src})` : "none"
        }}
      >
        <BattleOpponentDisplay />
        <BattlePlayerDisplay selectedCards={selectedCards} />

        {/* Optional victory/loss display */}
        {/* <BattleVictoryDisplay /> */}
        {/* <BattleLossDisplay /> */}
      </div>
    </>
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