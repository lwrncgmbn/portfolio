import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { PiFigmaLogoFill } from "react-icons/pi";
import { SiAdobephotoshop } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { DiCodeigniter } from "react-icons/di";
import { FaHubspot } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";

const skills = [
  {
    name: "HTML5",
    logo: <FaHtml5 />,
  },
  {
    name: "CSS3",
    logo: <FaCss3 />,
  },
  {
    name: "TailwindCSS",
    logo: <SiTailwindcss />,
  },
  {
    name: "JavaScript",
    logo: <FaJs />,
  },
  {
    name: "JQuery",
    logo: <DiJqueryLogo />,
  },
  {
    name: "React",
    logo: <FaReact />,
  },
  {
    name: "PHP",
    logo: <FaPhp />,
  },
  {
    name: "CodeIgniter",
    logo: <DiCodeigniter />,
  },
  {
    name: "Laravel",
    logo: <FaLaravel />,
  },
  {
    name: "HubSpot",
    logo: <FaHubspot />,
  },
  {
    name: "MySQL",
    logo: <GrMysql />,
  },
  {
    name: "GitHub",
    logo: <FaGithub />,
  },
  {
    name: "VS Code",
    logo: <TbBrandVscode />,
  },
  {
    name: "Figma",
    logo: <PiFigmaLogoFill />,
  },
  {
    name: "Photoshop",
    logo: <SiAdobephotoshop />,
  },
];

const SkillLists = () => {
  return (
    <>
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="flex flex-col items-center justify-center w-32 h-32 p-4 bg-gray-300 rounded-md shadow-md sm:w-40 sm:h-40"
        >
          <span className="text-5xl sm:text-7xl">{skill.logo}</span>
          <span className="pt-2 font-bold text-center sm:text-lg">
            {skill.name}
          </span>
        </div>
      ))}
    </>
  );
};

export default SkillLists;
