
import Card from "@/components/ui/card.jsx";

function BattleOpponentDisplay() {
    return (
        <>
            {/* Left Card */}
            <div className="absolute flex rounded-lg p-4 left-[28%] top-[2%]">
                <Card/>
            </div>
            {/* Center card */}
            <div className="absolute flex rounded-lg p-4 top-[6%] left-[42.5%]">
                <Card/>
            </div>
            {/* Right Card */}
            <div className="absolute flex rounded-lg p-4 right-[28%] top-[2%]">
                <Card/>
            </div>
        </>
    );

}

export default BattleOpponentDisplay