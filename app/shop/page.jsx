// Shop Page

"use client"

import Link from "next/link";
import Image from "next/image";

import GameNavbar from "@/components/ui/game-navbar.jsx";
import ShopDisplay from "@/components/ui/shop-display.jsx";
import { useState, useEffect, useMemo } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

function Shop() {

    const [shopCount, setShopCount] = useState(0); // State to track the number of packs opened
  
    useEffect(() => {
      const auth = getAuth();
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (user) {
          setUserId(user.uid);
          const docRef = doc(db, "players", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            setDays(data.days || 1);
            setCoins(data.coins || 0);
  
            const shopKey = `shopDay${data.days}`; //set pack key
  
            setPackCount(data[shopKey] || 0); //set pack count from db
          }
        }
      });
      return () => unsubscribe();
    }, []);
  
    if (shopCount >= 3) {
      // setShowNotEnoughModal(true); // Show modal if pack count exceeds 3
    }
  
    // const playerRef = doc(db, "players", userId);
    // const battleKey = `packDay${days}`;
  
    //find another way (prob onClick to update packKey packCountS)
    // await updateDoc(playerRef, {
    //   coins: coins - 50,
    //   [packKey]: (packCount + 1),
    // });
  return (
    <>
      <div className="h-screen w-screen flex fade-in bg-gradient-to-b from-accent to-accent2 relative">

        <div className="top-6 right-[520px] absolute z-40">
        <Link href="/shop">
            <GameNavbar/>
        </Link>

        <div className="fixed top-[10%] text-7xl left-[46.7%]">
            Shop
        </div>
        <div className="fixed top-[19%] right-[46.5%] text-white text-4xl">
             Limit {shopCount}/3 {/*daily battle limit to be insterted here  shopCount    */}
        </div>

          <ShopDisplay/>
        </div>
      </div>
    </>
  );
}

export default Shop