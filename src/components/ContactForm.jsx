import ContactImage from '../assets/Contact.png';

export default function ContactForm() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">
            Get In Touch
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-black">
            Contact Us for Internship or Projects
          </h3>
          <div className="w-24 h-1.5 bg-black mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-3xl border-2 border-gray-100 shadow-xl shadow-blue-50/50">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-black mb-2">Name</label>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-4 bg-gray-50 border-2 border-transparent rounded-xl focus:border-blue-600 focus:bg-white outline-hidden transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-black mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="Email@example.com" 
                  className="w-full p-4 bg-gray-50 border-2 border-transparent rounded-xl focus:border-blue-600 focus:bg-white outline-hidden transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-black mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+91 00000 00000" 
                  className="w-full p-4 bg-gray-50 border-2 border-transparent rounded-xl focus:border-blue-600 focus:bg-white outline-hidden transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-black mb-2">Message</label>
                <textarea 
                  rows="4" 
                  placeholder="Tell us about your project or internship interest..." 
                  className="w-full p-4 bg-gray-50 border-2 border-transparent rounded-xl focus:border-blue-600 focus:bg-white outline-hidden transition-all resize-none"
                ></textarea>
              </div>

              <button className="w-full py-4 bg-blue-600 text-white font-black text-lg rounded-xl hover:bg-black transition-colors duration-300 shadow-lg shadow-blue-200">
                Send Request
              </button>
            </form>
          </div>

          {/* Right Side: Image/Illustration */}
          <div className="relative group">
            {/* Decorative Blue Glow */}
            <div className="absolute -inset-4 bg-blue-600/10 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
            
            <img 
              src={ContactImage} // Replace with your actual asset path
              alt="Connect with Backspace Solutions"
              className="relative z-10 w-full h-auto drop-shadow-2xl rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
            />
            
            {/* Quick Info Box */}
            <div className="absolute -bottom-6 -right-6 z-20 bg-black text-white p-6 rounded-2xl shadow-2xl hidden lg:block">
              <p className="text-blue-400 font-bold text-xs uppercase mb-1">Response Time</p>
              <p className="font-bold">Within 24 Hours</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}