"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaXmark } from "react-icons/fa6";
import { HiMoon, HiSun } from "react-icons/hi";
import { navbarList } from "../../data/dataNavbar";

export default function Navbar(props) {
  const [list] = useState(navbarList);
  const navbarRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 880);

    let resizeTimer;

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setIsMobile(window.innerWidth < 768);
      }, 200);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const closeNavbar = (event) => {
      if (
        isOpen &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", closeNavbar);

    return () => {
      document.removeEventListener("click", closeNavbar);
    };
  }, [isOpen]);

  return (
    <>
      {isMobile ? (
        <motion.nav
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <div
            className="fixed bottom-3 right-3.5 flex justify-center z-40 rounded-full p-2.5 bg-black-900 drop-shadow-2xl"
            onClick={toggleNavbar}
          >
            {isOpen ? (
              <FaXmark className="w-4 h-4 sm:w-5 sm:h-5 text-white cursor-pointer" />
            ) : (
              <FaBars className="w-4 h-4 sm:w-5 sm:h-5 text-white cursor-pointer" />
            )}
          </div>
          <motion.nav
            ref={navbarRef}
            className="fixed bottom-3 right-16 sm:right-20 w-48 p-2 z-40"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: isOpen ? 0 : 100, opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ pointerEvents: isOpen ? "auto" : "none" }}
          >
            <div className="flex flex-col justify-center items-center space-y-2.5 bg-black-900 drop-shadow-2xl rounded-2xl py-2 mx-auto">
              {list.map((nav) => (
                <Link
                  key={nav.id}
                  href={`${nav.href}`}
                  className="w-full px-7 py-1 text-center hover:underline hover:underline-offset-2"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  <h2 className="text-[15px] text-white-100">{nav.section}</h2>
                </Link>
              ))}
              <div className="flex items-center px-3 py-1.5 border-2 border-[#4A4A4A] rounded-2xl">
                <label for="darkModeToggle" className="text-[13px] text-white-100">
                  Dark Mode
                </label>
                <div className="relative inline-block w-8 ml-2 align-middle select-none transition duration-200 ease-in">
                  <input
                    type="checkbox"
                    name="darkModeToggle"
                    id="darkModeToggle"
                    className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer"
                    onChange={props.toggleDarkMode}
                    checked={props.darkMode}
                  />
                  <label
                    for="darkModeToggle"
                    className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-400 cursor-pointer"
                  ></label>
                </div>
              </div>
            </div>
          </motion.nav>
        </motion.nav>
      ) : (
        <motion.nav
          className="fixed inset-x-0 top-3 flex justify-center z-40"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <div className="flex justify-center items-center bg-black-900 drop-shadow-2xl rounded-full px-7 py-2 mx-auto">
            {list.map((nav) => (
              <Link key={nav.id} href={`${nav.href}`} className="mr-10">
                <h2 className="text-[15px] xl:text-md text-white-100">
                  {nav.section}
                </h2>
              </Link>
            ))}
            {props.darkMode ? (
              <HiSun
                className="w-6 h-6 text-white-100 cursor-pointer"
                onClick={props.toggleDarkMode}
              />
            ) : (
              <HiMoon
                className="w-6 h-6 text-white-100 cursor-pointer"
                onClick={props.toggleDarkMode}
              />
            )}
          </div>
        </motion.nav>
      )}
    </>
  );
}
