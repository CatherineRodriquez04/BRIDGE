import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "@/lib/firebase";
import Link from "next/link";

function CalcSpendingScore(totalCashSpent) {
    let spendingScore;
  
    if (totalCashSpent < 2) {
      spendingScore = 500;
    } else if (totalCashSpent <= 5) {
      spendingScore = 400;
    } else if (totalCashSpent <= 10) {
      spendingScore = 300;
    } else if (totalCashSpent <= 25) {
      spendingScore = 200;
    } else if (totalCashSpent <= 50) {
      spendingScore = 100;
    } else {
      spendingScore = 0;
    }

    return spendingScore;
  }

  const calcGatchaScore = (standard, medium, premium) => {
    const totalPacks = standard + medium + premium;
    const maxPacks = 25;
    const maxScore = 500;

    const usagePenalty = totalPacks / maxPacks;
    const weightedPenalty = (standard * 1) + (medium * 2) + (premium * 3);
    const worstCasePenalty = maxPacks * 3;

    const efficiencyScore = 1 - (weightedPenalty / worstCasePenalty);
    const gatchaScore = Math.round(efficiencyScore * maxScore);

    return gatchaScore;
};

function CalcTacticsScore(totalGemsSpent) {
    let tacticsScore;
//   Adjust these values later
    if (totalGemsSpent <= 150) {
      tacticsScore = 500;
    } else if (totalGemsSpent <= 250) {
        tacticsScore = 400;
    } else if (totalGemsSpent <= 500) {
        tacticsScore = 300;
    } else if (totalGemsSpent <= 750) {
        tacticsScore = 200;
    } else if (totalGemsSpent <= 1000) {
        tacticsScore = 100;
    } else {
        tacticsScore = 0;
    }

    return tacticsScore;
  }


const calcTotalScore = (spendingScore, gatchaScore, tacticsScore) => {
    const maxIndividualScore = 500; // Max possible score for each category
    const maxTotalScore = 1500;     // Total max score (3 x 500)

    // Step 1: Sum all individual scores
    const rawTotal = spendingScore + gatchaScore + tacticsScore;

    // Step 2: Normalize the score to make sure it doesn't exceed the max
    const normalizedTotal = Math.min(rawTotal, maxTotalScore);

    // Step 3: Round to nearest integer (optional, if scores could be floats)
    const finalScore = Math.round(normalizedTotal);

    return finalScore;
};



