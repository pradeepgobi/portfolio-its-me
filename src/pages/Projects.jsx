import React, { useState, useEffect, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaEdit, FaPlus } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GlassCard from '../components/ui/GlassCard';
import AnimatedText from '../components/ui/AnimatedText';
import { useSiteData } from '../contexts/SiteDataContext';
import { useAuth } from '../contexts/AuthContext';

gsap.registerPlugin(ScrollTrigger);

const defaultProjects = [
  {
    id: 1,
    title: 'RasiSOC Wall',
    subtitle: 'Real-Time Enterprise SOC Asset Telemetry & Threat Defense Platform',
    description: 'Real-Time Enterprise SOC Asset Telemetry & Threat Defense Platform',
    longDescription:
      'Developed a real-time SOC dashboard using React, FastAPI, and WebSockets to monitor endpoint assets, device status, and connected peripherals through a standalone Windows monitoring agent. Implemented automated SMTP security alerts and email OTP authentication with JWT-based RBAC, and deployed the platform on AWS EC2 using Nginx and Cloudflare SSL.',
    tech: ['React', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'WebSockets', 'AWS EC2', 'Nginx', 'Cloudflare SSL'],
    github: 'https://github.com/pradeepgobi/Soc-Wall',
    liveDemo: 'https://soc-wall.pradeepcyber.me/',
    category: 'security',
    image: '🛡️',
  },
  {
    id: 2,
    title: 'MailShield',
    subtitle: 'AI-Powered Passive Mail Cryptographic Auditing & Cyber SOC Suite',
    description: 'AI-Powered Passive Mail Cryptographic Auditing & Cyber SOC Suite',
    longDescription:
      'Developed a passive email security monitoring engine using Scapy to analyze SMTP/IMAP/POP3 traffic and identify TLS downgrade attacks, STRIPTLS MitM attempts, and suspicious cryptographic handshake patterns. Integrated rule-based detection, Scikit-Learn Isolation Forest anomaly detection, and Google Gemini AI for threat analysis and incident response, with automated Linux iptables containment and AWS EC2 deployment.',
    tech: ['Python', 'FastAPI', 'Scapy', 'WebSockets', 'TLS 1.3', 'Linux iptables', 'Scikit-Learn', 'Gemini AI', 'AWS EC2'],
    github: 'https://github.com/pradeepgobi/email_security',
    liveDemo: 'https://email.pradeepcyber.me',
    category: 'security',
    image: '✉️',
  },
  {
    id: 3,
    title: 'AI Cyber Threat Detection',
    description: 'AI system for detecting cyber threats instantly',
    longDescription: 'An advanced AI-based system designed for detecting phishing, malware, and sophisticated cyber threats in real-time, providing immediate actionable reporting.',
    tech: ['Python', 'ReactJS', 'AI', 'RSA Encryption'],
    github: 'https://github.com/pradeepgobi/AI-Enabled-Cyber-Threat-Detection-Reporting-System-',
    category: 'security',
    image: '🔒'
  },
  {
    id: 4,
    title: 'AI Web Analyzer',
    description: 'AI tool for analyzing websites',
    longDescription: 'An automated web analysis tool that leverages AI to evaluate website performance, SEO metrics, and basic security headers.',
    tech: ['TypeScript', 'Python', 'MongoDB', 'Gemini API'],
    github: 'https://github.com/pradeepgobi/Ai-Web_ananlayer',
    category: 'web',
    image: '🌐'
  },
  {
    id: 5,
    title: 'Password Strengthener',
    description: 'Password security analyzer tool',
    longDescription: 'A client-side security tool that analyzes password entropy, checks against common vulnerabilities, and suggests cryptographic improvements.',
    tech: ['Python', 'Streamlit', 'Security', 'NumPy'],
    github: 'https://github.com/pradeepgobi/password_strengther',
    category: 'security',
    image: '🔐'
  }
];

