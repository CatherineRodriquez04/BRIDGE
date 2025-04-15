
import LeaderboardEntry from '@/components/ui/leaderboard-entry.jsx'

function LeaderboardDisplay() {
  return (
      <>
        <div className="fixed flex left-[9%] h-[1000px] w-[80%] top-[480px] border-4 border-[#86CEBC] bg-[#221B48] rounded-lg overflow-y-scroll z-20 bl">
          <LeaderboardEntry/>  
          {/* <LeaderboardEntry/>
          <LeaderboardEntry/>
          <LeaderboardEntry/>
          <LeaderboardEntry/>
          <LeaderboardEntry/>
          <LeaderboardEntry/>
          <LeaderboardEntry/> */}
        </div>
      
      </>
  );

}

export default LeaderboardDisplay