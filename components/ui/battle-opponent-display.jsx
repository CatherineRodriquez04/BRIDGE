"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { getDocs, collection, doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import Card from "@/components/ui/card.jsx";

function BattleOpponentDisplay() {
    const [opponentCards, setOpponentCards] = useState([]);
    const [opponentName, setOpponentName] = useState("Loading...");
    const [opponentHealth, setOpponentHealth] = useState(0);
    const [opponentDamage, setOpponentDamage] = useState(0);

    useEffect(() => {
        const auth = getAuth();

        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (!user) return;

            try {
                const playerDoc = await getDoc(doc(db, "players", user.uid));
                if (!playerDoc.exists()) return;

                const currentDay = playerDoc.data().days;

                const playersSnapshot = await getDocs(collection(db, "players"));
                const allPlayers = playersSnapshot.docs
                    .map(docSnap => ({ id: docSnap.id, ...docSnap.data() }))
                    .filter(player => player.id !== user.uid && player.days === currentDay);

                if (allPlayers.length === 0) {
                    setOpponentName("No Opponent Found");
                    return;
                }

                // Find a valid opponent
                let validOpponent = null;
                for (const candidate of allPlayers) {
                    const cards = candidate.characterCards || {};
                    if (Object.keys(cards).length > 0) {
                        validOpponent = candidate;
                        break;
                    }
                }

                if (!validOpponent) {
                    setOpponentName("No Valid Opponent");
                    return;
                }

                setOpponentName(validOpponent.name || "Unknown Opponent");

                // Get full card details
                const cardIds = Object.entries(validOpponent.characterCards || {}).flatMap(
                    ([cardId, qty]) => Array(qty).fill(cardId)
                );

                const cardDetails = await Promise.all(
                    cardIds.map(async (id) => {
                        const cardRef = doc(db, "characterCards", id);
                        const cardSnap = await getDoc(cardRef);
                        return cardSnap.exists() ? { id, ...cardSnap.data() } : null;
                    })
                );

                const tanks = cardDetails.filter(card => card && card.class === "Tank");
                const attacks = cardDetails.filter(card => card && card.class === "Attack");
                const supports = cardDetails.filter(card => card && card.class === "Support");

                if (tanks.length === 0 || attacks.length === 0 || supports.length === 0) {
                    setOpponentName("Opponent Missing Roles");
                    return;
                }

                const selectedCards = [
                    tanks[Math.floor(Math.random() * tanks.length)],
                    attacks[Math.floor(Math.random() * attacks.length)],
                    supports[Math.floor(Math.random() * supports.length)],
                ];

                setOpponentCards(selectedCards);

                const totalHealth = selectedCards.reduce((sum, card) => sum + (card.health || 0), 0);
                const totalDamage = selectedCards.reduce((sum, card) => sum + (card.damage || 0), 0);

                setOpponentHealth(totalHealth);
                setOpponentDamage(totalDamage);

                localStorage.setItem("opponentHealth", totalHealth);
                localStorage.setItem("opponentDamage", totalDamage);
            } catch (error) {
                console.error("Error fetching opponent:", error);
                setOpponentName("Error Loading Opponent");
            }
        });

        return () => unsubscribe(); // cleanup listener
    }, []);

    return (
        <>
            <div className="absolute top-0 w-full text-center text-3xl text-white mt-4">
                Opponent: {opponentName}
            </div>

            {opponentCards.length > 0 && (
                <>
                    <div className="absolute flex rounded-lg p-4 left-[28%] top-[5%]">
                        <Card cardId={opponentCards[0].id} />
                    </div>

                    <div className="absolute flex rounded-lg p-4 top-[9%] left-[42.5%]">
                        <Card cardId={opponentCards[1].id} />
                    </div>

                    <div className="absolute flex rounded-lg p-4 right-[28%] top-[5%]">
                        <Card cardId={opponentCards[2].id} />
                    </div>
                </>
            )}
        </>
    );
}

export default BattleOpponentDisplay;

