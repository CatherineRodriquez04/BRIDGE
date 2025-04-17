import Link from "next/link";
import Card from "@/components/ui/card.jsx";

function BattleLossDisplay() {
    return (
        <>
            <div className="relative h-[40%] w-[60%] bg-[#0B0C2A] border-4 border-[#C4F7BC] rounded-lg flex justify-center mx-auto z-20 top-[25%] hover:text-[#C4F7BC]">
                <p className="absolute top-[10%] text-5xl text-white hover:text-[#C4F7BC]">You Lost! </p>
                {/* Space here for winnings (have logic to attribute items to user) */}
                {/*Win: User earns 1 free pack (randomize rarity?) */}
                {/* user earns +500 coins */}

                <div className="absolute top-[30%] text-3xl text-white ">
                    +100 Coins
                </div>

                {/* <div className="absolute top-[47%] text-3xl text-white ">
                    +1 Standard Pack
                </div> */}

                <Link href="/homescreen"> 
                    <button type="button" className="absolute w-[25%] top-[67%] left-[38%] flex items-center justify-center bg-[#0B0C2A] text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-4xl px-5 py-1.5 mt-2  border-4">Return to Home</button>
                </Link>
            </div>
        </>
    );

}

export default BattleLossDisplay