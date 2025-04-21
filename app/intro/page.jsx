"use client";

// firebase imports
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { app, db } from "@/lib/firebase";
import { getDocs, collection, query, where, doc, setDoc } from "firebase/firestore";

// next/link and hooks
import { useState } from "react";
import Image from "next/image";

// Avatar images
import avatar1 from "@/public/assets/avatarTemp.png";
import avatar2 from "@/public/assets/avatarTemp2.png";
import avatar3 from "@/public/assets/avatarTemp3.png";

export default function Intro() {
    // Modal and form state
    const [showModal, setShowModal] = useState(false);
    const [mode, setMode] = useState("login"); // 'login' or 'signup'
    const [name, setName] = useState("");
    const [avatar, setAvatar] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
            const q = query(collection(db, "characterCards"), where("class", "==", role));
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
            characterCards: starterDeck
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
        <div className="flex flex-col text-center z-20">
            <h1 className="text-[40px]">BOOM! CRASH! ...</h1>
            <p className="text-[30px]">...</p>
            <p className="text-[25px]">What was that?</p>
            <p className="text-[25px]">It seems like an apocalypse has broken out. I, the ruler of this</p>
            <p className="text-[25px]">country must make it back to my castle in order to deal with the</p>
            <p className="text-[25px]">catastrophe. It seems like animals have transformed into zombies. It</p>
            <p className="text-[25px]">seems I will not be able to make it back without having an army of my</p>
            <p className="text-[25px]">own. I need to defeat and tame the strongest beast if I wish to bring</p>
            <p className="text-[25px] mb-2">back order to my kingdom.</p>
            <p className="text-[25px]">It will be risky. Are you willing to walk into a no man's land?</p>
            <p className="text-[25px] mb-4">Will you play the game, or will the game play you?</p>
            <p className="text-[25px] text-white">WARNING: THE GAME MAY NOT BE WHAT IT SEEMS.</p>

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
                    <div className="flex justify-center mt-2 gap-4 mb-4">
                    <Image
                        src={avatar1}
                        width={125}
                        height={125}
                        alt="Avatar 1"
                        className={`cursor-pointer border hover:border-2 ${avatar === "/assets/avatarTemp.png" ? "border-accent4 border-2" : ""}`}
                        onClick={() => setAvatar("/assets/avatarTemp.png")}
                    />
                    <Image
                        src={avatar2}
                        width={125}
                        height={125}
                        alt="Avatar 2"
                        className={`cursor-pointer border hover:border-2 ${avatar === "/assets/avatarTemp2.png" ? "border-accent4 border-2" : ""}`}
                        onClick={() => setAvatar("/assets/avatarTemp2.png")}
                    />
                    <Image
                        src={avatar3}
                        width={125}
                        height={125}
                        alt="Avatar 3"
                        className={`cursor-pointer border hover:border-2 ${avatar === "/assets/avatarTemp3.png" ? "border-accent4 border-2" : ""}`}
                        onClick={() => setAvatar("/assets/avatarTemp3.png")}
                    />
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
                <p className="text-center mt-4 text-white text-md">
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
