import React, { useState } from "react";
import Heading from "../Heading";
import { motion } from "framer-motion";
import ProjectList from "./ProjectList";
import ProjectPreview from "./ProjectPreview";
import OtherProjects from "./OtherProjects";

export default function ProjectsSection() {
  const [activeProjectId, setActiveProjectId] = useState(null);

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
      <div className="w-[95%] flex self-center justify-between">
        <ProjectList
          activeProjectId={activeProjectId}
          setActiveProjectId={setActiveProjectId}
        />
        <ProjectPreview activeProjectId={activeProjectId} />
      </div>
      <OtherProjects />
    </motion.section>
  );
}
