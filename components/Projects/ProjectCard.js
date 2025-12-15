import Link from "next/link";
import React from "react";
import Image from "next/image";
import github from "../../public/github.svg";
import { motion } from "framer-motion";

export default function ProjectCard({ project, isActive, onMouseEnter, onMouseLeave }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.2 }}
      viewport={{ once: true }}
      className="border-2 border-black flex items-center py-5 gap-5 h-52 relative"
      id={project.id}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: isActive ? "100%" : 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="bg-brandColor -z-10 absolute h-full left-0"
      />
      <div
        className="flex flex-col items-center gap-6 w-1/2 sm:w-1/3"
        id={project.id}
      >
        <h1 className="text-6xl">{project.name}</h1>
        <h1 className="text-xl text-center ">{project.techStack}</h1>
      </div>
      <div
        className="flex gap-10 justify-evenly sm:justify-start items-center w-1/2 sm:w-2/3"
        id={project.id}
      >
        <p className="text-3xl text-center hidden sm:block">
          {project.descriptionLine1}
          <br />
          {project.descriptionLine2}
        </p>
        <button className="bg-white shadow-lg text-xl text-black w-40 h-16">
          <Link href={project.liveUrl}>{project.buttonLabel}</Link>
        </button>
        <div>
          <Link href={project.githubUrl}>
            <Image src={github} alt="github" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
