import React from 'react';

export default function ContactForm() {
  return (
    <section id="contact" className="relative pt-24 pb-32 bg-white overflow-hidden">
      
      {/* Decorative Dots Pattern - Left */}
      <div className="absolute top-32 left-10 md:left-[10%] w-32 h-32 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #1d4ed8 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>
      
      {/* Decorative Dots Pattern - Right */}
      <div className="absolute bottom-10 right-10 md:right-[20%] w-64 h-32 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #1d4ed8 4px, transparent 4px)', backgroundSize: '24px 24px' }}></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side Content */}
          <div className="max-w-md">
            <h2 className="text-[2.5rem] md:text-[3.5rem] font-medium text-gray-900 leading-tight mb-6 tracking-tight">
              Contact us
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Need to get in touch with us? Either fill out the form with your inquiry or find the <a href="#" className="text-blue-600 underline hover:text-blue-800 transition-colors">department email</a> you'd like to contact below.
            </p>
          </div>

          {/* Right Side Form Card */}
          <div className="relative">
            <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 p-8 md:p-10 z-10 relative">
              <form className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] font-semibold text-gray-800 mb-1.5">First name*</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-[#F4F5F7] border border-transparent rounded-md focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 outline-none transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-gray-800 mb-1.5">Last name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-[#F4F5F7] border border-transparent rounded-md focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-semibold text-gray-800 mb-1.5">Email*</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-[#F4F5F7] border border-transparent rounded-md focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 outline-none transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-[13px] font-semibold text-gray-800 mb-1.5">What can we help you with?</label>
                  <textarea 
                    rows="4" 
                    className="w-full px-4 py-3 bg-[#F4F5F7] border border-transparent rounded-md focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 outline-none transition-all resize-none text-sm"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button className="px-8 py-3 bg-blue-700 text-white text-[15px] font-medium rounded-md hover:bg-blue-800 transition-colors shadow-sm cursor-pointer">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}