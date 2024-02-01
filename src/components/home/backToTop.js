"use client";

import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa6";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 1000) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`backToTop ${
        isVisible ? "fadeIn pointer-events-auto" : "fadeOut pointer-events-none"
      }`}
      onClick={isVisible ? scrollToTop : null}
    >
      <div className="bg-black-900 drop-shadow-2xl rounded-full p-2.5 shadow-md">
        <FaChevronUp
          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
          color="#FAFAFA"
        />
      </div>
    </div>
  );
}
