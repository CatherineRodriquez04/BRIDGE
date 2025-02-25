/** @format */

"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

//logo
import Logo from "../public/assets/logo.webp";

//components
import Nav from "./Nav";

const Header = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="py-4 xl:py-4 text-black ">
      <div className="xl:ml-3 xl:mr-8 mx-3 flex justify-between items-center relative">
        <div className="flex flex-col xl:flex-row items-center w-full">
          {/* logo - center on mobile */}
          {/* <Link href="/" className="flex justify-center w-full xl:w-auto">
            <Image
              src={Logo}
              alt="Logo"
              width={125}
              height={125}
              className="hover:scale-105"
            />
          </Link> */}

          <div className="flex-1 text-left mx-[20px] mt-[-15px] mb-2 xl:mt-0 xl:mb-0">
            <h1 className="h1 text-accent3 xl:text-[35px] text-[22px] mt-2 mb-1 text-center xl:text-left">
              Dead Man's Hand
              <span className="text-[40px] font-semibold text-accent">.</span>
            </h1>
            <p className="h3 text-accent3 xl:text-[20px] text-[17px] text-center xl:text-left">
              Are You Playing the Game, or is the Game Playing You?
            </p>
          </div>
        </div>

        {/* desktop nav & profile options */}
        <div className="hidden xl:flex items-center gap-8 relative">
          <Nav />
        </div>

      </div>

      {/* border */}
      <div className="mt-2 border border-accent"></div>
    </header>
  );
};

export default Header;
