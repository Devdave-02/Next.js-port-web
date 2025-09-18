"use client";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Intro() {
  return (
    <section
     id="Intro"
     className="mt-[50px] flex flex-col-reverse sm:flex flex-col-reverse md:flex-row justify-between items-center gap-0 mx-auto  max-w-[1200px] px-4"
     >

      {/* Left div */}
     <div className="p-[20px] shadow-lg text-[#f0f8ff] min-[500px]:text-[20px] min-[500px]:w-[500px]  sm:text-[17px] sm:w-[500px]  flex-shrink-0 md:flex-[0.55]  md:max-w-[600px] sm:px-0 md:p-6 md:text-[23px] md:mx-0 md:flex md:flex-col md:items-start">
      <div className="text-left  min-[500px]:text-left sm:text-left  md:text-left">
          <p className=" text-[23px] md:text-[45px] ">
          Hello, I am{" "}
          <strong className="text-[#FFD700] text-[28px]  min-[500px]:text-[32px]  sm:text-[36px] md:text-[50px] font-extrabold block md:font-extrabold block">
            <i>David Okanlawon,</i>
          </strong>{" "}
          A professional{" "}
          <strong className="text-[#FFD700] text-[28px] md:text-[50px]  font-extrabold md:font-extrabold">
            <i>full-stack Engineer.</i>
          </strong>
        </p>
      </div>
       
        {/* Socials */}
        <div className="flex justify-start gap-[2.5rem] mt-4 md:mt-8 md:justify-start text-2xl md:text-2xl">
          <a
            href="https://github.com/Devdave-02"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f0f8ff] text-2xl cursor-pointer transition-colors duration-300 hover:text-[#f3d52a]"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/david-ibukunoluwa-okanlawon-659657378/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f0f8ff] text-2xl cursor-pointer transition-colors duration-300 hover:text-[#f3d52a]"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/okanlawon.david.986"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f0f8ff] text-2xl cursor-pointer transition-colors duration-300 hover:text-[#f3d52a]"
          >
            <FaFacebook />
          </a>
          <a
            href="mailto:okanlawondavid02@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f0f8ff] text-2xl cursor-pointer transition-colors duration-300 hover:text-[#f3d52a]"
          >
            <MdEmail />
          </a>
        </div>

        {/* Buttons */}
         <div className="flex flex-row mt-5 space-x-2 md:space-x-4">
          <button className="px-4 py-2 text-[10px] min-[500px]:px-[15px] min-[500px]:py-[10px] min-[500px]:text-[14px] md:px-5 md:py-3 md:text-[18px] bg-[#0a0a1e] border border-[#f3d52a] rounded-[25px] cursor-pointer text-white font-bold hover:bg-[#f3d52a] hover:border-[#f3d52a] transition">
            <a href="/Okanlawon David.pdf" target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          </button>
          <button className="px-4 py-2 text-[10px]  min-[500px]:px-5 min-[500px]:py-3 min-[500px]:text-[10px] md:px-5 md:py-3 md:text-[18px] bg-[#0a0a1e] border border-[#f3d52a] rounded-[25px] cursor-pointer text-white font-bold hover:bg-[#f3d52a] hover:border-[#f3d52a] transition">
            <a href="https://wa.me/2348103420613" target="_blank">
              Contact Me
            </a>
          </button>
        </div>
      </div>

      {/* Right div: Code block */}
      <div className="flex-shrink-0 w-full md:flex-[0.45] md:max-w-[500px] md:mx-0">
        <pre className="font-mono text-[10px]  min-[500px]:text-[10] min-[500px]:max-w-[500px] sm:text-[12px] sm:max-w-[500px]  md:text-[15px] bg-[rgba(30,30,60,1)] py-[30px] pl-[20px] pr-0 rounded-[8px] leading-[1.9] text-left text-white max-w-[470px] md:text-[0.8rem] md:py-4 md:px-4 md:max-w-[500px] md:mx-auto">
      {`const coder = {
        name: 'David Okanlawon',
        skills: ['React', 'NextJS', 'Express', 
        'NestJS', 'MySql', 'MongoDB', 'AWS'],
        hardWorker: true,
        quickLearner: true,
        problemSolver: true,
        hireable: function() {
            return (
            this.hardWorker &&
            this.problemSolver &&
            this.skills.length >= 5
            );
        }
      };`}
        </pre>
      </div>
    </section>
  );
}

export default Intro;


