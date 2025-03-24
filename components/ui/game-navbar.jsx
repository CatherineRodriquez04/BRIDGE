import Link from "next/link"
import { cn } from "@/lib/utils"

export default function Navbar({ className }) {
  // Hardcoded navigation items since they're fixed in the design
  const navItems = [
    { label: "PACKS", href: "/packs" },
    { label: "SHOP", href: "/shop" },
    { label: "EXCHANGE", href: "/exchange" },
    { label: "COLLECTION", href: "/collection" },
    { label: "LEADERBOARD", href: "/leaderboard" },
  ]

  return (
    <nav className={cn("flex justify-center items-center w-full gap-2 p-4", className)}>
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="relative h-14 px-8 flex items-center justify-center
                    bg-[#0a0b1a] text-white font-bold text-xl tracking-wider
                    transform skew-x-[-15deg] hover:bg-[#0d0f24] transition-colors
                    border border-[#4eff91]/50 hover:border-[#4eff91]"
        >
          <span className="transform skew-x-[15deg]">{item.label}</span>
        </Link>
      ))}
    </nav>
  )
}

