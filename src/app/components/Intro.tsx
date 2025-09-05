import styles from "./Intro.module.css";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


function Intro() {
  return (
    <section id="Intro" className={styles.Intro}>
      {/* Left div */}
      <div className={styles.left}>
        <p className={styles.title}>
          Hello, <strong className={styles.Myname}> I’m David Okanlawon,</strong>
         A professional <strong className={styles.Myrole}>full-stack Engineer.
        </strong>
        </p>

         <div className={styles.socials}>
          <a href="https://github.com/Devdave-02" target="_blank" rel="noopener noreferrer">
            <FaGithub className={styles.icon} />
          </a>
          <a href="https://linkedin.com/in/david-ibukunoluwa-okanlawon" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className={styles.icon} />
          </a>
          <a href="https://www.facebook.com/okanlawon.david.986" target="_blank" rel="noopener noreferrer">
            <FaFacebook className={styles.icon} />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=davidokanla69@gmail.com" target="_blank" rel="noopener noreferrer">
          <MdEmail className={styles.icon} />
          </a>
      </div>


       <div className={styles.buttoncontainer}>
         <button  className={styles.button}>
          <a  className={styles.buttonlink} href="/Okanlawon David.pdf" target="_blank" rel="noopener noreferrer">Download CV</a>
        </button>

        <button className={styles.button2}>
          <a  className={styles.buttonlink} href="/david_okanlawon_resume.pdf" download={true}>Contact Me</a>
        </button>
       </div>
      </div>

   {/* Right div: Code block */}
    <div className={styles.right}>
     <pre className={styles.code}>
    {
    `const coder = {
    name: 'David Okanlawon',
    skills: ['React', 'NextJS',  'Express', 
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
 };`
}
</pre>
</div>
</section>
);
}
 export default Intro;
