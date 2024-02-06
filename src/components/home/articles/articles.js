"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import SectionWrapper from "../sectionWrapper";
import { articlesList } from "@/components/data/dataArticles";

export default function Articles() {
  const [list] = useState(articlesList);

  return (
    <SectionWrapper id="article" className="mb-7" delay={0.3}>
      <h1 className="font-bold text-[22px] md:text-[25px] lg:text-title">
        Articles
      </h1>
      <div className="w-full grid xl:flex xl:flex-wrap justify-between items-start gap-y-14 pt-5">
        {list.map((article) => (
          <div
            key={article.id}
            className="flex justify-start items-start xl:max-w-[430px]"
          >
            <div className="w-auto">
              <Link
                href={`${article.link}`}
                target="_blank"
                rel="noopener noreferrer"
                className="grid md:flex items-center md:space-x-7 xl:space-x-0 xl:grid w-full xl:w-auto cursor-pointer"
              >
                <Image
                  src={`${article.img}`}
                  className="md:w-[300px] lg:w-[350px] xl:w-[440px] md:h-[200px] lg:h-[220px] xl:h-[250px] rounded-lg"
                  width={430}
                  height={251}
                  loading="lazy"
                  alt={`Screenshot article ${article.title}`}
                />
                <div>
                  <h2 className="font-semibold text-md md:text-[17px] lg:text-subTitle pt-3">
                    {article.title}
                  </h2>
                  <p className="text-[15px] md:text-md lg:text-desc pt-1">
                    {article.description}
                  </p>
                  <div className="flex flex-wrap pt-3">
                    {article.tag.map((tag, index) => (
                      <span
                        key={index}
                        className="text-[13px] md:text-[14px] lg:text-[15px] text-blue-900 bg-blue-100 px-4 py-1 rounded-full mr-3 mb-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
