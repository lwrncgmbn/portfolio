import React from "react";
import Experiences from "./Experiences";

const Experience = () => {
  return (
    <div
      name="experience"
      className="flex items-center justify-center w-full h-full px-4 py-16"
    >
      <div className="flex flex-col justify-center w-full max-w-4xl">
        <p className="flex items-center gap-2 text-2xl font-bold text-left md:text-4xl mb-6">
          <span className="text-center text-transparent stroke-text">MY</span>
          <span className="text-center text-white">EXPERIENCE</span>
        </p>
        <div>
          {/* LISTS */}
          <Experiences />
        </div>
      </div>
    </div>
  );
};

export default Experience;