const Projects = () => {
  const { siteData } = useSiteData();
  const { isAuthenticated, openEditor } = useAuth();
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');
  const containerRef = useRef(null);
  const gridRef = useRef(null);

  const projects = siteData?.projects || defaultProjects;

  const categories = ['all', 'web', 'security'];
  const filteredProjects = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.project-filter-btn',
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.project-card');
      gsap.killTweensOf(cards);
      gsap.fromTo(cards,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
      );
    }, gridRef);
    return () => ctx.revert();
  }, [filter]);

  return (
    <div className="min-h-screen pt-24 pb-16 relative z-10" ref={containerRef}>
      <div className="container mx-auto px-6 max-w-6xl">

        <div className="mb-12 text-center flex flex-col items-center">
          <AnimatedText text="Featured Projects" className="text-4xl md:text-5xl font-display font-bold text-[#254F7A] mb-4" />
          <div className="w-20 h-1 bg-brand-gold rounded-full"></div>

          {isAuthenticated && (
            <button
              onClick={() => openEditor('projects')}
              className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-[#254F7A] text-cyan-300 hover:bg-[#3368A0] transition-colors shadow-md border border-cyan-400/40"
            >
              <FaEdit /> Edit Projects In Live Portal
            </button>
          )}
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`project-filter-btn px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm ${
                filter === cat
                  ? 'bg-[#3368A0] text-white shadow-[#3368A0]/20 border border-[#3368A0]'
                  : 'bg-white/60 text-[#3368A0] hover:bg-white hover:text-[#254F7A] border border-white/80'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Grid — centred, max 3 columns, cards stretch evenly */}
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {filteredProjects.map((project) => (
            <GlassCard
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="project-card group cursor-pointer flex flex-col w-full transition-all duration-500 hover:-translate-y-2 hover:shadow-premium hover:shadow-[#3368A0]/10 hover:border-[#3368A0]/30 !bg-white/50"
            >
              {/* Project Image/Icon Area */}
              <div className="w-full h-44 bg-white/60 rounded-xl mb-5 flex items-center justify-center text-6xl group-hover:scale-[1.02] transition-transform duration-500 overflow-hidden relative border border-white/50">
                <div className="absolute inset-0 bg-[#3368A0]/5 z-10"></div>
                <div className="relative z-20 group-hover:-translate-y-2 transition-transform duration-500">{project.image}</div>
              </div>

              <div className="flex-1 flex flex-col items-center text-center">
                {/* Title — centred */}
                <h3 className="text-[1.05rem] font-bold text-[#254F7A] mb-2 font-display group-hover:text-[#3368A0] transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-[#3368A0] mb-5 flex-1 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5 justify-center">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-semibold bg-white text-[#3368A0] px-3 py-1 rounded-full border border-slate-200 shadow-sm">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 mt-auto w-full pt-2">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 flex items-center justify-center gap-1.5 bg-[#3368A0] hover:bg-[#254F7A] text-white px-3 py-2 rounded-lg text-xs font-bold transition-all shadow-sm"
                      title="Open Live Platform"
                    >
                      <FaExternalLinkAlt className="text-[10px]" /> Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={`flex-1 flex items-center justify-center gap-1.5 ${
                        project.liveDemo
                          ? 'bg-white hover:bg-slate-50 text-[#254F7A] border border-[#3368A0]/30'
                          : 'bg-[#254F7A] hover:bg-[#3368A0] text-white'
                      } px-3 py-2 rounded-lg text-xs font-bold transition-colors shadow-sm`}
                      title="View GitHub Repository"
                    >
                      <FaGithub className="text-xs" /> Source Code
                    </a>
                  )}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div 
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-md flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="bg-white/95 backdrop-blur-xl border border-white p-6 sm:p-8 rounded-3xl max-w-lg w-full shadow-2xl transform transition-all max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-5xl">{selectedProject.image}</div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-[#3368A0] hover:text-white transition-colors"
                >
                  <FaTimes />
                </button>
              </div>

              <h2 className="text-2xl font-bold text-[#254F7A] mb-1 font-display">
                {selectedProject.title}
              </h2>
              {selectedProject.subtitle && (
                <p className="text-xs font-mono font-semibold text-[#66A3BF] mb-3">
                  {selectedProject.subtitle}
                </p>
              )}
              <p className="text-[#3368A0] mb-6 leading-relaxed text-sm whitespace-pre-line">
                {selectedProject.longDescription}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tech.map((t, i) => (
                  <span key={i} className="text-xs font-semibold bg-[#3368A0]/10 text-[#3368A0] px-3 py-1.5 rounded-full border border-[#3368A0]/25">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {selectedProject.liveDemo && (
                  <a
                    href={selectedProject.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#3368A0] hover:bg-[#254F7A] text-white py-3 px-4 rounded-xl font-bold hover:shadow-lg transition-all shadow-md"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 ${
                      selectedProject.liveDemo
                        ? 'bg-slate-100 text-[#254F7A] hover:bg-slate-200 border border-slate-300'
                        : 'bg-[#3368A0] text-white hover:shadow-lg shadow-md hover:shadow-[#3368A0]/30'
                    } py-3 px-4 rounded-xl font-bold transition-all`}
                  >
                    <FaGithub /> View on GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Projects;