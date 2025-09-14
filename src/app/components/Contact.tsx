"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import styles from "./Contact.module.css";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";



interface FormData {
  name: string;
  email: string;
  message: string;
}

function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // ✅ Typed change handler
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Typed submit handler
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("⚠️ Please fill in all fields");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ An error occurred. Try again.");
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
     

      <div className={styles.servicecontainer}>
        {/* Left column */}
         <div className={styles.formContainer}>
           <p className={styles.introText}>
            If you have any questions or concerns, please do not hesitate to
            contact me. I am open to any work opportunities that align with my
            skills and interests.
          </p>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className={styles.input}
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className={styles.input}
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className={styles.textarea}
              rows={4}
              value={formData.message}
              onChange={handleChange}
            />
            <div className={styles.buttoncontainer}>
              <button type="submit" className={styles.button}>
              Send Message
            </button>
            </div>
          </form>
          {status && <p className={styles.status}>{status}</p>}
        </div>
    
        {/* Right column */}
        <div className={styles.textContainer}>
        <div className={styles.contactinfo}>
          <div className={styles.item}>
            <MdEmail className={styles.icon} />
            <p>okanlawondavid02@gmail.com</p>
          </div>

          <div className={styles.item}>
            <MdPhone className={styles.icon} />
            <p>08103420613</p>
          </div>

          <div className={styles.item}>
            <MdLocationOn className={styles.icon} />
            <p>Akure, Nigeria · Open to Remote Work</p>
          </div>
        </div>

         <div className={styles.contactsocials}>
           <a href="https://github.com/Devdave-02" target="_blank" rel="noopener noreferrer">
            <FaGithub className={styles.icon} />
          </a>
           <a href="https://www.linkedin.com/in/david-ibukunoluwa-okanlawon-659657378?utm_source=share&utm_
            campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className={styles.icon} />
           </a>
           <a href="https://www.facebook.com/okanlawon.david.986" target="_blank" rel="noopener noreferrer">
            <FaFacebook className={styles.icon} />
          </a>
           <a href="https://mail.google.com/mail/?view=cm&fs=1&to=okanlawondavid02@gmail.com" target="_blank" rel="noopener noreferrer">
          <MdEmail className={styles.icon} />
          </a>
      </div>
      </div>
      </div>
    </section>
  );
}

export default Contact;


