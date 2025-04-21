
import { Check } from "lucide-react"
import React from "react"
import { useState } from "react"  

export default function HomeDailyRewards() {
  // Sample data for the daily rewards
  const rewards = [
    { day: 1, coins: 10, claimed: true },
    { day: 2, coins: 20, claimed: false },
    { day: 3, coins: 30, claimed: false },
    { day: 4, coins: 40, claimed: false },
    { day: 5, coins: 50, claimed: false },
  ]

  return (
    <div className="fixed bottom-6 right-8 z-10">
      <div className="bg-[#0B0C2A] p-4 rounded-lg border border-[#4eff91]/30">
        <div className="flex space-x-2">
          {rewards.map((reward, index) => (
            <div
              key={index}
              className={`relative w-28 h-40 rounded flex flex-col items-center justify-between py-3 ${
                reward.claimed
                  ? "bg-[#8BFFB0]"
                  : index === 1
                    ? "bg-[#5A7D68]"
                    : index === 2
                      ? "bg-[#4A6857]"
                      : index === 3
                        ? "bg-[#3A5346]"
                        : "bg-gradient-to-b from-accent to-accent2"
              }`}
            >
              <div className={`text-center font-bold text-xl ${reward.claimed ? "text-[#0B0C2A]" : "text-white/80"}`}>
                DAY {reward.day}
              </div>

              <div className="relative">
                {/* Coin stack - 3 overlapping coins */}
                <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-yellow-400 border-2 border-yellow-600 flex items-center justify-center">
                  <span className="text-yellow-800 font-bold">D</span>
                </div>
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-yellow-400 border-2 border-yellow-600 flex items-center justify-center">
                  <span className="text-yellow-800 font-bold">D</span>
                </div>
                <div className="absolute -right-4 top-0 w-8 h-8 rounded-full bg-yellow-400 border-2 border-yellow-600 flex items-center justify-center">
                  <span className="text-yellow-800 font-bold">D</span>
                </div>
                {/* Spacer for the coin height */}
                <div className="h-8"></div>
              </div>

              <div className={`text-center font-bold text-xl ${reward.claimed ? "text-[#0B0C2A]" : "text-white/80"}`}>
                {reward.coins} COINS
              </div>

              {reward.claimed && (
                <div className="absolute -bottom-6 w-10 h-10 rounded-full bg-[#8BFFB0] border-4 border-[#0B0C2A] flex items-center justify-center">
                  <Check className="w-5 h-5 text-[#0B0C2A]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
