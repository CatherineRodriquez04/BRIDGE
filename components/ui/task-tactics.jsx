
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
                        <h2 className="text-center text-3xl tracking-wide mb-6">Score Calculations</h2>

                        <div className="relative w-full mx-auto">
                            {/* Top row - 3 items */}
                            <div className="flex justify-between mb-8">
                            <div className="text-center w-1/3">
                                <p className="text-3xl mb-1">Spending</p>
                                <p className="text-2xl ">/500</p>
                                {/* Fillable value later */}
                            </div>

                            <div className="text-center w-1/3">
                                <p className="text-3xl mb-1">Gatcha</p>
                                <p className="text-2xl ">/500</p>
                            </div>

                            <div className="text-center w-1/3">
                                <p className="text-3xl mb-1">Tactics</p>
                                <p className="text-2xl">%?/500</p>
                            </div>
                        </div>
                            <h2 className="text-center text-3xl tracking-wide mb-6">Tactics Breakdown</h2>

                                <h3 className="pl-12 text-3xl tracking-wide mb-6">Packs/Gacha</h3>
                                <p className="pl-16 text-xl tracking-wide mb-6 whitespace-normal overflow-hidden max-w-[90%]">
                                    The 
                                </p>

                                <h3 className="pl-12 text-3xl tracking-wide mb-6">Gatcha</h3>
                                <p className="pl-16 text-xl tracking-wide mb-6 whitespace-normal overflow-hidden max-w-[90%]">
                                    Gatcha,
                                </p>

                                <h3 className="pl-12 text-3xl tracking-wide mb-6">Tactics</h3>
                                <p className="pl-16 text-xl tracking-wide mb-6 whitespace-normal overflow-hidden max-w-[90%]">
                                    Fill in later
                                </p>

                                <h3 className="pl-12 text-3xl tracking-wide mb-6">Tactics</h3>
                                <p className="pl-16 text-xl tracking-wide mb-6 whitespace-normal overflow-hidden max-w-[90%]">
                                    Fill in later
                                </p>

                                <h3 className="pl-12 text-3xl tracking-wide mb-6">Tactics</h3>
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