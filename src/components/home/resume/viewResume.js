import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import Person from "../../../../public/images/Person.png";
import SectionWrapper from "../sectionWrapper";

export default function ViewResume() {
  return (
    <SectionWrapper id="resume" className="mx-auto" delay={0.3}>
      <div className="grid justify-items-center md:flex items-center md:space-x-16 px-9 md:px-11 py-6 md:py-4 lg:py-6 rounded-[32px] w-full bg-gradient-to-r from-purple-100/80 to-pink-100/80 drop-shadow-white">
        <div className="w-auto text-center md:text-left mb-5 md:mb-0">
          <h1 className="font-semibold text-[13px] md:text-[14px] lg:text-[18px]">
            Want to know more about me?
          </h1>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="group relative mt-3 py-1.5 overflow-hidden rounded-full text-white text-center bg-blue-300 text-[13px] md:text-[14px] lg:text-[15px]"
          >
            <div className="absolute inset-0 w-0 bg-blue-500 transition-all duration-[300ms] ease-out group-hover:w-full rounded-full"></div>
            <Link
              className="relative px-5 py-1.5"
              href="https://drive.google.com/file/d/1xr9f_nPPw_OnEh10QU2oF3G0SIIoYR5U/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              View my resume
            </Link>
          </motion.button>
        </div>
        <Image
          src={Person}
          alt="Young man sitting with a laptop and waving his hand"
          className="scale-[0.8] lg:scale-100 pointer-events-none"
        />
      </div>
    </SectionWrapper>
  );
}
