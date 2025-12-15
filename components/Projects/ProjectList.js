import React from "react";
import ProjectCard from "./ProjectCard";
import { FEATURED_PROJECTS } from "./data/projects";

export default function ProjectList({ activeProjectId, setActiveProjectId }) {
  const handleMouseEnter = (projectId) => {
    setActiveProjectId(projectId);
  };

  const handleMouseLeave = () => {
    setActiveProjectId(null);
  };

  return (
    <div className="flex flex-col w-full lg:w-3/5 gap-10">
      {FEATURED_PROJECTS.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          isActive={activeProjectId === project.id}
          onMouseEnter={() => handleMouseEnter(project.id)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
}

