import React from 'react';

export default function Clients() {
  const ClientCard = ({ logo, name }) => (
    <div className="w-24 h-24 md:w-[120px] md:h-[120px] bg-white rounded-2xl shadow-[0_8px_20px_rgb(0,0,0,0.04)] flex flex-col items-center justify-center gap-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 border border-gray-50 flex-shrink-0">
      <div className="text-3xl md:text-4xl">{logo}</div>
      <span className="text-[10px] md:text-xs font-bold text-gray-700 text-center px-1 leading-tight">{name}</span>
    </div>
  );

  return (
    <section id="clients" className="py-24 bg-gradient-to-br from-pink-50/50 via-white to-pink-50/50 flex justify-center items-center">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* Main Card Container */}
        <div className="bg-white rounded-[2rem] shadow-[0_10px_40px_rgb(0,0,0,0.03)] border border-gray-100 p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 md:gap-20 overflow-hidden">
          
          {/* Left Side Content */}
          <div className="flex-1 text-center md:text-left z-10">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-gray-900 leading-[1.15] mb-5 tracking-tight">
              Trusted by our <br className="hidden md:block" />
              valued clients
            </h2>
            <p className="text-gray-500 text-sm md:text-base mb-8 max-w-md mx-auto md:mx-0 leading-relaxed">
              We empower organizations to scale their operations. We partner with industry leaders to build robust software systems and deliver exceptional IT services.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/20 flex items-center gap-2 mx-auto md:mx-0 cursor-pointer">
              Explore Partners
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Right Side Staggered Grid */}
          <div className="flex-1 w-full flex justify-center gap-4 md:gap-6 relative">
            {/* Soft fade gradients for top and bottom to make it look like an endless scrolling grid */}
            <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
            
            {/* Column 1 */}
            <div className="flex flex-col gap-4 md:gap-6 -translate-y-8">
              <ClientCard name="Alpha" logo="⚡" />
              <ClientCard name="Srivedha" logo="🪨" />
              <ClientCard name="Global" logo="🌍" />
            </div>
            
            {/* Column 2 */}
            <div className="flex flex-col gap-4 md:gap-6 translate-y-4">
              <ClientCard name="Innovate" logo="💡" />
              <ClientCard name="IKC" logo="🏢" />
              <ClientCard name="Nexus" logo="🔗" />
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4 md:gap-6 -translate-y-12">
              <ClientCard name="Praneeth" logo="💻" />
              <ClientCard name="TechCorp" logo="🚀" />
              <ClientCard name="Vertex" logo="✨" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}