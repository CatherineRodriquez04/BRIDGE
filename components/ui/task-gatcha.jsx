
function TaskGatcha() {
    return (
        <>
            <div className="absolute w-full h-full bg-[#0B0C2A]">
                {/* Left Page */}
                <div className="absolute h-full w-[50%] left-0 bg-[#0B0C2A] rounded-l-lg overflow-y-auto scrollbar-hidden">
                    <div className="relative flex flex-col items-center top-[9%] h-[1%] text-4xl">
                        Gatcha
                    </div>
                    {/* Scores(progressbars) */}
                    <div className="relative flex flex-col items-center top-[25%] h-[30%] w-full text-4xl pt-4 ">
                        By Pack:
                        <div className="absolute pt-16 text-2xl left-[13%] text-[32px]">
                            Standard
                        </div>
                        <div className="absolute pt-28 text-2xl left-[18%]">
                            ###
                        </div>

                        <div className="absolute pt-16 text-2xl flex justify-center text-[32px] left-[45%]">
                            Medium
                        </div>
                        <div className="absolute pt-28 text-2xl flex justify-center left-[48%]">
                            ###
                        </div>

                        <div className="absolute pt-16 text-2xl left-[72%] text-[32px]">
                            Premium
                        </div>
                        <div className="absolute pt-28 text-2xl left-[76%]">
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
                <div className="absolute h-full w-[50%] right-0 bg-[#0B0C2A] rounded-r-lg border-l-4 overflow-y-auto scrollbar-hidden">
                    <div className="relative flex flex-col items-center top-[9%] h-[1%] text-4xl">
                        Currency Breakdown
                    </div>
                    <div className="absolute w-full text-[#a3ffb0] top-[23%]">
                        <h2 className="text-center text-4xl tracking-wide mb-6">Pack Types</h2>

                        <div className="relative w-full mx-auto">
                            {/* Top row - 3 items */}
                            <div className="flex justify-between mb-8">
                            <div className="text-center w-1/3">
                                <p className="text-3xl mb-1">Standard</p>
                                {/* <p className="text-2xl ">###</p> */}
                                <img src="/assets/standard-pack.svg" height={70} width={70} alt="Card-Pack-1" className="absolute left-[11%] top-12" />
                                {/* Fillable value later */}
                            </div>

                            <div className="text-center w-1/3">
                                <p className="text-3xl mb-1">Medium</p>
                                {/* <p className="text-2xl ">###</p> */}
                                <img src="/assets/medium-pack.svg" height={70} width={70} alt="Card-Pack-1" className="absolute left-[44.7%] top-12" />
                            </div>

                            <div className="text-center w-1/3">
                                <p className="text-3xl mb-1">Premium</p>
                                {/* <p className="text-2xl">###</p> */}
                                <img src="/assets/premium-pack.svg" height={70} width={70} alt="Card-Pack-1" className="absolute left-[78%] top-12" />
                            </div>
                        </div>
                            <h2 className="text-center text-3xl tracking-wide mb-6 mt-36">Gatcha/Packs Breakdown</h2>
{/*                             
                                <h3 className="pl-12 text-3xl tracking-wide mb-6">Gatcha</h3>
                                <p className="pl-16 text-xl tracking-wide mb-6 whitespace-normal overflow-hidden max-w-[90%]">
                                    Coins
                                </p>

                                <h3 className="pl-12 text-3xl tracking-wide mb-6">Wishing</h3>
                                <p className="pl-16 text-xl tracking-wide mb-6 whitespace-normal overflow-hidden max-w-[90%]">
                                    Coins
                                </p> */}

                                <h3 className="pl-12 text-3xl tracking-wide mb-6">Standard Pack</h3>
                                <p className="pl-16 text-xl tracking-wide mb-6 whitespace-normal overflow-hidden max-w-[90%]">
                                    Coins
                                </p>

                                <h3 className="pl-12 text-3xl tracking-wide mb-6">Medium Pack</h3>
                                <p className="pl-16 text-xl tracking-wide mb-6 whitespace-normal overflow-hidden max-w-[90%]">
                                    Gems,
                                </p>
                                <h3 className="pl-12 text-3xl tracking-wide mb-6">Premium Pack</h3>
                                <p className="pl-16 text-xl tracking-wide mb-6 whitespace-normal overflow-hidden max-w-[90%]">
                                    USD, 
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default TaskGatcha