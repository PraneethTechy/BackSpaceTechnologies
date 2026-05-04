export default function Technologies() {
  const techStacks = [
    {
      title: "Cloud Computing",
      description: "Mastering scalable infrastructure, virtualization, and deployment strategies on AWS and Azure.",
      icon: "☁️",
      skills: ["AWS", "Azure", "Docker", "Kubernetes"]
    },
    {
      title: "Data Science",
      description: "Extracting insights from data using statistical analysis, machine learning, and visualization tools.",
      icon: "📊",
      skills: ["Python", "Pandas", "Machine Learning", "Tableau"]
    },
    {
      title: "MERN Stack",
      description: "Building high-performance, full-stack web applications using MongoDB, Express, React, and Node.js.",
      icon: "⚛️",
      skills: ["MongoDB", "Express", "React", "Node.js"]
    }
  ];

  return (
    <section id="tech" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">
            Our Expertise
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-black">
            Working Technologies
          </h3>
          <p className="mt-4 text-gray-500 max-w-2xl text-lg">
            We specialize in the industry's most in-demand technical domains to ensure 
            our students and clients stay ahead of the curve.
          </p>
        </div>

        {/* Tech Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techStacks.map((tech, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-3xl border-2 border-gray-100 hover:border-blue-600 transition-all duration-500 bg-white hover:shadow-2xl hover:shadow-blue-100/40"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                {tech.icon}
              </div>

              <h4 className="text-2xl font-bold text-black mb-4">
                {tech.title}
              </h4>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {tech.description}
              </p>

              {/* Tag List */}
              <div className="flex flex-wrap gap-2">
                {tech.skills.map((skill, sIndex) => (
                  <span 
                    key={sIndex}
                    className="px-3 py-1 bg-gray-100 text-black text-xs font-bold rounded-full group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Decorative Blue Line */}
              <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-blue-600 rounded-b-full group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}