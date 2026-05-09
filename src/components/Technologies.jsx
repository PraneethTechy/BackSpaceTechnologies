import React from 'react';

export default function Technologies() {
  const techStacks = [
    {
      title: "Cloud Computing",
      description: "Mastering scalable infrastructure, virtualization, and deployment strategies on AWS and Azure.",
      icon: "☁️",
      iconBg: "bg-blue-50/60",
      skills: ["AWS", "Azure", "Docker", "Kubernetes"]
    },
    {
      title: "Data Science",
      description: "Extracting insights from data using statistical analysis, machine learning, and visualization tools.",
      icon: "📊",
      iconBg: "bg-sky-50/80",
      skills: ["Python", "Pandas", "Machine Learning", "Tableau"]
    },
    {
      title: "MERN Stack",
      description: "Building high-performance, full-stack web applications using MongoDB, Express, React, and Node.js.",
      icon: "⚛️",
      iconBg: "bg-indigo-50/80",
      skills: ["MongoDB", "Express", "React", "Node.js"]
    }
  ];

  return (
    <section id="tech" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-[#0057FF] font-bold uppercase tracking-widest text-xs mb-4">
            Our Expertise
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-black tracking-tight leading-tight">
            Working Technologies
          </h3>
          <p className="mt-4 text-gray-500 text-base leading-relaxed">
            We specialize in the industry's most in-demand technical domains to ensure 
            our students and clients stay ahead of the curve.
          </p>
        </div>

        {/* Tech Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {techStacks.map((tech, index) => (
            <div 
              key={index}
              className="p-8 rounded-[2rem] border border-gray-100 bg-white shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className={`w-14 h-14 ${tech.iconBg} rounded-2xl flex items-center justify-center text-2xl mb-8 shadow-sm`}>
                {tech.icon}
              </div>

              <h4 className="text-[22px] font-bold text-black mb-4 tracking-tight">
                {tech.title}
              </h4>
              
              <p className="text-gray-500 text-[15px] mb-8 leading-relaxed">
                {tech.description}
              </p>

              {/* Tag List */}
              <div className="flex flex-wrap gap-2.5">
                {tech.skills.map((skill, sIndex) => (
                  <span 
                    key={sIndex}
                    className="px-3.5 py-1.5 bg-[#F4F5F7] text-gray-900 text-[11px] font-bold rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}