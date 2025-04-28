// Trigger at beginnign of each day
//have corner X button to close(use from pack open carousel)
//know day and show the reward for that day
//have claim reward button
//auto close once grab reward? or have close button too?

import { X } from "lucide-react"


function DailyRewardPopup({ isOpen, onClose }) {

  if (!isOpen ) return null

  return (
      <>
        <div className ="fixed flex h-[50%] w-[60%] top-[27%] left-[20%] bg-gradient-to-b from-accent to-accent2 border-4 border-[#C4F7BC] rounded-lg p-4 z-50 ">
          {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-30"
              aria-label="Close"
            >
              <X size={32} />
            </button>
          <div className="absolute left-[37%] top-4 text-6xl ">
              Daily Rewards
          </div>
          <div className="relative h-[80%] w-[90%] top-[19%] left-[3%] px-auto">
            <div className="absolute h-[80%] w-[20%] bg-[#C4F7BC] left-[%] rounded-lg text-black text-4xl flex justify-center pt-4">
                Day 1
                <div className="absolute h-[55%] w-[80%]  text-black text-4xl flex justify-center top-[25%]">
                  <img src="/assets/coins-bundle.svg" height={150} width={150} alt="Coins-Bundle-Image" className="absolute top-[3%] z-30"></img>
                  <div className="absolute top-[70%] text-[#0B0C2A] ">
                      250 Coins
                  </div>
                </div>
                <button className="absolute top-[83%] ">
                  Claim Reward
                </button>
            </div>
            <div className="absolute h-[80%] w-[20%] bg-[#C4F7BC] left-[21%] rounded-lg text-black text-4xl flex justify-center pt-4">
                Day 2
                <div className="absolute h-[55%] w-[80%]  text-black text-4xl flex justify-center top-[25%]">
                  <img src="/assets/coins-bundle.svg" height={150} width={150} alt="Coins-Bundle-Image" className="absolute top-[3%] z-30"></img>
                <div className="absolute top-[70%] text-[#0B0C2A]">
                      500 Coins
                  </div>
                </div>
                <button className="absolute top-[83%]">
                  Claim Reward
                </button>
            </div>
            <div className="absolute h-[80%] w-[20%] bg-[#C4F7BC] left-[42%] rounded-lg text-black text-4xl flex justify-center pt-4">
              Day 3
              <div className="absolute h-[55%] w-[80%]  text-black text-4xl flex justify-center top-[25%]">
                <img src="/assets/coins-bundle.svg" height={150} width={150} alt="Coins-Bundle-Image" className="absolute top-[3%] z-30"></img>
                  <div className="absolute top-[70%] text-[#0B0C2A]">
                      750 Coins
                  </div>
                </div>
                <button className="absolute top-[83%]">
                  Claim Reward
                </button>
            </div>

            <div className="absolute h-[80%] w-[20%] bg-[#C4F7BC] left-[63%] rounded-lg text-black text-4xl flex justify-center pt-4">
                Day 4
                <div className="absolute h-[55%] w-[80%]  text-black text-4xl flex justify-center top-[25%]">
                  <img src="/assets/coins-bundle.svg" height={150} width={150} alt="Coins-Bundle-Image" className="absolute top-[3%] z-30"></img>
                  <div className="absolute top-[70%] text-[#0B0C2A]">
                      1000 Coins
                  </div>
                </div>
                <button className="absolute top-[83%]">
                  Claim Reward
                </button>
            </div>

            <div className="absolute h-[80%] w-[20%] bg-gradient-to-b from-accent to-accent2 border-4 left-[84%] rounded-xl flex justify-center pt-2 text-5xl ">
                Day 5
                <div className="absolute h-[55%] w-[80%] text-black text-4xl flex justify-center top-[25%]">
                <img src="/assets/gems-bundle.svg" height={180} width={180} alt="Gems-Bundle-Image" className="absolute top-[1%] z-30"></img>
                  <div className="absolute top-[70%] text-white">
                      300 Gems
                  </div>
                </div>
                <button className="absolute top-[83%] text-3xl">
                  Claim Reward
                </button>
            </div>
            {/* Collect Rewards Button (add functionality to gather reward) */}
            <button
                type="button"
                onClick={onClose}
                className="absolute w-[30%] top-[80%] left-[35%] flex items-center justify-center bg-[#0B0C2A] text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-4xl px-5 py-1.5 mt-4 border-4">
                  Collect Reward
              </button>
          </div>
        </div>       
      </>
  );

}

export default DailyRewardPopup