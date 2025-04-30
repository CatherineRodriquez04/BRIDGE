"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import PackOpenCarousel from "@/components/ui/pack-open-carousel.jsx"; 

function BattleVictoryDisplay() {
    const [coinsAwarded, setCoinsAwarded] = useState(false);
    const [isCarouselOpen, setIsCarouselOpen] = useState(false);
    const [packClaimed, setPackClaimed] = useState(false);

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

    // fake pack1 cards
    const pack1Cards = [
        { id: "01" },
        { id: "02" },
        { id: "03" },
        { id: "04" },
        { id: "05" }
    ];

    return (
        <>
        {/* Modal Display */}
        <div className="relative h-[40%] w-[60%] bg-[#0B0C2A] border-4 border-[#C4F7BC] rounded-lg flex justify-center mx-auto z-20 top-[25%] hover:text-[#C4F7BC]">
            <p className="absolute top-[10%] text-5xl text-white">Battle Victory!</p>

            <div className="absolute top-[30%] text-3xl text-white">+500 Coins</div>
            <div className="absolute top-[47%] text-3xl text-white">+1 Standard Pack</div>

            {!packClaimed ? (
            <button
                onClick={() => setIsCarouselOpen(true)}
                className="absolute w-[35%] top-[67%] left-[32.5%] flex items-center justify-center bg-[#0B0C2A] text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-4xl px-5 py-1.5 mt-2 border-4"
            >
                Open Victory Pack
            </button>
            ) : (
            <Link href="/homescreen">
                <button
                type="button"
                className="absolute w-[35%] top-[67%] left-[32.5%] flex items-center justify-center bg-[#0B0C2A] text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-4xl px-5 py-1.5 mt-2 border-4"
                >
                Return to Home
                </button>
            </Link>
            )}
        </div>

        {/* Carousel Display */}
        <PackOpenCarousel
            cards={pack1Cards}
            isOpen={isCarouselOpen}
            onClose={() => {
            setIsCarouselOpen(false);
            setPackClaimed(true);
            }}
        />
        </>
    );
}

export default BattleVictoryDisplay;

