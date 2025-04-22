// Collection Display 
// looks into database at the cards the player has

"use client";

import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

import CollectionFilter from "@/components/ui/collection-filter.jsx";
import Card from "@/components/ui/card.jsx";

function CollectionDisplay() {
  const [ownedCards, setOwnedCards] = useState([]);
  const [cardDetails, setCardDetails] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("0");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), async (user) => {
      if (!user) {
        console.warn("No user logged in");
        return;
      }

      const playerRef = doc(db, "players", user.uid);
      const playerSnap = await getDoc(playerRef);

      if (playerSnap.exists()) {
        const data = playerSnap.data();
        const characterCards = data.characterCards || {};

        const cardIds = Object.entries(characterCards).flatMap(([id, qty]) =>
          Array(qty).fill(id)
        );

        console.log("Loaded player card IDs:", cardIds);
        setOwnedCards(cardIds);
      } else {
        console.warn("Player document not found in Firestore.");
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchCardDetails = async () => {
      const uniqueIds = [...new Set(ownedCards)];
      const fetched = await Promise.all(
        uniqueIds.map(async (id) => {
          const ref = doc(db, "characterCards", id);
          const snap = await getDoc(ref);
          return snap.exists() ? { id, ...snap.data() } : null;
        })
      );

      const merged = ownedCards.map((id) => fetched.find((c) => c?.id === id)).filter(Boolean);
      setCardDetails(merged);
    };

    if (ownedCards.length > 0) fetchCardDetails();
  }, [ownedCards]);

  const sortCards = (cards) => {
    if (selectedFilter === "1") {
      const rankOrder = { SSR: 6, SS: 5, S: 4, A: 3, B: 2, C: 1 };
      return [...cards].sort((a, b) => (rankOrder[b.rank] || 0) - (rankOrder[a.rank] || 0));
    } else if (selectedFilter === "2") {
      const classOrder = { Tank: 1, Attack: 2, Support: 3 };
      return [...cards].sort((a, b) => (classOrder[a.class] || 4) - (classOrder[b.class] || 4));
    } else if (selectedFilter === "3") {
      const typeOrder = { Air: 1, Water: 2, Ground: 3 };
      return [...cards].sort((a, b) => (typeOrder[a.type] || 4) - (typeOrder[b.type] || 4));
    }
    return cards;
  };

  const sortedCards = sortCards(cardDetails);

  return (
    <div className="relative flex h-[1000px] w-[80%] left-[10%] top-[280px] border-4 border-[#86CEBC] bg-[#221B48] rounded-lg overflow-y-scroll z-20">
      <div className="top-2 ">
        <CollectionFilter onFilterChange={setSelectedFilter} />
      </div>
      <div className="absolute top-24 grid gap-8 left-8 grid-cols-5">
        {sortedCards.map((card, index) => (
          <Card key={`${card.id}-${index}`} cardId={card.id} />
        ))}
      </div>
    </div>
  );
}

export default CollectionDisplay;



//Pack
{/* <div className="flex h-[400px] w-[260px] bg-[#0B0C2A] border-4 border-[#C4F7BC] rounded-lg p-4">
  Gold Pack
</div> */}