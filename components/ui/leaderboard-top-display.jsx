
function LeaderboardTopDisplay() {
    return (
        <>
            {/* Top 3 display */}
            <div className=" ">
              {/* First */}
              {/* First player name/ title */}

              {/* First place icon */}
              <div className="absolute h-[14%] w-[7%] top-[250px] left-[46%] flex bg-black border-4 border-[#C4F7BC]">
                <div className="absolute text-3xl bottom-[130px] ">
                  1st Place
                </div>
              {/* fill with user icon */}
              <img src="/assets/avatarTemp.png" alt="1st-Place-User-Icon" className="absolute"></img>

                <img src="/assets/first-badge.svg" width={160} height={400} alt="First-Place-Badge" className="fixed top-[336px] left-[871px]"></img>
              </div>

              {/*Second*/}
              <div className="absolute h-[14%] w-[7%] top-[290px] left-[36%] flex bg-black border-4 border-[#C4F7BC]">
                <div className="absolute text-3xl bottom-[130px]">
                  3rd Place
                </div>
                {/* UserIcon */}
                <img src="/assets/avatarTemp3.png" alt="1st-Place-User-Icon" className="absolute"></img>

                  <img src="/assets/second-badge.svg" width={160} height={400} alt="Second-Place-Badge" className="fixed top-[373px] left-[679px]"></img>
              </div>

              {/* Third  */}
              <div className="absolute h-[14%] w-[7%] top-[290px] left-[56%] flex bg-black border-4 border-[#C4F7BC]">
                <div className="absolute text-3xl bottom-[130px] ">
                    2nd Place
                  </div>
                  {/* UserIcon */}
                  <img src="/assets/avatarTemp2.png" alt="1st-Place-User-Icon" className="absolute"></img>

                  <img src="/assets/third-badge.svg" width={160} height={400} alt="Third-Place-Badge" className="fixed top-[374px] right-[698px] "></img>
              </div>
            </div>
        </>
    );

}

export default LeaderboardTopDisplay