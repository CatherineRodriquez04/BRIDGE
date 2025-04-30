// Homescreen Page

"use client";

import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "@/lib/firebase";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { cn } from "@/lib/utils";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import defaultAvatar from "@/public/assets/avatarTemp.png";

import HomeLeaderboard from "@/components/ui/home-leaderboard.jsx";
import HomeAnnouncements from "@/components/ui/home-announcements.jsx";
import GameNavbar from "@/components/ui/game-navbar.jsx";
import HomeDailyRewards from "@/components/ui/home-daily-rewards.jsx";

import DailyRewardPopup from "@/components/ui/daily-reward-popup.jsx"

// Avatar images
import avatar1 from "@/public/assets/owl.svg";
import avatar2 from "@/public/assets/polar-bear.svg";
import avatar3 from "@/public/assets/pufferfish.svg";
import avatar4 from "@/public/assets/racoon.svg";
import avatar5 from "@/public/assets/swan.svg";
import avatar6 from "@/public/assets/orca.svg";
import avatar7 from "@/public/assets/platypus.svg";
import avatar8 from "@/public/assets/squid.svg";
import avatar9 from "@/public/assets/parrot.svg";
import avatar10 from "@/public/assets/swordfish.svg";
import avatar11 from "@/public/assets/hippo.svg";
import avatar12 from "@/public/assets/harpy-eagle.svg";
import avatar13 from "@/public/assets/crow.svg";
import avatar14 from "@/public/assets/whale.svg";
import avatar15 from "@/public/assets/hamster.svg";
import avatar16 from "@/public/assets/ladybug.svg";
import avatar17 from "@/public/assets/anchovy.svg";
import avatar18 from "@/public/assets/capybara.svg";

const avatars = [
    { src: "/assets/owl.svg", image: avatar1 },
    { src: "/assets/polar-bear.svg", image: avatar2 },
    { src: "/assets/pufferfish.svg", image: avatar3 },
    { src: "/assets/racoon.svg", image: avatar4 },
    { src: "/assets/swan.svg", image: avatar5 },
    { src: "/assets/orca.svg", image: avatar6 },
    { src: "/assets/platypus.svg", image: avatar7 },
    { src: "/assets/squid.svg", image: avatar8 },
    { src: "/assets/parrot.svg", image: avatar9 },
    { src: "/assets/swordfish.svg", image: avatar10 },
    { src: "/assets/hippo.svg", image: avatar11 },
    { src: "/assets/harpy-eagle.svg", image: avatar12 },
    { src: "/assets/crow.svg", image: avatar13 },
    { src: "/assets/whale.svg", image: avatar14 },
    { src: "/assets/hamster.svg", image: avatar15 },
    { src: "/assets/ladybug.svg", image: avatar16 },
    { src: "/assets/anchovy.svg", image: avatar17 },
    { src: "/assets/capybara.svg", image: avatar18 }
];

export default function HomeScreen() {
    const [playerName, setPlayerName] = useState("");
    const [avatar, setAvatar] = useState("");
    const [coins, setCoins] = useState("");
    const [gems, setGems] = useState("");
    const [days, setDays] = useState("");
    const [cards, setCards] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [showIntro, setShowIntro] = useState(true);
    const [startTyping, setStartTyping] = useState(false);
    const [avatarIndex, setAvatarIndex] = useState(0);
    
        const visibleAvatars = [
            avatars[(avatarIndex) % avatars.length],
            avatars[(avatarIndex + 1) % avatars.length],
            avatars[(avatarIndex + 2) % avatars.length],
        ];
            
        const handlePrev = () => {
                setAvatarIndex((prev) => (prev - 1 + avatars.length) % avatars.length);
        };
            
        const handleNext = () => {
                setAvatarIndex((prev) => (prev + 1) % avatars.length);
        };

    const [isDailyRewardPopupOpen, setIsDailyRewardPopupOpen] = useState(false)


    // Fetch player info in background
    useEffect(() => {
        const auth = getAuth();
    
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (user) {
            const docRef = doc(db, "players", user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
            const data = docSnap.data();
            setPlayerName(data.name || "Player Name");
            setAvatar(data.avatar || "/assets/capybara.svg");
            setCoins(data.coins || "");
            setGems(data.gems || "");
            setDays(data.days || "");
            setCards(Object.values(data.characterCards || {}).reduce((a, b) => a + b, 0));
            }
        }
    
    
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

    // Homescreen (after intro)
    return (
        <div className="h-screen w-screen flex fade-in transition-opacity duration-1000 bg-gradient-to-b from-accent to-accent2 relative">
        {showModal && <div className="absolute inset-0 bg-black opacity-70 z-10"></div>}

        <div className="flex flex-row">
            <div className="top-6 right-[520px] absolute">
                <GameNavbar />
            </div>


            {/* Player Info */}
            <div className="border-[5px] border-accent4 min-h-[220px] min-w-[400px] ml-6 mt-24 max-h-[220px] max-w-[370px] flex flex-row overflow-hidden">
            <div>
                <Image
                src={avatar || defaultAvatar}
                width={95}
                height={95}
                alt="Avatar"
                className="mt-4 ml-6 mb-1"
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
                <p className="text-white mt-2">Days Survived: {days}</p>
                <p className="text-white">Cards Collected: {cards}</p>
                </div>
                <div className="mt-4 flex flex-row gap-6">
                <p className="text-white mt-2">Gems: {gems}</p>
                <p className="text-white mt-2">Coins: {coins}</p>
                </div>
            </div>
            </div>
            {/* Set to popup at beginning of day */}
            
            <DailyRewardPopup isOpen={isDailyRewardPopupOpen} onClose={() => setIsDailyRewardPopupOpen(false)}/> 
            <HomeAnnouncements />
            
            {/* Temp for display/ open popup for now until day functionality is in */}
            <button
                type="button"
                onClick={() => setIsDailyRewardPopupOpen(true)}
                className="absolute w-[20%] top-[68%] right-[5%] flex items-center justify-center bg-[#0B0C2A] text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-4xl px-5 py-1.5 mt-4 border-4">
                    Daily Reward Popup
              </button>
            <HomeDailyRewards />

            {/* Logo + Play */}
            <div className="absolute flex justify-center items-center top-[360px] right-0 left-0">
            <img src={"/assets/logo.png"} width={650} height={650} alt="Logo" className="block -z-1" />
            <Link href="/choose-deck">
                <button className="absolute flex justify-center items-center top-[250px] right-0 left-0 text-4xl">
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
                <div className="flex justify-center items-center gap-4 mt-2 mb-4 p-2">
                                    <button onClick={handlePrev}>
                                        <FaArrowLeft className="text-white text-xl" />
                                    </button>
                                    <div className="flex gap-4 transition-transform duration-300 ease-in-out h-[200px]">
                                    {/* <div className="flex gap-4 overflow-hidden min-h-[140px] items-end"> */}
                
                                        {visibleAvatars.map((av, i) => (
                                        <Image
                                            key={av.src}
                                            src={av.image}
                                            width={145}
                                            height={145}
                                            alt={`Avatar ${avatarIndex + i + 1}`}
                                            className={cn(
                                                "cursor-pointer border hover:border-2 transition-all duration-300 object-contain",
                                                avatar === av.src ? "border-accent4 border-2 scale-105" : ""
                                            )}
                                            onClick={() => setAvatar(av.src)}
                                        />
                                        ))}
                                    </div>
                                    <button onClick={handleNext}>
                                        <FaArrowRight className="text-white text-xl" />
                                    </button>
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
