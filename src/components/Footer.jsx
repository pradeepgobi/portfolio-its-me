import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 mt-12 border-t border-slate-200/50 bg-white/30 backdrop-blur-sm">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Brand / Copyright */}
        <div className="text-center md:text-left">
          <p className="text-sm text-[#3368A0] font-medium">
            &copy; {currentYear} <span className="font-bold text-[#254F7A]">Pradeep</span>. All rights reserved.
          </p>
          <p className="text-xs text-[#3368A0]/70 mt-1">
            Designed & Built with React, GSAP & Tailwind
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/pradeepgobi"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/60 flex items-center justify-center text-[#3368A0] hover:text-[#254F7A] hover:bg-white hover:shadow-sm border border-slate-200/50 transition-all duration-300 hover:border-brand-blue/30"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/pradeep-gobi-899005330"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/60 flex items-center justify-center text-[#3368A0] hover:text-[#3368A0] hover:bg-white hover:shadow-sm border border-slate-200/50 transition-all duration-300 hover:border-brand-blue/30"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:pradeepgobi8@gmail.com"
            className="w-10 h-10 rounded-full bg-white/60 flex items-center justify-center text-[#3368A0] hover:text-brand-brightGold hover:bg-white hover:shadow-sm border border-slate-200/50 transition-all duration-300 hover:border-brand-gold/30"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
