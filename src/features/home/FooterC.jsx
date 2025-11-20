import { FaFacebook, FaTiktok } from "react-icons/fa6";
import { FaInstagram, FaRegCopyright, FaWhatsapp } from "react-icons/fa";

function FooterC() {
  return (
    <section className="pt-20 pb-8 bg-[#113857] text-[#e7ebee]">
      <div className="max-w-7xl px-8 mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-5">
            <div>
              <img
                className="h-20 filter brightness-0 invert"
                src="Saira_logo.png"
                alt="Saira International Education & Visa Services"
              />
            </div>
            <p className="text-lg leading-relaxed font-light">
              Saira International Education & Consultancy
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <FaWhatsapp className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <FaTiktok className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                "Home",
                "About Us",
                "Our Services",
                "Visa Info",
                "Universities/Colleges",
                "FAQ",
                "News",
                "Contact Us",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[#e7ebee] hover:text-white transition-colors duration-200 inline-block hover:translate-x-1 transform"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              {["Career Counselling", "Visa Application"].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-[#e7ebee] hover:text-white transition-colors duration-200 inline-block hover:translate-x-1 transform"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore Countries */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">
              Explore Countries
            </h3>
            <ul className="space-y-3">
              {[
                "Study in Malta",
                "Study in South Korea",
                "Study in New Zealand",
              ].map((country) => (
                <li key={country}>
                  <a
                    href="#"
                    className="text-[#e7ebee] hover:text-white transition-colors duration-200 inline-block hover:translate-x-1 transform"
                  >
                    {country}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="flex flex-col items-center gap-2 mb-8 text-sm">
          <div className="flex items-center gap-1.5 flex-wrap justify-center">
            <span>All rights reserved. Copyright</span>
            <FaRegCopyright className="text-xs" />
            <span>2025 Saira International Education and Visa Services.</span>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-[#1a4d6f] mb-6" />

        {/* Footer Links */}
        <div className="flex flex-wrap gap-6 justify-center lg:justify-end text-sm">
          {["Privacy Policy", "Terms and Conditions", "Disclaimer"].map(
            (policy) => (
              <a
                key={policy}
                href="#"
                className="text-[#e7ebee] hover:text-white transition-colors duration-200"
              >
                {policy}
              </a>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default FooterC;
