
import CharAnnouncement from "@/public/assets/char-announcement.png";
import Image from "next/image";
import avatar1 from "@/public/assets/avatarTemp.png";

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function HomeAnnouncements() {
  const [activeIndex, setActiveIndex] = useState(0)

  // Sample gallery images - replace with your actual images later
  const images = [
    //"/assets/announcements/announce-test.svg?height=400&width=400",
    "/assets/announcements/CardPackAd.png?height=400&width=400",
    "//assets/announcements/JumboAdBonus.png?height=400&width=400",
    "/assets/announcements/LeaderboardAd.png?height=400&width=400",
    //"/placeholder.svg?height=400&width=400",
  ]

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [activeIndex])

  // Navigate to previous slide
  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  // Navigate to next slide
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <div className="absolute top-24 right-6 w-[30%] h-96">
      <div className="relative w-full rounded-lg overflow-hidden border border-accent3">
        {/* Carousel wrapper */}
        <div className="relative h-[410px] overflow-hidden rounded-lg bg-[#0B0C2A]">
          {/* Gallery items */}
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === activeIndex ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <img
                src={image || "/placeholder.svg"}
                className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt={`Gallery image ${index + 1}`}
              />
            </div>
          ))}
        </div>

        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 left-0 flex items-center justify-center h-full px-2 cursor-pointer group focus:outline-none"
          onClick={prevSlide}
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#0F1550]/70 group-hover:bg-[#0F1550] transition-colors">
            <ChevronLeft className="w-4 h-4 text-white" />
            <span className="sr-only">Previous</span>
          </span>
        </button>

        <button
          type="button"
          className="absolute top-0 right-0  flex items-center justify-center h-full px-2 cursor-pointer group focus:outline-none"
          onClick={nextSlide}
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#0F1550]/70 group-hover:bg-[#0F1550] transition-colors">
            <ChevronRight className="w-4 h-4 text-white" />
            <span className="sr-only">Next</span>
          </span>
        </button>

        {/* Indicators */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2  flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-2 h-2 rounded-full ${index === activeIndex ? "bg-[#4eff91]" : "bg-white/50"}`}
              onClick={() => setActiveIndex(index)}
              aria-current={index === activeIndex ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

