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
  const [loading, setLoading] = useState(true);

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
  
        // Ensure IDs are strings like "01", "02", etc.
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
  return (
    <div className="relative flex h-[1000px] w-[80%] left-[10%] top-[280px] border-4 border-[#86CEBC] bg-[#221B48] rounded-lg overflow-y-scroll z-20">
      <CollectionFilter />
      <div className="absolute top-24 grid gap-8 left-8 grid-cols-5">
        {ownedCards.map((id, index) => (
          <Card key={`${id}-${index}`} cardId={id} />
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