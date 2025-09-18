"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-[90%] h-[30px] flex justify-between items-center text-white shadow-md mx-[20px] mt-[15px] relative">
      {/* Logo */}
      <div className="text-[#FFD700] text-[1.5rem] font-extrabold tracking-[1px] cursor-pointer font-poppins">
        DAVID OKANLAWON
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#0a0a1e] flex flex-col justify-center items-center gap-8 z-[999] transform transition-transform duration-300 ease-in-out
          md:static md:flex md:flex-row md:gap-[30px] md:w-auto md:h-auto md:bg-transparent
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`
        }
      >
        <a
          href="#About"
          onClick={() => setIsOpen(false)}
          className="text-[#FFD700] hover:text-white font-poppins font-bold"
        >
          ABOUT
        </a>
        <a
          href="#Skill"
          onClick={() => setIsOpen(false)}
          className="text-[#FFD700] hover:text-white font-poppins font-bold"
        >
          SKILLS
        </a>
        <a
          href="#Projects"
          onClick={() => setIsOpen(false)}
          className="text-[#FFD700] hover:text-white font-poppins font-bold"
        >
          PROJECTS
        </a>
        <a
          href="#Services"
          onClick={() => setIsOpen(false)}
          className="text-[#FFD700] hover:text-[#FFD700] font-poppins font-bold"
        >
          SERVICES
        </a>
        <a
          href="#Contact"
          onClick={() => setIsOpen(false)}
          className="text-[#FFD700] hover:text-white font-poppins font-bold"
        >
          CONTACT
        </a>
      </nav>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-[#FFD700] z-[1000]"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </header>
  );
}

export default Header;

