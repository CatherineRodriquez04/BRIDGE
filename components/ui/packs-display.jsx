
function PacksDisplay () {
    return (
     <>
     {/* 1st pack */}
     
        <div className="fixed h-[450px] w-[300px] bottom-80 bg-green-500/30 border border-[#4eff91]/30 rounded-lg p-4">
            Iron Pack
        </div>

        {/* 2nd pack */}

        <div className="fixed h-[450px] w-[300px] bottom-80 left-64 bg-green-500/30 border border-[#4eff91]/30 rounded-lg p-4">
            Gold Pack
        </div>

        {/* 3rd pack */}

        <div className="fixed h-[450px] w-[300px] bottom-80 right-64 bg-green-500/30 border border-[#4eff91]/30 rounded-lg p-4">
            Diamond Pack
        </div>
     </>

    )
}

export default PacksDisplay