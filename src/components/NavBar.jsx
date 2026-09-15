import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaMoon } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const NavBar = () => {
  const [nav, showNav] = useState(false);
  const handleClick = () => showNav(!nav);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center px-4 py-6 text-base md:text-lg backdrop-blur-sm">
      <div className="flex items-center justify-between w-full max-w-4xl mx-auto">
        <Link
          to="home"
          smooth={true}
          offset={0}
          duration={500}
          className="flex items-center justify-center gap-2 bg-white rounded-full px-4 py-2 text-sm font-semibold duration-300 ease-out hover:-translate-y-1 cursor-pointer"
        >
          <span className="w-3 h-3 bg-[#1FFF01] rounded-full"></span>
          <span>Online</span>
        </Link>

        {/* FOR DESKTOP VIEW MENU */}
        <ul className="items-center hidden gap-8 text-base font-semibold cursor-pointer md:flex text-white">
          <li>
            <Link to="projects" smooth={true} offset={-80} duration={500}>
              <span className="flex items-center gap-2 duration-300 hover:scale-105">
                Projects
              </span>
            </Link>
          </li>
          <li>
            <Link to="home" smooth={true} offset={0} duration={500}>
              <span className="flex items-center gap-2 duration-300 hover:scale-105">
                Experience
              </span>
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              <span className="flex items-center gap-2 duration-300 hover:scale-105">
                Skills
              </span>
            </Link>
          </li>
          <li>
            <Link to="contacts" smooth={true} duration={500}>
              <span className="flex items-center gap-2 duration-300 hover:scale-105">
                Contact
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="home"
              smooth={true}
              offset={0}
              duration={500}
              className="flex items-center justify-center gap-2 bg-white rounded-full px-4 py-2 text-sm font-semibold duration-300 ease-out hover:-translate-y-1"
            >
              <span className="text-black">Let's Talk</span>
              <span className="flex items-center justify-center bg-[#242C47] rounded-full p-1">
                <FaArrowRight className="fill-white  w-3 h-3" />
              </span>
            </Link>
          </li>
          {/* <li>
          <FaMoon />
        </li> */}
        </ul>

        {/* BURGER */}
        <div onClick={handleClick} className="z-10 cursor-pointer md:hidden ">
          {!nav ? (
            <FaBars className="fill-white" />
          ) : (
            <FaTimes className="fill-white" />
          )}
        </div>

        {/* FOR MOBILE VIEW MENU */}
        <ul
          className={
            !nav
              ? "flex absolute -right-[100%] md:hidden "
              : "absolute right-0 top-0 bottom-0 w-full duration-300 ease-in-out bg-[#1E1E1E] flex flex-col justify-center items-center text-lg gap-4 h-screen md:hidden cursor-pointer"
          }
        >
          <li>
            <Link
              onClick={handleClick}
              to="projects"
              smooth={true}
              offset={-80}
              duration={500}
            >
              <span className="flex items-center gap-2 text-white">
                Projects
              </span>
            </Link>
          </li>
          <li>
            <Link
              onClick={handleClick}
              to="home"
              smooth={true}
              offset={50}
              duration={500}
            >
              <span className="flex items-center gap-2 text-white">
                Experience
              </span>
            </Link>
          </li>
          <li>
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={500}
            >
              <span className="flex items-center gap-2 text-white">Skills</span>
            </Link>
          </li>
          <li>
            <Link
              onClick={handleClick}
              to="contacts"
              smooth={true}
              duration={500}
            >
              <span className="flex items-center gap-2 text-white">
                Contact
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
