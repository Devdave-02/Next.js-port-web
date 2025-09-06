"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import styles from "./Header.module.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>DAVID OKANLAWON</div>

      {/* Navigation */}
      <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
        <a href="#About" onClick={() => setIsOpen(false)}>ABOUT</a>
        <a href="#Skill" onClick={() => setIsOpen(false)}>SKILLS</a>
        <a href="#Projects" onClick={() => setIsOpen(false)}>PROJECTS</a>
        <a href="#Services" onClick={() => setIsOpen(false)}>SERVICES</a>
        <a href="#Contact" onClick={() => setIsOpen(false)}>CONTACT</a>
      </nav>

      {/* Toggle button */}
      <button
        className={styles.menuToggle}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </header>
  );
}

export default Header;
