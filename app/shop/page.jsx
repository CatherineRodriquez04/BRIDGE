// Shop Page


"use client"

import Link from "next/link";
import Image from "next/image";

import { useState } from "react"
import { ChevronLeft } from "lucide-react"

//Import assets
//import Ruby from "@/public/assets/ruby.png";

// <Image src={Ruby} alt="Ruby" className="w-4 h-4 sm:w-6 sm:h-6 mr-1 sm:mr-2"/> 


// Import components
import CurrencyDisplay from "../../components/ui/currency-display.jsx"
import ShopTabs from "../../components/ui/shop-tabs.jsx"
import FeaturedSection from "../../components/ui/featured-section.jsx"
import PacksSection from "../../components/ui/packs-section.jsx"
import ProbabilityPopup from "../../components/ui/probability-popup.jsx"
import ShopLabel from "../../components/ui/shop-label.jsx"

export default function Shop() {
  // State management
  const [activeTab, setActiveTab] = useState("Today's Featured")
  const [coins, setCoins] = useState(212832)
  const [gems, setGems] = useState(2121)
  const [showProbability, setShowProbability] = useState(false)

  // Event handlers
  const handleAddCoins = () => {
    setCoins((prev) => prev + 1000)
  }

  const handleAddGems = () => {
    setGems((prev) => prev + 100)
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  return (
    <div className="min-h-screen w-full flex justify-center items-center fade-in bg-[#0e0e2c] overflow-auto py-4 relative">
      {/* Currency Display */}
      <CurrencyDisplay coins={coins} gems={gems} onAddCoins={handleAddCoins} onAddGems={handleAddGems} />
      
      <div className="w-full h-full max-w-7xl px-4 sm:px-6 relative flex flex-col">
        {/* Top Navigation */}
        <div className="w-full flex justify-start items-center mb-4 pt-12 sm:pt-0">
          <Link href="/" className="text-white p-2">
            <ChevronLeft size={28} className="sm:w-8 sm:h-8 md:w-10 md:h-10" />
          </Link>
        </div>

        {/* Shop Tabs (Shop tabs top bar for traversal)*/}
        <ShopTabs activeTab={activeTab} onTabChange={handleTabChange} />

        {/* Main Content */}
        <div className="flex-grow flex flex-col lg:flex-row gap-4 w-full">
          {/* Featured Section (Countdown time, featured selector/ rect where shop icon is on left)*/}
          <FeaturedSection />

          {/* Packs Section (Main section w/ packs on it)*/}
          <PacksSection onShowProbability={() => setShowProbability(true)} />
        </div>

        {/* Shop Label (Diagonal Shop logo)*/}
        <ShopLabel />
      </div>

      {/* Probability Popup (Only popup when click on i icon*/}
      <ProbabilityPopup isOpen={showProbability} onClose={() => setShowProbability(false)} />
    </div>
  )
}

