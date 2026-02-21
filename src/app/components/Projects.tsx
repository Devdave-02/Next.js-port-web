import Image from "next/image";

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
  title: "HR Security Awareness Portal (Nairagram)",
  image: "/nairagram.png",
  tools: ["Node.js", "Express", "Backend Security"],
  summary: "A security awareness system that simulates phishing login attacks to assess user behavior and support controlled security training initiatives.",
  link: "https://naigrm.vercel.app/",
},
  {
    title: "Farm Website",
    image: "/farm website.png",
    tools: ["HTML", "CSS", "React"],
    summary: "A clean, modern site promoting farm sponsorship and sustainable milk production through a cost-efficient circular system.",
    link: "https://react-farm-app.vercel.app/",
  },
  {
  title: "PulseTrack – Health Monitoring Platform",
  image: "/pulsetrack.png",
  tools: ["Node.js", "Express", "MongoDB",  "React"],
  summary: "A full-stack health platform for tracking user activities, meals, and appointments, built with scalable APIs and a responsive, user-focused interface.",
  link: "https://pulsetrack-frontend.vercel.app/",
},
{
  title: "DevConnect – Developer Collaboration Platform",
  image: "/devconnect.png",
  tools: ["Node.js", "Express", "MongoDB", "Next.js"],
  summary: "A full-stack collaboration platform that enables developers to share projects, interact through comments, and connect securely using RESTful APIs and authentication.",
  link: "https://dev-connect-frontenend.vercel.app/",
},



];

function Projects() {
  return (
    <section className="px-6 pt-10 pb-5 mt-[100px] flex flex-col items-center justify-center">
      <h2 className="text-[40px] mb-[2rem] text-[#FFD700] font-poppins font-extrabold text-left w-full">
        PROJECTS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-[50px] md:mt-4 mt-2 justify-center items-center max-w-[1200px] w-full">
        {projects.map((project, index) => (
          <div
            key={`projects-${index}`}
            className="
              bg-[rgba(30,30,60,1)] 
              p-6 rounded-xl border border-[rgb(60,44,143)]
              shadow-md transition-all duration-200 ease-in-out
              flex flex-col items-center text-center h-full
              hover:-translate-y-2 hover:shadow-lg
              md:max-w-none sm:max-w-none sm:h-[350px] sm:items-center
            "
            >
            {/* Top Row */}
            <div className="flex justify-between items-center gap-3 w-full mb-4 flex-col sm:flex-row">
              <div className="flex-1  ">
                <h3 className="text-[25px] text-left md:text-left sm:text-[18px] mb-2 text-[#FFD700] font-poppins font-bold">
                  {project.title}
                </h3>
                <p className="text-[18px] text-left sm:text-[15px] text-[#B0C4DE]">
                  <strong>Tools:</strong> {project.tools.join(", ")}
                </p>
              </div>
              <div className="flex-1">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
            </div>

            {/* Summary */}
            <p className="text-[18px] sm:text-[15px] text-[rgb(240,248,255)] my-4 text-center font-normal sm:w-[310px]">
              {project.summary}
            </p>

            {/* Link */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block px-5 py-2 
                bg-[rgba(30,30,60,1)] border border-[#f3d52a]
                text-white font-bold rounded-md no-underline
                transition-colors duration-300
                hover:bg-[#f3d52a] hover:text-white
              "
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
