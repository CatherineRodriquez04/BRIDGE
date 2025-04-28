//display when click on top right day visual
//Shows day # and limits for the day
//have button to task and next day / trigger next day

import { X } from "lucide-react"
import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "@/lib/firebase";

import Link from "next/link";

function DayModal({ isOpen, onClose }) {

  const [days, setDays] = useState("");


  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "players", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setDays(data.days || "1");
        }
      }
    });
    return () => unsubscribe();
  }, []);

    if (!isOpen ) return null

    return (
        <>
        <div className="relative top-[170px] left-[33%] z-50 h-[600px] w-[600px] ">
            <img src="/assets/paper-mini-poster.svg" height={600} width={600} alt="Paper-Poster-Image" className="absolute -z-1"></img>
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-8 left-[510px] text-[#5E4112] hover:text-gray-300 transition-colors z-30"
              aria-label="Close"
            >
              <X size={56} />
            </button>
            <div className="absolute -top-[50px] left-[200px] text-black text-[150px] z-20">
                Day
            </div>
            
            <div className="absolute top-[180px] left-[250px] text-black text-8xl z-20">
              {days}/5
            </div>
            {/* Limits */}
            <div className="absolute top-[290px] left-[170px] text-black text-5xl z-20">
                Today's Limits
            </div>
            {/* Limit Display (3) */}
            <div className="absolute w-full top-[350px] text-[#0B0C2A] z-20">
              {/* Top row - 3 items */}
                <div className="flex justify-between mb-8">
                  <div className="text-center w-1/3">
                    <p className="text-5xl mb-1">Shop</p>
                    <p className="text-4xl ">#/3</p>
                    {/* Fillable value later */}
                  </div>

                  <div className="text-center w-1/3">
                    <p className="text-5xl mb-1">Battles</p>
                    <p className="text-4xl ">#/5</p>
                  </div>

                  <div className="text-center w-1/3">
                    <p className="text-5xl mb-1">Packs</p>
                    <p className="text-4xl">#/3</p>
                  </div>
                </div>
            </div>
            {/* Task Button */}
            <div className="absolute top-[77%] left-[12%] text-5xl z-20">
              <Link href="/task">
               <button className="absolute h-[80px] w-[200px] flex items-center justify-center left-[19%] top-[120%]  bg-[#C9B080] border-[#5E4112] font-medium rounded-lg text-5xl px-5 py-4 border-[7px] text-black  transition active:scale-95 z-50">
                  T.A.S.K
                </button>
              </Link>
            </div>
            { /*To next Day button (add functionality) */}
          <div className="absolute top-[77%] left-[51%]">
            <button className="absolute h-[80px] w-[230px] flex items-center justify-center left-[19%] top-[120%]  bg-[#C9B080] border-[#5E4112] font-medium rounded-lg text-5xl px-5 py-4 border-[7px] text-black transition active:scale-95 z-50">
              Next Day
            </button>
          </div>
        </div>
        </>
    );

}

export default DayModal