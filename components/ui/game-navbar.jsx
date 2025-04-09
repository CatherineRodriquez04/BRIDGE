import Link from "next/link"
import { cn } from "@/lib/utils"

// Simple navbar component with no props
 function Navbar() {
  // Internal function for nav buttons
  function NavButton({ label, href }) {
    return (
      <>
      <Link
        href={href}
        className={cn(
          "h-8 px-4 flex items-center justify-center",
          "bg-[#0B0C2A] text-white font-bold text-xl tracking-wider",
          "transform skew-x-[-15deg] hover:bg-[#0d0f24] transition-colors",
          "border border-[#4eff91]/50 hover:border-[#4eff91]",
        )}
      >
        <span className="transform skew-x-[15deg]">{label}</span>
      </Link>
      <div className="fixed top-0 right-0 left-0 z-10">
                  {/* Money button */}
                  <div className="top-6 right-[225px] absolute">
                <p className="h-10 w-38 pl-[80px] pr-[45px] text-[20px] rounded-lg border border-[#C8E3B8] text-white bg-[#382966] flex items-center ">Coins
                    <img src={'/assets/icon-coin.svg'} width={25} height={25} alt="Deadman's Logo" className="inline-block left-2 top-2 absolute"></img>
                    <button className="h-6 w-6 bg-[#C8E3B8] hover:scale-105 absolute right-2 top-2 rounded-sm">
                        <p className="relative text-4xl text-black font-bold bottom-2 left-[1px]">+</p>
                    </button>
                </p>
            </div>
            {/* Gem button */}
            <div className="top-6 right-[35px] absolute">
            <p className="h-10 w-38 pl-[80px] pr-[45px] text-[20px] rounded-lg border border-[#C8E3B8] text-white bg-[#382966] flex items-center ">Gems
                <img src={'/assets/icon-gem.svg'} width={25} height={25} alt="Deadman's Logo" className="inline-block left-2.5 top-[12px] absolute"></img>
                <button className="h-6 w-6 bg-[#C8E3B8] hover:scale-105 absolute right-2 top-2 rounded-sm">
                        <p className="relative text-4xl text-black font-bold bottom-2 left-[1px]">+</p>
                    </button>
                </p>
            </div>
        </div>
      </>
    )
  }

  // Hardcoded navigation items
  const navItems = [
    { label: "HOME", href: "/homescreen" },
    { label: "PACKS", href: "/packs" },
    { label: "SHOP", href: "/shop" },
    { label: "EXCHANGE", href: "/exchange" },
    { label: "COLLECTION", href: "/collection" },
    { label: "LEADERBOARD", href: "/leaderboard" },
  ]

  return (
    <nav className="fixed top-4 left-4 flex items-center gap-2 p-4">
      {navItems.map((item) => (
        <NavButton key={item.label} label={item.label} href={item.href} />
      ))}
    </nav>
  )
}

export default Navbar