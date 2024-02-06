"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { experiencesList } from "../../data/dataExperiences";
import SectionWrapper from "../sectionWrapper";

export default function Experiences() {
  const [list] = useState(experiencesList);
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
  };

  return (
    <SectionWrapper id="experience" className="-mt-3 md:mt-0" delay={0.5}>
      <h1 className="font-bold text-[22px] md:text-[25px] lg:text-title pb-3">
        Experiences
      </h1>
      {list.map((experience, index) => (
        <div
          key={experience.id}
          className={`flex items-start lg:space-x-7 xl:space-x-5 mb-6 fade-content ${
            !showAll && index >= 5 ? "hide" : ""
          }`}
        >
          <p className="hidden md:block w-56 dark:text-stone-300 text-black-900 text-[15px] md:text-md lg:text-desc">
            {experience.date}
          </p>
          <div className="w-full">
            <h2 className="font-semibold text-md md:text-[17px] lg:text-subTitle">
              {experience.title}
            </h2>
            <h3 className="dark:text-stone-300 text-black-900 text-[15px] md:text-md lg:text-desc">
              {experience.subTitle}
            </h3>
            <p className="md:hidden dark:text-stone-300 text-black-900 w-56 text-[15px] md:text-md lg:text-desc">
              {experience.date}
            </p>
            <ul className="list-disc pl-5 mt-2 text-[15px] md:text-md lg:text-desc">
              {experience.bulletList.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
            <div className="flex flex-wrap mt-4">
              {experience.tag.map((tag, index) => (
                <span
                  key={index}
                  className="text-[13px] md:text-[14px] lg:text-[15px] text-blue-900 bg-blue-100 px-3 py-1 rounded-full mr-2 mb-2"
                >
                  {tag}
                </span>
              ))}
            </div>
            {index < list.length - 1 && (
              <div className="w-full h-[1px] bg-stone-500/70 mt-5"></div>
            )}
          </div>
        </div>
      ))}
      {!showAll && (
        <div className="text-center">
          <motion.button
            onClick={handleShowAll}
            whileTap={{ scale: 0.9 }}
            className="group relative rounded-xl mt-1 py-2 px-4 overflow-hidden text-white bg-blue-300 text-[13px] md:text-[14px] lg:text-[15px] shadow"
          >
            <div className="absolute inset-0 w-0 bg-blue-500 transition-all duration-[300ms] ease-out group-hover:w-full rounded-xl"></div>
            <span className="relative">View All</span>
          </motion.button>
        </div>
      )}
      {showAll && (
        <div className="text-center">
          <motion.button
            onClick={handleShowLess}
            whileTap={{ scale: 0.9 }}
            className="group relative rounded-xl mt-1 py-2 px-4 overflow-hidden text-white bg-blue-300 text-[13px] md:text-[14px] lg:text-[15px] shadow"
          >
            <div className="absolute inset-0 w-0 bg-blue-500 transition-all duration-[300ms] ease-out group-hover:w-full rounded-xl"></div>
            <span className="relative">View Less</span>
          </motion.button>
        </div>
      )}
    </SectionWrapper>
  );
}
