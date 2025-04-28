
function TaskSpending() {
    return (
        <>
            <div className="absolute w-full h-full bg-[#0B0C2A]">
                {/* Left Page */}
                <div className="absolute h-full w-[50%] left-0 bg-[#0B0C2A] rounded-l-lg overflow-hidden">
                    <div className="relative flex flex-col items-center top-[9%] h-[1%] text-4xl">
                        Spending
                    </div>
                    {/* Scores(progressbars) */}
                    <div className="relative flex flex-col items-center top-[27%] h-[30%] w-full text-3xl pt-4 ">
                        By Currency:
                        <div className="absolute pt-16 text-2xl left-[18%] text-[32px]">
                            Gold
                        </div>
                        <div className="absolute pt-28 text-2xl left-[18%]">
                            ###
                        </div>
 


                        <div className="absolute pt-16 text-2xl flex justify-center text-[32px]">
                            Gems
                        </div>
                        <div className="absolute pt-28 text-2xl flex justify-center">
                            ###
                        </div>

                        
                        <div className="absolute pt-16 text-2xl left-[73%] text-[32px]">
                            Cash
                        </div>
                        <div className="absolute pt-28 text-2xl left-[74%]">
                            ###
                        </div>
                    </div>
                    {/* Overall Score: */}
                    <div className="relative flex flex-col pt-4 items-center top-[37%] h-[20%] w-full text-4xl ">
                        Overall Score:
                        <div className="pt-8 text-2xl">
                            75% Survivability
                        </div>
                    </div>
                </div>

                {/* Right Page */}
                <div className="absolute h-full w-[50%] right-0 bg-[#0B0C2A] rounded-r-lg border-l-4 overflow-y-auto">
                    <div className="relative flex flex-col items-center top-[9%] h-[1%] text-4xl">
                        Breakdown
                    </div>
                    <div className="absolute w-full text-[#a3ffb0] top-[25%]">
                        <h2 className="text-center text-3xl tracking-wide mb-6">By Currency</h2>

                        <div className="relative w-full mx-auto">
                            {/* Top row - 3 items */}
                            <div className="flex justify-between mb-8">
                            <div className="text-center w-1/3">
                                <p className="text-3xl mb-1">Coins</p>
                                <p className="text-2xl ">###</p>
                                {/* Fillable value later */}
                            </div>

                            <div className="text-center w-1/3">
                                <p className="text-3xl mb-1">Gems</p>
                                <p className="text-2xl ">###</p>
                            </div>

                            <div className="text-center w-1/3">
                                <p className="text-3xl mb-1">USD</p>
                                <p className="text-2xl">###</p>
                            </div>
                            </div>

                            {/* Bottom row - 2 items positioned in the gaps */}
                            <div className="flex justify-evenly">
                            {/* <div className="text-center w-1/3 ml-[8.33%]">
                                <p className="text-3xl mb-1">Leaderboard</p>
                                <p className="text-2xl">2 hrs 30 mins</p>
                            </div> */}

                            {/* <div className="text-center w-1/3 mr-[8.33%]">
                                <p className="text-3xl mb-1">Collection</p>
                                <p className="text-2xl">2 hrs 30 mins.</p>
                            </div> */}
                            </div>
                            <h2 className="text-center text-3xl tracking-wide mb-6">Category Breakdown</h2>

                                <h3 className="pl-12 text-3xl tracking-wide mb-6">Coins (Freemium)</h3>
                                <p className="pl-16 text-xl tracking-wide mb-6 whitespace-normal overflow-hidden max-w-[90%]">
                                    To be filled
                                </p>

                                <h3 className="pl-12 text-3xl tracking-wide mb-6">Gems (Premium)</h3>
                                <p className="pl-16 text-xl tracking-wide mb-6 whitespace-normal overflow-hidden max-w-[90%]">
                                    abc
                                </p>

                                <h3 className="pl-12 text-3xl tracking-wide mb-6">USD (Real $$$)</h3>
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

export default TaskSpending