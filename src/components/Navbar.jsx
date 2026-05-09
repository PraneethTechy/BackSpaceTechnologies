import React from 'react';
import Logo from '../assets/logobackspace.png';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-50/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-2 cursor-pointer">
        <img src={Logo} alt="Backspace Solutions Logo" className="h-10 w-auto" />
      </div>

      <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-500">
        <li><a href="#home" className="text-gray-900 font-semibold hover:text-blue-600 transition-colors">Home</a></li>
        <li><a href="#services" className="hover:text-blue-600 transition-colors">Services</a></li>
        <li><a href="#case-studies" className="hover:text-blue-600 transition-colors">Case Studies</a></li>
        <li><a href="#blog" className="hover:text-blue-600 transition-colors">Blog</a></li>
        <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
      </ul>

      <button className="px-6 py-2.5 bg-blue-900 text-white text-sm font-semibold rounded-full hover:bg-blue-800 transition-colors shadow-md border-2 border-transparent hover:border-yellow-400 cursor-pointer">
        SIGN UP
      </button>
    </nav>
  );
}