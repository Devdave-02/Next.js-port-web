"use client"; 
import { useEffect, useState } from "react";
import styles from "./Footer.module.css";

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
    <footer className={styles.footer}>
      <p className={styles.text}>
        © {new Date().getFullYear()} David Okanlawon. All rights reserved.
      </p>

      {showButton && (
        <button className={styles.scrollButton} onClick={scrollToTop}>
          ↑
        </button>
      )}
    </footer>
  );
}
  export default Footer;


