import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import proMemoji from "../../public/projectsMemoji.png";
import { FEATURED_PROJECTS } from "./data/projects";

export default function ProjectPreview({ activeProjectId }) {
  const activeProject = FEATURED_PROJECTS.find((p) => p.id === activeProjectId);
  const showDefault = !activeProjectId;

  return (
    <div className="relative w-2/5 h-full hidden lg:block">
      {/* Default state - shows memoji and intro text */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: showDefault ? 1 : 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute left-32 top-0"
      >
        <div className="overflow-hidden flex flex-col gap-10">
          <Image src={proMemoji} alt="memoji" />
          <div>
            <h1 className="text-5xl pb-3">Projects</h1>
            <p className="text-2xl">
              This is a showcase of my work in a variety of fields, from
              Graphic and Web Design to Product Design and Management.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Project preview images */}
      <AnimatePresence>
        {FEATURED_PROJECTS.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: activeProjectId === project.id ? 1 : 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="rounded-2xl overflow-hidden absolute left-32 top-10 shadow-xl"
          >
            <Image
              src={project.image}
              alt={project.name}
              width={380}
              height={380}
              className="rounded-2xl overflow-hidden"
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

