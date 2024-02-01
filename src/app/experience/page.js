"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Background from "../../../public/images/Background.png";
import About from "@/components/home/about/about";
import Experiences from "@/components/home/experiences/experiences";
import Projects from "@/components/home/projects/projects";
import Footer from "@/components/home/layout/footer";
import Navbar from "@/components/home/layout/navbar";
import FlipImage from "@/components/home/flipImage";

export default function Experience() {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
  }

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(storedDarkMode);
  }, []);

  return (
    <main
      className={`min-h-full flex flex-col m-auto ${
        darkMode ? "dark" : "light"
      }`}
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="relative z-30 pb-12">
        <Image
          src={Background}
          alt="Gradient background"
          className="w-full h-[230px] object-cover pointer-events-none"
          priority
        />
        <motion.div
          className="px-7 sm:px-20 lg:px-32 xl:px-0"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "string" }}
        >
          <div className="mx-auto max-w-[700px] lg:max-w-[800px]  xl:max-w-[1000px]">
            <FlipImage />
          </div>
        </motion.div>
      </div>
      <Experiences />
      <Projects />
      <Footer />
    </main>
  );
}
