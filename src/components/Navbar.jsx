import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../assets/Logo PNG.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 p-3 bg-accent font-neogrotesque text-lg font-semibold ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        <div className="flex justify-between items-center h-16 p-4">
          {/* Logo */}
          <div className="flex-shrink-0 mr-20 rounded-2xl cursor-pointer">
            <ScrollLink to="home" smooth={true} duration={500}>
              <img src={Logo} className="h-10" alt="Logo" />
            </ScrollLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex justify-around w-full text-primary">
            {["about", "products", "sustainability", "conservation", "wildlife"].map((section) => (
              <ScrollLink
                key={section}
                to={section}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-secondary"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </ScrollLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          {["about", "products", "sustainability", "conservation", "wildlife"].map((section) => (
            <ScrollLink
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </ScrollLink>
          ))}
        </div>
      )}
    </nav>
  );
}
