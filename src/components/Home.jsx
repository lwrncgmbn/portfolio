import React from "react";
import Profile from "../assets/images/lawrence.png";
import { Link } from "react-scroll";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div
      name="home"
      className="flex items-center justify-center w-full max-w-4xl pt-[132px] md:pt-0 py-12 md:py-0 h-full md:min-h-screen px-8 mx-auto lg:px-0"
    >
      <div className="flex flex-col items-center">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8">
          <h1 className="text-5xl font-semibold text-center md:text-start md:text-7xl lg:text-[120px]">
            <div className="stroke-text text-transparent text-center">
              LAWRENCE
            </div>
            <div className="text-white text-center">GUMABON</div>
          </h1>
          {/* RIGHT SIDE */}
          <div className="relative md:block">
            <img
              src={Profile}
              alt="Image"
              className="duration-300 w-72 hover:scale-105"
            />
          </div>
        </div>

        <div className="text-white text-2xl text-center w-full mt-8 font-semibold">
          Frontend & HubSpot Developer
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mt-4 ">
          <div className="text-white text-lg">Let's collaborate: </div>
          <ul className="flex gap-4 flex-wrap justify-center">
            <li className="">
              <a
                href="https://www.linkedin.com/in/lawrence-gumabon-7018b7255/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white py-2 px-4 rounded-full hover:text-primary-0 duration-300 hover:-translate-y-1"
              >
                <FaLinkedin className=" text-xl" />
                <div className="font-semibold">LinkedIn</div>
              </a>
            </li>
            <li className="">
              <a
                href="https://github.com/lwrncgmbn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white py-2 px-4 rounded-full hover:text-[#24292e] duration-300 hover:-translate-y-1"
              >
                <FaGithub className=" text-xl" />
                <div className="font-semibold">Github</div>
              </a>
            </li>
            <li className="">
              <a
                href="https://www.facebook.com/lwrncgmbn/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white py-2 px-4 rounded-full hover:text-primary-0 duration-300 hover:-translate-y-1"
              >
                <FaFacebook className=" text-xl" />
                <div className="font-semibold">Facebook</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
