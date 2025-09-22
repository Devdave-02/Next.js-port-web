function Services() {

 const services = [
   {
    image: "/javascript.svg",
    title: "Javascript Development",
    subtitle: " Creating dynamic and interactive web applications using JavaScript."
   },

   {
    image: "/react.svg",
    title: "React Development",
    subtitle: "Building modern and responsive user interfaces with React.js."
   },

   {
    image: "/nextjs.svg",
    title: "Next Development",
    subtitle: "Creating server-rendered React applications with Next.js."
   },

   {
    image: "/nodejs.svg",
    title: "Node.js Backend",
    subtitle: "Developing scalable server-side applications using Node.js."
   },

   {
    image: "/typescript.svg",
    title: "TypeScript Development",
    subtitle: "Ensuring robust and maintainable code with TypeScript."
   },

   {
    image: "/go.svg",
    title: "Go Development",
    subtitle: "Building fast, reliable backends and APIs with Go (Golang)."
   },
 ]


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
        {services.map((service,index) => (
           <div
            key={`services-${index}`}
            className="bg-[rgba(242,244,246,0.879)] p-6 rounded-[15px] border border-[#9a8610] shadow-md flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 hover:shadow-lg"
           >
            <img
              src={service.image}
              alt={service.title}
              className="w-[80px] h-[80px] object-contain mb-4"
              />
              <h4 className="text-[25px] text-[rgb(4,4,34)] font-bold mb-2">
               {service.title}
            </h4>
            <p className="text-[18px] text-[rgba(30,30,60,1)]">{service.subtitle}</p>
         </div>
        ))}
       </div>
    </section>
  );
}

export default Services;
