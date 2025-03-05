// Introduction Page

"use client"

import Link from "next/link";
import { useEffect, useState } from 'react';

import Image from "next/image";

import avatar1 from "@/public/assets/avatarTemp.png";
import avatar2 from "@/public/assets/avatarTemp2.png";
import avatar3 from "@/public/assets/avatarTemp3.png";

export default function Intro() {
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');

    const handleAccept = () => {
        setShowModal(true); // Open the modal when button is clicked
    };

    const handleSubmit = async () => {
        if (name && avatar) {
            // save the name and avatar to localStorage
            localStorage.setItem('playerName', name);
            localStorage.setItem('avatar', avatar);
        } else {
            alert('Please enter a name and select an avatar');
        }
    };
    
    return (
    <div className="h-screen flex justify-center items-center fade-in">
        {/* Overlay for the fade effect */}
        {showModal && <div className="absolute inset-0 bg-black opacity-70 z-10"></div>}


        {/* Storyline for Introduction */}
        <div className="flex flex-col text-center">
            <h1 className="text-[40px]">BOOM! CRASH! ...</h1>
            <p className="text-[30px]">...</p>
            {/* <p className="text-[30px]">...</p> */}
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

            {/* button to begin game -> leads to profile creation pop up */}
            <div className="flex text-center justify-center mt-5">
                <button
                    className="rounded-lg bg-white text-black text-[20px] py-2 px-4 hover:scale-105"
                    onClick={handleAccept}
                >
                    I ACCEPT
                </button>
            </div>
        </div>

        {/* Modal for profile creation */}
        {showModal && (
            <div className="fixed inset-0 flex items-center justify-center z-20">
            <div className="bg-accent border-2 border-accent2 p-8 rounded-lg shadow-lg">
                <h2 className="text-4xl text-center">Create Your Profile</h2>
                <div className="min-w-[200px] border border-accent4"></div>

                {/* name input */}
                <input
                type="text"
                placeholder="Enter your name"
                className="border mt-5 border-gray-300 p-2 rounded w-full text-black text-[20px]"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={18} //max length is 18 characters
                />

                {/* avatar selection */}
                <div>
                    <p className="mt-2 text-[25px] text-center">Choose your avatar:</p>
                    <div className="flex justify-center mt-4 gap-4">
                        <Image src={avatar1} width={125} height={125} alt="Avatar 1" className={`cursor-pointer border hover:border-2 ${avatar === '/assets/avatarTemp.png' ? 'border-accent4 border-2' : ''}`} onClick={() => setAvatar('/assets/avatarTemp.png')} />
                        <Image src={avatar2} width={125} height={125} alt="Avatar 2" className={`cursor-pointer border hover:border-2 ${avatar === '/assets/avatarTemp2.png' ? 'border-accent4 border-2' : ''}`} onClick={() => setAvatar('/assets/avatarTemp2.png')} />
                        <Image src={avatar3} width={125} height={125} alt="Avatar 3" className={`cursor-pointer border hover:border-2 ${avatar === '/assets/avatarTemp3.png' ? 'border-accent4 border-2' : ''}`} onClick={() => setAvatar('/assets/avatarTemp3.png')} />
                    </div>
                </div>
                <div className="flex justify-center mt-4">
                    <Link href="/homescreen">
                        <button
                            className="bg-white text-black px-4 py-2 rounded-lg text-[20px] hover:scale-105"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </Link>
                </div>
            </div>
            </div>
        )}
    </div>
    );
}