"use client"

//import assets

const CurrencyDisplay = ({ coins, gems, onAddCoins, onAddGems }) => {
  return (
    <div className="fixed top-4 right-4 z-10 flex gap-2 sm:gap-4">
      <div className="bg-[#d4f4c4] text-black rounded-full flex items-center px-2 sm:px-3 py-1 text-sm sm:text-base">
        <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-[#f8f8a0] mr-1 sm:mr-2"></div>
        <span className="font-medium">{coins}</span>
        <button
          onClick={onAddCoins}
          className="ml-1 font-bold text-lg sm:text-xl hover:bg-[#c4e4b4] rounded-full w-6 h-6 flex items-center justify-center"
        >
          +
        </button>
      </div>
      
      <div className="bg-[#d4f4c4] text-black rounded-full flex items-center px-2 sm:px-3 py-1 text-sm sm:text-base">
        <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-[#ff6b6b] mr-1 sm:mr-2 rotate-45"></div>        
        <span className="font-medium">{gems}</span>
        <button
          onClick={onAddGems}
          className="ml-1 font-bold text-lg sm:text-xl hover:bg-[#c4e4b4] rounded-full w-6 h-6 flex items-center justify-center"
        >
          +
        </button>
      </div>
    </div>
  )
}

export default CurrencyDisplay