"use client";

import { useState } from "react";
import SectionWrapper from "../sectionWrapper";
import SubTitleComponent from "./subTitle";
import { aboutList } from "@/components/data/dataAbout";

export default function About() {
  // const [list] = useState(aboutList);

  return (
    <SectionWrapper id="about" className="mt-5 md:mt-10" delay={0.2}>
      <h1 className="font-bold text-xl md:text-[30px] lg:text-2xl">
        Hi👋🏻, I&apos;m{" "}
        <span className="bg-[#B9D9FF] bg-clip-text text-transparent">
          Daffa K.
        </span>
      </h1>
      {/* <div className="md:hidden text-[15px] md:text-md xl:text-desc pt-4 space-y-4">
        {list.map((about) => (
          <SubTitleComponent
            key={about.id}
            title={about.title}
            description={about.description}
            isOpen={about.id === 1}
          />
        ))}
      </div> */}
      <div className="text-[15px] md:text-md xl:text-desc pt-4 space-y-4">
        <p>
          I&apos;m an aspiring web developer, UI/UX designer, and product
          manager who has a variety of knowledge related to digital products.
          I have actively contributed to various events within the university and
          department as a frontend web developer and web designer. I also have
          experience in cross functional coordination and collaboration between
          teams and divisions in university and department level events and
          communities. Besides that, I have knowledge spanning product research, design,
          and development that reflect my understanding of the product
          lifecycle. My unique blend of technical knowledge, UI/UX design
          skills, leadership, communication, agility, and adaptability,
          makes me a valuable asset. Eager to contribute to the company&apos;s
          success, deliver innovations, and keep up in the field of digital products.
        </p>
      </div>
    </SectionWrapper>
  );
}
