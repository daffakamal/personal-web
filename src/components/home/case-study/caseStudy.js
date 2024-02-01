"use client";

import Link from "next/link";
import Image from "next/image";
import SectionWrapper from "../sectionWrapper";
import Wellbeing from "../../../../public/images/Wellbeing.png";

export default function CaseStudy() {
  return (
    <SectionWrapper id="case-study" className="mb-7" delay={0.3}>
      <h1 className="font-bold text-[22px] md:text-[25px] lg:text-title">
        Case Study
      </h1>
      <div className="w-full grid xl:flex xl:flex-wrap justify-between items-start gap-y-14 pt-5">
        <div className="flex justify-start items-start">
          <div className="w-auto">
            <Link
              href="https://drive.google.com/file/d/13gJtQINrs_ZeRJM4vfzYldJ8lFvaduSM/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="grid md:flex items-center md:space-x-8 w-full cursor-pointer"
            >
              <Image
                src={Wellbeing}
                className="md:w-[300px] lg:w-[350px] xl:w-[440px] md:h-[200px] lg:h-[220px] xl:h-[240px] rounded-lg"
                width={430}
                height={251}
                loading="lazy"
                alt="Screenshot case study"
              />
              <div>
                <h2 className="font-semibold text-md md:text-[17px] lg:text-subTitle pt-3">
                  Wellbeing App
                </h2>
                <p className="text-[15px] md:text-md lg:text-desc pt-1">
                  Case study of personalized mental wellness solution app that covers the problems, vision
                  & mission, target market, user persona, user flow, wireframe,
                  competitor analysis, and PRD.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
