
function TaskTactics() {
    return (
        <>
            <div className="absolute w-full h-full bg-[#0B0C2A]">
                {/* Left Page */}
                <div className="absolute h-full w-[50%] left-0 bg-[#0B0C2A] rounded-l-lg overflow-hidden">
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
                                <button onclick="" className="text-3xl mb-1">Packs/Gatcha</button>
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
                    </div>
                </div>
                {/* Right Page */}
                <div className="absolute h-full w-[50%] right-0 bg-[#0B0C2A] rounded-r-lg border-l-4 overflow-y-auto">
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
                                <button onclick="" className="text-4xl mb-1">Packs/Gatcha</button>
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
                                    and direct feedback. The catch, however, is that the cards in the shop are randomized daily, meaning there is no guarantee the card you want wil be available 
                                    each day. This works hand in hand with the packs, lowering player skepticism and serving as an "safe" avenue for players
                                    who are weary of packs to still use their currency. This corners a central goal of these tactics, which encourages players to waste as much currrency as
                                    possible in pursuit of the items they desire. The relationship between Packs and the Shop are visible in the Limited Poster events. Players yearning for a
                                    specific card are incorrectly led to believe the card they want will "eventually" be available in the shop. This may be true, but it once again
                                    turns into a "game of chance", as the odds of that specific card being in the shop each day are low.
                                     The shop is skewed towards the purchase of premium currency, as it is necessary to purchase the most powerful cards.

                                </p>

                                <h3 className="pl-12 text-3xl tracking-wide mb-6">Leaderboard</h3>
                                <p className="pl-16 text-xl tracking-wide mb-6 whitespace-normal overflow-hidden max-w-[90%]">
                                    Fill in later
                                </p>

                                <h3 className="pl-12 text-3xl tracking-wide mb-6">Currency Manipulation</h3>
                                <p className="pl-16 text-xl tracking-wide mb-6 whitespace-normal overflow-hidden max-w-[90%]">
                                    Fill in later
                                </p>

                                <h3 className="pl-12 text-3xl tracking-wide mb-6">Artificial Scarcity</h3>
                                <p className="pl-16 text-xl tracking-wide mb-6 whitespace-normal overflow-hidden max-w-[90%]">
                                    Fill in later
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default TaskTactics