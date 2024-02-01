"use client";

import { useState } from "react";
import Image from "next/image";
import frontImageUrl from "../../../public/images/Profile.png";

const FlipImage = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flip-box" onClick={flip}>
      <div className={`flip-box-inner ${isFlipped ? "flip" : ""}`}>
        <div className="flip-box-front">
          <Image
            src={frontImageUrl}
            alt="Profile"
            className="w-[120px] sm:w-[140px] md:w-[155px] lg:w-[160px] h-[120px] sm:h-[140px] md:h-[155px] lg:h-[160px] pointer-events-none"
            priority
          />
        </div>
        <div className="flip-box-back">
          <Image
            src={frontImageUrl}
            alt="Profile"
            className="w-[120px] sm:w-[140px] md:w-[155px] lg:w-[160px] h-[120px] sm:h-[140px] md:h-[155px] lg:h-[160px] pointer-events-none"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default FlipImage;
