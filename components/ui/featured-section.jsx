"use client"
import { ArrowLeft, ArrowRight } from "lucide-react"

const FeaturedSection = () => {
  return (
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
  )
}

export default FeaturedSection