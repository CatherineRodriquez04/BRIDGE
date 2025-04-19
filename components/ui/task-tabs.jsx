"use client"

import { useState } from "react"

function TaskTabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "")

  const handleTabClick = (tabId) => {
    setActiveTab(tabId)
  }

  return (
    <div className="relative h-[80%] w-[70%] flex m-auto items-center bg-[#0B0C2A] border-4 border-[#C4F7BC] rounded-xl">
      {/* Left box - Tab content */}
      <div className="absolute h-full w-[50%] left-0 bg-[#0B0C2A] rounded-l-lg overflow-hidden">
        {tabs.map((tab) => (
          <div key={tab.id} className={`h-full ${activeTab === tab.id ? "block" : "hidden"}`}>
            {tab.content}
          </div>
        ))}
      </div>

      {/* Right box - Tab buttons */}
      <div className="absolute h-full w-[50%] right-0 bg-[#1E1F33] rounded-r-lg flex flex-col justify-center">
        <div className="flex flex-col space-y-2 p-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`
                py-3 px-4 text-left rounded transition-colors duration-300
                ${activeTab === tab.id ? "bg-[#0B0C2A] text-white font-medium" : "bg-[#1E1F33] hover:bg-[#C4F7BC] hover:text-[#0B0C2A]"}
              `}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TaskTabs