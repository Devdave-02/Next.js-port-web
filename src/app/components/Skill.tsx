"use client"; 

import { useState } from "react";
import Marquee from "react-fast-marquee";
import styles from "./Skill.module.css";

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
    <div className={styles.skillsWrapper}>
      <h2 className={styles.title}>Skills</h2>
      <Marquee
        gradient={false}
        speed={100}
        pauseOnHover={true}  
        play={!paused}      
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className={styles.skillCard}
            onClick={handleClick}
            onMouseLeave={handleLeave}
          >
            <img src={skill.logo} alt={skill.name} className={styles.logo} />
            <p className={styles.text}>{skill.name}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default Skill;
