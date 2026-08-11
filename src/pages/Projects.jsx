import React, { useState, useEffect, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GlassCard from '../components/ui/GlassCard';
import AnimatedText from '../components/ui/AnimatedText';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');
  const containerRef = useRef(null);
  const gridRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: 'AI Cyber Threat Detection',
      description: 'AI system for detecting cyber threats instantly',
      longDescription: 'An advanced AI-based system designed for detecting phishing, malware, and sophisticated cyber threats in real-time, providing immediate actionable reporting.',
      tech: ['Vite', 'HTML', 'AI'],
      github: 'https://github.com/pradeepgobi/AI-Enabled-Cyber-Threat-Detection-Reporting-System-',
      category: 'security',
      image: '🔒'
    },
    {
      id: 2,
      title: 'AI Web Analyzer',
      description: 'AI tool for analyzing websites',
      longDescription: 'An automated web analysis tool that leverages AI to evaluate website performance, SEO metrics, and basic security headers.',
      tech: ['AI', 'Web', 'Python'],
      github: 'https://github.com/pradeepgobi/Ai-Web_ananlayer',
      category: 'web',
      image: '🌐'
    },
    {
      id: 3,
      title: 'Password Strengthener',
      description: 'Password security analyzer tool',
      longDescription: 'A client-side security tool that analyzes password entropy, checks against common vulnerabilities, and suggests cryptographic improvements.',
      tech: ['JavaScript', 'Security', 'React'],
      github: 'https://github.com/pradeepgobi/password_strengther',
      category: 'security',
      image: '🔐'
    }
  ];

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
          <AnimatedText text="Featured Projects" className="text-4xl md:text-5xl font-display font-bold text-text-main mb-4" />
          <div className="w-20 h-1 bg-brand-gold rounded-full"></div>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`project-filter-btn px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm ${
                filter === cat
                  ? 'bg-brand-blue text-white shadow-brand-blue/20 border border-brand-blue'
                  : 'bg-white/60 text-text-secondary hover:bg-white hover:text-text-main border border-white/80'
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
              className="project-card group cursor-pointer flex flex-col w-full transition-all duration-500 hover:-translate-y-2 hover:shadow-premium hover:shadow-brand-blue/10 hover:border-brand-blue/30 !bg-white/50"
            >
              {/* Project Image/Icon Area */}
              <div className="w-full h-44 bg-white/60 rounded-xl mb-5 flex items-center justify-center text-6xl group-hover:scale-[1.02] transition-transform duration-500 overflow-hidden relative border border-white/50">
                <div className="absolute inset-0 bg-brand-blue/5 z-10"></div>
                <div className="relative z-20 group-hover:-translate-y-2 transition-transform duration-500">{project.image}</div>
              </div>

              <div className="flex-1 flex flex-col items-center text-center">
                {/* Title — centred */}
                <h3 className="text-[1.05rem] font-bold text-text-main mb-2 font-display group-hover:text-brand-blue transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-text-secondary mb-5 flex-1 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5 justify-center">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-semibold bg-white text-text-secondary px-3 py-1 rounded-full border border-slate-200 shadow-sm">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 mt-auto w-full">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 flex items-center justify-center gap-2 bg-brand-deepBlue text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-brand-blue transition-colors shadow-sm"
                  >
                    <FaGithub /> Source Code
                  </a>
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
              className="bg-white/90 backdrop-blur-xl border border-white p-8 rounded-3xl max-w-lg w-full shadow-2xl transform transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="text-5xl">{selectedProject.image}</div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-brand-blue hover:text-white transition-colors"
                >
                  <FaTimes />
                </button>
              </div>

              <h2 className="text-2xl font-bold text-text-main mb-4 font-display">
                {selectedProject.title}
              </h2>
              <p className="text-text-secondary mb-6 leading-relaxed">
                {selectedProject.longDescription}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tech.map((t, i) => (
                  <span key={i} className="text-xs font-semibold bg-brand-blue/10 text-brand-blue px-3 py-1.5 rounded-full border border-brand-blue/20">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-brand-gradient text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all shadow-md hover:shadow-brand-blue/30"
              >
                <FaGithub /> View on GitHub
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Projects;