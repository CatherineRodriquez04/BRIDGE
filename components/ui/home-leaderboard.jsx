
import { cn } from "@/lib/utils"

// Reduce the size of the RankDisplay component
function RankDisplay({ rank }) {
  if (rank === 1) {
    return (
      <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    )
  } else if (rank === 2) {
    return (
      <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    )
  } else if (rank === 3) {
    return (
      <div className="w-6 h-6 rounded-full bg-orange-300 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    )
  } else {
    return <div className="w-6 h-6 flex items-center justify-center text-white text-sm">{rank}</div>
  }
}

function HomeLeaderboard() {
  // Temporary data - will be replaced with database data later
  const leaderboardData = [
    { rank: 1, name: "name", daysSurvived: 3, totalCollection: 1912 },
    { rank: 2, name: "name", daysSurvived: 3, totalCollection: 1912 },
    { rank: 3, name: "name", daysSurvived: 3, totalCollection: 1912 },
    { rank: 4, name: "name", daysSurvived: 3, totalCollection: 1912 },
    { rank: 5, name: "name", daysSurvived: 3, totalCollection: 1912 },
    { rank: 6, name: "name", daysSurvived: 3, totalCollection: 1912 },
    { rank: 7, name: "name", daysSurvived: 3, totalCollection: 1912 },
    { rank: 8, name: "name", daysSurvived: 3, totalCollection: 1912 },
    { rank: 9, name: "name", daysSurvived: 3, totalCollection: 1912 },
    { rank: 10, name: "name", daysSurvived: 3, totalCollection: 1912 },
  ]

  // Update the main component with smaller dimensions and font sizes
  return (
    <div className="fixed bottom-5 left-5 w-[375px] rounded-lg overflow-hidden border border-[#4eff91]/30 text-sm">
      {/* Leaderboard title */}
      <div className="bg-[#0B0C2A] py-2 text-center">
        <h2 className="text-[#4eff91] text-xl font-light tracking-wider">Leaderboard</h2>
      </div>

      {/* Header row */}
      <div className="grid grid-cols-4 bg-[#0F1550] text-white py-1.5 px-3">
        <div className="text-sm font-light">Rank</div>
        <div className="text-sm font-light">Name</div>
        <div className="text-sm font-light">Day Survived</div>
        <div className="text-sm font-light text-right">Total Collection</div>
      </div>

      {/* Leaderboard rows */}
      {leaderboardData.map((player, index) => (
        <div
          key={index}
          className={cn("grid grid-cols-4 py-1.5 px-3 items-center", index % 2 === 0 ? "bg-[#0B0C2A]" : "bg-[#0D0E35]")}
        >
          <div>
            <RankDisplay rank={player.rank} />
          </div>
          <div className="text-white text-sm font-light">{player.name}</div>
          <div className="text-white text-sm font-light text-center">{player.daysSurvived}</div>
          <div className="text-white text-sm font-light text-center">{player.totalCollection}</div>
        </div>
      ))}
    </div>
  )
}

export default HomeLeaderboard