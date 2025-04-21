
import LeaderboardEntry from '@/components/ui/leaderboard-entry.jsx'

function LeaderboardDisplay() {
  return (
      <>
        <div className="fixed left-[10%] h-full w-[80%] top-[480px] border-4 border-[#86CEBC] bg-[#221B48] rounded-lg overflow-y-scroll z-20 ">
          <table className="table-fixed w-full h-full text-center text-2xl ">
            <thead className="bg-[#0B0C2A]  text-2xl h-[6%]">
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Day Survived</th>
                <th>Total Collection</th>
              </tr>
            </thead>
            <tbody className="text-white text-2xl h-full ">
              <LeaderboardEntry/>
              <LeaderboardEntry/>
              <LeaderboardEntry/>
              <LeaderboardEntry/>
              <LeaderboardEntry/>
              <LeaderboardEntry/>
              <LeaderboardEntry/>
              <LeaderboardEntry/>
              <LeaderboardEntry/>
              <LeaderboardEntry/>
              <LeaderboardEntry/>
              <LeaderboardEntry/>
              <LeaderboardEntry/>
              <LeaderboardEntry/>
              <LeaderboardEntry/>
              <LeaderboardEntry/>
              <LeaderboardEntry/>
              <LeaderboardEntry/>
              <LeaderboardEntry/>
              <LeaderboardEntry/>
              <LeaderboardEntry/>

            </tbody>
          </table>
        </div>
      
      </>
  );

}

export default LeaderboardDisplay