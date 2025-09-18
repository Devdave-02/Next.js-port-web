function Services() {
  return (
    <section id="services" className="px-4 py-[50px]">
      {/* Heading */}
      <h3 className="text-[40px] font-bold font-poppins text-[#FFD700] text-left mb-2">
        SERVICES
      </h3>

      {/* Intro text */}
      <p className="text-white text-[18px] text-left mt-2 mb-12 max-w-[600px]">
        I offer a broad range of services to ensure clean, reliable code that
        positions you ahead of the competition.
      </p>

      {/* Services grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[50px] justify-center items-center">
        
        {/* Service Card 1 */}
        <div className="bg-[rgba(242,244,246,0.879)] p-6 rounded-[15px] border border-[#9a8610] shadow-md flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 hover:shadow-lg">
          <img src="/javascript.svg" alt="javadev" className="w-[80px] h-[80px] object-contain mb-4" />
          <h4 className="text-[25px] text-[rgb(4,4,34)] font-bold mb-2">Javascript Development</h4>
          <p className="text-[18px] text-[rgba(30,30,60,1)]">
            Creating dynamic and interactive web applications using JavaScript.
          </p>
        </div>

        {/* Service Card 2 */}
        <div className="bg-[rgba(242,244,246,0.879)] p-6 rounded-[15px] border border-[#9a8610] shadow-md flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 hover:shadow-lg">
          <img src="/react.svg" alt="reactdev" className="w-[80px] h-[80px] object-contain mb-4" />
          <h4 className="text-[25px] text-[rgb(4,4,34)] font-bold mb-2">React Development</h4>
          <p className="text-[18px] text-[rgba(30,30,60,1)]">
            Building modern and responsive user interfaces with React.js.
          </p>
        </div>

        {/* Service Card 3 */}
        <div className="bg-[rgba(242,244,246,0.879)] p-6 rounded-[15px] border border-[#9a8610] shadow-md flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 hover:shadow-lg">
          <img src="/nextjs.svg" alt="nextdev" className="w-[80px] h-[80px] object-contain mb-4" />
          <h4 className="text-[25px] text-[rgb(4,4,34)] font-bold mb-2">Next.js Development</h4>
          <p className="text-[18px] text-[rgba(30,30,60,1)]">
            Creating server-rendered React applications with Next.js.
          </p>
        </div>

        {/* Service Card 4 */}
        <div className="bg-[rgba(242,244,246,0.879)] p-6 rounded-[15px] border border-[#9a8610] shadow-md flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 hover:shadow-lg">
          <img src="/nodejs.svg" alt="nodedav" className="w-[80px] h-[80px] object-contain mb-4" />
          <h4 className="text-[25px] text-[rgb(4,4,34)] font-bold mb-2">Node.js Backend</h4>
          <p className="text-[18px] text-[rgba(30,30,60,1)]">
            Developing scalable server-side applications using Node.js.
          </p>
        </div>

        {/* Service Card 5 */}
        <div className="bg-[rgba(242,244,246,0.879)] p-6 rounded-[15px] border border-[#9a8610] shadow-md flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 hover:shadow-lg">
          <img src="/typescript.svg" alt="tsdev" className="w-[80px] h-[80px] object-contain mb-4" />
          <h4 className="text-[25px] text-[rgb(4,4,34)] font-bold mb-2">TypeScript Development</h4>
          <p className="text-[18px] text-[rgba(30,30,60,1)]">
            Ensuring robust and maintainable code with TypeScript.
          </p>
        </div>

        {/* Service Card 6 */}
        <div className="bg-[rgba(242,244,246,0.879)] p-6 rounded-[15px] border border-[#9a8610] shadow-md flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 hover:shadow-lg">
          <img src="/go.svg" alt="godev" className="w-[80px] h-[80px] object-contain mb-4" />
          <h4 className="text-[25px] text-[rgb(4,4,34)] font-bold mb-2">Go Development</h4>
          <p className="text-[18px] text-[rgba(30,30,60,1)]">
            Building fast, reliable backends and APIs with Go (Golang).
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
