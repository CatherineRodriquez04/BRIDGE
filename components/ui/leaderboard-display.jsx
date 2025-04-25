"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { db } from "@/lib/firebase";
import CustomSelect from "/components/ui/custom-select.jsx";

function LeaderboardDisplay() {
  const [players, setPlayers] = useState([]);
  const [sortOption, setSortOption] = useState("score");
  const [currentDay, setCurrentDay] = useState(null);

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
      case "coins":
        return data.sort((a, b) => (b.coins ?? Infinity) - (a.coins ?? Infinity));
      case "coin":
      default:
        return data.sort((a, b) => (b.coins ?? Infinity) - (a.coins ?? Infinity));
    }
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "players", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setCurrentDay(data.days || 1);
        }
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchPlayers = async () => {
      const querySnapshot = await getDocs(collection(db, "players"));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      const sameDayPlayers = data.filter(p => (p.days || 1) === currentDay);
      const sorted = sortPlayers([...sameDayPlayers], sortOption);
      setPlayers(sorted);
    };

    if (currentDay !== null) {
      fetchPlayers();
    }
  }, [sortOption, currentDay]);

  const topThree = players.slice(0, 3);

  return (
    <>
      {/* Player's Current Day Display */}
      <div className="absolute top-[420px] left-[11%] z-30 text-white text-xl bg-[#0B0C2A] border-2 border-[#86CEBC] rounded-lg px-4 py-2">
        Current Day: {currentDay || "Loading..."}
      </div>

      {/* Filter Dropdown */}
      <div className="absolute top-[420px] right-[11%] z-30">
        <CustomSelect
          options={[
            { value: "coin", label: "Coins" },
            { value: "coins", label: "Coins" },
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
            <img src={topThree[0].avatar || "/assets/avatarTemp.png"} width={100} height={330} alt="1st-Place-User-Icon" className="absolute left-[10px]" />
            <img src="/assets/first-badge.svg" width={160} height={400} alt="First-Place-Badge" className="fixed top-[336px] left-[871px]" />
          </div>
        )}

        {topThree[2] && (
          <div className="absolute h-[14%] w-[7%] top-[290px] left-[36%] flex bg-black border-4 border-[#C4F7BC]">
            <div className="absolute text-3xl bottom-[145px]">3rd Place</div>
            <img src={topThree[2].avatar || "/assets/avatarTemp3.png"} width={100} height={330} alt="3rd-Place-User-Icon" className="absolute left-[10px]" />
            <img src="/assets/second-badge.svg" width={160} height={400} alt="Second-Place-Badge" className="fixed top-[373px] left-[679px]" />
          </div>
        )}

        {topThree[1] && (
          <div className="absolute h-[14%] w-[7%] top-[290px] left-[56%] flex bg-black border-4 border-[#C4F7BC]">
            <div className="absolute text-3xl bottom-[145px]">2nd Place</div>
            <img src={topThree[1].avatar || "/assets/avatarTemp2.png"} width={100} height={330} alt="2nd-Place-User-Icon" className="absolute left-[10px]" />
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
              <th>Coins</th>
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
                coins={player.coins || 0}
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

function LeaderboardEntry({ rank, name, coins, days, wins, collection }) {
  return (
    <tr>
      <td>{rank}</td>
      <td>{name}</td>
      <td>{coins}</td>
      <td>{days}</td>
      <td>{wins}</td>
      <td>{collection}</td>
    </tr>
  );
}

export default LeaderboardDisplay;