"use client"

import { useState } from "react"

function TaskTabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "")

  const handleTabClick = (tabId) => {
    setActiveTab(tabId)
  }

  return (
    <>
      {/* Left box - Tab content */}
    <div className="relative h-screen w-screen flex justify-center items-center">
      <div className="relative h-[80%] w-[70%] flex m-auto items-center bg-[#0B0C2A] border-4 border-[#C4F7BC] rounded-xl">
        {tabs.map((tab) => (
          <div key={tab.id} className={`h-full ${activeTab === tab.id ? "block" : "hidden"}`}>
            {tab.content}
          </div>
        ))}
      </div>

      {/* Right box - Tab buttons */}
      {/* <div className="absolute h-full w-[50%] right-0 bg-[#1E1F33] rounded-r-lg flex flex-col justify-center"> */}
      <div className="flex flex-row-reverse absolute left-[85%]">
        {/* Tabs on the right */}
        <div className="flex flex-col">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`
                border-4 border-[#C4F7BC] outline-none cursor-pointer py-12 px-4 rounded-r-xl 
                transition-colors duration-300 text-base text-left tab-text border-l-0 my-2 
                ${activeTab === tab.id ? "bg-[#0B0C2A] border-r-4 border-l-0 relative z-10 " : "bg-[#C4F7BC] hover:[#C4F7BC] tab-text text-[#0B0C2A] border border-[#0B0C2A] hover:bg-[#0B0C2A] hover:text-[#C4F7BC]"}
              `}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        </div>
      </div>
      {/* </div> */}
    </>
  )
}

export default TaskTabs