import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaStar, FaUsers, FaCalendar } from 'react-icons/fa';
import GlassCard from '../components/ui/GlassCard';
import AnimatedText from '../components/ui/AnimatedText';

const FeaturedProject = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Featured Project */}
        <GlassCard className="rounded-3xl overflow-hidden p-8 md:p-16 mb-20 border-accent/20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Icon/Illustration */}
            <div className="flex items-center justify-center">
              <div className="relative">
                {/* Lock Icon */}
                <div className="w-64 h-64 flex items-center justify-center bg-accent/5 rounded-full border border-accent/10">
                  <span className="text-9xl text-accent/60">🔐</span>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6">
              {/* Featured Badge */}
              <div className="inline-block">
                <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold border border-accent/20">
                  Featured Project
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-800 leading-tight">
                Security Audit Tool
              </h1>

              {/* Description */}
              <p className="text-lg text-slate-600 leading-relaxed">
                A comprehensive security audit tool that performs automated network scanning, 
                vulnerability assessment, and generates detailed reports. Built with Python and 
                integrated with popular security frameworks.
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3">
                {['Python', 'Nmap', 'Burp Suite', 'Flask'].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-white/60 border border-slate-200 text-slate-700 rounded-lg font-semibold text-sm shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="https://github.com/yourusername/security-audit-tool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20"
                >
                  <FaGithub className="text-xl" />
                  View Code
                </a>
                <a
                  href="https://yourproject-demo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-xl font-semibold hover:bg-accent-dark transition-colors shadow-lg shadow-accent/20"
                >
                  <FaExternalLinkAlt className="text-lg" />
                  Live Demo
                </a>
              </div>

              {/* Project Stats */}
              <div className="flex flex-wrap gap-6 pt-4 text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <FaStar className="text-amber-500" />
                  <span>150 stars</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUsers className="text-slate-400" />
                  <span>1 team</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendar className="text-slate-400" />
                  <span>2024</span>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Additional Projects Section */}
        <div className="mt-20">
          <div className="mb-12 text-center flex flex-col items-center">
            <AnimatedText text="More Projects" className="text-3xl font-display font-bold text-slate-800 mb-4" />
            <div className="w-16 h-1 bg-accent rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <GlassCard className="p-6 hover:-translate-y-2 hover:shadow-xl hover:border-accent/30 transition-all duration-300">
              <div className="text-5xl mb-4 text-slate-700">🌐</div>
              <h3 className="text-xl font-bold font-display text-slate-800 mb-3">
                Portfolio Website
              </h3>
              <p className="text-slate-600 mb-4">
                Modern responsive portfolio showcasing projects and skills with clean design.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-white/60 text-slate-700 rounded text-xs font-semibold border border-slate-200">React</span>
                <span className="px-3 py-1 bg-white/60 text-slate-700 rounded text-xs font-semibold border border-slate-200">Tailwind</span>
              </div>
            </GlassCard>

            {/* Project Card 2 */}
            <GlassCard className="p-6 hover:-translate-y-2 hover:shadow-xl hover:border-accent/30 transition-all duration-300">
              <div className="text-5xl mb-4 text-slate-700">🔐</div>
              <h3 className="text-xl font-bold font-display text-slate-800 mb-3">
                Penetration Testing Suite
              </h3>
              <p className="text-slate-600 mb-4">
                Advanced VAPT tools for comprehensive security assessment and reporting.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-white/60 text-slate-700 rounded text-xs font-semibold border border-slate-200">Kali Linux</span>
                <span className="px-3 py-1 bg-white/60 text-slate-700 rounded text-xs font-semibold border border-slate-200">Python</span>
              </div>
            </GlassCard>

            {/* Project Card 3 */}
            <GlassCard className="p-6 hover:-translate-y-2 hover:shadow-xl hover:border-accent/30 transition-all duration-300">
              <div className="text-5xl mb-4 text-slate-700">📱</div>
              <h3 className="text-xl font-bold font-display text-slate-800 mb-3">
                Mobile Security App
              </h3>
              <p className="text-slate-600 mb-4">
                Cross-platform mobile application for security monitoring and alerts.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-white/60 text-slate-700 rounded text-xs font-semibold border border-slate-200">Flutter</span>
                <span className="px-3 py-1 bg-white/60 text-slate-700 rounded text-xs font-semibold border border-slate-200">Firebase</span>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
