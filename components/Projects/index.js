import React from "react";
import Heading from "../Heading";

import { motion } from "framer-motion";

import Projects from "./Project";
import MoreButton from "./MoreButton";
import OtherProjects from "./OtherProjects";

export default function Project() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.5,
        duration: 0.7,
      }}
      id="projects"
      className="flex flex-col h-full bg-white gap-24 pt-20 overflow-hidden"
    >
      <Heading span={"03"} heading={"Work"} />
      <div className=" w-[95%] flex self-center   justify-between">
        <Projects />
      </div>
      <OtherProjects />
    </motion.section>
  );
}
