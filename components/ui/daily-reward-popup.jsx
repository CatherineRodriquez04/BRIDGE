// Trigger at beginnign of each day
//have corner X button to close(use from pack open carousel)
//know day and show the reward for that day
//have claim reward button
//auto close once grab reward? or have close button too?

function DailyRewardPopup() {
  return (
      <>
        <div className="fixed flex h-[60%] w-[60%] top-[20%] left-[20%] bg-gradient-to-b from-accent to-accent2 border-4 border-[#C4F7BC] rounded-lg p-4 z-50 ">
          <div className="absolute left-[35%] top-6 text-6xl ">
              Daily Rewards
          </div>
          <div className="relative h-[80%] w-[90%] top-[20%] left-[3%] px-auto">
            <div className="absolute h-[80%] w-[20%] bg-[#C4F7BC] left-[%] rounded-lg text-black text-4xl flex justify-center pt-4">
                Day 1
                <div className="absolute h-[55%] w-[80%] bg-gradient-to-b from-accent to-accent2 border-4 rounded-xl text-black text-4xl flex justify-center top-[25%]">
                  <img src="/assets/coins-bundle.svg" height={100} width={100} alt="Coins-Bundle-Image" className="z-30"></img>
                </div>
                <button className="absolute top-[83%]">
                  Claim Reward
                </button>
            </div>
            <div className="absolute h-[80%] w-[20%] bg-[#C4F7BC] left-[21%] rounded-lg text-black text-4xl flex justify-center pt-4">
                Day 2
                <div className="absolute h-[55%] w-[80%] bg-gradient-to-b from-accent to-accent2 border-4 rounded-xl text-black text-4xl flex justify-center top-[25%]">
                <img src="/assets/coins-bundle.svg" height={100} width={100} alt="Coins-Bundle-Image" className="z-30"></img>

                </div>
                <button className="absolute top-[83%]">
                  Claim Reward
                </button>
            </div>
            <div className="absolute h-[80%] w-[20%] bg-[#C4F7BC] left-[42%] rounded-lg text-black text-4xl flex justify-center pt-4">
              Day 3
                <div className="absolute h-[55%] w-[80%] bg-gradient-to-b from-accent to-accent2 border-4 rounded-xl text-black text-4xl flex justify-center top-[25%]">
                  <img src="/assets/coins-bundle.svg" height={100} width={100} alt="Coins-Bundle-Image" className="z-30"></img>
                </div>
                <button className="absolute top-[83%]">
                  Claim Reward
                </button>
            </div>

            <div className="absolute h-[80%] w-[20%] bg-[#C4F7BC] left-[63%] rounded-lg text-black text-4xl flex justify-center pt-4">
                Day 4
                <div className="absolute h-[55%] w-[80%] bg-gradient-to-b from-accent to-accent2 border-4 rounded-xl text-black text-4xl flex justify-center top-[25%]">
                  <img src="/assets/coins-bundle.svg" height={100} width={100} alt="Coins-Bundle-Image" className="z-30"></img>
                </div>
                <button className="absolute top-[83%]">
                  Claim Reward
                </button>
            </div>

            <div className="absolute h-[80%] w-[20%] bg-gradient-to-b from-accent to-accent2 border-4 left-[84%] rounded-xl flex justify-center pt-2 text-5xl ">
                Day 5
                <div className="absolute h-[55%] w-[80%] bg-[#C4F7BC] rounded-lg text-black text-4xl flex justify-center top-[25%]">
                  <img src="/assets/gems-bundle.svg" height={120} width={120} alt="Gems-Bundle-Image" className="z-30"></img>
                </div>
                <button className="absolute top-[83%] text-3xl">
                  Claim Reward
                </button>
            </div>
          </div>
        </div>       
      </>
  );

}

export default DailyRewardPopup