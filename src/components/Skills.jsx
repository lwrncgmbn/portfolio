import React from "react";
import SkillLists from "./SkillLists";

const Skills = () => {
  return (
    <div
      name="skills"
      className="flex items-center justify-center w-full h-full min-h-screen px-4"
    >
      <div className="flex flex-col justify-center w-full max-w-5xl">
        <p className="text-5xl font-bold text-left">Skills.</p>
        {/* PROJECTS */}
        <p>Technologies and Tools</p>
        <div>
          {/* LISTS */}
          <SkillLists />
        </div>
      </div>
    </div>
  );
};

export default Skills;
