import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";

function MobileNavigation({ setIsOpen }) {
  return (
    <div className="absolute h-screen right-0 top-0 bg-[var(--color-primary-500)] text-[var(--color-primary-50)] p-6 w-4/5 sm:w-3/5 ">
      <div className="py-4 border-b border-sky-200">
        <h2 className="text-2xl sm:text-4xl">Menu</h2>
      </div>
      <button
        className="absolute right-2 top-2 hover:cursor-pointer hover:bg-[var(--color-primary-300)] rounded-md "
        onClick={() => setIsOpen(false)}
      >
        <RxCross2 className="w-8 h-8 " />
      </button>
      <ul className="flex flex-col gap-5 p-4 text-xl sm:text-2xl">
        <li>
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-white hover:font-semibold transition-all duration-500"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/aboutus"
            onClick={() => setIsOpen(false)}
            className="hover:text-white hover:font-semibold transition-all duration-500"
          >
            About us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ourservices"
            onClick={() => setIsOpen(false)}
            className="hover:text-white hover:font-semibold transition-all duration-500"
          >
            Our Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/visainfo"
            onClick={() => setIsOpen(false)}
            className="hover:text-white hover:font-semibold transition-all duration-500"
          >
            Visa Info
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/universities"
            onClick={() => setIsOpen(false)}
            className="hover:text-white hover:font-semibold transition-all duration-500"
          >
            Universities
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/uploaddocuments"
            onClick={() => setIsOpen(false)}
            className="hover:text-white hover:font-semibold transition-all duration-500"
          >
            Upload Documents
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/news"
            onClick={() => setIsOpen(false)}
            className="hover:text-white hover:font-semibold transition-all duration-500"
          >
            News
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contactus"
            onClick={() => setIsOpen(false)}
            className="hover:text-white hover:font-semibold transition-all duration-500"
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MobileNavigation;
