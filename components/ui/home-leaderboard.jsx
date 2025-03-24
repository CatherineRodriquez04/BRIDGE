// interface LeaderboardEntry {
//     rank: number
//     name: string
//     days: number
//     total: number
//   }
  
//   interface LeaderboardProps {
//     entries: LeaderboardEntry[]
//   }

// { entries = [] }: LeaderboardProps)
  
function HomeLeaderboard() {
    // Default entries if none provided
    // const leaderboardEntries =
    //   entries.length > 0
    //     ? entries
    //     : [
    //         { rank: 1, name: "name", days: 3, total: 1912 },
    //         { rank: 2, name: "name", days: 3, total: 1912 },
    //         { rank: 3, name: "name", days: 3, total: 1912 },
    //         ...Array(7)
    //           .fill(null)
    //           .map((_, i) => ({
    //             rank: i + 4,
    //             name: "name",
    //             days: 3,
    //             total: 1912,
    //           })),
    //       ]
  
    return (
      <div className="bg-gray-900 border border-mint-green rounded-lg overflow-hidden">
        <div className="bg-gray-900 p-3 border-b border-mint-green">
          <h2 className="text-mint-green text-center text-xl">Leaderboard</h2>
        </div>
        <div className="p-2">
          <div className="grid grid-cols-4 text-white text-sm mb-2">
            <div>Rank</div>
            <div>Name</div>
            <div>Day Survived</div>
            <div>Total Collection</div>
          </div>
  
          {/* {leaderboardEntries.map((item) => (
            <div key={item.rank} className="grid grid-cols-4 text-white text-sm py-2 border-b border-blue-900">
              <div className="flex items-center">
                {item.rank <= 3 ? (
                  <div
                    className={`w-5 h-5 rounded-full ${
                      item.rank === 1 ? "bg-yellow-400" : item.rank === 2 ? "bg-gray-300" : "bg-orange-400"
                    } mr-1`}
                  ></div>
                ) : (
                  item.rank
                )}
              </div>
              <div>{item.name}</div>
              <div>{item.days}</div>
              <div>{item.total}</div>
            </div>
          ))} */}
        </div>
      </div>
    )
  }

  export default HomeLeaderboard