// Shop Page


"use client"

import Link from "next/link";
import Image from "next/image";

import { useState } from "react"
import { ArrowLeft, ArrowRight, Info, ChevronLeft } from "lucide-react"

export default function Shop() {
  const [activeTab, setActiveTab] = useState("Today's Featured")
  const [coins, setCoins] = useState(212832)
  const [gems, setGems] = useState(2121)

  const addCoins = () => {
    setCoins((prev) => prev + 1000)
  }

  const addGems = () => {
    setGems((prev) => prev + 100)
  }

  return (
    <div className="min-h-screen w-full flex justify-center items-center fade-in bg-[#0e0e2c] overflow-auto py-4 relative">
      {/* Fixed Currency Buttons */}
      <div className="fixed top-4 right-4 z-10 flex gap-2 sm:gap-4">
        <div className="bg-[#d4f4c4] text-black rounded-full flex items-center px-2 sm:px-3 py-1 text-sm sm:text-base">
          <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-[#f8f8a0] mr-1 sm:mr-2"></div>
          <span className="font-medium">{coins}</span>
          <button
            onClick={addCoins}
            className="ml-1 font-bold text-lg sm:text-xl hover:bg-[#c4e4b4] rounded-full w-6 h-6 flex items-center justify-center"
          >
            +
          </button>
        </div>
        <div className="bg-[#d4f4c4] text-black rounded-full flex items-center px-2 sm:px-3 py-1 text-sm sm:text-base">
          <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-[#ff6b6b] mr-1 sm:mr-2 rotate-45"></div>
          <span className="font-medium">{gems}</span>
          <button
            onClick={addGems}
            className="ml-1 font-bold text-lg sm:text-xl hover:bg-[#c4e4b4] rounded-full w-6 h-6 flex items-center justify-center"
          >
            +
          </button>
        </div>
      </div>

      <div className="w-full h-full max-w-7xl px-4 sm:px-6 relative flex flex-col">
        {/* Top Navigation */}
        <div className="w-full flex justify-start items-center mb-4 pt-12 sm:pt-0">
          <Link href="/" className="text-white p-2">
            <ChevronLeft size={28} className="sm:w-8 sm:h-8 md:w-10 md:h-10" />
          </Link>
        </div>

        {/* Tabs */}
        <div className="w-full mb-4">
          <div className="grid grid-cols-4 w-full">
            {["Today's Featured", "Packs", "Deals", "Daily"].map((tab) => (
              <button
                key={tab}
                className={`py-2 sm:py-3 px-2 sm:px-4 text-center font-bold text-sm sm:text-base md:text-xl ${
                  activeTab === tab
                    ? "bg-white text-[#0e0e2c]"
                    : tab === "Packs"
                      ? "bg-[#e0e0e0] text-[#f0a500]"
                      : "bg-[#e0e0e0] text-[#0e0e2c]"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-grow flex flex-col lg:flex-row gap-4 w-full">
          {/* Left Section - Featured */}
          <div className="w-full lg:w-1/3">
            <div className="bg-[#e0e0e0] p-3 sm:p-4 md:p-6 rounded-sm text-[#0e0e2c] h-full">
              <div className="text-center mb-2 sm:mb-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold">Countdown Time</h2>
              </div>

              <div className="relative h-32 sm:h-40 md:h-48 bg-[#f5f5f5] flex items-center justify-center mb-2 sm:mb-4">
                <button className="absolute left-2 text-gray-700">
                  <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </button>
                <button className="absolute right-2 text-gray-700">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </button>
              </div>

              <div className="text-center">
                <h3 className="text-sm sm:text-base md:text-xl font-bold">Character Name | Power | Type</h3>
              </div>
            </div>
          </div>

          {/* Right Section - Packs */}
          <div className="w-full lg:w-2/3">
            <div className="bg-[#f5f5f5] p-3 sm:p-4 md:p-6 rounded-sm text-[#0e0e2c] relative h-full">
              {/* Probability */}
              <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 flex items-center">
                <span className="font-bold text-sm sm:text-base md:text-xl mr-1 sm:mr-2">Probability</span>
                <Info className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#0e0e2c]" />
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
        </div>

        {/* Shop Label */}
        <div className="absolute bottom-4 sm:bottom-8 md:bottom-12 left-4 sm:left-8 md:left-16 transform -rotate-6 hidden sm:block">
          <div className="bg-white text-[#0e0e2c] p-2 sm:p-4 md:p-6 shadow-lg flex items-center justify-center">
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold">SHOP</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

