//Packs Page

"use client"

import GameNavbar from "@/components/ui/game-navbar.jsx";
import CollectionFilter from "/components/ui/collection-filter.jsx"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import DragItem from "/components/ui/drag-item.jsx"
import DropZone from "/components/ui/drop-zone.jsx"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

const ChooseDeck = () => {
  const [dropzones, setDropzones] = useState({
    Tank: { items: [], position: "top-[220px] left-[70px]" },
    Attack: { items: [], position: "top-[220px] left-[360px]" },
    Support: { items: [], position: "top-[220px] left-[650px]" },
  });

  const labelRefs = {
    Tank: useRef(null),
    Attack: useRef(null),
    Support: useRef(null),
  };

  const [playerCards, setPlayerCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [filter, setFilter] = useState("0");

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "players", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          const cards = Object.entries(data.characterCards || {}).flatMap(([id, qty]) =>
            Array(qty).fill(id)
          );
          setPlayerCards(cards);
        }
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const applyFilter = async () => {
      const cardData = await Promise.all(
        playerCards.map(async (id) => {
          const cardRef = doc(db, "characterCards", id);
          const cardSnap = await getDoc(cardRef);
          return { id, ...(cardSnap.exists() ? cardSnap.data() : {}) };
        })
      );

      let sorted;
      switch (filter) {
        case "1":
          sorted = cardData.sort((a, b) => (b.rank || "").localeCompare(a.rank || ""));
          break;
        case "2":
          sorted = cardData.sort((a, b) => (a.class || "").localeCompare(b.class || ""));
          break;
        case "3":
          sorted = cardData.sort((a, b) => (a.type || "").localeCompare(b.type || ""));
          break;
        default:
          sorted = cardData;
      }

      setFilteredCards(sorted);
    };

    if (playerCards.length > 0) {
      applyFilter();
    }
  }, [filter, playerCards]);

  const handleDrop = async (zoneKey, item) => {
    const cardRef = doc(db, "characterCards", item.cardId);
    const cardSnap = await getDoc(cardRef);
    if (!cardSnap.exists()) return;

    const cardData = cardSnap.data();
    if (cardData.class !== zoneKey) {
      const label = labelRefs[zoneKey]?.current;
      if (label) {
        label.classList.add("scale-[1.2]", "text-red-400");
        setTimeout(() => {
          label.classList.remove("scale-[1.2]", "text-red-400");
        }, 500);
      }
      return;
    }

    setDropzones((prev) => ({
      ...prev,
      [zoneKey]: {
        ...prev[zoneKey],
        items: [...prev[zoneKey].items, item],
      },
    }));
  };

  const handleRemoveItem = (zoneKey, index) => {
    setDropzones((prev) => {
      const newItems = [...prev[zoneKey].items];
      newItems.splice(index, 1);
      return {
        ...prev,
        [zoneKey]: {
          ...prev[zoneKey],
          items: newItems,
        },
      };
    });
  };

  const usedCardIds = Object.values(dropzones).flatMap(zone => zone.items.map(item => item.cardId));

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="h-screen w-screen flex fade-in bg-gradient-to-b from-accent to-accent2 relative overscroll-y-none">
        <Link href="/homescreen">
          <button className="absolute top-[10px] left-6 text-2xl z-10 flex items-center justify-center bg-[#0B0C2A] text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg px-5 py-1.5 mt-2 border-4">
            Return to Home
          </button>
        </Link>

        <div className="">
          {Object.entries(dropzones).map(([key, { items, position }]) => (
            <div key={key} className={`absolute ${position}`}>
              <div className="relative flex flex-col items-center">
                <DropZone onDrop={(item) => handleDrop(key, item)} />
                <div ref={labelRefs[key]} className="text-white text-3xl mt-2 transition-transform duration-300 ease-in-out">
                  {key}
                </div>
                {items.map((item, index) => (
                  <div key={index} className="absolute">
                    <DragItem cardId={item.cardId} />
                    <button
                      onClick={() => handleRemoveItem(key, index)}
                      className="bg-red-500 text-white px-2 py-1 rounded text-sm hover:scale-105 mt-2"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}


          
            {/* Ready Up Button (start battle / go to page) */}
          <div className="absolute top-[77%] left-[12%] w-[40%]">
          {/* Limit / battle chances per day */}
          {/* Right above Ready button for now */}
          <div className=" absolute bottom-[35%] left-[38%] text-[#0B0C2A] z-20 text-white text-4xl">
              Limit {}#/5 {/*daily battle limit to be insterted here      */}
          </div>
            <Link href="/battle">
              <button
                type="button"
                className="absolute w-[30%] left-[31%] flex items-center justify-center bg-[#0B0C2A] text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-4xl px-5 py-1.5 border-4"
              >
                Ready
              </button>
            </Link>
          </div>
        </div>

        <div className="absolute w-[48%] h-[1000px] left-[50%] top-[5%] relative border-4 border-[#86CEBC] bg-[#221B48] rounded-lg overflow-y-scroll z-20">
          <CollectionFilter onFilterChange={setFilter} />
          <div className="absolute top-24 grid gap-8 left-8 grid-cols-3">
            {filteredCards.map((card, index) => (
              !usedCardIds.includes(card.id) && (
                <DragItem key={`${card.id}-${index}`} cardId={card.id} />
              )
            ))}
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default ChooseDeck;