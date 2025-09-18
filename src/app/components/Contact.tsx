"use client";
import { useState, ChangeEvent, FormEvent } from "react";
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
    <section id="contact" className="px-6 md:px-4 py-4 mt-[100px] font-poppins">
      {/* Container: Left + Right */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-[35px]">
        
        {/* Left column: form */}
        <div className="p-6 md:p-8 rounded-xl shadow-lg border border-[#9a8610] w-[300px] sm:w-[430px] md:w-[430px]">
          <p className="mb-6 text-[12px] sm:text-[14px] md:text-[18px] font-light text-white leading-[20px] sm:leading-[22px] md:leading-[25px] text-left">
            If you have any questions or concerns, please do not hesitate to
            contact me. I am open to any work opportunities that align with my
            skills and interests.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center gap-8 md:gap-12 "
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-[250px] sm:w-[380px] md:w-[380px] p-2 md:p-3 rounded-lg border border-[#9a8610] bg-[rgba(10,10,30,1)] text-white focus:outline-none focus:border-white"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-[250px] sm:w-[380px] md:w-[380px] p-2 md:p-3 rounded-lg border border-[#9a8610] bg-[rgba(10,10,30,1)] text-white focus:outline-none focus:border-white"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              className="w-[250px] sm:w-[380px] md:w-[380px] p-2 md:p-3 rounded-lg border border-[#9a8610] bg-[rgba(10,10,30,1)] text-white focus:outline-none focus:border-white"
              value={formData.message}
              onChange={handleChange}
            />
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="px-4 py-2 md:px-6 md:py-3 bg-[rgba(10,10,30,1)] border border-[#f3d52a] rounded-[15px] w-[150px] md:w-[200px] font-semibold text-white hover:bg-[#f3d52a] transition"
              >
                Send Message
              </button>
            </div>
          </form>

          {status && <p className="mt-4 text-[13px] md:text-[15px]">{status}</p>}
        </div>

        {/* Right column: contact info */}
        <div className="flex flex-col justify-center mt-6 md:mt-0">
          <div className="flex flex-col gap-2 md:gap-3">
            <div className="flex items-center gap-2 md:gap-3 text-white text-[16px] sm:text-[18px] md:text-[20px]">
              <MdEmail className="text-[20px] sm:text-[22px] md:text-[23px]" />
              <p>davidokanla69@gmail.com</p>
            </div>
            <div className="flex items-center gap-2 md:gap-3 text-white text-[16px] sm:text-[18px] md:text-[20px]">
              <MdPhone className="text-[20px] sm:text-[22px] md:text-[23px]" />
              <p>08103420613</p>
            </div>
            <div className="flex items-center gap-2 md:gap-3 text-white text-[16px] sm:text-[18px] md:text-[20px]">
              <MdLocationOn className="text-[20px] sm:text-[22px] md:text-[23px]" />
              <p>Akure, Nigeria · Open to Remote Work</p>
            </div>
          </div>

          <div className="flex justify-start gap-6 sm:gap-10 md:gap-13 mt-6 md:mt-12">
            <a
              href="https://github.com/Devdave-02"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-[28px] sm:text-[32px] md:text-[33px] text-white hover:text-[#d6b80d] transition cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/david-ibukunoluwa-okanlawon-659657378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-[28px] sm:text-[32px] md:text-[33px] text-white hover:text-[#d6b80d] transition cursor-pointer" />
            </a>
            <a
              href="https://www.facebook.com/okanlawon.david.986"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-[28px] sm:text-[32px] md:text-[33px] text-white hover:text-[#d6b80d] transition cursor-pointer" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=okanlawondavid02@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail className="text-[28px] sm:text-[32px] md:text-[33px] text-white hover:text-[#d6b80d] transition cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;