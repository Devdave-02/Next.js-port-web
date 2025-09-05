import styles from "./Services.module.css";

function Services() {
  return (
    <section id="services" className={styles.servicessSection}>
      <h3 className={styles.heading}>SERVICES</h3>
      <p  className={styles.servicesummaryintro}>
        I offer a broad range of services to ensure clean, reliable code that positions you ahead of the competition.
      </p>

    <div className={styles.servicecontainer}>
       <div className={styles.serviceCard}>
        <img src={"/javascript.svg"} alt={"javadev"} className={styles.imageservice} />
         <h4 className={styles.servicetitle}>Javascript Development</h4>
         <p className={styles.servicesummary}>Creating dynamic and interactive web applications using JavaScript.</p>
        </div>
     
        <div className={styles.serviceCard}>
        <img src={"/react.svg"} alt={"javadev"} className={styles.imageservice} />
         <h4 className={styles.servicetitle}>React Development</h4>
         <p className={styles.servicesummary}>Building modern and responsive user interfaces with React.js.</p>
        </div>

       <div className={styles.serviceCard}>
        <img src={"/nextjs.svg"} alt={"javadev"} className={styles.imageservice} />
         <h4 className={styles.servicetitle}>Next.js Development</h4>
         <p className={styles.servicesummary}>Creating server-rendered React applications with Next.js.</p>
        </div>

        <div className={styles.serviceCard}>
        <img src={"/nodejs.svg"} alt={"javadev"} className={styles.imageservice} />
         <h4 className={styles.servicetitle}>Node.js Backend</h4>
         <p className={styles.servicesummary}>Developing scalable server-side applications using Node.js.</p>
        </div>

        <div className={styles.serviceCard}>
        <img src={"./typescript.svg"} alt={"javadev"} className={styles.imageservice} />
         <h4 className={styles.servicetitle}>TypeScript Development</h4>
         <p className={styles.servicesummary}>Ensuring robust and maintainable code with TypeScript.</p>
        </div>

        <div className={styles.serviceCard}>
        <img src={"/go.svg"} alt={"godev"} className={styles.imageservice} />
        <h4 className={styles.servicetitle}>Go Development</h4>
        <p className={styles.servicesummary}>
          Building fast, reliable backends and APIs with Go (Golang).
        </p>
     </div>
    </div>        
</section>
);
}

export default Services;
