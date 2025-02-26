// Homescreen Page

"use client"


import Link from "next/link";
import Image from "next/image";

import avatarTemp from "@/public/assets/avatarTemp.png";

export default function Home() {
    return (
    <div className="h-screen w-screen flex fade-in bg-gradient-to-b from-accent to-accent2 relative">
        {/* header div */}
        <div className="flex flex-row ">
            {/* player info card */}
            <div className="border-[10px] border-white min-h-[220px] min-w-[400px] ml-6 mt-6 max-h-[220px] max-w-[370px] flex flex-row overflow-hidden">
                <div className="">
                    <Image src={avatarTemp} width={125} height={125} alt="AvatarTemp" className="mt-6 ml-3 mb-2 border"/>
                    <button className="ml-5 px-2 py-[1px] items-center text-[15px] bg-white text-black rounded-lg hover:scale-105">Change Avatar</button>
                </div>
                <div className="ml-[35px] mt-4">
                    <p className="text-white text-[25px] mb-[-5px]">Player Name</p>
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
            </div>
            {/* collection button */}
            <div className="top-6 right-[520px] absolute">
                <button className="px-[3px] text-[15px] rounded-lg text-black bg-accent4 hover:scale-105">COLLECTION</button>
            </div>
            {/* shop button */}
            <div className="top-6 right-[450px] absolute">
                <button className="px-[15px] text-[15px] rounded-lg text-black bg-accent4 hover:scale-105">SHOP</button>
            </div>
            {/* Money button */}
            <div className="top-6 right-[200px] absolute">
                <p className="pl-[80px] pr-[45px] text-[15px] rounded-lg text-black bg-accent4 hover:scale-105 text-end">21283</p>
            </div>
            {/* Gem button */}
            <div className="top-6 right-[35px] absolute">
                <p className="pl-[80px] pr-[45px] text-[15px] rounded-lg text-black bg-accent4 hover:scale-105 text-end">2121</p>
            </div>
        </div>
    </div>
    );
}
