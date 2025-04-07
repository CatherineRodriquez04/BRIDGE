//replace w/ grid / margin beteen later

// import Poster from "/assets/poster.png";

function PacksDisplay () {
    return (
     <>
        <div className="fixed top-20 left-36 w-[480px] h-96 z-10">
            <img src={'/assets/poster-2.svg'} width={1000} height={1000} alt="Poster">
            </img>

        </div>

        {/* 1st pack */}
        
            <div className="fixed h-[450px] w-[300px] bottom-80 right-[505px]  bg-green-500/30 border border-[#4eff91]/30 rounded-lg p-4">
                Gold Pack
            </div>

            {/* 2nd pack */}

            <div className="fixed h-[450px] w-[300px] bottom-80  bg-green-500/30 border border-[#4eff91]/30 rounded-lg p-4">
                Iron Pack
            </div>

            {/* 3rd pack */}

            <div className="fixed h-[450px] w-[300px] bottom-80 right-24 bg-green-500/30 border border-[#4eff91]/30 rounded-lg p-4">
                Diamond Pack
            </div>

     </>

    )
}

export default PacksDisplay

// <>
// {/* 1st pack */}

//    <div className="fixed h-[450px] w-[300px] bottom-80 bg-green-500/30 border border-[#4eff91]/30 rounded-lg p-4">
//        Iron Pack
//    </div>

//    {/* 2nd pack */}

//    <div className="fixed h-[450px] w-[300px] bottom-80 left-64 bg-green-500/30 border border-[#4eff91]/30 rounded-lg p-4">
//        Gold Pack
//    </div>

//    {/* 3rd pack */}

//    <div className="fixed h-[450px] w-[300px] bottom-80 right-64 bg-green-500/30 border border-[#4eff91]/30 rounded-lg p-4">
//        Diamond Pack
//    </div>
// </>