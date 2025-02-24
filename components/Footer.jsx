/** @format */

"use client";

import Image from "next/image";
import Link from "next/link";

//logo
import Logo from "../public/assets/logo.webp";

const Footer = () => {
  const isDarkMode = false;
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // useEffect(() => {
  //     // Check for the dark mode class on the root element (html)
  //     const darkModeEnabled = document.documentElement.classList.contains('dark');
  //     setIsDarkMode(darkModeEnabled);

  //     // Optionally, listen for class changes if dark mode toggles dynamically
  //     const observer = new MutationObserver(() => {
  //         const darkModeEnabled = document.documentElement.classList.contains('dark');
  //         setIsDarkMode(darkModeEnabled);
  //     });

  //     // Observe changes on the `class` attribute of the <html> element
  //     observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

  //     return () => {
  //         observer.disconnect();
  //     };
  // }, []);

  return (
    <footer className={`footerBg ${isDarkMode ? "dark" : "light"}`}>
      <div className="py-6 mt-12 mx-auto flex flex-col md:flex-row justify-between xl:px-10 px-5">
        <div>
          {/* logo */}
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              width={75}
              height={75}
              className="hover:scale-105 mb-4"
            />
          </Link>
          <p className="text-2xl font-semibold -mt-2">
            Dead Man's Hand
            <span className="text-[35px] font-semibold text-accent">.</span>
          </p>
          <p className="font-semibold text-md -mt-1">Are You Playing the Game, or is the game Playing You?</p>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Resources</h3>
          <ul className="text-[15px]">
            <li>
              <a
                href="#about"
                className="hover:underline hover:text-accent"
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-2">
        {/* <p className="text-sm ">
          &copy; 2025 S title. All rights reserved.{" "}
        </p> */}
      </div>
    </footer>
  );
};

export default Footer;
