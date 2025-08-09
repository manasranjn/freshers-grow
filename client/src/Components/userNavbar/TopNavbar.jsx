import React from "react";
import { IoIosMail } from "react-icons/io";
import {
  FaFacebookF,
  FaLinkedin,
  FaSquareInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const TopNavbar = () => {
  return (
    <div className="bg-gray-200 px-10 lg:px-16 py-2 justify-between items-center text-[#0B1D51] hidden md:flex">
      <div>
        <a
          href="mailto:contact@freshergrow.com"
          className="flex gap-1 items-center outline-none"
        >
          <IoIosMail className="text-2xl" />
          contact@freshergrow.com
        </a>
      </div>
      <div className="flex gap-4 text-xl">
        <a
          href="https://www.instagram.com/freshergrow/"
          target="_blank"
          className="outline-none"
        >
          <FaSquareInstagram />
        </a>
        <a
          href="https://www.facebook.com/people/freshergrow/100086716987320/"
          target="_blank"
          className="outline-none"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.linkedin.com/in/freshergrow"
          target="_blank"
          className="outline-none"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/freshergrow"
          target="_blank"
          className="outline-none"
        >
          <FaXTwitter />
        </a>
      </div>
    </div>
  );
};

export default TopNavbar;
