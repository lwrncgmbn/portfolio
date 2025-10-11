import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaPhp,
  FaGithub,
  FaReact,
  FaLaravel,
  FaHubspot,
} from "react-icons/fa";
import { SiTailwindcss, SiAdobephotoshop } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { TbBrandVscode } from "react-icons/tb";
import { PiFigmaLogoFill } from "react-icons/pi";
import { DiCodeigniter, DiJqueryLogo } from "react-icons/di";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

const skills = [
  { name: "HTML5", logo: <FaHtml5 /> },
  { name: "CSS3", logo: <FaCss3 /> },
  { name: "TailwindCSS", logo: <SiTailwindcss /> },
  { name: "JavaScript", logo: <FaJs /> },
  { name: "JQuery", logo: <DiJqueryLogo /> },
  { name: "React", logo: <FaReact /> },
  { name: "PHP", logo: <FaPhp /> },
  { name: "CodeIgniter", logo: <DiCodeigniter /> },
  { name: "Laravel", logo: <FaLaravel /> },
  { name: "HubSpot", logo: <FaHubspot /> },
  { name: "MySQL", logo: <GrMysql /> },
  { name: "GitHub", logo: <FaGithub /> },
  { name: "VS Code", logo: <TbBrandVscode /> },
  { name: "Figma", logo: <PiFigmaLogoFill /> },
  { name: "Photoshop", logo: <SiAdobephotoshop /> },
];

const SkillLists = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={32}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={3000}
        allowTouchMove={false}
        modules={[Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        className="py-2 mt-10"
      >
        {skills.map((skill) => (
          <SwiperSlide key={skill.name} className="">
            <div className="flex flex-col items-center justify-center h-48 p-4 bg-gray-200 shadow-md rounded-xl">
              <span className="text-6xl">{skill.logo}</span>
              <span className="pt-2 font-semibold text-center ">
                {skill.name}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SkillLists;
