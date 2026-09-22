import React from "react";
import ProjectLists from "./ProjectLists";

const Projects = () => {
  return (
    <div
      name="projects"
      className="flex items-center justify-center w-full h-full px-4 py-16"
    >
      <div className="flex flex-col justify-center w-full max-w-4xl">
        <p className="flex items-center gap-2 text-2xl font-bold text-left md:text-4xl">
          <span className="text-center text-transparent stroke-text">MY</span>
          <span className="text-center text-white">PROJECTS</span>
        </p>
        {/* PROJECTS */}
        <div className="flex flex-col gap-8 py-0">
          {/* LISTS */}
          <ProjectLists />
        </div>
      </div>
    </div>
  );
};

export default Projects;
