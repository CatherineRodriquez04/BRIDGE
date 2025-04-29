"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { db } from "@/lib/firebase";
import { collection, getDocs, doc, updateDoc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import Card from "@/components/ui/card.jsx";

function PackOpenCarousel({ isOpen, onClose, selectedPack }) {
  const [cardPool, setCardPool] = useState([]);
  const [displayCards, setDisplayCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userId, setUserId] = useState(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    const auth = getAuth();
    const unsub = auth.onAuthStateChanged((user) => {
      if (user) setUserId(user.uid);
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    if (!isOpen || !selectedPack) return;

    const fetchCards = async () => {
      const snapshot = await getDocs(collection(db, "characterCards"));
      const allCards = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      let filtered = [];

      if (selectedPack === "pack1") {
        filtered = allCards.filter(c => c.rank === "A" || c.rank === "B");
      } else if (selectedPack === "pack2") {
        filtered = allCards.filter(c => c.rank === "A" || c.rank === "S");
      } else if (selectedPack === "pack3") {
        const ssr = allCards.filter(c => c.rank === "SSR");
        const ss = allCards.filter(c => c.rank === "SS");

        const chosen = [];
        if (ssr.length > 0) {
          chosen.push(ssr[Math.floor(Math.random() * ssr.length)]); // 1 SSR
        }
        while (chosen.length < 3 && ss.length > 0) {
          const index = Math.floor(Math.random() * ss.length);
          chosen.push(ss.splice(index, 1)[0]);
        }
        setCardPool(chosen);
        return;
      }

      const chosen = [];
      while (chosen.length < 3 && filtered.length > 0) {
        const index = Math.floor(Math.random() * filtered.length);
        chosen.push(filtered.splice(index, 1)[0]);
      }

      setCardPool(chosen);
    };

    fetchCards();
  }, [isOpen, selectedPack]);

  const handleClaim = async () => {
    if (!userId || cardPool.length === 0) return;

    const playerRef = doc(db, "players", userId);
    const snap = await getDoc(playerRef);
    if (!snap.exists()) return;

    const current = snap.data().characterCards || {};
    const updated = { ...current };

    for (const card of cardPool) {
      if (!(card.id in updated)) {
        updated[card.id] = 1;
      }
    }

    await updateDoc(playerRef, { characterCards: updated });
    onClose();
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cardPool.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + cardPool.length) % cardPool.length);
  };

  if (!isOpen || cardPool.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="relative w-[60%] h-[80%] bg-gradient-to-b from-accent to-accent2 border-4 border-[#C4F7BC] rounded-lg p-4">
        {/* <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300"
        >
          <X size={32} />
        </button> */}

        {/* Carousel */}
        <div
          className="relative flex items-center justify-center h-full"
          ref={carouselRef}
        >
          <button
            onClick={goToPrevious}
            className="absolute left-4 z-10 bg-black bg-opacity-40 hover:bg-opacity-60 p-2 rounded-full"
          >
            <ChevronLeft size={36} color="white" />
          </button>

          <div className="flex justify-center items-center w-full h-full transition-transform duration-300">
            {cardPool.map((card, index) => {
              let position = (index - currentIndex + cardPool.length) % cardPool.length;
              if (position > cardPool.length / 2) position -= cardPool.length;

              let transform = "";
              let zIndex = 10;

              if (position === 0) {
                transform = "scale-150";
                zIndex = 30;
              } else if (position === -1) {
                transform = "-translate-x-52 scale-90";
                zIndex = 20;
              } else if (position === 1) {
                transform = "translate-x-52 scale-90";
                zIndex = 20;
              } else {
                transform = "opacity-0";
              }

              return (
                <div
                  key={card.id}
                  className={`absolute transition-all duration-300 ease-in-out transform-gpu ${transform}`}
                  style={{ zIndex }}
                >
                  <Card cardId={card.id} />
                </div>
              );
            })}
          </div>

          <button
            onClick={goToNext}
            className="absolute right-4 z-10 bg-black bg-opacity-40 hover:bg-opacity-60 p-2 rounded-full"
          >
            <ChevronRight size={36} color="white" />
          </button>
        </div>

        <div className="w-full text-center mt-10">
          <button
            onClick={handleClaim}
            className="text-4xl bg-[#0B0C2A] text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg px-5 py-1.5 mt-2 border-4"
          >
            Claim These Cards
          </button>
        </div>
      </div>
    </div>
  );
}

export default PackOpenCarousel;
