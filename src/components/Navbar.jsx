import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="bg-black shadow-md sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-10 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold text-white">
          <Link to="/">Hilmy</Link>
        </div>

        {/* Hamburger (mobile only) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex space-x-6 text-white font-medium text-xl">
          <li>
            <Link to="/" className="hover:text-blue-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/pages/about" className="hover:text-blue-600 transition">
              About
            </Link>
          </li>
          <li>
            <Link
              to="/pages/contactus"
              className="hover:text-blue-600 transition"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-2 text-white font-medium text-xl">
            <li>
              <Link
                to="/"
                onClick={toggleMenu}
                className="hover:text-blue-600 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/pages/about"
                onClick={toggleMenu}
                className="hover:text-blue-600 transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/pages/ContactUs"
                onClick={toggleMenu}
                className="hover:text-blue-600 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
