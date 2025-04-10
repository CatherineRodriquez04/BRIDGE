//replace w/ grid / margin beteen later

// import Poster from "/assets/poster.png";

function PacksDisplay () {
    return (
     <>
        {/* 1st pack */}
        {/* fixed h-[400px] w-[260px] bottom-80 right-[505px] */}
        <div className="flex space-x-8 top-[250px] absolute right-[230px]">
            <div className="">
                <div className="flex h-[400px] w-[260px] bg-[#0B0C2A] border-4 border-[#C4F7BC] rounded-lg p-4">
                    Gold Pack
                </div>
                {/* <but  ton className="justify-center place-items-center">Payment</button> */}
                <button type="button" className="flex items-center text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] focus:ring-4 focus:outline-none focus:[#C4F7BC] font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-8 mx-auto border-2">300 coins</button>
                <button type="button" className="flex items-center text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] focus:ring-4 focus:outline-none focus:[#C4F7BC] font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-8 mx-auto border-2">300 coins</button>
            </div>
            {/* Add buttons below */}
            {/* 2nd pack */}
            <div className="">
                <div className="flex h-[400px] w-[260px] bg-[#0B0C2A] border-4 border-[#C4F7BC] rounded-lg p-4">
                    Iron Packs
                    </div>
                    <button type="button" className="flex items-center text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] focus:ring-4 focus:outline-none focus:[#C4F7BC] font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-8 mx-auto border-2">300 coins</button>
                    <button type="button" className="flex items-center text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] focus:ring-4 focus:outline-none focus:[#C4F7BC] font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-8 mx-auto border-2">300 coins</button>
                    </div>

            {/* 3rd pack */}
            <div className="">

                <div className="flex h-[400px] w-[260px] bg-[#0B0C2A] border-4 border-[#C4F7BC] rounded-lg p-4">
                    Diamond Pack
                </div>
                <button type="button" className="flex items-center text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] focus:ring-4 focus:outline-none focus:[#C4F7BC] font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-8 mx-auto border-2">300 coins</button>
                <button type="button" className="flex items-center text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] focus:ring-4 focus:outline-none focus:[#C4F7BC] font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-8 mx-auto border-2">300 coins</button>

            </div>
        </div>
     </>

    )
}

export default PacksDisplay
