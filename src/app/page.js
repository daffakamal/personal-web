"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Background from "../../public/images/Background.png";
import About from "@/components/home/about/about";
import ViewResume from "@/components/home/resume/viewResume";
import Contacts from "@/components/home/contacts/contacts";
import Footer from "@/components/home/layout/footer";
import Navbar from "@/components/home/layout/navbar";
import BackToTop from "@/components/home/backToTop";
import FlipImage from "@/components/home/flipImage";
import ProgressBar from "@/components/home/progressBar";
import CaseStudy from "@/components/home/case-study/caseStudy";
import Articles from "@/components/home/articles/articles";
import Experiences from "@/components/home/experiences/experiences";
import Projects from "@/components/home/projects/projects";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [progressPercentage, setProgressPercentage] = useState(0);

  function toggleDarkMode() {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
  }

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(storedDarkMode);
  }, []);

  const handleScroll = () => {
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolledHeight = window.scrollY;
    const newProgress = (scrolledHeight / totalHeight) * 100;
    setProgressPercentage(newProgress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main
      className={`min-h-full flex flex-col m-auto ${
        darkMode ? "dark" : "light"
      }`}
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="relative z-30">
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
      <About />
      <Experiences />
      <Projects />
      <CaseStudy />
      <Articles />
      <ViewResume />
      <Contacts />
      <Footer />
      <BackToTop />
      <ProgressBar progressPercentage={progressPercentage} />
    </main>
  );
}
