import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "@/lib/firebase";
import Link from "next/link";

function CalcTacticsScore(totalGemsSpent) {
    let tacticsScore;
//   Adjust these values later
    if (totalGemsSpent <= 150) {
      tacticsScore = 500;
    } else if (totalGemsSpent <= 250) {
        tacticsScore = 400;
    } else if (totalGemsSpent <= 500) {
        tacticsScore = 300;
    } else if (totalGemsSpent <= 750) {
        tacticsScore = 200;
    } else if (totalGemsSpent <= 1000) {
        tacticsScore = 100;
    } else {
        tacticsScore = 0;
    }

    return tacticsScore;
  }


function TaskTactics() {

    //var setup
    const [totalGemsSpent, setTotalGemsSpent] = useState(0);
    const [tacticsScore, setTacticsScore] = useState(0); // Placeholder for tactics score

        useEffect(() => {
            const auth = getAuth();
            const unsubscribe = onAuthStateChanged(auth, async (user) => {
              if (user) {
                const docRef = doc(db, "players", user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                  const data = docSnap.data();
            
                //Do same as above for tactics score
                const gemsSpent = data.totalGemsSpent || 0; // ✅ define this first
                setTotalGemsSpent(gemsSpent);
                    
                const tacticsScore = CalcTacticsScore(gemsSpent); // ✅ use the correct variable
                    setTacticsScore(tacticsScore);
                    await updateDoc(docRef, { tacticsScore: tacticsScore });
                }
              }
            });
          
            return () => unsubscribe();
          }, []);


    return (
        <>
            <div className="absolute w-full h-full bg-[#0B0C2A]">
                {/* Left Page */}
                <div className="absolute h-full w-[50%] left-0 bg-[#0B0C2A] rounded-l-lg overflow-y-auto scrollbar-hidden ">
                    <div className="relative flex flex-col items-center top-[9%] h-[1%] text-4xl">
                        Tactics
                    </div>
                    {/* Scores(progressbars) */}
                    <div className="absolute w-full text-[#a3ffb0] top-[30%]">
                        <h2 className="text-center text-4xl tracking-wide mb-6">By Category</h2>

                        <div className="relative w-full mx-auto pt-8">
                            {/* Top row - 3 items */}
                            <div className="flex justify-between mb-8">
                            <div className="text-center w-1/3">
                                <button className="text-3xl mb-1">Packs/Gatcha</button>
                                <p className="text-2xl ">1/5</p>
                                {/* Fillable value later */}
                            </div>

                            <div className="text-center w-1/3">
                                <button className="text-3xl mb-1">Shop</button>
                                <p className="text-2xl ">2/5</p>
                            </div>

                            <div className="text-center w-1/3">
                                <button className="text-3xl mb-1">Currency Manipulation</button>
                                <p className="text-2xl">3/5</p>
                            </div>
                            </div>

                            {/* Bottom row - 2 items positioned in the gaps */}
                            <div className="flex justify-evenly">
                            <div className="text-center w-1/3 ml-[8.33%]">
                                <button className="text-3xl mb-1">Leaderboard</button>
                                <p className="text-2xl">4/5</p>
                            </div>

                            <div className="text-center w-1/3 mr-[8.33%]">
                                <button className="text-3xl mb-1">Artificial Scarcity</button>
                                <p className="text-2xl">5/5</p>
                            </div>
                            </div>
                        </div>
                            {/* Overall Score: */}
                        <div className="relative flex flex-col pt-16 items-center top-[37%] h-[20%] w-full text-5xl ">
                            Overall Score:
                            <div className="pt-8 text-4xl">
                                {/* 75% Survivability  */}
                                {Math.round((tacticsScore / 500) * 100)}% Survivability
                                {/* Show /500? */}
                            </div>
                        </div>
                    </div>
                    
                </div>

                {/* Right Page */}
                <div className="absolute h-full w-[50%] right-0 bg-[#0B0C2A] rounded-r-lg border-l-4 overflow-y-auto scrollbar-hidden ">
                    <div className="relative flex flex-col items-center top-[9%] h-[1%] text-4xl">
                        Tactics Breakdown
                    </div>
                    {/* Scores(progressbars) */}
                    <div className="absolute w-full text-[#a3ffb0] top-[25%]">
                        <h2 className="text-center text-3xl tracking-wide mb-4">Examples</h2>

                        <div className="relative w-full mx-auto pt-8">
                            {/* Top row - 3 items */}
                            <div className="flex justify-between mb-8">
                            <div className="text-center w-1/3">
                                <button className="text-4xl mb-1">Packs/Gatcha</button>
                                <p className="text-2xl ">Pack Visuals</p>
                                <p className="text-2xl ">Card Rarity</p>
                                <p className="text-2xl ">Pricing Structure</p>
                                <p className="text-2xl ">Odds Based Rewards</p>
                                <p className="text-2xl ">Wishing/Guarantees</p>
                                {/* Fillable value later */}
                            </div>

                            <div className="text-center w-1/3">
                                <button className="text-4xl mb-1">Shop</button>
                                <p className="text-2xl ">Advertisements</p>
                                <p className="text-2xl ">Daily Target</p>
                                <p className="text-2xl ">Limited Time</p>
                                <p className="text-2xl ">Rarity Pricing</p>
                                <p className="text-2xl ">Daily Refresh</p>

                            </div>

                            <div className="text-center w-1/3">
                                <button className="text-4xl mb-1">Leaderboard</button>
                                <p className="text-2xl">Competition</p>
                                <p className="text-2xl ">Status</p>
                                <p className="text-2xl ">Skill Creep</p>
                                <p className="text-2xl ">Collecting</p>
                                <p className="text-2xl ">Comparison</p>
                                <p className="text-2xl ">Social Pressure</p>
                            </div>
                            </div>

                            {/* Bottom row - 2 items positioned in the gaps */}
                            <div className="flex justify-evenly">
                            <div className="text-center w-1/3 ml-[8.33%]">
                                <button className="text-4xl mb-1">Currency Manipulation</button>
                                <p className="text-2xl">Image Grandour</p>
                                <p className="text-2xl">Sign Visual Contrast</p>
                                <p className="text-2xl">Bonuses</p>
                                <p className="text-2xl">Sizing/Scale</p>
                                <p className="text-2xl">Bundle Advantage</p>


                            </div>

                            <div className="text-center w-1/3 mr-[8.33%]">
                                <button className="text-4xl mb-1">Artificial Scarcity</button>
                                <p className="text-2xl">Restricted Access</p>
                                <p className="text-2xl">Limited Earning Potential</p>
                                <p className="text-2xl">Maximize Chances</p>
                                <p className="text-2xl">Limited Time Items</p>
                            </div>
                        </div>
                        
                            <h2 className="text-center text-3xl tracking-wide mb-6 mt-16">Tactics Breakdown</h2>

                                <h3 className="pl-12 text-3xl tracking-wide mb-6">Packs/Gactha</h3>
                                <p className="pl-16 text-xl tracking-wide mb-6 whitespace-normal overflow-hidden max-w-[90%]">
                                    Packs, or "Gatcha", serves as the primary method of aquiring new cards in the gaem. Players can purchase packs using various forms of in-game currency, 
                                    which can be earned through gameplay or purchased with real money. The packs contain a random assortment of cards, with varying rarities 
                                    and power levels depending on their cost. This system encourages players to spend more money in order to obtain the best cards, as the odds of 
                                    getting a rare card are low. Every purchase of a pack is a gamble, as players are not guaranteed to receive the cards they want. This tactic is combined with
                                    the "Wishing" system, which allows players to spend a certain amount of in-game currency to guarantee a rare card. This system is designed to encourage players
                                    to spend more money in order to obtain the best cards, as the odds of getting a rare card are low. The packs are visually appealing, with bright colors and flashy animations
                                    that draw players toward more expensive packs. In order to obtain the best cards, it is required for players to purchase multiple packs, with the rarest cards being
                                    nearly impossible to obtain reliably without resorting to spending real money.
                                    Tip: There is no real trick for packs besides to avoid purchasing them on pass. Packs can be earned through gameplay (winning battles), and the daily rewards system.
                                    Individual cards can be purchased in the shop, and are often cheaper than packs.
                                </p>

                                <h3 className="pl-12 text-3xl tracking-wide mb-6">Shop</h3>
                                <p className="pl-16 text-xl tracking-wide mb-6 whitespace-normal overflow-hidden max-w-[90%]">
                                    The Shop seres serves as an alternative method of aquiring new cards in the game. Players can purchase cards using various 
                                    forms of in-game currency, both freemium(coins) and premium (gems). The shop is designed to lull players into feeling like they are gettng a good deal
                                    by offering an "alternative" to packs. The illusion of choice is created by allowing the player to openly view the cards available for the day with prices
                                    and direct feedback. The catch, however, is that the cards in the shop are randomized daily, meaning there is no guarantee the card you want will be available 
                                    to purchase. This works hand in hand with the packs, lowering player skepticism and serving as an "safe" avenue for players
                                    who are weary of packs to still use their currency. This corners a central goal of these tactics, which encourages players to waste as much currrency as
                                    possible in pursuit of the items they desire. The relationship between Packs and the Shop are visible in the Limited Poster events. Players yearning for a
                                    specific card are incorrectly led to believe the card they want will "eventually" be available in the shop. This may be true, but it once again
                                    turns into a "game of chance", as the odds of that specific card being in the shop each day are low.
                                     The shop is skewed towards the purchase of premium currency, as it is necessary to purchase the most powerful cards.
                                    Tip: The shop CAN be a good tool for creating good pairings for cheap, as well as avoiding the more directly chance based packs. Spend what you can when it apppears,
                                    but don't chase down any specific cards/characters for best results.
                                </p>

                                <h3 className="pl-12 text-3xl tracking-wide mb-6">Leaderboard</h3>
                                <p className="pl-16 text-xl tracking-wide mb-6 whitespace-normal overflow-hidden max-w-[90%]">
                                    The leaderboard serves as a major social avenue for players by displaying each's stats, card's collected, earnings, and # of victories. While a fun feature for competitive
                                    players or those who like to collect, it can also be utilized as a major social pressure by companies. By showing you what others "like you" have earned, the game can capitalize
                                    on the "keeping up with the jonses" effect to encourage you to spend more to stay competitive. In a "pay to win" situation, those who spend more premium currency (and in turn 
                                    real life money) will succeed above others. This creates a pressure for those who want to climb the leaderboard and continue to win for status. 
                                    Tip: While it is ok to be competitive, focus on creating better team combinations to earn victories against "stronger" opponents, and recognize that sometimes its better to be the 
                                    best of the fair instead of the best of them all. (Secret Hint: Looking at the "Most coins" tab can hint at who is playing "free to play" over buying lots of gems, which could be a
                                    more healthy metric to follow )
                                </p>

                                <h3 className="pl-12 text-3xl tracking-wide mb-6">Currency Manipulation</h3>
                                <p className="pl-16 text-xl tracking-wide mb-6 whitespace-normal overflow-hidden max-w-[90%]">
                                    The exchange page faciliates the transfer of currencies, with the hierarchy of those currencies (from most valuable to least) being Cash (Real Money $$$), Gems (Premium Currency), 
                                    and Coins (Freemium Currency). In many games, all purchases are completed using the two in-game currencies, those being premium(Gems) and freemium(Coins). The goal of these currencies
                                    is to seperate the player from the direct monetary value of the items they are purchasing. Most people have a defined sense of value associated with a dollar amount, whether that be 
                                    for something like a cheap drink or expensive sneakers. By requiring the conversion (or exchange) of money for less well understood currencies, the game can manipulate how the player 
                                    percieves the value of items and the ammount they are spending. For example, a $10 cosmetic can seem expensive for most, but in a game where players can buy bundles of up to 100,000 Coins,
                                    1000 coins seems like a small price to pay. By having both paid(cost money) and free(earnable in game) currencies, this effect can be maximized as players become accustomed to spending large
                                    sums of free currency regularly. Then, when it comes time to spend a few gems, it can seem a lot more stomachable, despite inherently being MUCH more valuable in reality. This can be combined
                                    with BUNDLE ADVANTAGE, or the prepackaging of currency in preset "bundles" or packages / tiers. This requires a certain amount of real money to be spend to gain a preset amount of gems. This 
                                    encourages BULK buying, as the alure of slightly more coins for slightly more money can be hard to pass up. The exchange page emphasises this vision, using the size of the boxes, more visually 
                                    impressive images for large bundles, and "bonus" gems to entice players. In use, this practice can be extended to the shop and packs system by intentionally pricing items in a way that makes it
                                    impossible to completely spend your earned currency evenly(to 0). For example, a player may only be able to buy a pack of 900 gems, but packs only cost 800 each. This leaves 100 gems remaining,
                                    encouraging purchase of more gems in the future to "get your money's worth" from the gems you are unable to spend.
                                    Tip: While it is recommended NOT to exchange real money for gems, if you do intend to do so, do it in small quantities and ONLY buy as much as you need at the moment. The second you think "well if
                                    I buy more I can afford this thing too" and so on, you are in danger of falling for their TRAP!
                                </p>

                                <h3 className="pl-12 text-3xl tracking-wide mb-6">Artificial Scarcity</h3>
                                <p className="pl-16 text-xl tracking-wide mb-6 whitespace-normal overflow-hidden max-w-[90%]">
                                    Scarcity, or the lack of availability of certain items, is often one of the most powerful forces driving rarity and value. This effect is most prominent in real life through the heigh price /
                                    value of gold and diamonds due to their extreme rarity and the difficulty of obtaining them. While a real concern in the material world, scarcity is nearly nonexistant in the digital realm,
                                    creating a conflict of interest for companies seeking to sell their products for the highest price possible. To combat this, many games enforce "artificial scarcity" or the forced limiting of 
                                    availability of certain items,currencies, or cosmetics to increase their value through rarity. In functional terms, a digital card has no inherent value, so by making it difficult to earn,
                                    the cards become a status symbol of either achievement or power (in game stats wise). This creates a similar "keeping up with the jonses" effect to the leaderboard, which works directly with this 
                                    effect. Further building on this tactic is the daily limits on progression. By restricting the user from grinding for cards through gameplay or mass buying cards, each attempt becomes inherently more 
                                    valuable. So, for example, a "free to play" player seeking to earn cards through gameplay alone may struggle to progress if they can't aquire wins against premium (paying) players within their daily allotment
                                    of battles. This means that players are incentivized to maximize the potential of winning each battle (by having better cards) that usually require spending real money to aquire quickly. Extending this technique
                                    to both the Shop and Packs further pressures players, as they are incentivized to maximize the chances of getting a higher card (by buying more expensive cards/packs) in the hopes of securing higher tiered cards.
                                    By creating the fear of falling behind in players minds (like/with the leaderboard), the game can force those who choose to "grind" gameplay progression to buy packs to progress, as well as encouraging those who 
                                    go the packs route to maximize the value of their limited chances to pull good cards. In real world scenarios, this often forces players to return to the game day after day to remain competitive, taking advantage
                                    of those seeking to grind by forcing them to expose themselves to the game for longer periods (making them more likely to consider spending real money).                                 
                                    Tip: While there is sadly no realistic way to fully overcome this tactic, the best way to deal with it is to identify it and prioritize maximizing your strategy in battle to win and gain more currency / free packs
                                    with the limited chances you have. In the real world, take this as a good limiter to excess play time, and be weary of the thought process of "needing to maximize my limits/ chances for each day."

                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default TaskTactics