import { Settings } from "lucide-react"

function GameNavBar() {
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex space-x-2">
        {["PACKS", "SHOP", "EXCHANGE", "COLLECTION", "LEADERBOARD"].map((item) => (
          <button
            key={item}
            className="bg-gray-900 text-white px-4 py-2 border border-mint-green hover:bg-gray-800 transition-colors rounded-md"
          >
            {item}
          </button>
        ))}
      </div>

      <div className="flex items-center space-x-2">
        <div className="flex items-center bg-indigo-800 rounded-md px-2 py-1">
          <div className="w-6 h-6 rounded-full bg-yellow-400 mr-2"></div>
          <span className="text-white">+</span>
        </div>
        <div className="flex items-center bg-indigo-800 rounded-md px-2 py-1">
          <div className="w-6 h-6 rounded-full bg-red-500 mr-2"></div>
          <span className="text-white">+</span>
        </div>
        <button className="text-mint-green hover:text-mint-green/80 transition-colors">
          <Settings className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}

export default GameNavBar