

// import PackOpen from '/components/ui/pack-open.jsx';


function PacksDisplay () {
    return (
     <>
        {/* fixed h-[400px] w-[260px] bottom-80 right-[505px] */}
        <div className="flex space-x-8 top-[250px] absolute right-[200px]">
            {/* 1st pack */}
            <div className=""> 
                <img src="/assets/standard-pack.svg" height={400} width={260} alt="Temp-Card-Pack-1" className="w-[280px]"></img>
                {/* <div className="">
                    abd
                </div> */}
                <button type="button" className="flex items-center text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-xl px-5 py-2.5 text-center mt-10 mx-auto border-2">
                    <img src="/assets/icon-coin.svg" width={25} height={25} alt="Coins" className="inline-block mr-2"/>
                    100 Coins
                </button>
                <button type="button" className="flex items-center text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-xl px-5 py-2.5 text-center mt-8 mx-auto border-2">
                    <img src="/assets/icon-coin.svg" width={25} height={25} alt="Coins" className="inline-block mr-2"/>
                    750 Coins
                </button>
            </div>
            {/* Add buttons below */}
            {/* 2nd pack */}
            <div className="relative bottom-4">
                <img src="/assets/medium-pack.svg" height={400} width={260} alt="Temp-Card-Pack-1" className="w-[300px] "></img>
                    <div className="ml-2">
                        <button type="button" className="items-center text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-xl px-4 py-2.5 text-center mt-10 mr-2 border-2">
                            <img src="/assets/icon-coin.svg" width={25} height={25} alt="Coins" className="inline-block mr-2"/>
                            500 coins
                            </button>
                        <button type="button" className="items-center text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-xl px-4 py-2.5 text-center mt-10 border-2">
                            <img src="/assets/icon-gem.svg" width={25} height={25} alt="Gem" className="inline-block mr-2"/>
                            150 Gems
                        </button>
                    </div>
                    <div className="">
                        <button type="button" className="items-center text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-xl px-4 py-2.5 text-center mt-10 mr-2 border-2">
                            <img src="/assets/icon-coin.svg" width={25} height={25} alt="Coins" className="inline-block mr-2"/>
                            2500 coins</button>
                        <button type="button" className="items-center text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-xl px-5 py-2.5 text-center mt-10  border-2">
                            <img src="/assets/icon-gem.svg" width={25} height={25} alt="Gem" className="inline-block mr-2"/>
                            450 gems</button>
                    </div>
                    </div>

            {/* 3rd pack */}
            <div className="">
                <img src="/assets/premium-pack.svg" height={400} width={260} alt="Temp-Card-Pack-1" className="w-[280px]"></img>
                <button type="button" className="flex items-center text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-xl px-5 py-2.5 text-center mt-10 mx-auto border-2">
                    <img src="/assets/icon-gem.svg" width={25} height={25} alt="Gem" className="inline-block mr-2"/>
                    600 gems
                </button>
                <button type="button" className="flex items-center text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-xl px-5 py-2.5 text-center mt-8 mx-auto border-2">
                    <img src="/assets/icon-gem.svg" width={25} height={25} alt="Gem" className="inline-block mr-2"/>                    
                    1200 gems
                </button>
            </div>
        </div>
     </>

    )
}

export default PacksDisplay
