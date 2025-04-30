import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "@/lib/firebase";
import Link from "next/link";

function TaskGatcha() {
    const [totalStandardPacks, setTotalStandardPacks] = useState(0);
    const [totalMediumPacks, setTotalMediumPacks] = useState(0);
    const [totalPremiumPacks, setTotalPremiumPacks] = useState(0);
    const [gatchaScore, setGatchaScore] = useState(0);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const docRef = doc(db, "players", user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    const standard = data.totalStandardPacks || 0;
                    const medium = data.totalMediumPacks || 0;
                    const premium = data.totalPremiumPacks || 0;

                    setTotalStandardPacks(standard);
                    setTotalMediumPacks(medium);
                    setTotalPremiumPacks(premium);

                    const score = calcGatchaScore(standard, medium, premium);
                    setGatchaScore(score);
                }
            }
        });
        return () => unsubscribe();
    }, []);

    const calcGatchaScore = (standard, medium, premium) => {
        const totalPacks = standard + medium + premium;
        const maxPacks = 25;
        const maxScore = 500;

        // Lower spending is better, so the fewer packs bought, the better the score
        const usagePenalty = totalPacks / maxPacks; // 0 to 1

        // Weighted by cost impact: Standard = 1, Medium = 2, Premium = 3
        const weightedPenalty = (standard * 1) + (medium * 2) + (premium * 3);
        const worstCasePenalty = maxPacks * 3; // if all were premium

        // Combine the effects
        const efficiencyScore = 1 - (weightedPenalty / worstCasePenalty); // 0 to 1
        const finalScore = Math.round(efficiencyScore * maxScore);

        return finalScore;
    };

    return (
        <>
            <div className="absolute w-full h-full bg-[#0B0C2A]">
                <div className="absolute h-full w-[50%] left-0 bg-[#0B0C2A] rounded-l-lg overflow-y-auto scrollbar-hidden">
                    <div className="relative flex flex-col items-center top-[9%] h-[1%] text-6xl">
                        Gatcha
                    </div>
                    <div className="relative flex flex-col items-center top-[25%] h-[30%] w-full pt-4 ">
                    <h2 className="text-center text-5xl tracking-wide ">By Pack:</h2>
                    
                        <img src="/assets/standard-pack.svg" height={70} width={70} alt="Card-Pack-1" className="absolute left-[16.3%] top-[13rem]" />
                        <div className="absolute pt-20 text-4xl left-[13%] text-[32px] ">
                            Standard
                        </div>
                        <div className="absolute pt-32 text-4xl left-[20.6%]  text-white">
                            {totalStandardPacks}
                        </div>

                        <img src="/assets/medium-pack.svg" height={70} width={70} alt="Card-Pack-1" className="absolute left-[45.5%] top-[13rem]" />
                        <div className="absolute pt-20 text-4xl flex justify-center text-[32px] left-[44%]">
                            Medium
                        </div>
                        <div className="absolute pt-32 text-4xl flex justify-center left-[49.6%]  text-white">
                            {totalMediumPacks}
                        </div>

                        <img src="/assets/premium-pack.svg" height={70} width={70} alt="Card-Pack-1" className="absolute left-[74.5%] top-[13rem]" />
                        <div className="absolute pt-20 text-4xl left-[72%] text-[32px]">
                            Premium
                        </div>
                        <div className="absolute pt-32 text-4xl left-[78.7%] text-white">
                            {totalPremiumPacks}
                        </div>
                    </div>
                    <div className="relative flex flex-col pt-4 items-center top-[37%] h-[20%] w-full text-4xl ">
                        Overall Score:
                        <div className="pt-8 text-2xl">
                            {Math.round((gatchaScore / 500) * 100)}% Survivability
                        </div>
                    </div>
                </div>

                <div className="absolute h-full w-[50%] right-0 bg-[#0B0C2A] rounded-r-lg border-l-4 overflow-y-auto scrollbar-hidden">
                    <div className="relative flex flex-col items-center top-[9%] h-[1%] text-4xl">
                        Currency Breakdown
                    </div>
                    <div className="absolute w-full text-[#a3ffb0] top-[23%]">
                        <h2 className="text-center text-4xl tracking-wide mb-6">Pack Types</h2>

                        <div className="relative w-full mx-auto">
                            <div className="flex justify-between mb-8">
                                <div className="text-center w-1/3">
                                    <p className="text-3xl mb-1">Standard</p>
                                    <img src="/assets/standard-pack.svg" height={70} width={70} alt="Card-Pack-1" className="absolute left-[11%] top-12" />
                                </div>

                                <div className="text-center w-1/3">
                                    <p className="text-3xl mb-1">Medium</p>
                                    <img src="/assets/medium-pack.svg" height={70} width={70} alt="Card-Pack-1" className="absolute left-[44.7%] top-12" />
                                </div>

                                <div className="text-center w-1/3">
                                    <p className="text-3xl mb-1">Premium</p>
                                    <img src="/assets/premium-pack.svg" height={70} width={70} alt="Card-Pack-1" className="absolute left-[78%] top-12" />
                                </div>
                            </div>

                            <h2 className="text-center text-3xl tracking-wide mb-6 mt-36">Gatcha/Packs Breakdown</h2>

                            <h3 className="pl-12 text-3xl tracking-wide mb-6">Standard Pack</h3>
                            <p className="pl-16 text-xl tracking-wide mb-6 whitespace-normal overflow-hidden max-w-[90%]">
                                Coins
                            </p>

                            <h3 className="pl-12 text-3xl tracking-wide mb-6">Medium Pack</h3>
                            <p className="pl-16 text-xl tracking-wide mb-6 whitespace-normal overflow-hidden max-w-[90%]">
                                Gems
                            </p>

                            <h3 className="pl-12 text-3xl tracking-wide mb-6">Premium Pack</h3>
                            <p className="pl-16 text-xl tracking-wide mb-6 whitespace-normal overflow-hidden max-w-[90%]">
                                USD
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TaskGatcha;
//Gatcha Score calculated / coded in page
//track total # of each pack opened