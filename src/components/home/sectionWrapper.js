import { motion } from "framer-motion";

const SectionWrapper = ({ id, className, children, delay }) => (
  <motion.section
    id={id}
    className={`pb-[60px] md:pb-20 px-7 sm:px-20 lg:px-32 xl:px-0 w-auto ${className}`}
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: delay, type: "tween" }}
    viewport={{ once: true }}
  >
    <div className="mx-auto max-w-[700px] lg:max-w-[800px] xl:max-w-[1000px]">
      {children}
    </div>
  </motion.section>
);

export default SectionWrapper;
