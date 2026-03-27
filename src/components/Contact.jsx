import React from "react";
import contact from "../assets/images/contact.png";

const Contact = () => {
  return (
    <div
      name="contacts"
      className="flex items-center justify-center w-full h-full min-h-screen px-4"
    >
      <div className="flex flex-col justify-center w-full max-w-5xl">
        <p className="text-4xl font-bold text-left md:text-5xl">Contact.</p>
        <p>Let's Collaborate!</p>
        <div className="grid items-center gap-4 py-6 md:grid-cols-2">
          <form
            action="https://getform.io/f/c62b3d53-df39-4723-ab16-7c70cd4e2242"
            method="POST"
            className="h-full"
          >
            <input
              type="email"
              name="email"
              id="email"
              className="w-full p-2 rounded-md shadow-md outline-none"
              placeholder="Email*"
              required
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              className="w-full p-2 mt-4 rounded-md shadow-md outline-none"
              placeholder="Message*"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full p-4 mt-4 font-bold tracking-widest text-white duration-300 rounded-md shadow-md bg-primary-0 hover:brightness-110"
            >
              Submit Message
            </button>
          </form>
          <div className="bg-[#D4DDF2] rounded-r-full rounded-t-full h-full hidden md:flex justify-center shadow-xl">
            <img src={contact} alt="Contact me" className="p-8 w-96" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
