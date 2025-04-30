"use client";

import { createContext, useState, useContext, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

import { onSnapshot } from "firebase/firestore";

const PlayerContext = createContext();

export function PlayerProvider({ children }) {
    const [coins, setCoins] = useState(null);
    const [gems, setGems] = useState(null);
    const [cash, setCash] = useState(null);
    const [days, setDay] = useState(null);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserId(user.uid);
                const docRef = doc(db, "players", user.uid);
        
                const unsubscribeDoc = onSnapshot(docRef, (docSnap) => {
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setCoins(data.coins ?? 0);
                    setGems(data.gems ?? 0);
                    setCash(data.cash ?? 0);
                    setDay(data.days ?? 1); // ✅ Now updates LIVE
                }
                });
        
                // Cleanup Firestore listener when user changes/unmounts
                return () => unsubscribeDoc();
            }
            });
        
            // Cleanup auth listener on unmount
            return () => unsubscribeAuth();
        }, []);

    const value = {
        coins,
        gems,
        cash,
        days,
        setCoins,
        setGems,
        setCash,
        setDay,
        userId,
    };

    return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
    }

    export function usePlayer() {
    return useContext(PlayerContext);
}
