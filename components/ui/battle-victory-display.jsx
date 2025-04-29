"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

function BattleVictoryDisplay() {
    const [coinsAwarded, setCoinsAwarded] = useState(false);

    useEffect(() => {
        const awardCoins = async () => {
        const auth = getAuth();
        onAuthStateChanged(auth, async (user) => {
            if (user && !coinsAwarded) {
            const docRef = doc(db, "players", user.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const currentCoins = docSnap.data().coins || 0;
                const updatedCoins = currentCoins + 500;

                await updateDoc(docRef, { coins: updatedCoins });
                setCoinsAwarded(true); // prevent awarding multiple times
            }
            }
        });
        };

        awardCoins();
    }, [coinsAwarded]);

    return (
        <>
        <div className="relative h-[40%] w-[60%] bg-[#0B0C2A] border-4 border-[#C4F7BC] rounded-lg flex justify-center mx-auto z-20 top-[25%] hover:text-[#C4F7BC]">
            <p className="absolute top-[10%] text-5xl text-white">Battle Victory!</p>

            <div className="absolute top-[30%] text-3xl text-white">+500 Coins</div>
            <div className="absolute top-[47%] text-3xl text-white">+1 Standard Pack</div>

            <Link href="/homescreen">
            <button
                type="button"
                className="absolute w-[25%] top-[67%] left-[38%] flex items-center justify-center bg-[#0B0C2A] text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-4xl px-5 py-1.5 mt-2 border-4"
            >
                Return to Home
            </button>
            </Link>
        </div>
        </>
    );
}

export default BattleVictoryDisplay;
