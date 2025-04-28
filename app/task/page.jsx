//T.A.S.K. Page

"use client"

import Link from "next/link";

//import Poster from "/assets/poster.png";

import GameNavbar from "@/components/ui/game-navbar.jsx";

import TaskTabs from "@/components/ui/task-tabs.jsx";

import TaskDisplay from "@/components/ui/task-display.jsx"



function Task() {
  return (
    <>
          <div className="h-screen w-screen flex fade-in bg-gradient-to-b from-accent to-accent2 relative">{/*  (for some reason, breaks styling / placement of cards*/}
          <Link href="/homescreen"> {/* Return to game buttom */}
                    <button className="absolute top-[10px] left-6 text-2xl z-10 flex items-center justify-center bg-[#0B0C2A] text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg px-5 py-1.5 mt-2 border-4">
                        Return to Game
                    </button>
                </Link> 
              <div className="absolute top-[2%] text-6xl left-[46%] flex justify-center">
                T.A.S.K.
              </div>
            {/* Main box */}
            <TaskDisplay/>
        </div> 
    </>
  );
}

export default Task

