// Leaderboard Page

"use client"

import Link from "next/link";
import Image from "next/image";
import GameNavbar from "@/components/ui/game-navbar.jsx";
import LeaderboardDisplay from "@/components/ui/leaderboard-display.jsx";

export default function Leaderboard() {
  return (
    <>
      <div className=" h-full min-h-screen w-screen flex fade-in bg-gradient-to-b from-accent to-accent2 overflow-hidden">

        <div className="top-6 right-[520px] absolute">
        <Link href="/leaderboard">
            <GameNavbar/>
        </Link>
        </div>
          {/* Leaderboard */}
          <div className="absolute flex justify-center items-center top-[125px] right-0 left-0 text-6xl z-10 ">
            Leaderboard
          </div>
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

                  <img src="/assets/second-badge.svg" width={160} height={400} alt="First-Place-Badge" className="fixed top-[373px] left-[679px]"></img>
              </div>

              {/* Third  */}
              <div className="absolute h-[14%] w-[7%] top-[290px] left-[56%] flex bg-black border-4 border-[#C4F7BC]">
                <div className="absolute text-3xl bottom-[130px] ">
                    2nd Place
                  </div>
                  {/* UserIcon */}
                  <img src="/assets/avatarTemp2.png" alt="1st-Place-User-Icon" className="absolute"></img>

                  <img src="/assets/third-badge.svg" width={160} height={400} alt="First-Place-Badge" className="fixed top-[374px] right-[698px] "></img>
              </div>

          </div>
          <LeaderboardDisplay/>
          
        </div>
    </>
  );
}