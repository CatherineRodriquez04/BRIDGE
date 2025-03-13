"use client"
import { Info } from "lucide-react"

const PacksSection = ({ onShowProbability }) => {
  return (
    <div className="w-full lg:w-2/3">
      <div className="bg-[#f5f5f5] p-3 sm:p-4 md:p-6 rounded-sm text-[#0e0e2c] relative h-full">
        {/* Probability */}
        <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 flex items-center">
          <span className="font-bold text-sm sm:text-base md:text-xl mr-1 sm:mr-2">Probability</span>
          <button onClick={onShowProbability} className="text-[#0e0e2c] hover:bg-gray-200 rounded-full p-1">
            <Info className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Pack Options */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-8 sm:mt-10 md:mt-12">
          {/* Silver Pack */}
          <div className="flex flex-col items-center">
            <h3 className="text-base sm:text-lg md:text-2xl font-bold mb-2 sm:mb-4">Silver</h3>
            <div className="w-32 sm:w-36 md:w-40 lg:w-48 aspect-[2/3] bg-[#0a6e3a] mb-2 sm:mb-4 rounded-sm shadow-md mx-auto"></div>
            <div className="bg-[#d3d3d3] px-3 py-1 rounded-full text-xs sm:text-sm">
              <span className="font-medium">1,000 coins</span>
            </div>
            <div className="mt-4 sm:mt-6 md:mt-8 text-xs sm:text-sm">Pulls until guaranteed SSR: 59/60</div>
          </div>

          {/* Gold Pack */}
          <div className="flex flex-col items-center">
            <h3 className="text-base sm:text-lg md:text-2xl font-bold mb-2 sm:mb-4">Gold</h3>
            <div className="w-32 sm:w-36 md:w-40 lg:w-48 aspect-[2/3] bg-[#f0a500] mb-2 sm:mb-4 rounded-sm shadow-md mx-auto"></div>
            <div className="flex flex-col items-center gap-1 sm:gap-2">
              <div className="bg-[#d3d3d3] px-3 py-1 rounded-full text-xs sm:text-sm">
                <span className="font-medium">5,000 coins</span>
              </div>
              <div className="bg-[#d3d3d3] px-3 py-1 rounded-full text-xs sm:text-sm">
                <span className="font-medium">100 gems</span>
              </div>
            </div>
            <div className="mt-4 sm:mt-6 md:mt-8 text-xs sm:text-sm">Pulls until guaranteed SSR: 29/60</div>
          </div>

          {/* Diamond Pack */}
          <div className="flex flex-col items-center">
            <h3 className="text-base sm:text-lg md:text-2xl font-bold mb-2 sm:mb-4">Diamond</h3>
            <div className="w-32 sm:w-36 md:w-40 lg:w-48 aspect-[2/3] bg-[#cc0000] mb-2 sm:mb-4 rounded-sm shadow-md mx-auto relative">
              <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 bg-white text-[#0e0e2c] text-[8px] sm:text-xs p-0.5 sm:p-1 font-bold whitespace-nowrap">
                Guaranteed SR or SSR
              </div>
            </div>
            <div className="bg-[#d3d3d3] px-3 py-1 rounded-full text-xs sm:text-sm">
              <span className="font-medium">300 gems</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PacksSection