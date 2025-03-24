// Homescreen Page

"use client"


import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import defaultAvatar from "@/public/assets/avatarTemp.png";

import avatar1 from "@/public/assets/avatarTemp.png";
import avatar2 from "@/public/assets/avatarTemp2.png";
import avatar3 from "@/public/assets/avatarTemp3.png";

import GameNavbar from "@/components/ui/game-navbar.jsx";

export default function HomeScreen() {
    const [showModal, setShowModal] = useState(false);
    const [playerName, setPlayerName] = useState("");;
    const [avatar, setAvatar] = useState("");

    const handleAccept = () => {
        setShowModal(true); // Open the modal when button is clicked
    };

    const handleClose = () => {
        setShowModal(false); // Close the modal when button is clicked
    };

    const handleSubmit = async () => {
        if (avatar) {
            localStorage.setItem('avatar', avatar);
        } else {
            alert('Please select an avatar');
        }
    };

    // On component mount, retrieve the player's name from localStorage
    useEffect(() => {
        const storedName = localStorage.getItem("playerName");
        const storedAvatar = localStorage.getItem("avatar");
        if (storedName) {
            setPlayerName(storedName);
        }
        if (storedAvatar) {
            setAvatar(storedAvatar);
        }
    }, []);

    return (
    <div className="h-screen w-screen flex fade-in bg-gradient-to-b from-accent to-accent2 relative">
        {/* Overlay for the fade effect */}
        {showModal && <div className="absolute inset-0 bg-black opacity-70 z-10"></div>}

        {/* header div */}
        <div className="flex flex-row ">

            <div className="top-6 right-[520px] absolute">
                <Link href="/collection">
                    <GameNavbar/>
                </Link>
            </div>

            {/* player info card */}
            {/* <div className="border-[10px] border-white min-h-[220px] min-w-[400px] ml-6 mt-6 max-h-[220px] max-w-[370px] flex flex-row overflow-hidden">
                <div className="">
                    <Image src={avatar || defaultAvatar} width={125} height={125} alt="AvatarTemp" className="mt-6 ml-3 mb-2 border"/>
                    <button className="ml-5 px-2 py-[1px] items-center text-[15px] bg-white text-black rounded-lg hover:scale-105" onClick={handleAccept}>Change Avatar</button>
                </div>
                <div className="ml-[35px] mt-4">
                    <p className="text-white text-[25px] mb-[-5px]">{playerName || "Player Name"}</p>
                    <div className="min-w-[150px] border border-white"></div>
                    <div>
                        <p className="text-white mt-2">Day Survived: 23</p>
                        <p className="text-white ">Cards Collected: 21</p>
                    </div>
                    <div className="mt-4 flex flex-row gap-6">
                        <p className="text-white mt-2">Gems: 2121</p>
                        <p className="text-white mt-2">Coins: 21283</p>
                    </div>
                </div>
            </div> */}

            {/* collection button */}
            <div className="top-6 right-[520px] absolute">
                <Link href="/collection">
                    <button className="px-[3px] text-[15px] rounded-lg text-black bg-accent4 hover:scale-105">COLLECTION</button>
                </Link>
            </div>
            
            {/* shop button */}
            <div className="top-6 right-[450px] absolute">
                <Link href="/shop">
                    <button className="px-[15px] text-[15px] rounded-lg text-black bg-accent4 hover:scale-105">SHOP</button>
                </Link>
            </div>
            {/* Money button */}
            <div className="top-6 right-[200px] absolute">
                <p className="pl-[80px] pr-[45px] text-[15px] rounded-lg text-black bg-accent4 text-end">21283</p>
            </div>
            {/* Gem button */}
            <div className="top-6 right-[35px] absolute">
                <p className="pl-[80px] pr-[45px] text-[15px] rounded-lg text-black bg-accent4 text-end">2121</p>
            </div>
        </div>



        {/* Modal for profile creation */}
        {showModal && (
            <div className="fixed inset-0 flex items-center justify-center z-20">
            <div className="bg-accent border-2 border-accent2 p-8 rounded-lg shadow-lg">
                {/* Close Modal without changing anything */}
                <button className="semibold hover:scale-105 text-2xl" onClick={handleClose}>
                    X
                </button>
                <h2 className="text-4xl mt-[-5px] text-center">Change Your Avatar</h2>
                <div className="min-w-[200px] border border-accent4"></div>

                {/* avatar selection */}
                <div>
                    <div className="flex justify-center mt-4 gap-4">
                        <Image src={avatar1} width={125} height={125} alt="Avatar 1" className={`cursor-pointer border hover:border-2 ${avatar === '/assets/avatarTemp.png' ? 'border-accent4 border-2' : ''}`} onClick={() => setAvatar('/assets/avatarTemp.png')} />
                        <Image src={avatar2} width={125} height={125} alt="Avatar 2" className={`cursor-pointer border hover:border-2 ${avatar === '/assets/avatarTemp2.png' ? 'border-accent4 border-2' : ''}`} onClick={() => setAvatar('/assets/avatarTemp2.png')} />
                        <Image src={avatar3} width={125} height={125} alt="Avatar 3" className={`cursor-pointer border hover:border-2 ${avatar === '/assets/avatarTemp3.png' ? 'border-accent4 border-2' : ''}`} onClick={() => setAvatar('/assets/avatarTemp3.png')} />
                    </div>
                </div>
                <div className="flex justify-center mt-4">
                        <button
                            className="bg-white text-black px-4 py-1 rounded-lg text-[20px] hover:scale-105"
                            onClick={handleSubmit && handleClose}
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
