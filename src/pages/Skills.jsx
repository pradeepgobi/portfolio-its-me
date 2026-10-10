import React, { useEffect, useRef } from 'react';
import { FaNetworkWired, FaUnlockAlt, FaDatabase, FaShieldAlt, FaEdit } from 'react-icons/fa';
import { SiKalilinux, SiWireshark, SiBurpsuite } from 'react-icons/si';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GlassCard from '../components/ui/GlassCard';
import AnimatedText from '../components/ui/AnimatedText';
import { useSiteData } from '../contexts/SiteDataContext';
import { useAuth } from '../contexts/AuthContext';

gsap.registerPlugin(ScrollTrigger);

const getSkillIcon = (keyOrName) => {
  const lower = (keyOrName || '').toLowerCase();
  if (lower.includes('burp')) return SiBurpsuite;
  if (lower.includes('nmap') || lower.includes('network')) return FaNetworkWired;
  if (lower.includes('wire')) return SiWireshark;
  if (lower.includes('kali') || lower.includes('linux')) return SiKalilinux;
  if (lower.includes('john') || lower.includes('crack') || lower.includes('pass')) return FaUnlockAlt;
  if (lower.includes('sql') || lower.includes('data')) return FaDatabase;
  return FaShieldAlt;
};

const Skills = () => {
  const containerRef = useRef(null);
  const gridRef = useRef(null);
  const { siteData } = useSiteData();
  const { isAuthenticated, openEditor } = useAuth();

  const skillsList = siteData?.skills && siteData.skills.length > 0 ? siteData.skills : [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.cyber-skill-card');
      gsap.fromTo(
        cards,
        { opacity: 0, y: 35, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 82%',
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [skillsList]);

  return (
    <div className="min-h-screen pt-24 pb-20 relative z-10" ref={containerRef}>
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Section Header */}
        <div className="mb-14 text-center flex flex-col items-center">
          <div className="flex items-center gap-3 mb-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 border border-[#3368A0]/20 shadow-sm">
              <FaShieldAlt className="text-[#3368A0] text-xs" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#254F7A]">
                Cybersecurity Arsenal
              </span>
            </div>
            {isAuthenticated && (
              <button
                onClick={() => openEditor('skills')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#254F7A] text-cyan-300 border border-cyan-400/40 text-xs font-mono font-bold shadow-sm hover:bg-[#3368A0] transition-colors cursor-pointer"
              >
                <FaEdit /> Edit Skills
              </button>
            )}
          </div>
          <AnimatedText
            text="Technical Skills"
            className="text-4xl md:text-5xl font-display font-bold text-[#254F7A] mb-4"
          />
          <div className="w-20 h-1 bg-[#3368A0] rounded-full mb-4"></div>
          <p className="text-base text-[#3368A0] max-w-2xl font-medium leading-relaxed">
            Core cybersecurity tools and frameworks utilized for penetration testing, network auditing, traffic analysis, and vulnerability assessment.
          </p>
        </div>

        {/* Skills Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {skillsList.map((skill, index) => {
            const Icon = getSkillIcon(skill.iconKey || skill.name);
            return (
              <GlassCard
                key={skill.id || skill.name || index}
                className="cyber-skill-card group relative p-7 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#3368A0]/15 border border-white/80 hover:border-[#3368A0]/40 !bg-white/65 flex flex-col justify-between"
              >
                {/* Top Row: Icon + Badge */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-14 h-14 rounded-xl bg-white/90 shadow-sm border border-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ color: skill.iconColor || '#3368A0' }}
                    >
                      <Icon className="text-2xl" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#C8DFDB]/60 text-[#254F7A] border border-[#3368A0]/15">
                      {skill.badge || 'Security Tool'}
                    </span>
                  </div>

                  {/* Title and Role */}
                  <h3 className="text-xl font-bold font-display text-[#254F7A] mb-1 group-hover:text-[#3368A0] transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#66A3BF] uppercase tracking-wider mb-3">
                    {skill.role}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-[#254F7A]/85 leading-relaxed mb-6 font-medium">
                    {skill.description}
                  </p>
                </div>

                {/* Bottom Tags */}
                <div className="pt-4 border-t border-[#3368A0]/10 flex flex-wrap gap-1.5">
                  {(skill.tags || []).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10.5px] font-medium px-2.5 py-0.5 rounded-md bg-white/70 text-[#254F7A] border border-white/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassCard>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Skills;