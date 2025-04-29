import Card from "@/components/ui/card.jsx";

function BattlePlayerDisplay({ selectedCards }) {
    return (
        <>
        {/* Left Card */}
        <div className="absolute rounded-lg p-4 left-[28%] bottom-[2%]">
            {selectedCards[0] && <Card cardId={selectedCards[0]} />}
        </div>
        {/* Center Card */}
        <div className="absolute rounded-lg p-4 left-[42.5%] bottom-[6%] mx-auto">
            {selectedCards[1] && <Card cardId={selectedCards[1]} />}
        </div>
        {/* Right Card */}
        <div className="absolute rounded-lg p-4 right-[28%] bottom-[2%]">
            {selectedCards[2] && <Card cardId={selectedCards[2]} />}
        </div>
        </>
    );
}

export default BattlePlayerDisplay;
