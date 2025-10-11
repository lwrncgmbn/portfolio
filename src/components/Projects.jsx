import React from "react";
import ProjectLists from "./ProjectLists";

const Projects = () => {
  return (
    <div
      name="projects"
      className="flex items-center justify-center w-full h-full px-4"
    >
      <div className="flex flex-col justify-center w-full max-w-5xl">
        <p className="text-5xl font-bold text-left">Projects.</p>
        {/* PROJECTS */}
        <div className="flex flex-col gap-6 py-6">
          {/* LISTS */}
          <ProjectLists />
        </div>
      </div>
    </div>
  );
};

export default Projects;
