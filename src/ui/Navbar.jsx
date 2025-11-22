import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { HiOutlineBars3 } from "react-icons/hi2";

import { NavLink } from "react-router-dom";
import MobileNavigation from "./MobileNavigation";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center h-[80px] px-4 sm:px-8 md:px-12 bg-[var(--color-grey-50)]">
      <div className="h-full">
        <img src="Saira_logo.png" className="h-full" />
      </div>

      <ul className="hidden lg:flex gap-6 text-md  xl:text-lg xl:gap-8 items-center  font-medium ">
        <li>
          <NavLink
            to="/"
            className={({
              isActive,
            }) => `   py-6  hover:text-indigo-600 hover:border-b-4 hover:border-indigo-500
              ${isActive && "text-indigo-600 border-b-4 border-indigo-500"}`}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/aboutus"
            className={({
              isActive,
            }) => `   py-6  hover:text-indigo-600 hover:border-b-4 hover:border-indigo-500
              ${isActive && "text-indigo-600 border-b-4 border-indigo-500"}`}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ourservices"
            className={({
              isActive,
            }) => `   py-6  hover:text-indigo-600 hover:border-b-4 hover:border-indigo-500
              ${isActive && "text-indigo-600 border-b-4 border-indigo-500"}`}
          >
            Our Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/visainfo"
            className={({
              isActive,
            }) => `   py-6  hover:text-indigo-600 hover:border-b-4 hover:border-indigo-500
              ${isActive && "text-indigo-600 border-b-4 border-indigo-500"}`}
          >
            Visa Info
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/universities"
            className={({
              isActive,
            }) => `   py-6  hover:text-indigo-600 hover:border-b-4 hover:border-indigo-500
              ${isActive && "text-indigo-600 border-b-4 border-indigo-500"}`}
          >
            Universities/colleges
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/faq"
            className={({
              isActive,
            }) => `   py-6  hover:text-indigo-600 hover:border-b-4 hover:border-indigo-500
              ${isActive && "text-indigo-600 border-b-4 border-indigo-500"}`}
          >
            FAQ
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/news"
            className={({
              isActive,
            }) => `   py-6  hover:text-indigo-600 hover:border-b-4 hover:border-indigo-500
              ${isActive && "text-indigo-600 border-b-4 border-indigo-500"}`}
          >
            News
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contactus"
            className={({
              isActive,
            }) => `   py-6  hover:text-indigo-600 hover:border-b-4 hover:border-indigo-500
              ${isActive && "text-indigo-600 border-b-4 border-indigo-500"}`}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
      <HiOutlineBars3
        className="h-10 w-10 text-[var(--color-primary-500)] hover:cursor-pointer hover:text-[var(--color-primary-700)] lg:hidden"
        onClick={() => setIsOpen((open) => !open)}
      />

      {isOpen && <MobileNavigation setIsOpen={setIsOpen} />}
    </nav>
  );
}

export default Navbar;
