import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";

function MobileNavigation({ setIsOpen }) {
  return (
    <div className="absolute right-0 top-0 bg-[var(--color-primary-500)] text-[var(--color-primary-50)] p-6 w-1/2 ">
      <button
        className="absolute right-2 top-2 hover:cursor-pointer hover:bg-[var(--color-primary-300)] rounded-md "
        onClick={() => setIsOpen(false)}
      >
        <RxCross2 className="w-8 h-8 " />
      </button>
      <ul className="flex flex-col  items-center gap-3">
        <li>
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/aboutus" onClick={() => setIsOpen(false)}>
            About us
          </NavLink>
        </li>
        <li>
          <NavLink to="/ourservices" onClick={() => setIsOpen(false)}>
            Our Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/visainfo" onClick={() => setIsOpen(false)}>
            Visa Info
          </NavLink>
        </li>
        <li>
          <NavLink to="/universities" onClick={() => setIsOpen(false)}>
            Universities/Colleges
          </NavLink>
        </li>
        <li>
          <NavLink to="/uploaddocuments" onClick={() => setIsOpen(false)}>
            Upload Documents
          </NavLink>
        </li>
        <li>
          <NavLink to="/news" onClick={() => setIsOpen(false)}>
            News
          </NavLink>
        </li>
        <li>
          <NavLink to="/contactus" onClick={() => setIsOpen(false)}>
            Contact Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MobileNavigation;
