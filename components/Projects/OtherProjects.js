import React, { useState } from "react";
import { motion } from "framer-motion";
import OtherProjectCard from "./OtherProjectCard";
import { OTHER_PROJECTS } from "./data/projects";

export default function OtherProjects() {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {showMore ? (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col self-center w-full items-center gap-20 mb-32"
        >
          <h1 className="lg:text-6xl text-5xl">Other Noteworthy Projects</h1>
          <div className="flex justify-center w-full flex-wrap gap-32">
            {OTHER_PROJECTS.map((project) => (
              <OtherProjectCard key={project.id} project={project} />
            ))}
          </div>
        </motion.div>
      ) : (
        <button
          className="border-2 border-black self-center sm:w-1/5 py-6 text-3xl mb-20 w-2/4"
          onClick={() => setShowMore(true)}
        >
          Show more
        </button>
      )}
    </>
  );
}