function TaskResults() {

    const [days, setDays] = useState(1);
    const [shopCount, setShopCount] = useState(0);
    const [battleCount, setBattleCount] = useState(0);
    const [packCount, setPackCount] = useState(0);
    const [userId, setUserId] = useState(null);

    //spending score
    const [spendingScore, setSpendingScore] = useState(0);
    const [totalCashSpent, setTotalCashSpent] = useState(0);

    // gatcha score
    const [totalStandardPacks, setTotalStandardPacks] = useState(0);
    const [totalMediumPacks, setTotalMediumPacks] = useState(0);
    const [totalPremiumPacks, setTotalPremiumPacks] = useState(0);
    const [gatchaScore, setGatchaScore] = useState(0);

    //Tactics Score
    const [totalGemsSpent, setTotalGemsSpent] = useState(0);
    const [tacticsScore, setTacticsScore] = useState(0); // Placeholder for tactics score
    

    //Total Score
    const [totalScore, setTotalScore] = useState(0); // Placeholder for total score

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
          if (user) {
            setUserId(user.uid);
            const docRef = doc(db, "players", user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
              const data = docSnap.data();
              const currentDay = data.days || 1;
              setDays(currentDay);
    
              setShopCount(data[`shopDay${currentDay}`] || 0);
              setBattleCount(data[`battlesDay${currentDay}`] || 0);
              setPackCount(data[`packsDay${currentDay}`] || 0);
      
              const cashSpent = data.totalCashSpent || 0; // ✅ define this first
              setTotalCashSpent(cashSpent);

              const score = CalcSpendingScore(cashSpent); // ✅ use the correct variable
              setSpendingScore(score);


              const standard = data.totalStandardPacks || 0;
              const medium = data.totalMediumPacks || 0;
              const premium = data.totalPremiumPacks || 0;

              setTotalStandardPacks(standard);
              setTotalMediumPacks(medium);
              setTotalPremiumPacks(premium);

              const gatchaScore = calcGatchaScore(standard, medium, premium);
              setGatchaScore(gatchaScore);

              await updateDoc(docRef, { gatchaScore: gatchaScore });

              //Do same as above for tactics score
              const gemsSpent = data.totalGemsSpent || 0; // ✅ define this first
              setTotalGemsSpent(gemsSpent);
                
              const tacticsScore = CalcTacticsScore(gemsSpent); // ✅ use the correct variable
                setTacticsScore(tacticsScore);
                await updateDoc(docRef, { tacticsScore: tacticsScore });



                // ✅ Use locally-calculated values
                //Final Score
                const totalScore = calcTotalScore(score, gatchaScore, tacticsScore);
                setTotalScore(totalScore);

                await updateDoc(docRef, { totalScore: totalScore });
            }
          }
        });
        return () => unsubscribe();
      }, []);

    return (
        <>
            <div className="absolute w-full h-full bg-[#0B0C2A]">
                {/* Left Page */}
                <div className="absolute h-full w-[50%] left-0 bg-[#0B0C2A] rounded-l-lg overflow-y-auto scrollbar-hidden">
                    <div className="relative flex flex-col items-center top-[5%] h-[1%] text-[58px]">
                        Results
                    </div>
                        <div className="relative w-full mx-auto pt-[30%]">
                            <h2 className="text-center text-5xl tracking-wide mb-6">Scores</h2>

                            {/* Top row - 3 items */}
                            <div className="flex justify-between pt-12 ">
                                <div className="text-center w-1/3">
                                    <button className="text-5xl mb-1">Spending</button>
                                    <p className="text-4xl  text-white ">{Math.round((spendingScore / 500) * 100)}%</p>
                                    {/* Fillable value later */}
                                </div>

                                <div className="text-center w-1/3">
                                    <button className="text-5xl mb-1">Gatcha</button>
                                    <p className="text-4xl  text-white">{Math.round((gatchaScore / 500) * 100)}%</p>
                                </div>

                                <div className="text-center w-1/3">
                                    <button className="text-5xl mb-1">Tactics</button>
                                    <p className="text-4xl  text-white">{Math.round((tacticsScore / 500) * 100)}%</p>
                                </div>
                            </div>
                        </div>
                    {/* Overall Score: */}
                    <div className="relative pt-4 flex flex-col items-center top-[20%] h-[20%] w-full text-5xl">
                        Overall Score:
                        <div className="pt-4 text-4xl">
                            {/* ##% Survivability */}
                            {Math.round((totalScore / 1500) * 100)}% Survivability
                            
                        </div>
                    </div>
                </div>

                {/* Right Page */}
                <div className="absolute h-full w-[50%] right-0 bg-[#0B0C2A] rounded-r-lg border-l-4 overflow-y-auto scrollbar-hidden">
                    <div className="relative flex flex-col items-center top-[9%] h-[1%] text-4xl">
                        Score Breakdown
                    </div>
                    {/* Scores(progressbars) */}
                    <div className="absolute w-full text-[#a3ffb0] top-[25%]">
                        <h2 className="text-center text-3xl tracking-wide mb-6">Categories</h2>

                        <div className="relative w-full mx-auto">
                            {/* Top row - 3 items */}
                            <div className="flex justify-between mb-8">
                            <div className="text-center w-1/3">
                                <p className="text-3xl mb-1">Spending</p>
                                <p className="text-2xl ">/ 500</p>
                                {/* Fillable value later */}
                            </div>

                            <div className="text-center w-1/3">
                                <p className="text-3xl mb-1">Gatcha</p>
                                <p className="text-2xl ">/ 500</p>
                            </div>

                            <div className="text-center w-1/3">
                                <p className="text-3xl mb-1">Tactics</p>
                                <p className="text-2xl">/ 500</p>
                            </div>
                            </div>


                            <h2 className="text-center text-3xl tracking-wide mb-6">Category Breakdown</h2>

                                <h3 className="pl-12 text-3xl tracking-wide mb-6">Spending</h3>
                                <p className="pl-16 text-xl tracking-wide mb-6 whitespace-normal overflow-hidden max-w-[90%]">
                                    The spending category tracks your spending habits, including how much of each currency is spent, where it is spent, and 
                                    conversions made. These include conversion of real money to gems and gems to coins. You begin with a full score of 500,
                                    and as you spend premium currency, you are penalized accordingly based on the ammount. The goal of this score is to track
                                    how willing you were to spend premium currency, which often means you fell for the tactics established by the simulation.
                                    Tip: To maximize this score, it is best to play "free to play", that is, stick to freebies & freemium currency. This takes
                                    dedication, patience, and willpower, which this simulation hopes to nurture.
                                </p>

                                <h3 className="pl-12 text-3xl tracking-wide mb-6">Gatcha</h3>
                                <p className="pl-16 text-xl tracking-wide mb-6 whitespace-normal overflow-hidden max-w-[90%]">
                                    Gatcha, or a packs/ lottery system, works by encouraging users to exchange real money or currency for the chance of gaining 
                                    a specific item / reward. This is often done through packs, loot boxes, drops, crates, or other visual forms of bundling items.
                                    These items often include cosmetics, useful gameplay items, backgrounds, and other earnable content. This concept mimics gambling
                                    or slot machines, as it obscures the exchange of currency for items into a game of chance. In order to recieve a specific item,
                                    players are required to buy an untold amount of "wishes" or chances to earn them. This can often take many attempts, inflating the 
                                    average price of each item. This can turn off many smart players, so companies have resorted to other incentives, including guaranteed
                                    pulls often called "wishing". Through wishing, players are promised a guaranteed type of item after fulfilling a certain condition. This 
                                    can range from a set # of purchases, a spending amount, or other milestones that encourage the purchasing of more chances. Like a carrot on
                                    a stick, the reward of a guaranteed item is dangled in front of players, who are pushed to spend more than desired to hedge their bets. This
                                    method is so potent, that even more advanced players have been observed attempting to "game the system" by saving up these wishes for special
                                    events. While noble, this strategy ultimately suffers the same fate, as excess spending occurs and the use of real money is inevitably pressured.
                                    Tip: To maximize this score, it is best to have patience and earn currency through playing the game and progressing. While slower and less lucrative,
                                    it is best for combatting this manipulative tactic. It is best to use your natural progression and sense of earning your way to help stay true to this 
                                    strategy, as the feeling of FOMO can be difficult to escape.
                                </p>

                                <h3 className="pl-12 text-3xl tracking-wide mb-6">Tactics</h3>
                                <p className="pl-16 text-xl tracking-wide mb-6 whitespace-normal overflow-hidden max-w-[90%]">
                                    Fill in later
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default TaskResults

//fiunal score pkanning

//Calcs:

//Gatcha
//just take pack daily limitt
//find a way to track total over alldays, or just each day
//totalPackOpened
//just take 1/5 score or 1/25 and mult by 10 to get /500

//IDEA:
//create full tracking # for each pack, use directly for wishing
///one for each pack

//Tactics:
//cummulation of daily limits
//eventually based on clicking certain buttons (tacticsTotal)

