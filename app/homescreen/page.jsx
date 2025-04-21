// Homescreen Page

"use client";

import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "@/lib/firebase";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import avatar1 from "@/public/assets/avatarTemp.png";
import avatar2 from "@/public/assets/avatarTemp2.png";
import avatar3 from "@/public/assets/avatarTemp3.png";
import defaultAvatar from "@/public/assets/avatarTemp.png";

import HomeLeaderboard from "@/components/ui/home-leaderboard.jsx";
import HomeAnnouncements from "@/components/ui/home-announcements.jsx";
import GameNavbar from "@/components/ui/game-navbar.jsx";
import HomeDailyRewards from "@/components/ui/home-daily-rewards.jsx";

export default function HomeScreen() {
    const [playerName, setPlayerName] = useState("");
    const [avatar, setAvatar] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [showIntro, setShowIntro] = useState(true);
    const [startTyping, setStartTyping] = useState(false);

    // Fetch player info in background
    useEffect(() => {
        const auth = getAuth();
    
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (user) {
            const docRef = doc(db, "players", user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
            const data = docSnap.data();
            setPlayerName(data.name || "");
            setAvatar(data.avatar || "/assets/avatarTemp.png");
            }
        }
    
        // Wait ~100ms, then begin typing
        setTimeout(() => {
            setStartTyping(true);
        }, 100);
    
        // Full intro duration = 5s
        setTimeout(() => {
            setShowIntro(false);
        }, 4000);
        });
    
        return () => unsubscribe();
    }, []);

    const handleAccept = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const handleSubmit = async () => {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user && avatar) {
        const docRef = doc(db, "players", user.uid);
        await updateDoc(docRef, { avatar });
        setShowModal(false);
        } else {
        alert("Please select an avatar");
        }
    };

    // Intro screen typing: static message
    if (showIntro) {
        return (
        <div className="h-screen w-screen flex items-center justify-center bg-accent">
            {startTyping && playerName && (
                <h1 className="text-white text-5xl text-center typing">
                    {`Welcome, ${playerName}`}
                </h1>
            )}

    
            <style jsx>{`
            .typing {
                overflow: hidden;
                white-space: nowrap;
                border-right: 2px solid white;
                width: 0;
                animation:
                typing 4.5s steps(40, end) forwards,
                blink 0.7s step-end infinite;
            }
    
            @keyframes typing {
                from {
                width: 0;
                }
                to {
                width: 100%;
                }
            }
    
            @keyframes blink {
                50% {
                border-color: transparent;
                }
            }
            `}</style>
        </div>
        );
    }

    // Homescreen (after intro)
    return (
        <div className="h-screen w-screen flex fade-in transition-opacity duration-1000 bg-accent relative">
        {showModal && <div className="absolute inset-0 bg-black opacity-70 z-10"></div>}

        <div className="flex flex-row">
            <div className="top-6 right-[520px] absolute">
            <Link href="/collection">
                <GameNavbar />
            </Link>
            </div>

            {/* Player Info */}
            <div className="border-[5px] border-accent4 min-h-[220px] min-w-[400px] ml-6 mt-24 max-h-[220px] max-w-[370px] flex flex-row overflow-hidden">
            <div>
                <Image
                src={avatar || defaultAvatar}
                width={125}
                height={125}
                alt="Avatar"
                className="mt-6 ml-3 mb-2 border"
                />
                <button
                className="ml-5 px-2 py-[1px] items-center text-[15px] bg-white text-black rounded-lg hover:scale-105"
                onClick={handleAccept}
                >
                Change Avatar
                </button>
            </div>
            <div className="ml-[35px] mt-4">
                <p className="text-white text-[25px] mb-[-5px]">{playerName}</p>
                <div className="min-w-[150px] border border-accent4"></div>
                <div>
                <p className="text-white mt-2">Day Survived: 23</p>
                <p className="text-white">Cards Collected: 21</p>
                </div>
                <div className="mt-4 flex flex-row gap-6">
                <p className="text-white mt-2">Gems: 2121</p>
                <p className="text-white mt-2">Coins: 21283</p>
                </div>
            </div>
            </div>

            <HomeAnnouncements />
            <HomeDailyRewards />

            {/* Logo + Play */}
            <div className="absolute flex justify-center items-center top-[360px] right-0 left-0">
            <img src={"/assets/logo.png"} width={650} height={650} alt="Logo" className="block -z-1" />
            <Link href="/choose-deck">
                <button className="absolute flex justify-center items-center top-[250px] right-0 left-0 text-4xl z-10">
                Play
                </button>
            </Link>
            </div>
        </div>

        <HomeLeaderboard />

        {/* Avatar Modal */}
        {showModal && (
            <div className="fixed inset-0 flex items-center justify-center z-20">
            <div className="bg-accent border-2 border-accent2 p-8 rounded-lg shadow-lg">
                <button className="semibold hover:scale-105 text-2xl" onClick={handleClose}>
                X
                </button>
                <h2 className="text-4xl mt-[-5px] text-center">Change Your Avatar</h2>
                <div className="min-w-[200px] border border-accent4 mb-4"></div>
                <div className="flex justify-center gap-4">
                {[avatar1, avatar2, avatar3].map((img, i) => {
                    const path = `/assets/avatarTemp${i ? i + 1 : ""}.png`;
                    return (
                    <Image
                        key={path}
                        src={img}
                        width={125}
                        height={125}
                        alt={`Avatar ${i + 1}`}
                        className={`cursor-pointer border hover:border-2 ${
                        avatar === path ? "border-accent4 border-2" : ""
                        }`}
                        onClick={() => setAvatar(path)}
                    />
                    );
                })}
                </div>
                <div className="flex justify-center mt-4">
                <button
                    className="bg-white text-black px-4 py-1 rounded-lg text-[20px] hover:scale-105"
                    onClick={handleSubmit}
                >
                    Submit Change
                </button>
                </div>
            </div>
            </div>
        )}
        </div>
    );
    }
