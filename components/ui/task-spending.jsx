import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "@/lib/firebase";
import Link from "next/link";

function CalcSpendingScore(totalCashSpent) {
    let spendingScore;
  
    if (totalCashSpent < 2) {
      spendingScore = 500;
    } else if (totalCashSpent <= 5) {
      spendingScore = 400;
    } else if (totalCashSpent <= 10) {
      spendingScore = 300;
    } else if (totalCashSpent <= 25) {
      spendingScore = 200;
    } else if (totalCashSpent <= 50) {
      spendingScore = 100;
    } else {
      spendingScore = 0;
    }

    return spendingScore;
  }

function TaskSpending() {

    const [totalCoinsSpent, setTotalCoinsSpent] = useState(0);
    const [totalGemsSpent, setTotalGemsSpent] = useState(0);
    const [totalCashSpent, setTotalCashSpent] = useState(0);
    const [spendingScore, setSpendingScore] = useState(0);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
          if (user) {
            const docRef = doc(db, "players", user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
              const data = docSnap.data();
      
              setTotalCoinsSpent(data.totalCoinsSpent || 0);
              setTotalGemsSpent(data.totalGemsSpent || 0);
      
              const cashSpent = data.totalCashSpent || 0; // ✅ define this first
              setTotalCashSpent(cashSpent);
      
              const score = CalcSpendingScore(cashSpent); // ✅ use the correct variable
              setSpendingScore(score);
            }
          }
        });
      
        return () => unsubscribe();
      }, []);

    return (
        <>
            <div className="absolute w-full h-full bg-[#0B0C2A]">
                {/* Left Page */}
                <div className="absolute h-full w-[50%] left-0 bg-[#0B0C2A] rounded-l-lg overflow-hidden">
                    <div className="relative flex flex-col items-center top-[7%] h-[1%] text-6xl">
                        Spending
                    </div>
                    {/* Scores(progressbars) */}
                    <div className="relative flex flex-col items-center top-[24%] h-[30%] w-full  pt-4 ">
                        <h2 className="text-center text-5xl tracking-wide ">By Currency:</h2>
                        
                        <img src="/assets/coins-bundle.svg" height={70} width={70} alt="Coins-Bundle" className="absolute left-[18%] top-20"></img>

                        <div className="absolute pt-16 text-4xl top-16 left-[18%] text-[32px] ">
                            Coins
                        </div>
                        <div className="absolute pt-28 text-4xl top-16 left-[18.5%]  text-white">
                            {totalCoinsSpent}
                        </div>

                        <img src="/assets/gems-bundle.svg" height={100} width={100} alt="Gems-Bundle" className="absolute left-[43%] top-[3.95rem] "></img>
                        <div className="absolute pt-16 text-4xl top-16 flex justify-center text-[32px]">
                            Gems
                        </div>
                        <div className="absolute pt-28 text-4xl top-16 flex justify-center  text-white">
                            {totalGemsSpent}
                        </div>

                        <img src="/assets/money-icon.svg" height={70} width={70} alt="USD-Bundle" className="absolute left-[72.5%] top-[4.4rem]"></img>
                        <div className="absolute pt-16 text-4xl top-16 left-[73%] text-[32px]">
                            Cash
                        </div>
                        <div className="absolute pt-28 text-4xl top-16 left-[76.5%]  text-white">
                            {totalCashSpent}
                        </div>
                    </div>
                    {/* Overall Score: */}
                    <div className="relative flex flex-col pt-4 items-center top-[37%] h-[20%] w-full text-5xl ">
                        Overall Score:
                        <div className="pt-8 text-4xl">
                            {/* 75% Survivability  */}
                            {spendingScore} / 500
                            {/* Show /500? */}
                        </div>
                    </div>
                </div>

                {/* Right Page */}
                <div className="absolute h-full w-[50%] right-0 bg-[#0B0C2A] rounded-r-lg border-l-4 overflow-y-auto overflow-y-auto scrollbar-hidden">
                    <div className="relative flex flex-col items-center top-[7%] h-[1%] text-5xl ">
                        Currency Breakdown
                    </div>
                    <div className="absolute w-full text-[#a3ffb0] top-[20%] pt-8 border-t-4 ">
                        <h2 className="text-center text-4xl tracking-wide mb-6">Currency Types</h2>

                        <div className="relative w-full mx-auto">
                            {/* Top row - 3 items */}
                            <div className="flex justify-between mb-8">
                            <div className="text-center w-1/3">
                                <p className="text-3xl mb-1">Coins</p>
                                {/* <p className="text-2xl ">###</p> */}
                                <img src="/assets/coins-bundle.svg" height={70} width={70} alt="Coins-Bundle" className="absolute left-[11%] top-12"></img>
                                {/* Fillable value later */}
                            </div>

                            <div className="text-center w-1/3">
                                <p className="text-3xl mb-1">Gems</p>
                                {/* <p className="text-2xl ">###</p> */}
                                <img src="/assets/gems-bundle.svg" height={100} width={100} alt="Gems-Bundle" className="absolute left-[43%] top-9"></img>

                            </div>

                            <div className="text-center w-1/3">
                                <p className="text-3xl mb-1">Cash</p>
                                {/* <p className="text-2xl">###</p> */}
                                <img src="/assets/money-icon.svg" height={70} width={70} alt="USD-Bundle" className="absolute left-[78%] top-11"></img>
                            </div>
                            </div>
                            <h2 className="text-center text-3xl tracking-wide mb-6 mt-24 pt-8 border-t-4">Currency Breakdown</h2>

                                <h3 className="pl-12 text-3xl tracking-wide mb-6">Coins (Freemium)</h3>
                                <p className="pl-16 text-xl tracking-wide mb-6 whitespace-normal overflow-hidden max-w-[90%]">
                                    Coins, or "freemium" currency, is the most common currency in the game. It is used to purchase packs, cards, and cosmetics. 
                                    Players can earn coins by competing in battles and fulfilling daily rewards. This currency is the most common and easiest to earn, 
                                    but it is also the least valuable. This currency is not tied to real money, and is entirely free to earn through interaction with the game.
                                    In many cases, players are encouraged to forego spending coins in favor of spending gems, as gems are more valuable and can be used to purchase 
                                    more powerful cards and cosmetics. These gems, however, cost real money to purchase, and are not as easily earned as coins.
                                    Tip: Patience and strategy are key to earning coins. Play and win battles to earn coins, and use them wisely to purchase packs and cards. By spending
                                    coins wisely, you can avoid falling into the spiral of spending real money on gems to purchase stronger cards and packs, and instead earn them through gameplay.
                                </p>

                                <h3 className="pl-12 text-3xl tracking-wide mb-6">Gems (Premium)</h3>
                                <p className="pl-16 text-xl tracking-wide mb-6 whitespace-normal overflow-hidden max-w-[90%]">
                                    Gems, or "premium" currency, is the second most common currency in the game. It is used to purchase more valuable packs, cards, and cosmetics. This currency is 
                                    MUCH more valuable than coins, and is used to purchase the most powerful cards and cosmetics. Players can earn gems by completing daily rewards, but they are primarily
                                    meant to be earned through the purchase of bundles using real money. In many cases, players are encouraged to spend gems in favor of spending coins, as gems often
                                    supercharge or skip progression in the game, giving players a significant advantage over those who do not spend gems. This creates a "pay to win" or "keeping up with the jonses"
                                    mentality among players, who feel pressured to spend real money on gems to keep up with their friends and competitors. This often leads to players spending large amounts of money on gems, 
                                    which can lead to addiction and financial problems.

                                    Tip: To maximize your score, it is best to play "free to play", that is, stick to freebies & freemium currency. This takes patience and strategy, but it is the best way to avoid falling into
                                     the spiral of spending real money on gems to purchase stronger cards and packs. Gems can be slowly accrued through daily rewards, through not in large quantities.
                                </p>
                                <h3 className="pl-12 text-3xl tracking-wide mb-6">Cash (Real $$$)</h3>
                                <p className="pl-16 text-xl tracking-wide mb-6 whitespace-normal overflow-hidden max-w-[90%]">
                                    USD, or "real money", is the most valuable currency in the game. It is intended to simulate your real world money, and is used to purchase bundles of gems or "premium" currency in the game.
                                    This currency is the most valuable, and is not replenished as the game moves forward. This is the most important metric for your evaluation at the end of the game, as a central pillar of the 
                                    simulation is to track how much money you are willing to spend on the game and what manipulative tactics you fall for to facilitate it. It is important to note that not ALL cases of spending 
                                    real money on a game are bad, but it becomes a slippery slope that can be detrimental to your finances if not kept in check.
                                    Tip: To maximize your score, it is best to play "free to play", that is, stick to freebies & freemium currency. This takes patience and strategy, but it is the best way to avoid falling into the spiral of spending real money on gems to purchase stronger cards and packs.
                                    Gems can be slowly accrued through daily rewards, through not in large quantities. This is the best way to avoid falling into the spiral of spending real money on gems to purchase stronger cards and packs.
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default TaskSpending