import React, { useState, useEffect, useRef } from 'react';
import {
  FaReact, FaPython, FaHtml5, FaCss3Alt, FaJs,
  FaShieldAlt, FaSearch, FaLock, FaBug, FaKey,
  FaBaseballBall, FaTableTennis, FaKeyboard, FaCircle
} from 'react-icons/fa';
import {
  SiTailwindcss, SiMongodb, SiKalilinux,
  SiWireshark, SiMetasploit, SiFirebase, SiFlutter
} from 'react-icons/si';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GlassCard from '../components/ui/GlassCard';
import AnimatedText from '../components/ui/AnimatedText';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const containerRef = useRef(null);
  const gridRef = useRef(null);

  const skillCategories = {
    frontend: [
      { name: 'Flutter', icon: SiFlutter },
      { name: 'React', icon: FaReact },
      { name: 'Tailwind', icon: SiTailwindcss },
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3Alt },
      { name: 'JavaScript', icon: FaJs },
    ],
    backend: [
      { name: 'Python', icon: FaPython },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Firebase', icon: SiFirebase },
    ],
    security: [
      { name: 'Kali Linux', icon: SiKalilinux },
      { name: 'Wireshark', icon: SiWireshark },
      { name: 'Metasploit', icon: SiMetasploit },
      { name: 'Burp Suite', icon: FaLock },
      { name: 'Nmap', icon: FaSearch },
      { name: 'Nessus', icon: FaShieldAlt },
    ],
    activities: [
      { name: 'Cricket', icon: FaBaseballBall },
      { name: 'Carrom', icon: FaCircle },
      { name: 'Badminton', icon: FaTableTennis },
      { name: 'Typing', icon: FaKeyboard },
    ],
  };

  const getSkills = () => {
    if (activeCategory === 'all') {
      return Object.values(skillCategories).flat();
    }
    return skillCategories[activeCategory] || [];
  };

  useEffect(() => {
    // Initial entrance animation
    const ctx = gsap.context(() => {
      gsap.fromTo('.skill-filter-btn',
        { opacity: 0, y: -20 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: containerRef.current, start: 'top 80%' }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Animate grid items when category changes
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.skill-card');
      gsap.killTweensOf(cards);
      gsap.fromTo(cards,
        { opacity: 0, scale: 0.9, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'back.out(1.5)' }
      );
    }, gridRef);
    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <div className="min-h-screen pt-24 pb-16 relative z-10" ref={containerRef}>
      <div className="container mx-auto px-6 max-w-6xl">

        <div className="mb-12 text-center flex flex-col items-center">
          <AnimatedText text="Technical Skills" className="text-4xl md:text-5xl font-display font-bold text-text-main mb-4" />
          <div className="w-20 h-1 bg-brand-gold rounded-full"></div>
        </div>

        {/* Categories Filter */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {['all', 'frontend', 'backend', 'security', 'activities'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`skill-filter-btn px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm ${
                activeCategory === cat
                  ? 'bg-brand-blue text-white shadow-brand-blue/20 border border-brand-blue'
                  : 'bg-white/60 text-text-secondary hover:bg-white hover:text-text-main border border-white/80'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {getSkills().map((skill, i) => {
            const Icon = skill.icon;
            return (
              <GlassCard
                key={`${activeCategory}-${i}`}
                className="skill-card group flex flex-col items-center justify-center p-6 text-center cursor-default transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-brand-blue/10 hover:border-brand-blue/30 !bg-white/50"
              >
                <div className="w-14 h-14 rounded-xl bg-white/80 flex items-center justify-center mb-4 text-text-main group-hover:text-brand-blue group-hover:scale-110 transition-all duration-300 shadow-sm border border-white/80">
                  <Icon className="text-2xl" />
                </div>
                <span className="text-sm font-semibold text-text-main group-hover:text-brand-blue transition-colors">
                  {skill.name}
                </span>
              </GlassCard>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Skills;