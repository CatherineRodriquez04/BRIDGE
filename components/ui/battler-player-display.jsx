"use client";

import { useEffect } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "@/lib/firebase";
import Card from "@/components/ui/card.jsx";

function BattlePlayerDisplay({ selectedCards }) {
    useEffect(() => {
        const calculateStats = async () => {
            console.log("⚔️ Starting calculateStats...");

            const cardData = await Promise.all(
                selectedCards.map(async (cardId) => {
                const ref = doc(db, "characterCards", cardId);
                const snap = await getDoc(ref);
                return snap.exists() ? snap.data() : null;
                })
            );

            const totalPlayerHealth = cardData.reduce((sum, card) => sum + (card?.health || 0), 0);
            const totalPlayerDamage = cardData.reduce((sum, card) => sum + (card?.damage || 0), 0);

            //console.log("Calculated Player Stats:", { totalPlayerHealth, totalPlayerDamage });

            //try {
                await setDoc(doc(db, "battle", "Player"), {
                totalHealth: totalPlayerHealth,
                totalDamage: totalPlayerDamage
                });
                //console.log("Successfully saved Player battle stats");
            //} catch (error) {
            //     console.error("Error saving Player battle stats:", error);
            // }
        };


        calculateStats();
    }, [selectedCards]);

    return (
        <>
            <div className="absolute rounded-lg p-4 left-[28%] bottom-[1%]">
                {selectedCards[0] && <Card cardId={selectedCards[0]} />}
            </div>

            <div className="absolute rounded-lg p-4 left-[42.5%] bottom-[5%] mx-auto">
                {selectedCards[1] && <Card cardId={selectedCards[1]} />}
            </div>

            <div className="absolute rounded-lg p-4 right-[28%] bottom-[1%]">
                {selectedCards[2] && <Card cardId={selectedCards[2]} />}
            </div>
            <div className="absolute bottom-0 w-full text-center text-6xl text-white mb-1">
            You
        </div>
        </>
    );
}

export default BattlePlayerDisplay;
