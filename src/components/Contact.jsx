import React from "react";
import contact from "../assets/images/contact.png";

import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      name="contacts"
      className="flex items-center justify-center w-full h-full px-4 py-16 pb-32"
    >
      <div className="flex flex-col justify-center w-full max-w-4xl">
        <p className="flex items-center justify-center gap-2 text-2xl font-bold text-center md:text-4xl uppercase">
          <span className="text-center text-white">Have an </span>
          <span className="text-center text-transparent stroke-text">idea</span>
          <span className="text-center text-white">in mind?</span>
        </p>
        <div className="text-center text-white mt-3 text-xl">
          Let’s make it happen. We can work together to turn your ideas into
          something clear, engaging, and impactful.
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mt-8 ">
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

export default Contact;
