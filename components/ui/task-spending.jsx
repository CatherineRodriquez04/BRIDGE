
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
                {/* Right Page */}
                <div className="absolute h-full w-[50%] right-0 bg-[#0B0C2A] rounded-r-lg border-l-4 overflow-scroll">
                    <div className="relative flex flex-col items-center top-[9%] h-[1%] text-4xl">
                        By Currency
                    </div>
                    {/* Scores(progressbars) */}
                    <div className="absolute w-full text-[#a3ffb0] top-[32%]">
                         {/* Scores(progressbars) */}
                        <div className="relative pt-4 flex flex-col items-center top-[30%] h-[10%] w-full text-2xl border-b-2 ">
                            Coins
                        </div>
                        <div className="relative pt-4 flex flex-col items-center top-[30%] h-[20%] w-full border-y-2 text-2xl">
                            Gems
                        </div>
                        {/* Overall Score: */}
                        <div className="relative pt-4 flex flex-col items-center top-[42%] h-[20%] w-full text-4xl">
                            Real Money
                            <div className="pt-6 text-2xl">
                                ###
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

export default TaskSpending