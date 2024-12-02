import React, { useState } from "react";
import logo from "../assets/habot-logo.jpg";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiOutlineMenuAlt3 } from "react-icons/hi"; // Import Heroicons menu icon

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu visibility

  return (
    <nav className="bg-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-9">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src={logo} className="h-14 w-14" alt="Logo" />
        </a>

        {/* Hamburger Menu for Small Screens */}
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden cursor-pointer focus:outline-none"
          aria-controls="navbar-default"
          aria-expanded={menuOpen ? "true" : "false"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <HiOutlineMenuAlt3 className="w-5 h-5" />
        </button>

        {/* Links - Desktop and Mobile */}
        <div
          className={`items-center space-x-4 hidden md:flex md:w-auto ${
            menuOpen ? "flex" : "hidden"
          } w-full md:flex-row md:space-x-4`}
          id="navbar-default"
        >
          {/* Single Link */}
          <a href="#home" className="text-gray-600 text-xs hover:text-gray-900">
            Find Suppliers
          </a>

          {/* Dropdown */}
          <div className="">
            <button
              className="text-gray-600 text-xs flex items-center hover:text-gray-900 focus:outline-none"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Find Service Tags <RiArrowDropDownLine className="text-sm" />
            </button>
            {dropdownOpen && (
              <div
                className="absolute z-50 mt-2  right-auto bg-white border text-xs border-gray-300 rounded shadow-md max-h-48 overflow-y-auto"
                style={{ minWidth: "150px" }}
              >
                <a
                  href="#service1"
                  className="text-xs block px-4 py-2 hover:bg-gray-100"
                >
                  Service 1
                </a>
                <a
                  href="#service2"
                  className="text-xs block px-4 py-2 hover:bg-gray-100"
                >
                  Service 2
                </a>
                <a
                  href="#service3"
                  className="text-xs block px-4 py-2 hover:bg-gray-100"
                >
                  Service 3
                </a>
              </div>
            )}
          </div>

          {/* Login/Signup Button */}
          <a
            href="#login"
            className="px-3 text-xs py-1 border font-semibold border-green-600 text-green-600 rounded hover:bg-blue-500 hover:text-white transition"
          >
            Login/Signup
          </a>
        </div>
      </div>

      {/* Mobile version of menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-4 p-4 bg-white">
          {/* Mobile Links */}
          <a href="#home" className="text-gray-600 text-xs hover:text-gray-900">
            Find Suppliers
          </a>

          {/* Dropdown */}
          <div>
            <button
              className="text-gray-600 text-xs flex items-center hover:text-gray-900 focus:outline-none"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Find Service Tags <RiArrowDropDownLine className="text-sm" />
            </button>
            {dropdownOpen && (
              <div className="absolute mt-2 right-0 bg-white border text-xs border-gray-300 rounded shadow-md max-h-48 overflow-y-auto z-20">
                <a
                  href="#service1"
                  className="text-xs block px-4 py-2 hover:bg-gray-100"
                >
                  Service 1
                </a>
                <a
                  href="#service2"
                  className="text-xs block px-4 py-2 hover:bg-gray-100"
                >
                  Service 2
                </a>
                <a
                  href="#service3"
                  className="text-xs block px-4 py-2 hover:bg-gray-100"
                >
                  Service 3
                </a>
              </div>
            )}
          </div>

          {/* Login/Signup Button */}
          <a
            href="#login"
            className="px-3 text-xs py-1 border font-semibold border-green-600 text-green-600 rounded hover:bg-blue-500 hover:text-white transition"
          >
            Login/Signup
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
