"use client"; 

import { useState } from "react";
import Marquee from "react-fast-marquee";


const skills = [
  { name: "HTML", logo: "./html.svg" },
  { name: "CSS", logo: "./css.svg" },
  { name: "JavaScript", logo: "./javascript.svg" },
  { name: "React", logo: "./react.svg" },
  { name: "Next.js", logo: "./nextjs.svg" },
  { name: "TypeScript", logo: "./typescript.svg" },
  { name: "Node.js", logo: "./nodejs.svg" },
  { name: "NestJS", logo: "./nest.svg" },
  { name: "Go", logo: "./go.svg" },
  { name: "MongoDB", logo: "./mongoDB.svg" },
  { name: "MySQL", logo: "./mysql.svg" },
  { name: "PostgreSQL", logo: "./postgresql.svg" },
  { name: "Express", logo: "./express.svg" },
  { name: "AWS", logo: "./aws.svg" },
  { name: "Git", logo: "./git.svg" },
];

function Skill() {
  const [paused, setPaused] = useState(false);

  const handleClick = () => setPaused(true);
  const handleLeave = () => setPaused(false); 

 return (
    <div className="overflow-hidden mt-5">
      {/* Title */}
      <h2 className="text-center text-[1.8rem] font-bold mb-6 text-[#FFD700] pb-[10px] font-poppins">
        Skills
      </h2>

      {/* Marquee */}
      <Marquee
        gradient={false}
        speed={100}
        pauseOnHover={true}
        play={!paused}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            onClick={handleClick}
            onMouseLeave={handleLeave}
            className="flex flex-col items-center mx-10 min-w-[100px] pt-[45px] rounded-[15px] w-[180px] h-[180px] bg-[rgba(30,30,60,1)] border border-white cursor-pointer transition-transform duration-300 hover:scale-110"
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-[60px] h-[60px] object-contain mb-2"
            />
            <p className="text-[20px] font-semibold text-[rgb(240,248,255)]">
              {skill.name}
            </p>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default Skill;