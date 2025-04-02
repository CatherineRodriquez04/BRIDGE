import Link from "next/link"
import { cn } from "@/lib/utils"

// Simple navbar component with no props
 function Navbar() {
  // Internal function for nav buttons
  function NavButton({ label, href }) {
    return (
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
    )
  }

  // Hardcoded navigation items
  const navItems = [
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