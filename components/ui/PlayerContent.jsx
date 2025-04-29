"use client";

import { createContext, useState, useContext, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

const PlayerContext = createContext();

export function PlayerProvider({ children }) {
    const [coins, setCoins] = useState(null);
    const [gems, setGems] = useState(null);
    const [cash, setCash] = useState(null);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (user) {
            setUserId(user.uid);
            const docRef = doc(db, "players", user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
            const data = docSnap.data();
            setCoins(data.coins ?? 0);
            setGems(data.gems ?? 0);
            setCash(data.cash ?? 0);
            }
        }
        });

        return () => unsubscribe();
    }, []);

    const value = {
        coins,
        gems,
        cash,
        setCoins,
        setGems,
        setCash,
        userId,
    };

    return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
    }

    export function usePlayer() {
    return useContext(PlayerContext);
}
