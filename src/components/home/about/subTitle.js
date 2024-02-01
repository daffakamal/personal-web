"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const SubTitleComponent = ({ title, description, id, isOpen }) => {
  const [isOpenState, setIsOpenState] = useState(isOpen);

  const toggleOpen = () => {
    setIsOpenState(!isOpenState);
  };

  const show = {
    opacity: 1,
    display: "block"
  };

  const hide = {
    opacity: 0,
    transitionEnd: {
      display: "none"
    }
  };
  
  return (
    <div className="w-fit" key={id}>
      <div className="flex items-center cursor-pointer" onClick={toggleOpen}>
        {isOpenState ? <FaAngleUp /> : <FaAngleDown />}
        <h2 className="ml-2 font-semibold">{title}</h2>
      </div>
      <motion.p
        className="text-[15px] md:text-md xl:text-desc mt-2 mb-6"
        initial={isOpenState ? show : hide}
        animate={isOpenState ? show : hide}
        transition={{ duration: 0.3 }}
      >
        {description}
      </motion.p>
    </div>
  );
};

export default SubTitleComponent;
