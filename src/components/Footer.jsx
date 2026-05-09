import React from 'react';
import Logo from '../assets/logobackspace.png';

export default function Footer() {
  return (
    <footer className="bg-[#0047A6] text-white pt-20 pb-10 border-t border-transparent">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src={Logo} alt="Backspace Solutions Logo" className="h-12 w-auto" />
            </div>
            <p className="text-blue-100 text-[15px] leading-relaxed">
              Empowering businesses worldwide through cutting-edge IT services, custom software solutions, and comprehensive digital transformation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[15px] font-semibold mb-6 text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-4 text-blue-100 text-[15px]">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#clients" className="hover:text-white transition-colors">Our Clients</a></li>
              <li><a href="#tech" className="hover:text-white transition-colors">Technologies</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services/Focus */}
          <div>
            <h4 className="text-[15px] font-semibold mb-6 text-white uppercase tracking-wider">Services</h4>
            <ul className="space-y-4 text-blue-100 text-[15px]">
              <li><a href="#" className="hover:text-white transition-colors">Custom Software Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cloud Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Data Analytics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">IT Consulting</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-[15px] font-semibold mb-6 text-white uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4 text-blue-100 text-[15px]">
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:dileepottikunta@gmail.com" className="hover:text-white transition-colors break-all">dileepottikunta@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:6302305019" className="hover:text-white transition-colors">6302305019</a>
              </li>
              <li className="flex items-start gap-3 mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Tirupati, Andhra Pradesh, India.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-500/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-200 text-sm">
            © {new Date().getFullYear()} Backspace Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-blue-200">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}