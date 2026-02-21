import About from "./components/About";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import Services from "./components/Services";
import Contact from "./components/Contact"
import Footer from "./components/Footer"



export default function Home() {
  return (
    <main>
      
      <Header />

      {/* Sections with IDs */}
      <section id="intro">
        <Intro />
      </section>

      <section id="About">
        <About />
      </section>

      <section id="Skill">
        <Skill />
      </section>

      <section id="Projects">
        <Projects />
      </section>

      <section id="Services">
        <Services />
      </section>

      <section id="Contact">
        <Contact />
      </section>

      <section id="Footer">
        <Footer />
      </section>
    </main>
  );
}
