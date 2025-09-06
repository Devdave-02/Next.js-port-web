import Image from "next/image";
import styles from "./Projects.module.css";

const projects = [
    {
    title: "School Portal",
    image: "/portal.png",
    tools: ["React", "Node.js", "Express.js", "MongoDB"],
    summary: "A responsive school management portal that manages students and lecturers. Demo login: Username: student01, Password: pass123.",
    link: "https://portal-application.vercel.app/",
  },
  {
    title: "Telecom Website",
    image: "/telecom.png",
    tools: ["Html", "CSS", "Javascript"],
    summary: "A professional telecom service site with service plans, modern UI, and contact form.",
    link: "https://devdave-02.github.io/Telecom-web/",
  },
  {
    title: "Portfolio Website",
    image: "/portfolio.png",
    tools: ["HTML", "CSS", "Javascript", "Next.js"],
    summary: "A personal developer portfolio showcasing skills, projects, and contact form.",
    link: "https://react-portfolio-app-snowy.vercel.app/",
  },
  {
    title: "Farm Website",
    image: "/farm website.png",
    tools: ["HTML", "CSS", "Javascript", "React"],
    summary: "A clean, modern site promoting farm sponsorship and sustainable milk production through a cost-efficient circular system.",
    link: "https://react-farm-app.vercel.app/",
  },
];

function Projects() {
  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.heading}>PROJECTS</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <div className={styles.topRow}>
              <div className={styles.textSide}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.tools}>
                  <strong>Tools:</strong> {project.tools.join(", ")}
                </p>
              </div>
              <div className={styles.imageWrapper}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className={styles.image}
                />
              </div>
            </div>

            <p className={styles.summary}>{project.summary}</p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              View Demo
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
