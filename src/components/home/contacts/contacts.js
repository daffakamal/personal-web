"use client";

import Link from "next/link";
import { useState } from "react";
import { contactsList } from "../../data/dataContacts";
import { HiMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoInstagramAlt } from "react-icons/bi";
import SectionWrapper from "../sectionWrapper";

export default function Contacts() {
  const [list] = useState(contactsList);

  return (
    <SectionWrapper id="contact" className="pb-9" delay={0.5}>
      <h1 className="font-bold text-[22px] md:text-title pb-4">Contacts</h1>
      <div className="flex flex-col space-y-5">
        {list.map((contact) => (
          <div
            key={contact.id}
            className="w-fit flex justify-start items-center cursor-pointer"
          >
            <Link
              href={`${contact.link}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-auto cursor-pointer"
            >
              <div className="flex items-center hover:underline underline-offset-2 transition duration-100">
                {contact.id === 1 && <HiMail className="mr-2" size={25} />}
                {contact.id === 2 && (
                  <FaGithub className="mr-2.5" size={22.5} />
                )}
                {contact.id === 3 && (
                  <BiLogoLinkedinSquare className="mr-2" size={25} />
                )}
                {contact.id === 4 && (
                  <BiLogoInstagramAlt className="mr-2" size={26} />
                )}
                <p className="text-desc">{contact.contact}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}