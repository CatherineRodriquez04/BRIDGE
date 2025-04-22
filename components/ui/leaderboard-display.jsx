"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import CustomSelect from "/components/ui/custom-select.jsx";

function LeaderboardDisplay() {
  const [players, setPlayers] = useState([]);
  const [sortOption, setSortOption] = useState("score");

  const sortPlayers = (data, option) => {
    switch (option) {
      case "wins":
        return data.sort((a, b) => (b.wins || 0) - (a.wins || 0));
      case "collection":
        return data.sort(
          (a, b) =>
            Object.values(b.characterCards || {}).reduce((acc, val) => acc + val, 0) -
            Object.values(a.characterCards || {}).reduce((acc, val) => acc + val, 0)
        );
      case "scores":
        return data.sort((a, b) => (a.score ?? Infinity) - (b.score ?? Infinity));
      case "score":
      default:
        return data.sort((a, b) => (a.score ?? Infinity) - (b.score ?? Infinity));
    }
  };

  useEffect(() => {
    const fetchPlayers = async () => {
      const querySnapshot = await getDocs(collection(db, "players"));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      const sorted = sortPlayers([...data], sortOption);
      setPlayers(sorted);
    };

    fetchPlayers();
  }, [sortOption]);

  const topThree = players.slice(0, 3);

  return (
    <>
      {/* Filter Dropdown */}
      <div className="absolute top-[420px] right-[11%] z-30">
        <CustomSelect
          options={[
            { value: "score", label: "Score" },
            { value: "scores", label: "Score" },
            { value: "wins", label: "Most Wins" },
            { value: "collection", label: "Biggest Collection" },
          ]}
          onChange={setSortOption}
          defaultValue={sortOption}
          width="220px"
          className="h-[50px] bg-[#0B0C2A] text-white border-2 border-[#86CEBC] text-xl"
        />
      </div>

      {/* Top 3 display */}
      <div>
        {topThree[0] && (
          <div className="absolute h-[14%] w-[7%] top-[250px] left-[46%] flex bg-black border-4 border-[#C4F7BC]">
            <div className="absolute text-3xl bottom-[145px]">1st Place</div>
            <img src={topThree[0].avatar || "/assets/avatarTemp.png"} alt="1st-Place-User-Icon" className="absolute" />
            <img src="/assets/first-badge.svg" width={160} height={400} alt="First-Place-Badge" className="fixed top-[336px] left-[871px]" />
          </div>
        )}

        {topThree[2] && (
          <div className="absolute h-[14%] w-[7%] top-[290px] left-[36%] flex bg-black border-4 border-[#C4F7BC]">
            <div className="absolute text-3xl bottom-[145px]">3rd Place</div>
            <img src={topThree[2].avatar || "/assets/avatarTemp3.png"} alt="3rd-Place-User-Icon" className="absolute" />
            <img src="/assets/second-badge.svg" width={160} height={400} alt="Second-Place-Badge" className="fixed top-[373px] left-[679px]" />
          </div>
        )}

        {topThree[1] && (
          <div className="absolute h-[14%] w-[7%] top-[290px] left-[56%] flex bg-black border-4 border-[#C4F7BC]">
            <div className="absolute text-3xl bottom-[145px]">2nd Place</div>
            <img src={topThree[1].avatar || "/assets/avatarTemp2.png"} alt="2nd-Place-User-Icon" className="absolute" />
            <img src="/assets/third-badge.svg" width={160} height={400} alt="Third-Place-Badge" className="fixed top-[374px] right-[698px]" />
          </div>
        )}
      </div>

      {/* Leaderboard Table */}
      <div className="fixed left-[10%] w-[80%] top-[480px] max-h-[500px] border-4 border-[#86CEBC] bg-[#221B48] rounded-lg overflow-y-auto z-20">
        <table className="table-fixed w-full text-center text-2xl">
          <thead className="bg-[#0B0C2A] text-2xl sticky top-0 z-30">
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Score</th>
              <th>Days Survived</th>
              <th>Wins</th>
              <th>Total Collection</th>
            </tr>
          </thead>
          <tbody className="text-white text-2xl">
            {players.slice(0, 10).map((player, index) => (
              <LeaderboardEntry
                key={player.id}
                rank={index + 1}
                name={player.name || "Unknown"}
                score={player.score || 0}
                days={player.days || 0}
                wins={player.wins || 0}
                collection={Object.values(player.characterCards || {}).reduce((a, b) => a + b, 0)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function LeaderboardEntry({ rank, name, score, days, wins, collection }) {
  return (
    <tr>
      <td>{rank}</td>
      <td>{name}</td>
      <td>{score}</td>
      <td>{days}</td>
      <td>{wins}</td>
      <td>{collection}</td>
    </tr>
  );
}

export default LeaderboardDisplay;
