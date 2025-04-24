//handle pack open functionality / spin / go to open display

import Card from "@/components/ui/card.jsx";
import Link from "next/link";

function PackOpen() {
    return (
        <>
        
            <div className="relative flex h-[80%] w-[80%] bg-[#0B0C2A] border-4 border-[#C4F7BC] rounded-lg p-4 z-50 flex items-center justify-center mx-auto my-auto overflow-x-scroll space-x-10">
                <Card/>
                <Card/>
                <Card/>

            {/* Close pack popup (conditional close ) */}
            <div className="absolute bottom-[16%] left-[18%] w-[40%]">
                {/* Seitch to conditionally close popup */}
                <Link href="/packs">
                <button
                    type="button"
                    className="absolute w-[30%] left-[31%] flex items-center justify-center bg-[#0B0C2A] text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-4xl px-5 py-1.5 border-4"
                >
                    Close
                </button>
                </Link>
            </div>

            <div className="absolute bottom-[16%] left-[33%] w-[40%]">
                <Link href="/collection">
                <button
                    type="button"
                    className="absolute w-[50%] left-[31%] flex items-center justify-center bg-[#0B0C2A] text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-4xl px-5 py-1.5 border-4"
                >
                    Go to Collection
                </button>
                </Link>
            </div>
        
            </div>
        </>
    );

}

export default PackOpen