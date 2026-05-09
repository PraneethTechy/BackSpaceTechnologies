import React from 'react';

export default function Hero() {
  return (
    <section className="relative bg-[#F8F9FA] min-h-[90vh] flex items-center overflow-hidden">

      {/* Background Shapes */}
      {/* Left Dark Blue Triangle */}
      <div
        className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-[#0A142F] z-0"
        style={{ clipPath: 'polygon(0 100%, 0 40%, 100% 100%)' }}
      ></div>

      {/* Right Bright Blue Triangle */}
      <div
        className="absolute bottom-0 right-0 w-[70%] h-[80%] bg-[#0057FF] z-0"
        style={{ clipPath: 'polygon(100% 100%, 100% 20%, 30% 100%)' }}
      ></div>

      <div className="container mx-auto px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="max-w-xl">
          <h1 className="text-[3.5rem] md:text-[4.5rem] font-bold text-[#1a1a3a] leading-[1.1] tracking-tight">
            Innovative
            <br />
            <span className="text-[#0A142F]">IT Services</span>
            <br />
            & Solutions
          </h1>
          <p className="mt-6 text-sm text-gray-500 leading-relaxed max-w-sm">
            Empowering businesses through cutting-edge technology, custom software development, and expert IT consulting tailored to your success.
          </p>

          <div className="mt-8">
            <button className="px-8 py-3 bg-[#0A142F] text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-colors shadow-[0_0_0_4px_#F8F9FA,0_0_0_6px_#FFC107] cursor-pointer">
              GET STARTED
            </button>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="relative flex justify-center items-center mt-10 md:mt-0">

          {/* Decorative outline around the image shape */}
          <div className="absolute -inset-2 border-[6px] border-[#0057FF] rounded-tl-[130px] rounded-br-[130px] rounded-tr-[40px] rounded-bl-[40px] z-0"></div>

          {/* Main Image Container */}
          <div className="relative z-10 w-full max-w-[500px] aspect-square rounded-tl-[120px] rounded-br-[120px] rounded-tr-[30px] rounded-bl-[30px] overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
              alt="Digital Marketing Team"
              className="w-full h-full object-cover"
            />
            {/* Dark overlay on image to match the mood */}
            <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
          </div>

        </div>

      </div>
    </section>
  );
}