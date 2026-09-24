import React from "react";

const exps = [
  {
    compName: "Freedom Property Investors",
    role: "HubSpot Developer",
    date: "October 2025 - Present",
  },
  {
    compName: "GiantFocal",
    role: "HubSpot Developer",
    date: "June 2024 - September 2025",
  },
  {
    compName: "HRWeb",
    role: "Fullstack Developer (OJT)",
    date: "March 2024 - June 2024",
  },
];

const Experiences = () => {
  return (
    <>
      <div className="flex flex-col">
        {exps.map((exp) => (
          <div
            key={exp.compName}
            className=" py-6 border-b-[1px] border-b-white flex-col md:flex-row items-start flex md:items-center justify-between gap-4 last:border-none last:pb-0 first:pt-0"
          >
            <div className="flex items-center gap-4 ">
              <div className="w-24 h-24 rounded-full bg-gray-400 hidden md:flex"></div>
              <div className="text-white">
                <div className="text-lg font-semibold">{exp.compName}</div>
                <div className="">{exp.role}</div>
              </div>
            </div>
            <div className="text-white">{exp.date}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Experiences;
