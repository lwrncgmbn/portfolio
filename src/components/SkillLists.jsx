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

const skills = [
  {
    id: 1,
    name: "HTML5",
    logo: <FaHtml5 />,
  },
  {
    id: 2,
    name: "CSS3",
    logo: <FaCss3 />,
  },
  {
    id: 3,
    name: "JavaScript",
    logo: <FaJs />,
  },
  {
    id: 4,
    name: "TailwindCSS",
    logo: <SiTailwindcss />,
  },
  {
    id: 5,
    name: "PHP",
    logo: <FaPhp />,
  },
  {
    id: 6,
    name: "MySQL",
    logo: <GrMysql />,
  },
  {
    id: 7,
    name: "GitHub",
    logo: <FaGithub />,
  },
  {
    id: 8,
    name: "VS Code",
    logo: <TbBrandVscode />,
  },
  {
    id: 9,
    name: "Figma",
    logo: <PiFigmaLogoFill />,
  },
  {
    id: 10,
    name: "Photoshop",
    logo: <SiAdobephotoshop />,
  },
];

const SkillLists = () => {
  return (
    <>
      {skills.map((skill) => (
        <div
          key={skill.id}
          className="bg-gray-300 p-4 w-40 h-40 flex flex-col justify-center items-center rounded-md shadow-md"
        >
          <span className="text-7xl">{skill.logo}</span>
          <span className="font-bold text-lg pt-2 text-center">
            {skill.name}
          </span>
        </div>
      ))}
    </>
  );
};

export default SkillLists;
