"use client";

// firebase imports
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { app, db } from "@/lib/firebase";
import { getDocs, collection, query, where, doc, setDoc } from "firebase/firestore";

// next/link and hooks
import { useState } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { cn } from "@/lib/utils";


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

export default function Intro() {
    // Modal and form state
    const [showModal, setShowModal] = useState(false);
    const [mode, setMode] = useState("login"); // 'login' or 'signup'
    const [name, setName] = useState("");
    const [avatar, setAvatar] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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

    // Helper to randomly pick one from an array
    const getRandomCard = (arr) => arr[Math.floor(Math.random() * arr.length)];

    // Opens the modal when user accepts the introduction
    const handleAccept = () => {
        setShowModal(true);
    };

    // Handles form submission for login / signup
    const handleSubmit = async () => {
        const auth = getAuth(app);

        if (!email || !password) {
        alert("Please enter both email and password.");
        return;
        }

        if (mode === "login") {
        // Login mode
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            // Optionally, load user data here
            window.location.href = "/homescreen";
        } catch (error) {
            alert("Login failed: " + error.message);
        }
        } else {
        // Signup mode: Check additional fields
        if (!name || !avatar) {
            alert("Please enter your name and select an avatar.");
            return;
        }

        // Query Firestore for each class
        const getCardsByClass = async (role) => {
            // rank C only
            const q = query(
                collection(db, "characterCards"),
                where("class", "==", role),
                where("rank", "==", "C")
            );
            const snapshot = await getDocs(q);
            return snapshot.docs.map(doc => doc.id); // use doc.id to store the actual document ID
        };
    
        const tanks = await getCardsByClass("Tank");
        const attacks = await getCardsByClass("Attack");
        const supports = await getCardsByClass("Support");
    
        const starterDeck = {
            [getRandomCard(tanks)]: 1,
            [getRandomCard(attacks)]: 1,
            [getRandomCard(supports)]: 1
        };


        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            // Save player info to Firestore under 'players' with uid as document ID
            await setDoc(doc(db, "players", user.uid), {
            name,
            avatar,
            email,
            characterCards: starterDeck,
            coins: 500,
            gems: 150,
            days: 1,
            wins: 0,
            // score: 0,
            cash: 100,
            shopDay1: 0,
            battlesDay1: 0,
            packsDay1: 0,
            shopDay2: 0,
            battlesDay2: 0,
            packsDay2: 0,
            shopDay3: 0,
            battlesDay3: 0,
            packsDay3: 0,
            shopDay4: 0,
            battlesDay4: 0,
            packsDay4: 0,
            shopDay5: 0,
            battlesDay5: 0,
            packsDay5: 0,
            totalCashSpent: 0,
            totalGemsSpent: 0,
            totalCoinsSpent: 0,
            });
            window.location.href = "/homescreen";
        } catch (error) {
            alert("Account creation failed: " + error.message);
        }
        }

    };

    return (
        <div className="h-screen flex justify-center items-center fade-in relative">
        {/* Overlay for the modal fade effect */}
        {showModal && <div className="absolute inset-0 bg-black opacity-70 z-10"></div>}

        {/* Introduction Storyline */}
        <div className={`flex flex-col text-center z-20 ${showModal ? 'opacity-40 pointer-events-none' : 'opacity-100'}`}>
            <h1 className="text-[45px]">BOOM! CRASH! ...</h1>
            <p className="text-[35px]">...</p>
            <p className="text-[30px]">What was that?</p>
            <p className="text-[30px]">It seems like an apocalypse has broken out. I, the ruler of this</p>
            <p className="text-[30px]">country must make it back to my castle in order to deal with the</p>
            <p className="text-[30px]">catastrophe. It seems like animals have transformed into zombies. It</p>
            <p className="text-[30px]">seems I will not be able to make it back without having an army of my</p>
            <p className="text-[30px]">own. I need to defeat and tame the strongest beast if I wish to bring</p>
            <p className="text-[30px] mb-2">back order to my kingdom.</p>
            <p className="text-[30px]">It will be risky. Are you willing to walk into a no man's land?</p>
            <p className="text-[30px] mb-4">Will you play the game, or will the game play you?</p>
            <p className="text-[30px] text-white">WARNING: THE GAME MAY NOT BE WHAT IT SEEMS.</p>

            {/* Button to begin game (opens modal) */}
            <div className="flex justify-center mt-5">
            <button
                className="rounded-lg bg-white text-black text-[20px] py-2 px-4 hover:scale-105"
                onClick={handleAccept}
            >
                I ACCEPT
            </button>
            </div>
        </div>

        {/* Modal for login/signup */}
        {showModal && (
            <div className="fixed inset-0 flex items-center justify-center z-20">
            <div className="bg-accent border-2 border-accent2 p-8 rounded-lg shadow-lg">
                <h2 className="text-4xl text-center">
                {mode === "login" ? "Login to Your Profile" : "Create Your Profile"}
                </h2>
                <div className="min-w-[200px] border border-accent4 my-4" />

                {/* Email input */}
                <input
                type="email"
                placeholder="Enter your email"
                className="border mb-3 border-gray-300 p-2 rounded w-full text-black text-[20px]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                {/* Password input */}
                <input
                type="password"
                placeholder="Enter your password"
                className="border mb-3 border-gray-300 p-2 rounded w-full text-black text-[20px]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

                {/* Show name and avatar inputs only for signup */}
                {mode === "signup" && (
                <>
                    <input
                    type="text"
                    placeholder="Enter your name"
                    className="border mb-3 border-gray-300 p-2 rounded w-full text-black text-[20px]"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength={18}
                    />

                    <p className="text-[25px] text-center">Choose your avatar:</p>
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
                </>
                )}

                {/* Submit button */}
                <div className="flex justify-center mt-4">
                <button
                    className="bg-white text-black px-4 py-2 rounded-lg text-[20px] hover:scale-105"
                    onClick={handleSubmit}
                >
                    {mode === "login" ? "Login" : "Create Account"}
                </button>
                </div>

                {/* Toggle between login and signup modes */}
                <p className="text-center mt-4 text-white text-lg">
                {mode === "login" ? (
                    <>
                    Don’t have an account?{" "}
                    <span
                        className="text-blue-400 cursor-pointer underline"
                        onClick={() => setMode("signup")}
                    >
                        Create one
                    </span>
                    </>
                ) : (
                    <>
                    Already have an account?{" "}
                    <span
                        className="text-blue-400 cursor-pointer underline"
                        onClick={() => setMode("login")}
                    >
                        Login
                    </span>
                    </>
                )}
                </p>
            </div>
            </div>
        )}
        </div>
    );
}
