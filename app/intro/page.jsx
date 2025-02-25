// Introduction Page

import Link from "next/link";

export default function Intro() {
    return (
    <div className="h-screen flex justify-center items-center fade-in">
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
            <div className="flex text-center justify-center mt-5">
                <Link href="/homescreen">
                    <button className="rounded-lg bg-white text-black text-[20px] py-2 px-4 hover:scale-105">I ACCEPT</button>
                </ Link>
            </div>
        </div>
    </div>
    );
}