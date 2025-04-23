
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
                        {/* <h2 className="text-center text-2xl tracking-wide mb-6">SCORE</h2> */}

                        <div className="relative w-full mx-auto pt-16">
                            {/* Top row - 3 items */}
                            <div className="flex justify-between mb-8">
                            <div className="text-center w-1/3">
                                <button onclick="" className="text-3xl mb-1">Gatcha</button>
                                <p className="text-2xl ">1/5</p>
                                {/* Fillable value later */}
                            </div>

                            <div className="text-center w-1/3">
                                <button className="text-3xl mb-1">Shop</button>
                                <p className="text-2xl ">2/5</p>
                            </div>

                            <div className="text-center w-1/3">
                                <button className="text-3xl mb-1">Exchange</button>
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
                                <button className="text-3xl mb-1">Collection</button>
                                <p className="text-2xl">5/5</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Page */}
                <div className="absolute h-full w-[50%] right-0 bg-[#0B0C2A] rounded-r-lg flex flex-col justify-center border-l-4">
                    <div className="relative flex flex-col items-center top-[9%] h-[1%] text-4xl">
                        Right
                        {/* Show custom component for selected^^ */}
                    </div>

                </div>
            </div>
        </>
    );

}

export default TaskTactics