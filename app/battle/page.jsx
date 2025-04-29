
"use client";

import { useEffect, useState } from "react";
import BattleOpponentDisplay from "@/components/ui/battle-opponent-display"; 
import BattlePlayerDisplay from "@/components/ui/battler-player-display";
import BattleVictoryDisplay from "@/components/ui/battle-victory-display";
import BattleLossDisplay from "@/components/ui/battle-loss-display";

//backgrounds 
import 

function Battle() {
  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(() => {
    const cards = JSON.parse(localStorage.getItem("selectedCards") || "[]");
    setSelectedCards(cards);
  }, []);

  return (
    <>
      <div className="h-screen w-screen fade-in bg-gradient-to-b from-accent to-accent2 relative overscroll-y-none">
        <div className="">
          <BattleOpponentDisplay />
          <BattlePlayerDisplay selectedCards={selectedCards} />
        </div>

        {/* Later you can toggle victory/loss here */}
        {/* <BattleVictoryDisplay/> */}
        {/* <BattleLossDisplay/> */}
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