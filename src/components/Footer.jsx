import React from "react";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-8 px-4">
      <div className="container mx-auto border-b border-t py-5 border-gray-500 flex flex-col sm:flex-row sm:justify-between items-center space-y-6 sm:space-y-0">
        {/* Logo and Copyright */}
        <div className="flex flex-col items-center sm:items-start">
          <div className="logo flex items-center">
            <img src={logo} alt="Habot" className="w-20" />
          </div>
          <p className="text-xs font-light mt-2">© R Singhania</p>
        </div>

        {/* Links Section 1 */}
        <nav className="flex flex-col sm:flex-row sm:space-x-8">
          <ul className="text-xs space-y-2 sm:space-y-0">
            <li>
              <a href="#" className="font-semibold hover:underline">
                Company
              </a>
            </li>
            <li>
              <a href="#" className="font-thin text-gray-200 hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="font-thin hover:underline text-gray-200">
                FAQ
              </a>
            </li>
          </ul>
        </nav>

        {/* Links Section 2 */}
        <nav className="flex flex-col sm:flex-row sm:space-x-8">
          <ul className="text-xs space-y-2 sm:space-y-0">
            <li>
              <a href="#" className="font-semibold hover:underline">
                Terms
              </a>
            </li>
            <li>
              <a href="#" className="font-thin hover:underline text-gray-200">
                Data privacy
              </a>
            </li>
            <li>
              <a href="#" className="font-thin hover:underline text-gray-200">
                Accessibility
              </a>
            </li>
          </ul>
        </nav>

        {/* Links Section 3 */}
        <nav className="flex flex-col sm:flex-row sm:space-x-8">
          <ul className="text-xs space-y-2 sm:space-y-0">
            <li>
              <a href="#" className="font-semibold hover:underline">
                Related
              </a>
            </li>
            <li>
              <a href="#" className="font-thin hover:underline text-gray-200">
                Find Buyer
              </a>
            </li>
            <li>
              <a href="#" className="font-thin hover:underline text-gray-200">
                Feedback
              </a>
            </li>
          </ul>
        </nav>

        {/* Social Media Links */}
        <div className="flex space-x-3 justify-center sm:justify-start">
          <img src={linkedin} alt="linkedin" className="w-6 h-6 hover:opacity-80" />
          <img src={twitter} alt="twitter" className="w-6 h-6 hover:opacity-80" />
          <img src={facebook} alt="facebook" className="w-6 h-6 hover:opacity-80" />
          <img src={instagram} alt="instagram" className="w-6 h-6 hover:opacity-80" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
