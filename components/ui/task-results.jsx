
function TaskResults() {
    return (
        <>
            <div className="absolute w-full h-full bg-[#0B0C2A]">
                {/* Left Page */}
                <div className="absolute h-full w-[50%] left-0 bg-[#0B0C2A] rounded-l-lg overflow-hidden">
                    <div className="relative flex flex-col items-center top-[9%] h-[1%] text-4xl">
                        Results
                    </div>
                    {/* Scores(progressbars) */}
                    <div className="relative pt-4 flex flex-col items-center top-[30%] h-[10%] w-full text-2xl ">
                        Progress
                    </div>
                    <div className="relative pt-4 flex flex-col items-center top-[30%] h-[20%] w-full border-b-4 text-2xl">
                        progress Bars
                    </div>
                    {/* Overall Score: */}
                    <div className="relative pt-4 flex flex-col items-center top-[42%] h-[20%] w-full text-4xl">
                        Overall Score:
                        <div className="pt-6 text-2xl">
                            96% Survivability
                        </div>
                    </div>
                </div>

                {/* Right Page */}
                <div className="absolute h-full w-[50%] right-0 bg-[#0B0C2A] rounded-r-lg border-l-4">
                    <div className="relative flex flex-col items-center top-[9%] h-[1%] text-4xl">
                        Time Spent
                    </div>
                    {/* Scores(progressbars) */}
                    <div className="absolute w-full text-[#a3ffb0] top-[32%]">
                        <h2 className="text-center text-2xl tracking-wide mb-6">TIME SPENT ON EACH PAGE</h2>

                        <div className="relative w-full mx-auto">
                            {/* Top row - 3 items */}
                            <div className="flex justify-between mb-8">
                            <div className="text-center w-1/3">
                                <p className="text-3xl mb-1">Packs</p>
                                <p className="text-2xl "># hrs # mins</p>
                                {/* Fillable value later */}
                            </div>

                            <div className="text-center w-1/3">
                                <p className="text-3xl mb-1">Shop</p>
                                <p className="text-2xl ">2 hrs 30 mins</p>
                            </div>

                            <div className="text-center w-1/3">
                                <p className="text-3xl mb-1">Exchange</p>
                                <p className="text-2xl">2 hrs 30 mins</p>
                            </div>
                            </div>

                            {/* Bottom row - 2 items positioned in the gaps */}
                            <div className="flex justify-evenly">
                            <div className="text-center w-1/3 ml-[8.33%]">
                                <p className="text-3xl mb-1">Leaderboard</p>
                                <p className="text-2xl">2 hrs 30 mins</p>
                            </div>

                            <div className="text-center w-1/3 mr-[8.33%]">
                                <p className="text-3xl mb-1">Collection</p>
                                <p className="text-2xl">2 hrs 30 mins.</p>
                            </div>
                            </div>
                        </div>
                    </div>

                    {/* Overall Score:
                    <div className="relative pt-4 flex flex-col items-center top-[30%] h-[20%] w-full text-4xl border-y-2">
                        Temp
                        <div className="pt-8 text-2xl">
                            df
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );

}

export default TaskResults