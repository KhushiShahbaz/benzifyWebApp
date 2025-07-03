import React, { useState } from "react";
import Button from "../button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full  z-50 md:px-4 md:h-20">
      {/* Navbar */}
      <nav className="flex items-center justify-between bg-gradient-to-r from-black/30 via-black/50 to-black/30 backdrop-blur-md px-4 py-3 md:rounded-full md:px-6 md:py-2">
        {/* Hamburger for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
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

        {/* Logo */}
        <div className="text-center md:order-2">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 tracking-wide">
            BENZIFY
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:space-x-6 md:order-1">
          {["About", "Services"].map((item) => (
            <Button {...{text: item }} />
          ))}
        </div>

        <div className="hidden md:flex md:space-x-6 md:order-3">
          {["Blogs", "Contact"].map((item) => (
            <Button {...{text: item }} />
          ))}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center space-y-6 z-40">
          {["About", "Services", "Blogs", "Contact"].map((item) => (
            <Button {...{text:item}} onClick={() => setIsOpen(false)}/>
           
          ))}
        </div>
      )}
    </div>
  );
}
