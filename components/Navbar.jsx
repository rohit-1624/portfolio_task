"use client";
import { useState } from "react";
import Link from "next/link";
import "remixicon/fonts/remixicon.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "ABOUT ME", href: "#about" },
    { name: "PORTFOLIO", href: "#portfolio" },
    { name: "SKILLS", href: "#skills" },
    { name: "SERVICES", href: "#services" },
    { name: "TESTIMONIALS", href: "#testimonials" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 mb-0 bg-black text-white z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-4">
        
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-sm tracking-widest text-[#FAF7F0]"
        >
          ERICA JONES
        </Link>

        {/* Tablet & Desktop Menu - Center */}
        <div className="hidden sm:flex items-center gap-6 lg:gap-8 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-400 hover:text-white text-xs sm:text-sm"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden sm:block">
          <Link
            href="#contact"
            className="bg-[#FAF7F0] text-black px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-200 transition"
          >
            GET IN TOUCH
          </Link>
        </div>

        <div className="sm:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <i
              className={`text-2xl ${
                isOpen ? "ri-close-line" : "ri-menu-line"
              }`}
            ></i>
          </button>
        </div>
      </div>

      {isOpen && (
  <div
    className="sm:hidden px-6 py-4 space-y-4 h-[514px]"
    style={{
      background:
        "linear-gradient(342.27deg, #FFFAEF 24.53%, #FCD68B 37.59%, #F9784C 50.72%, #9C356D 62.85%, black 76.83%)",
    }}
  >
    {navLinks.map((link) => (
      <Link
        key={link.name}
        href={link.href}
        onClick={() => setIsOpen(false)}
        className="block text-white font-medium"
      >
        {link.name}
      </Link>
    ))}

    <Link
      href="#contact"
      className="block bg-[#FAF7F0] text-black px-5 py-2 mt-8 rounded-full text-center font-medium hover:bg-gray-200 transition"
    >
      GET IN TOUCH
    </Link>
  </div>
)}

    </nav>
  );
};

export default Navbar;
