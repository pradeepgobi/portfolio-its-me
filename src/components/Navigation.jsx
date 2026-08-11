import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaCode, FaBriefcase, FaFileAlt, FaShareAlt, FaBars, FaTimes } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navContainerRef = useRef(null);

  useEffect(() => {
    const nav = navContainerRef.current;
    
    const scrollAnimation = gsap.to(nav, {
      scrollTrigger: {
        trigger: 'body',
        start: 'top -20',
        end: 'top -100',
        scrub: 0.5,
        toggleActions: 'play none none reverse'
      },
      y: -5,
      boxShadow: '0 15px 50px rgba(30,60,120,0.08)',
      backgroundColor: 'rgba(255, 255, 255, 0.85)',
      duration: 0.3
    });

    return () => {
      scrollAnimation.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', icon: FaHome, label: 'Home' },
    { path: '/about', icon: FaUser, label: 'About' },
    { path: '/skills', icon: FaCode, label: 'Skills' },
    { path: '/projects', icon: FaBriefcase, label: 'Projects' },
    { path: '/resume', icon: FaFileAlt, label: 'Resume' },
    { path: '/social', icon: FaShareAlt, label: 'Social' },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 w-full">

      {/* Animated gradient glow wrapper */}
      <div className="relative w-full max-w-5xl">

        {/* Rotating rainbow border glow */}
        <div
          className="absolute -inset-[2px] rounded-full z-0 opacity-80"
          style={{
            background: 'conic-gradient(from var(--angle, 0deg), #6366f1, #f5a623, #06b6d4, #a855f7, #f472b6, #10b981, #6366f1)',
            animation: 'navGradientSpin 4s linear infinite',
            filter: 'blur(6px)',
          }}
        />
        {/* Crisp border ring on top of blur */}
        <div
          className="absolute -inset-[1.5px] rounded-full z-0"
          style={{
            background: 'conic-gradient(from var(--angle, 0deg), #6366f1, #f5a623, #06b6d4, #a855f7, #f472b6, #10b981, #6366f1)',
            animation: 'navGradientSpin 4s linear infinite',
            opacity: 0.6,
          }}
        />

        <div 
          ref={navContainerRef}
          className="glass-premium rounded-full px-6 py-3 w-full flex items-center justify-between transition-all duration-300 relative z-10"
          style={{ background: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(20px)' }}
        >
          
          {/* Left: Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-brand-deepBlue text-brand-gold flex items-center justify-center font-display font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
              P
            </div>
            <span className="font-display font-bold text-xl text-text-main tracking-tight">Portfolio</span>
          </Link>

          {/* Right: Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 font-semibold text-sm ${
                    isActive 
                      ? 'text-brand-blue bg-white shadow-sm' 
                      : 'text-text-secondary hover:text-text-main hover:bg-white/40'
                  }`}
                >
                  <Icon className={`text-base ${isActive ? 'text-brand-brightGold' : ''}`} />
                  <span>{item.label}</span>
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-brand-brightGold rounded-full"></div>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-text-main p-2 hover:bg-white/40 rounded-full transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>

        </div>
      </div>

      {/* CSS keyframe for the spinning gradient */}
      <style>{`
        @keyframes navGradientSpin {
          0%   { --angle: 0deg;   }
          100% { --angle: 360deg; }
        }
        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
      `}</style>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden fixed top-24 left-4 right-4 z-40 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
        <div className="glass-premium rounded-2xl p-4 flex flex-col gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-semibold ${
                  isActive
                    ? 'text-brand-blue bg-white shadow-sm'
                    : 'text-text-secondary hover:bg-white/40 hover:text-text-main'
                }`}
              >
                <Icon className={`text-lg ${isActive ? 'text-brand-brightGold' : ''}`} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
