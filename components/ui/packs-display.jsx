//replace w/ grid / margin beteen later

// import Poster from "/assets/poster.png";

function PacksDisplay () {
    return (
     <>

        {/* 1st pack */}
        {/* fixed h-[400px] w-[260px] bottom-80 right-[505px] */}
        <div className="flex space-x-8  ">
            <div className="flex h-[400px] w-[260px] bottom-80  bg-green-500/30 border border-[#4eff91]/30 rounded-lg p-4">
                Gold Pack
            </div>
            {/* Add buttons below */}

            {/* 2nd pack */}

            <div className="flex h-[400px] w-[260px]  bg-green-500/30 border border-[#4eff91]/30 rounded-lg p-4">
                Iron Pack
            </div>

            {/* 3rd pack */}

            <div className="flex h-[400px] w-[260px]  bg-green-500/30 border border-[#4eff91]/30 rounded-lg p-4">
                Diamond Pack
            </div>
        </div>
     </>

    )
}

export default PacksDisplay
