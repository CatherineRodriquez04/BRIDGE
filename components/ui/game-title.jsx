"use client"
import DeadmanLogo from "@/public/assets/logo.png"

function GameTitle() {
  return (
    <div className="flex flex-col items-center mb-6">
        <img src={DeadmanLogo}></img>
      <button className="mt-6 text-white text-2xl hover:text-mint-green transition-colors">
        PLAY
      </button>
    </div>
  )
}

export default GameTitle

// ({ onPlay = () => {} }: GameTitleProps)
// interface GameTitleProps {
//     onPlay: () => void
//   }
// onClick={onPlay}

      {/* <h1 className="text-mint-green text-5xl md:text-6xl font-bold tracking-wider">DEAD MAN'S</h1>
      <div className="flex items-center">
        <div className="h-px w-12 bg-mint-green"></div>
        <h2 className="text-mint-green text-2xl md:text-3xl mx-2 tracking-widest">HAND</h2>
        <div className="h-px w-12 bg-mint-green"></div>
      </div> */}