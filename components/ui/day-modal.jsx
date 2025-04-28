//display when click on top right day visual
//Shows day # and limits for the day
//have button to task and next day / trigger next day

import { X } from "lucide-react"


function DayModal({ isOpen, onClose }) {

    if (!isOpen ) return null

    return (
        <>
        <div className="relative ">
            <img src="/assets/paper-mini-poster.svg" height={600} width={600} alt="Paper-Poster-Image" className="relative flex mx-auto top-[150px] z-40"></img>
            {/* Close button
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-30"
              aria-label="Close"
            >
              <X size={32} />
            </button> */}
        </div>
        </>
    );

}

export default DayModal