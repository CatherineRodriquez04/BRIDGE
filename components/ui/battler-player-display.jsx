import Card from "@/components/ui/card.jsx";


function BattlePlayerDisplay() {
    return (
        <>
            {/* Left Card */}
            <div className="absolute rounded-lg p-4 left-[28%] bottom-[2%]">
                <Card/>
            </div>
            {/* Center card */}
            <div className="absolute rounded-lg p-4 left-[42.5%] bottom-[6%] mx-auto">
                <Card/>
            </div>
            {/* Right Card */}
            <div className="absolute rounded-lg p-4 right-[28%] bottom-[2%]">
                <Card/>
            </div>
        </>
    );

}

export default BattlePlayerDisplay