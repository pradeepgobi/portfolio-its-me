import React, { useEffect, useRef } from 'react';
import { FaNetworkWired, FaUnlockAlt, FaDatabase, FaShieldAlt } from 'react-icons/fa';
import { SiKalilinux, SiWireshark, SiBurpsuite } from 'react-icons/si';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GlassCard from '../components/ui/GlassCard';
import AnimatedText from '../components/ui/AnimatedText';

gsap.registerPlugin(ScrollTrigger);

const cyberSkills = [
  {
    name: 'Burp Suite',
    role: 'Web Application VAPT',
    icon: SiBurpsuite,
    iconColor: '#FF6633',
    badge: 'Web Proxy & Scanner',
    description: 'Intercepting HTTP/HTTPS traffic, automated crawling, fuzzing, parameter tampering, and auditing for OWASP Top 10 web vulnerabilities.',
    tags: ['Proxy & Repeater', 'Intruder', 'OWASP Top 10', 'Web VAPT'],
  },
  {
    name: 'Nmap',
    role: 'Network Discovery & Auditing',
    icon: FaNetworkWired,
    iconColor: '#3368A0',
    badge: 'Port Scanner',
    description: 'Active host discovery, port scanning, service version detection, OS fingerprinting, and vulnerability scanning using NSE scripts.',
    tags: ['Host Discovery', 'Port Enumeration', 'NSE Scripting', 'OS Detection'],
  },
  {
    name: 'Wireshark',
    role: 'Packet & Protocol Analysis',
    icon: SiWireshark,
    iconColor: '#1679A7',
    badge: 'Traffic Forensics',
    description: 'Deep packet inspection, live network traffic capture, protocol dissection, suspicious payload analysis, and network anomaly detection.',
    tags: ['Packet Capture', 'Protocol Analysis', 'TCP/IP', 'Traffic Forensics'],
  },
  {
    name: 'Kali Linux',
    role: 'Offensive Security OS',
    icon: SiKalilinux,
    iconColor: '#254F7A',
    badge: 'Penetration Testing',
    description: 'Dedicated penetration testing environment utilizing advanced security toolchains for exploitation, reconnaissance, and vulnerability assessments.',
    tags: ['Security Distribution', 'Reconnaissance', 'Exploitation', 'Bash / CLI'],
  },
  {
    name: 'John the Ripper',
    role: 'Password Auditing & Cracking',
    icon: FaUnlockAlt,
    iconColor: '#D97706',
    badge: 'Hash Cracker',
    description: 'High-speed password security auditing, dictionary and wordlist attacks, hybrid cracking rules, and weak credential vulnerability analysis.',
    tags: ['Hash Cracking', 'Dictionary Attack', 'Rule-Based Attacks', 'Credential Auditing'],
  },
  {
    name: 'SQL',
    role: 'Database Security & SQLi',
    icon: FaDatabase,
    iconColor: '#00758F',
    badge: 'Database Security',
    description: 'Relational database querying, identifying and exploiting SQL injection (SQLi) vulnerabilities, backend security testing, and query hardening.',
    tags: ['SQL Injection (SQLi)', 'Query Hardening', 'Database Auditing', 'RDBMS'],
  },
];

const Skills = () => {
  const containerRef = useRef(null);
  const gridRef = useRef(null);

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
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20 relative z-10" ref={containerRef}>
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Section Header */}
        <div className="mb-14 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 border border-[#3368A0]/20 mb-3 shadow-sm">
            <FaShieldAlt className="text-[#3368A0] text-xs" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#254F7A]">
              Cybersecurity Arsenal
            </span>
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

        {/* Skills Grid — 6 Cyber Tools */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {cyberSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <GlassCard
                key={skill.name}
                className="cyber-skill-card group relative p-7 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#3368A0]/15 border border-white/80 hover:border-[#3368A0]/40 !bg-white/65 flex flex-col justify-between"
              >
                {/* Top Row: Icon + Badge */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-14 h-14 rounded-xl bg-white/90 shadow-sm border border-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ color: skill.iconColor }}
                    >
                      <Icon className="text-2xl" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#C8DFDB]/60 text-[#254F7A] border border-[#3368A0]/15">
                      {skill.badge}
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
                  {skill.tags.map((tag) => (
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