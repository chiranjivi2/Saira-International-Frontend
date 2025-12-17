import { FaFacebook, FaTiktok } from "react-icons/fa6";
import { FaInstagram, FaRegCopyright, FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <section className="pt-16 pb-5 bg-[var(--color-primary-500)] text-[var(--color-primary-50)]">
      <div className="max-w-[1200px] px-4 sm:px-8 mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10  lg:grid-cols-4 justify-items-center mb-16">
          {/* Company Info */}
          <div className="space-y-2 sm:space-y-5">
            <div className="">
              <img
                className="h-18 sm:h-20 filter brightness-0 invert  "
                src="Saira_logo.png"
                alt="Saira International Education & Visa Services."
              />
            </div>
            <p className="text-xl leading-relaxed font-light">
              Saira International Education & Consultancy
            </p>
            <div className="flex gap-2 sm:gap-4 pt-2">
              <a
                href="https://www.facebook.com/profile.php?id=61583529039472"
                target="_blank"
                className="hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                target="_blank"
                className="hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              <a
                href="https://wa.me/9768827874"
                target="_blank"
                className="hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <FaWhatsapp className="h-6 w-6" />
              </a>
              <a
                href="https://www.tiktok.com/@sairainternationa?_r=1&_t=ZS-92In4MH0HX3"
                target="_blank"
                className="hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <FaTiktok className="h-6 w-6" />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3 sm:mb-6 ">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="#"
                  className="text-[var(--color-primary-50)] hover:text-white transition-colors duration-200 inline-block hover:translate-x-1 transform"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/aboutus"
                  className="text-[var(--color-primary-50)] hover:text-white transition-colors duration-200 inline-block hover:translate-x-1 transform"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/ourservices"
                  className="text-[var(--color-primary-50)] hover:text-white transition-colors duration-200 inline-block hover:translate-x-1 transform"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="/visainfo"
                  className="text-[var(--color-primary-50)] hover:text-white transition-colors duration-200 inline-block hover:translate-x-1 transform"
                >
                  Visa Info
                </a>
              </li>
              <li>
                <a
                  href="/universities"
                  className="text-[var(--color-primary-50)] hover:text-white transition-colors duration-200 inline-block hover:translate-x-1 transform"
                >
                  Universities/Colleges
                </a>
              </li>
              <li>
                <a
                  href="uploaddocuments"
                  className="text-[var(--color-primary-50)] hover:text-white transition-colors duration-200 inline-block hover:translate-x-1 transform"
                >
                  Upload Documents
                </a>
              </li>
              <li>
                <a
                  href="news"
                  className="text-[var(--color-primary-50)] hover:text-white transition-colors duration-200 inline-block hover:translate-x-1 transform"
                >
                  News
                </a>
              </li>
              <li>
                <a
                  href="contactus"
                  className="text-[var(--color-primary-50)] hover:text-white transition-colors duration-200 inline-block hover:translate-x-1 transform"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/*Services */}
          <div className="w-full md:pl-12 lg:w-auto lg:pl-0">
            <h3 className="text-xl text-white font-semibold mb-3 sm:mb-6">
              Services
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="#"
                  className="text-[var(--color-primary-50)] hover:text-white transition-colors duration-200 inline-block hover:translate-x-1 transform"
                >
                  Career Counselling
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[var(--color-primary-50)] hover:text-white transition-colors duration-200 inline-block hover:translate-x-1 transform"
                >
                  Visa Application
                </a>
              </li>
            </ul>
          </div>

          {/* Explore countries */}

          <div>
            <h3 className="text-xl font-semibold text-white mb-3 sm:mb-6">
              Explore Countries
            </h3>

            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="#"
                  className="text-[var(--color-primary-50)] hover:text-white transition-colors duration-200 inline-block hover:translate-x-1 transform"
                >
                  Study in Malta
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[var(--color-primary-50)] hover:text-white transition-colors duration-200 inline-block hover:translate-x-1 transform"
                >
                  Study in Japan
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[var(--color-primary-50)] hover:text-white transition-colors duration-200 inline-block hover:translate-x-1 transform"
                >
                  Study in New Zealand
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[var(--color-primary-50)] hover:text-white transition-colors duration-200 inline-block hover:translate-x-1 transform"
                >
                  Study in South Korea
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="flex items-center gap-1.5 flex-wrap justify-center mb-8 text-sm">
          <span> All rights reserved.Copyright </span>{" "}
          <FaRegCopyright className="text-xs" />{" "}
          <span>2025 Saira International Education and Visa Services.</span>
        </div>

        {/* Divider */}
        <hr className="border-t border-[var(--color-primary-300)] mb-6" />

        <div className="flex gap-5 justify-center md:justify-end text-sm">
          <p
            onClick={() => navigate("/privacypolicy")}
            className="cursor-pointer hover:underline"
          >
            Privacy Policy
          </p>
          <p
            onClick={() => navigate("/termsandconditions")}
            className="cursor-pointer hover:underline"
          >
            Terms and Conditions
          </p>
          <p>Disclaimer</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
