import React, { useState } from "react";
import logo from "../../assets/logo/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Contents", link: "/contents" },
    { name: "Blogs", link: "/blogs" },
    { name: "Contact Us", link: "/contact-us" },
  ];

  const handleLogin = () => {
    navigate("/login");

    toggleMenu();
  };

  return (
    <React.Fragment>
      <div className="px-4 md:px-10 lg:px-16 py-3 flex justify-between items-center relative shadow">
        <img src={logo} alt="logo" className="w-32 md:w-36 lg:w-40" />

        {/* Main menu items */}
        <ul className="hidden md:flex gap-4">
          {menuItems.map((items, index) => (
            <li key={index}>
              <Link to={items.link}>{items.name}</Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex gap-4">
          <button
            className="bg-[#0B1D51] text-white text-sm lg:text-base px-4 py-2 rounded-md cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>

        {/*  Menu icon for mobile */}

        <GiHamburgerMenu
          className="md:hidden text-3xl cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      {/* Navbar for mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-slate-700 text-white p-6 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col gap-6`}
      >
        <IoMdClose className="absolute right-8 text-3xl" onClick={toggleMenu} />
        <ul className="flex flex-col gap-4 mt-6">
          {menuItems.map((items, index) => (
            <li key={index} onClick={toggleMenu}>
              <Link to={items.link}>{items.name}</Link>
            </li>
          ))}
        </ul>

        <div>
          <button
            className="bg-[#0B1D51] text-white px-6 py-2 rounded-md cursor-pointer"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainNavbar;
