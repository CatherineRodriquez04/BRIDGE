

function DailyRewardPopup() {
  return (
      <>
        <div className="fixed flex h-[40%] w-[60%] top-[33%] left-[20%] bg-gradient-to-b from-accent to-accent2 border-4 border-[#C4F7BC] rounded-lg p-4 z-40 ">
          Daily Reward Popup
          <div className=" top-[5%]">
            <div className="absolute h-[60%] w-[15%] bg-[#C4F7BC] left-[1%] rounded-lg">
                Day 1
            </div>
            <div className="absolute h-[60%] w-[15%] bg-[#C4F7BC] left-[17%] rounded-lg">
              Day 2
            </div>
            <div className="absolute h-[60%] w-[15%] bg-[#C4F7BC] left-[33%] rounded-lg">
              Day 3
            </div>
            <div className="absolute h-[60%] w-[15%] bg-[#C4F7BC] left-[49%] rounded-lg">
              Day 4
            </div>
            <div className="absolute h-[60%] w-[15%] bg-[#C4F7BC] left-[80%] rounded-lg">
              Day 5
            </div>
          </div>
        </div>       
      </>
  );

}

export default DailyRewardPopup