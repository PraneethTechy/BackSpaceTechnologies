export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-black mb-6">
              Backspace <span className="text-blue-500">Solutions</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Empowering the next generation of tech leaders through project-based learning and industry-standard training.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#hero" className="hover:text-blue-500 transition-colors">Home</a></li>
              <li><a href="#clients" className="hover:text-blue-500 transition-colors">Our Clients</a></li>
              <li><a href="#tech" className="hover:text-blue-500 transition-colors">Technologies</a></li>
              <li><a href="#contact" className="hover:text-blue-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services/Focus */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Programs</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Internships</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Project Development</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">MERN Stack</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Data Science</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Connect</h4>
            <div className="flex gap-4">
              {['LinkedIn', 'Twitter', 'GitHub', 'Instagram'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center border border-gray-800 hover:border-blue-500 hover:text-blue-500 transition-all"
                >
                  <span className="sr-only">{social}</span>
                  {/* You can insert SVG icons here */}
                  <div className="w-5 h-5 bg-current rounded-xs opacity-20"></div>
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-400">
              Tirupati, Andhra Pradesh, India.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Backspace Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}