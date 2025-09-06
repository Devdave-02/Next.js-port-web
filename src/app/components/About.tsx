import styles from "./About.module.css";

function About() {
  return (
    <section id="About" className={styles.About}>
      {/* Left div */}
      <div className={styles.left}>
        <h2 className={styles.Aboutheader}>Who I am?</h2>
        <p className={styles.title}>
          I’m David Okanlawon, a passionate Full-Stack Engineer committed to building innovative,
           user-centered, and scalable digital solutions. With proven experience across both frontend 
           and backend development, I leverage modern frameworks, robust databases, and cloud technologies
            to deliver applications that perform and endure. I’m a natural problem-solver and fast learner, 
            always eager to embrace new challenges and technologies. My mission is to create solutions that don’t
           just work, but drive real impact and add lasting value to businesses and users alike.
        </p>  
      </div>

   {/* Right div: Code block */}
    <div className={styles.right}>
      <img src={"/profile-image.jpg"} alt="profile" className={styles.image} />
    </div>
</section>
);
}

export default About;
