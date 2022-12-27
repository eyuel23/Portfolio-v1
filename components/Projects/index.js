import React from "react";
import Heading from "../Heading";

import { motion } from "framer-motion";

import Projects from "./Project";

export default function Project() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        delay: 0.5,
        duration: 0.7,
      }}
      id="projects"
      className="flex flex-col h-[95rem] min-h-screen bg-white gap-24 pt-20 overflow-hidden"
    >
      <Heading span={"02"} heading={"WORK"} />
      <div className=" w-[95%] flex self-center items-center  justify-between">
        <Projects />
      </div>
    </motion.section>
  );
}
