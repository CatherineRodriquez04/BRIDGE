import { usePlayer } from "@/components/ui/PlayerContent";
import { doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "@/lib/firebase";
import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import DayModal from "@/components/ui/day-modal.jsx";

function Navbar() {
  const { coins, gems, cash, days, setDay } = usePlayer(); // include setDays

  const [isDayModalOpen, setIsDayModalOpen] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "players", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setDay(data.days || "1");  // Update the context when Firestore data changes
        }
      }
    });
    return () => unsubscribe();
  }, [setDay]);  // Ensure that the effect runs only once and subscribes to updates

  function NavButton({ label, href, index }) {
    const isLeftSide = index < 6;
    return (
      <div className="relative h-[40px] w-[150px]">
        <div
          className={cn(
            "absolute inset-0 bg-[#0B0C2A] border-2 border-[#C8E3B8] rounded-lg transform origin-center",
            isLeftSide && "skew-x-[15deg]"
          )}
        ></div>
        <Link
          href={href}
          className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm uppercase tracking-wider z-10 hover:text-[#C8E3B8] transition-colors"
        >
          {label}
        </Link>
      </div>
    );
  }

  const navItems = [
    { label: "HOME", href: "/homescreen" },
    { label: "PACKS", href: "/packs" },
    { label: "SHOP", href: "/shop" },
    { label: "EXCHANGE", href: "/exchange" },
    { label: "COLLECTION", href: "/collection" },
    { label: "LEADERBOARD", href: "/leaderboard" },
  ];

  return (
    <>
      <nav className="fixed top-4 left-4 flex items-center gap-3 p-4">
        {navItems.map((item, index) => (
          <NavButton key={item.label} label={item.label} href={item.href} index={index} />
        ))}
      </nav>

      <div className="relative top-[6px] right-[7rem]">
        <Link href="/task">
          <button
            type="button"
            className="h-[43px] w-[200%] flex items-center justify-center bg-[#0B0C2A] text-white hover:text-[#0B0C2A] border-[#C8E3B8] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-2xl border-2"
          >
            T.A.S.K
          </button>
        </Link>
      </div>

      <div className="fixed top-0 right-0 left-0 z-10">
        {/* Coins */}
        <div className="top-8 right-[20%] absolute">
          <p className="h-10 w-38 min-w-[10rem] pl-[4rem] pr-[45px] text-[20px] rounded-lg border border-[#C8E3B8] text-white bg-[#382966] flex items-center">
            {coins ?? "Loading..."}
          </p>
          <img src="/assets/icon-coin.svg" width={25} height={25} alt="Coins" className="absolute left-2 top-2" />
          <Link href="/exchange">
            <div className="h-6 w-6 bg-[#C8E3B8] hover:scale-105 absolute right-2 top-2 rounded-sm flex items-center justify-center">
              <p className="text-2xl text-black font-bold">+</p>
            </div>
          </Link>
        </div>

        {/* Gems */}
        <div className="top-8 right-[11.2%] absolute">
          <p className="h-10 w-38 min-w-[10rem] pl-[4rem] pr-[45px] text-[20px] rounded-lg border border-[#C8E3B8] text-white bg-[#382966] flex items-center">
            {gems ?? "Loading..."}
          </p>
          <img src="/assets/icon-gem.svg" width={25} height={25} alt="Gems" className="absolute left-2 top-[11px]" />
          <Link href="/exchange">
            <div className="h-6 w-6 bg-[#C8E3B8] hover:scale-105 absolute right-2 top-2 rounded-sm flex items-center justify-center">
              <p className="text-2xl text-black font-bold">+</p>
            </div>
          </Link>
        </div>
        
        {/* Cash (Real Money) */}
        <div className="top-8 right-[5.7%] absolute">
          <p className="h-10 w-38 min-w-[6rem] pl-[3rem] pr-[1rem] text-[20px] rounded-lg border border-[#C8E3B8] text-white bg-[#382966] flex items-center">
            {cash ?? "Loading..."}
          </p>
          <img src="/assets/money-icon.svg" width={25} height={25} alt="Cash" className="absolute left-2 top-[11.5px]" />
        </div>

        {/* Day Display */}
        <button type="button" onClick={() => setIsDayModalOpen(true)} className="absolute h-20 w-20 top-2 right-[15px] flex items-center justify-center text-[32px] font-semibold leading-none">
            <div className="z-10 text-black text-center">
              Day
              <div>{days}</div>
            </div>
              <img src="/assets/paper-mini-poster.svg" width={300} height={300} alt="Day Poster" className="absolute " />    
        </button>
        <DayModal isOpen={isDayModalOpen} onClose={() => setIsDayModalOpen(false)} /> 

      </div>
    </>
  );
}

export default Navbar;
