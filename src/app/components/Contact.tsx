"use client";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";


function Contact() {
   const socialLinkArray = [
    { name: "Github", 
      link: "https://github.com/Devdave-02", 
      icon: FaGithub 
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/david-ibukunoluwa-okanlawon-659657378/",
      icon: FaLinkedin,
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/okanlawon.david.986",
      icon: FaFacebook,
    },
    { name: "Email", 
      link: "mailto:okanlawondavid02@gmail.com", 
      icon: MdEmail }, 
  ];
  

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
            className="flex flex-col justify-center gap-8 md:gap-12 "
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-[250px] sm:w-[380px] md:w-[380px] p-2 md:p-3 rounded-lg border border-[#9a8610] bg-[rgba(10,10,30,1)] text-white focus:outline-none focus:border-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-[250px] sm:w-[380px] md:w-[380px] p-2 md:p-3 rounded-lg border border-[#9a8610] bg-[rgba(10,10,30,1)] text-white focus:outline-none focus:border-white"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              className="w-[250px] sm:w-[380px] md:w-[380px] p-2 md:p-3 rounded-lg border border-[#9a8610] bg-[rgba(10,10,30,1)] text-white focus:outline-none focus:border-white"
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

       {/* Socials */}
        <div className="flex justify-start gap-[2.5rem] mt-4 md:mt-8 md:justify-start text-2xl">         
          {socialLinkArray.map((socialLink) => (
            <a
              href={socialLink.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f0f8ff] text-2xl cursor-pointer transition-colors duration-300 hover:text-[#f3d52a]"
              key={socialLink.name}
            >
              <socialLink.icon />
            </a>
          ))} 
        </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;