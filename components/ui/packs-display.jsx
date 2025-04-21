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

                <button type="button" className="flex items-center text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-10 mx-auto border-2">300 coins</button>
                <button type="button" className="flex items-center text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-8 mx-auto border-2">300 coins</button>
            </div>
            {/* Add buttons below */}
            {/* 2nd pack */}
            <div className="">
                {/* <div className="flex h-[400px] w-[260px] bg-[#0B0C2A] border-4 border-[#C4F7BC] rounded-lg p-4">
                    <img src="/assets/temp-card-pack-1.svg" height={400} width={260} alt="Temp-Card-Pack-1" className="w-full h-full"></img>
                </div> */}
                <img src="/assets/temp-card-pack-1.svg" height={400} width={260} alt="Temp-Card-Pack-1" className="w-[280px]"></img>

                    <button type="button" className="flex items-center text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-10 mx-auto border-2">300 coins</button>
                    <button type="button" className="flex items-center text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-8 mx-auto border-2">300 coins</button>
                    </div>

            {/* 3rd pack */}
            <div className="">
                {/* <div className="flex h-[400px] w-[260px] bg-[#0B0C2A] border-4 border-[#C4F7BC] rounded-lg p-4">
                    <img src="/assets/temp-card-pack-1.svg" height={400} width={260} alt="Temp-Card-Pack-1" className="w-full h-full"></img>
                </div> */}
                <img src="/assets/temp-card-pack-1.svg" height={400} width={260} alt="Temp-Card-Pack-1" className="w-[280px]"></img>

                    <button type="button" className="flex items-center text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-10 mx-auto border-2">300 coins</button>
                    <button type="button" className="flex items-center text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-8 mx-auto border-2">300 coins</button>

            </div>
        </div>
     </>

    )
}

export default PacksDisplay
