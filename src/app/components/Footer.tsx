"use client";
import { useEffect, useState } from "react";

function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[rgba(10,10,30,1)] py-[16px] text-center mt-[48px]">
      <p className="text-[#ffd700] text-[14px] hover:text-[#ffffff] transition-colors duration-300 ease-in-out">
        © {new Date().getFullYear()} David Okanlawon. All rights reserved.
      </p>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="absolute right-[16px] bottom-[16px] bg-[#ffd700] text-white border-none rounded-full w-[40px] h-[40px] cursor-pointer text-[20px] shadow-md transition duration-300 ease-in-out hover:bg-[#16368f] hover:-translate-y-[3px]"
        >
          ↑
        </button>
      )}
    </footer>
  );
}

export default Footer;
