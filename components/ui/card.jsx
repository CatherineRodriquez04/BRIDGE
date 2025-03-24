//card front and card back need to be seperate?
//have flip button / animation 

import {useState} from "react"

export default function Card() {
  return (
    <div className="flex flex-col">
      <div className="w-56 h-80 bg-indigo-700">
        <div className="rounded-full bg-white w-12 h-12 mt-1 ml-1">
            
        </div>
        <div className="w-42 h-52 bg-black ml-2 mr-2">
            Card Image
        </div>
        <div className="rounded-full bg-white w-12 h-12 ml-44 mb-1 mr-1">
            
        </div>
      </div>
    </div>
  );
}

// const Card = ({ frontContent, backContent }) => {
    //   const [isFlipped, setIsFlipped] = useState(false)
    
    //   const handleFlip = () => {
    //     setIsFlipped(!isFlipped)
    //   }
    
    //   return (
    //     <div className={`relative w-full h-full transition-transform duration-500 ${isFlipped ? "transform rotate-y-180" : ""}`}>
    //       <div className="absolute w-full h-full backface-hidden">
    //         {frontContent}
    //         <div>
    //         </div>
    //       </div>
    //       <div className={`absolute w-full h-full backface-hidden ${isFlipped ? "block" : "hidden"}`}>
    //         {backContent}
    //       </div>
    //       <button onClick={handleFlip} className="absolute top-2 right-2 bg-gray-200 p-2 rounded-md shadow-md">
    //         Flip
    //       </button>
    //     </div>
    //   )
    // }