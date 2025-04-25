"use client"

import { useState, useRef, useEffect } from "react"
import { useMemo } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import Card from "@/components/ui/card.jsx"

// import { Link } from "next/link"

function getRandomId() {
    const num = Math.floor(Math.random() * 18) + 1; // 1–18
    return num < 10 ? `0${num}` : `${num}`; // pad with leading zero
  }

function PackOpenCarousel({ cards, isOpen, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const carouselRef = useRef(null)

  const randomCardIds = useMemo(() => Array.from({ length: 5 }, () => getRandomId()), []);




  const goToNext = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length)
    setTimeout(() => setIsTransitioning(false), 300)
  }

  const goToPrevious = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length)
    setTimeout(() => setIsTransitioning(false), 300)
  }

   if (!isOpen || !cards || cards.length === 0) return null

  return (
    <div className="relative flex h-[80%] w-[60%] bg-gradient-to-b from-accent to-accent2 border-4 border-[#C4F7BC] rounded-lg p-4 z-50  items-center justify-center mx-auto my-auto overflow-y-none space-x-10">
      <div className="relative w-full max-w-8xl h-[104%] p-6 flex flex-col" ref={carouselRef}>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-2 text-white hover:text-gray-300 transition-colors z-30"
          aria-label="Close"
        >
          <X size={32} />
        </button>

        {/* Carousel container */}
        <div className="flex-1 flex items-center justify-center relative z-10">
          {/* Navigation buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 z-40 bg-indigo-800 bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 text-white transition-all"
            aria-label="Previous card"
          >
            <ChevronLeft size={36} />
          </button>

          {/* Cards */}
          <div className="relative flex items-center justify-center w-full h-full perspective-1000">
            {randomCardIds.map((cardId, index) => {

              // Calculate position relative to current card
              let position = (index - currentIndex + cards.length) % cards.length

              // Normalize position to be between -2 and 2
              if (position > cards.length / 2) {
                position = position - cards.length
              }

              // Determine card position classes
              let positionClass = ""
              let zIndex = 0

              if (position === 0) {
                // Center card (focused)
                positionClass = "scale-150 translate-y-0"
                zIndex = 30
              } else if (position === -1) {
                // Left card
                positionClass = "-translate-x-52 scale-90 opacity-100" //originially 90
                zIndex = 20
              } else if (position === 1) {
                // Right card
                positionClass = "translate-x-52 scale-90 opacity-100" //originally 90
                zIndex = 20
              } else if (position === -2) {
                // Far left card
                positionClass = "-translate-x-80 scale-75 opacity-95" //originally 70
                zIndex = 10
              } else if (position === 2) {
                // Far right card
                positionClass = "translate-x-80 scale-75 opacity-95" //originally 70
                zIndex = 10
              } else {
                // Hide other cards
                positionClass = "opacity-0"
                zIndex = 0
              }

              return (
                <div
                  key={index}
                  className={`absolute transition-all duration-300 ease-in-out transform-gpu ${positionClass}`}
                  style={{ zIndex }}
                >
                    {/* Cards for display */}
                <div className="">
                    <Card cardId={cardId} />
                </div>
                </div>
              )
            })}
          </div>

          <button
            onClick={goToNext}
            className="absolute right-2 z-40 bg-indigo-800 bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 text-white transition-all"
            aria-label="Next card"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default PackOpenCarousel