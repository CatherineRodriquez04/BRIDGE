import { Check } from "lucide-react";
import React from "react";
import { usePlayer } from "@/components/ui/PlayerContent"; // adjust if needed

export default function HomeDailyRewards() {
  const { days } = usePlayer(); // Current player day

  const rewards = [
    { day: 1, amount: 250, type: "coins" },
    { day: 2, amount: 500, type: "coins" },
    { day: 3, amount: 750, type: "coins" },
    { day: 4, amount: 1000, type: "coins" },
    { day: 5, amount: 300, type: "gems" },
  ];

  return (
    <div className="fixed bottom-6 right-8 z-10">
      <div className="bg-[#0B0C2A] p-4 rounded-lg border border-accent3">
        <div className="flex space-x-2">
          {rewards.map((reward) => {
            const showCheck = reward.day <= days;
            const iconSrc =
              reward.type === "coins"
                ? "/assets/coins-bundle.svg"
                : "/assets/gems-bundle.svg";

            return (
              <div
                key={reward.day}
                className={`relative w-28 h-40 rounded flex flex-col items-center justify-between py-3 ${
                  reward.day < days
                    ? "bg-[#8BFFB0]"
                    : reward.day === days
                    ? "bg-[#5A7D68]"
                    : "bg-gradient-to-b from-accent to-accent2"
                }`}
              >
                <div className="text-center font-bold text-xl text-white">
                  DAY {reward.day}
                </div>

                <img
                  src={iconSrc}
                  alt={`${reward.type}-icon`}
                  className="h-[75px] w-[75px] mt-1"
                />

                <div className="text-center font-bold text-xl text-white">
                  {reward.amount} {reward.type === "coins" ? "COINS" : "GEMS"}
                </div>

                {showCheck && (
                  <div className="absolute -bottom-6 w-10 h-10 rounded-full bg-[#8BFFB0] border-4 border-[#0B0C2A] flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#0B0C2A]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
