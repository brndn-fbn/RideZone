import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand */}
        <Link
          to="/"
          className="text-5xl font-bold tracking-tight uppercase"
          onClick={() => setMenuOpen(false)}
        >
          Ride<span className="text-gray-500">Zone</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-10 font-medium">
          {["Home", "About", "Shop", "Gallery", "Contact"].map((item) => (
            <Link
              key={item}
              to={`${item === "Home" ? "" : item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="relative text-black hover:text-gray-700 transition-colors duration-300
                         after:content-[''] after:absolute after:left-0 after:bottom-[-4px]
                         after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300
                         hover:after:w-full"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Burger Button */}
        <button
          className="md:hidden  flex flex-col space-y-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block bg-gray-800 w-6 h-0.5 transition-transform ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block bg-gray-800 w-6 h-0.5 transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block bg-gray-800 w-6 h-0.5 transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 py-4 space-y-4 text-center font-medium">
          {["Home", "About", "Shop", "Gallery", "Contact"].map((item) => (
            <Link
              key={item}
              to={`${item === "Home" ? "" : item.toLowerCase()}`}
              className="block hover:text-gray-500 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
