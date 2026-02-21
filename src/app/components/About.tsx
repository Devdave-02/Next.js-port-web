function About() {
  return (
    <section
      id="About"
      className="flex items-center justify-center mt-[60px] mb-[50px] px-4 mt-[50px} font-poppins"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
        {/* Left: Text */}
        <div className="text-gray-200 p-6 rounded-xl shadow-lg text-lg leading-6 max-w-md">
          <h2 className="text-yellow-400 font-poppins font-extrabold text-4xl mb-4 text-left">
            Who I am?
          </h2>
          <p className="text-left text-base md:text-lg leading-relaxed">
            I’m David Okanlawon, a passionate Full-Stack Engineer committed to
            building innovative, user-centered, and scalable digital solutions.
            With proven experience across both frontend and backend development,
            I leverage modern frameworks, robust databases, and cloud
            technologies to deliver applications that perform and endure. I’m a
            natural problem-solver and fast learner, always eager to embrace new
            challenges and technologies. My mission is to create solutions that
            don’t just work, but drive real impact and add lasting value to
            businesses and users alike.
          </p>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center">
          <img
            src="/profile-image.jpg"
            alt="profile"
            className="w-[300px] h-[300px]  rounded-xl border border-[#907c10] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
