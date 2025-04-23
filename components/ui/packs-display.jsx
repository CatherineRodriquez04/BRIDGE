//replace w/ grid / margin beteen later

// import Poster from "/assets/poster.png";

function PacksDisplay () {
    return (
     <>
        {/* 1st pack */}
        {/* fixed h-[400px] w-[260px] bottom-80 right-[505px] */}
        <div className="flex space-x-8 top-[250px] absolute right-[230px]">
            <div> 
                {/* <div className="flex h-[400px] w-[260px] bg-[#0B0C2A] border-4 border-[#C4F7BC] rounded-lg p-4">
                    <img src="/assets/temp-card-pack-1.svg" height={400} width={260} alt="Temp-Card-Pack-1" className="w-full h-full"></img>
                </div> */}
                <img src="/assets/temp-card-pack-1.svg" height={400} width={260} alt="Temp-Card-Pack-1" className="w-[280px]"></img>

                <button type="button" className="flex items-center text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-10 mx-auto border-2">Buy 1</button>
                <button type="button" className="flex items-center text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-8 mx-auto border-2">Buy 10</button>
            </div>
            {/* Add buttons below */}
            {/* 2nd pack */}
            <div className="">
                {/* <div className="flex h-[400px] w-[260px] bg-[#0B0C2A] border-4 border-[#C4F7BC] rounded-lg p-4">
                    <img src="/assets/temp-card-pack-1.svg" height={400} width={260} alt="Temp-Card-Pack-1" className="w-full h-full"></img>
                </div> */}
                <img src="/assets/temp-card-pack-1.svg" height={400} width={260} alt="Temp-Card-Pack-1" className="w-[280px]"></img>
                    <div className="ml-6">
                        <button type="button" className="items-center text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-10 mr-8 border-2">500 coins</button>
                        <button type="button" className="items-center text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-10  border-2">150 gems</button>
                    </div>
                    <div className="ml-6">
                        <button type="button" className="items-center text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center mt-10 mr-8 border-2">2500 coins</button>
                        <button type="button" className="items-center text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-10  border-2">450 gems</button>
                    </div>
                    </div>

            {/* 3rd pack */}
            <div className="">
                {/* <div className="flex h-[400px] w-[260px] bg-[#0B0C2A] border-4 border-[#C4F7BC] rounded-lg p-4">
                    <img src="/assets/temp-card-pack-1.svg" height={400} width={260} alt="Temp-Card-Pack-1" className="w-full h-full"></img>
                </div> */}
                <img src="/assets/temp-card-pack-1.svg" height={400} width={260} alt="Temp-Card-Pack-1" className="w-[280px]"></img>
                <button type="button" className="flex items-center text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-10 mx-auto border-2">600 gems</button>
                <button type="button" className="flex items-center text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-8 mx-auto border-2">1200 gems</button>
            </div>
        </div>
     </>

    )
}

export default PacksDisplay
