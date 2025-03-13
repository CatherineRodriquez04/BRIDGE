"use client"

const ShopTabs = ({ activeTab, onTabChange }) => {
  const tabs = ["Today's Featured", "Packs", "Deals", "Daily"]

  return (
    <div className="w-full mb-4">
      <div className="grid grid-cols-4 w-full">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`py-2 sm:py-3 px-2 sm:px-4 text-center font-bold text-sm sm:text-base md:text-xl ${
              activeTab === tab
                ? "bg-white text-[#0e0e2c]"
                : tab === "Packs"
                  ? "bg-[#e0e0e0] text-[#f0a500]"
                  : "bg-[#e0e0e0] text-[#0e0e2c]"
            }`}
            onClick={() => onTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ShopTabs