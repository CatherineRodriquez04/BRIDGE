
// Goal:
//Replace all set values (images) with props values to be filled with whatever animal is needed at the time (from database) basically, make this dynamic and reusable for all characters
//Idea:
//Set char id
//get char id (to find in database
//Char. images, name, stats, etc
//populate card with this data

"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

function Card({ cardId }) {
    const [card, setCard] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log("Fetching card ID:", cardId);

    useEffect(() => {
        if (!cardId) return; // Prevent empty fetch

        const fetchCard = async () => {
            try {
                const docRef = doc(db, "characterCards", cardId);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setCard(docSnap.data());
                } else {
                    console.warn(`Card ID ${cardId} not found`);
                }
            } catch (error) {
                console.error("Error fetching card:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCard();
    }, [cardId]);

    if (loading || !card) {
        return (
            <div className="flex items-center justify-center h-[360px] w-[260px] rounded-3xl bg-gradient-to-br from-accent2 to-accent text-white text-xl animate-pulse">
                Loading Card...
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center">
            <div className="relative flex h-[360px] w-[260px] rounded-3xl flip-card">
                <div className="relative w-full h-full transition-transform duration-[0.8s] transform-3d flip-card-inner">

                    {/* Front of card */}
                    <div className="flip-card-front">
                        <img src={card?.typeBg || "/assets/card-ground-bg.svg"} alt="Card-Environment-Background" className="absolute top-0 left-0 z-0" />
                        <img src={card?.charImg || '/assets/capybara.svg'} width={185} height={435} alt="Card-Animal-Test" className="absolute top-20 left-[50px] z-10" />
                        <img src={'/assets/card-border-front.svg'} alt="Card-Front-Border" className="absolute top-0 left-0 z-20" />
                        <div className="absolute top-[35px] left-[15px] text-center z-30 text-[#72E8C9] text-4xl font-bold">{card.rank}</div>
                        <div className="absolute top-[2px] left-[100px] z-30 text-white text-3xl">{card.name}</div>
                        <img src={card.classIcon} alt="Card-Front-Type" className="absolute top-[303px] left-[30px] z-30" />
                        <div className="absolute top-[300px] left-[205px] z-30 text-red-600 text-4xl font-bold">HP</div>
                    </div>

                    {/* Back of card */}
                    <div className="flip-card-back">
                        <img src={card?.typeBgMini || "/assets/card-ground-bg.svg"} alt="Card-Environment-Background" className="absolute top-0 left-24 z-0" />
                        <img src={card?.charImg || '/assets/capybara.svg'} width={100} height={400} alt="Card-Back-Animal-Test" className="absolute top-[80px] left-[130px] z-10" />
                        <img src={'/assets/card-border-back.svg'} alt="Card-Back-Border" className="absolute top-0 left-0 z-20" />
                        <img src="/assets/dead-man-logo-2.svg" width={170} height={200} alt="Card-Deadman-Logo" className="absolute left-[45px] top-0 z-30" />
                        <div className="absolute top-[55px] left-[130px] z-30 text-white text-2xl font-bold">{card.name}</div>
                        <div className="absolute top-[154px] left-[126px] z-30 text-2xl font-bold text-[#C4F7BC]">{card.rank}</div>
                        <div className="absolute top-[60px] left-[10px] z-30 text-white text-3xl font-bold underline">Stats</div>
                        <img src="/assets/health-icon.svg" width={30} height={30} alt="Card-Health-Icon" className="absolute top-[102px] left-[10px] z-30" />
                        <div className="absolute top-[96px] left-[58px] z-30 text-white text-3xl font-bold">{card.health}</div>
                        <img src="/assets/damage-icon.svg" width={25} height={25} alt="Card-Damage-Icon" className="absolute top-[132px] left-[12px] z-30" />
                        <div className="absolute top-[132px] left-[58px] z-30 text-white text-3xl font-bold">{card.damage}</div>
                        <div className="absolute top-[165px] left-[10px] z-30 text-white text-2xl font-bold underline">Ult. Ability</div>
                        <img src={card.classIcon} width={35} height={35} alt="Card-Ability-Icon" className="absolute top-[202px] left-[10px] z-30" />
                        <div className="absolute top-[198px] left-[58px] z-30 text-white text-3xl font-bold">{card.ability}</div>
                        <div className="absolute top-[245px] left-[10px] z-30 text-white text-lg">{card.phrase}</div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Card;
