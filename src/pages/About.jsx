import React, { useEffect, useRef } from 'react';
import { FaGraduationCap, FaHeart, FaBullseye, FaSchool } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GlassCard from '../components/ui/GlassCard';
import AnimatedText from '../components/ui/AnimatedText';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal entire about section content
      gsap.fromTo('.about-card',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out', scrollTrigger: { trigger: '.about-grid', start: 'top 80%' } }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16 relative z-10" ref={containerRef}>
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3368A0]"></span>
            <span className="text-[#3368A0] font-bold tracking-widest text-xs uppercase">About Me</span>
          </div>
          <AnimatedText text="Get To Know Me" className="text-4xl md:text-5xl font-display font-bold text-[#254F7A] mb-6" />
        </div>

        {/* Main Content Layout */}
        <div className="about-grid grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Text Description */}
          <GlassCard className="about-card lg:col-span-5 p-8 md:p-10 !bg-white/60">
            <p className="text-lg text-[#3368A0] leading-relaxed mb-6 font-medium">
              I am a passionate <span className="text-[#254F7A] font-bold">Cybersecurity Engineer</span> dedicated to uncovering vulnerabilities before malicious actors do. With a strong foundation in network security and ethical hacking, I approach problems with an attacker's mindset but a defender's goal.
            </p>
            <p className="text-lg text-[#3368A0] leading-relaxed font-medium mb-6">
              Beyond security, I enjoy building modern, robust web applications. I believe that understanding development deeply is the key to securing it effectively. I am constantly learning, adapting, and pushing my boundaries.
            </p>
            {/* GitHub Portfolio Link */}
            <a
              href="https://github.com/pradeepgobi/portfolio-its-me"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#254F7A] text-white text-sm font-bold rounded-full hover:bg-[#3368A0] transition-colors shadow-md"
            >
              <FaGraduationCap className="text-base" style={{ display: 'none' }} />
              <svg style={{ width: 16, height: 16, flexShrink: 0 }} fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/></svg>
              View Portfolio on GitHub
            </a>
          </GlassCard>

          {/* Info Cards */}
          <div className="about-card lg:col-span-7 flex flex-col gap-6">
            
            {/* Education — College */}
            <GlassCard className="p-6 flex items-start gap-5 hover:-translate-y-1 transition-transform group">
              <div className="w-12 h-12 rounded-xl bg-[#3368A0]/10 flex items-center justify-center text-[#3368A0] shrink-0 group-hover:scale-110 transition-transform">
                <FaGraduationCap className="text-2xl" />
              </div>
              <div>
                <h3 className="font-display font-bold text-[#254F7A] text-xl mb-1">College</h3>
                <p className="text-[#3368A0] font-semibold">B.Tech Information Technology</p>
                <p className="text-[#3368A0] text-sm font-bold mt-0.5">IV Year — Currently Pursuing</p>
                <p className="text-sm text-[#3368A0] mt-1 opacity-80">Kongunadu College of Engineering and Technology</p>
                <p className="text-xs text-[#3368A0] mt-0.5 opacity-70">Batch: 2023 – 2027 &nbsp;·&nbsp; Focus: Network Security & Application Security</p>
                <p className="text-xs font-bold text-[#254F7A] mt-1">CGPA: 6.38</p>
              </div>
            </GlassCard>

            {/* Education — School */}
            <GlassCard className="p-6 flex items-start gap-5 hover:-translate-y-1 transition-transform group">
              <div className="w-12 h-12 rounded-xl bg-[#66A3BF]/15 flex items-center justify-center text-[#3368A0] shrink-0 group-hover:scale-110 transition-transform">
                <FaSchool className="text-2xl" />
              </div>
              <div>
                <h3 className="font-display font-bold text-[#254F7A] text-xl mb-1">School</h3>
                <p className="text-[#3368A0] font-semibold">Higher Secondary Education</p>
                <p className="text-[#3368A0] text-sm font-bold mt-0.5">Completed — 2022–23 Batch</p>
                <p className="text-sm text-[#3368A0] mt-1 opacity-80">Bharathi Higher Secondary School</p>
                <p className="text-xs font-bold text-[#254F7A] mt-1">Percentage: 75%</p>
              </div>
            </GlassCard>

            {/* Passion */}
            <GlassCard className="p-6 flex items-start gap-5 hover:-translate-y-1 transition-transform group">
              <div className="w-12 h-12 rounded-xl bg-[#66A3BF]/15 flex items-center justify-center text-[#3368A0] shrink-0 group-hover:scale-110 transition-transform">
                <FaHeart className="text-xl" />
              </div>
              <div>
                <h3 className="font-display font-bold text-[#254F7A] text-xl mb-1">Passion</h3>
                <p className="text-[#3368A0] font-medium">Cybersecurity & Ethical Hacking</p>
                <p className="text-sm text-[#3368A0] mt-1 opacity-80">Playing CTFs, exploring new vulnerabilities, and learning about infrastructure defense.</p>
              </div>
            </GlassCard>

            {/* Goal */}
            <GlassCard className="p-6 flex items-start gap-5 hover:-translate-y-1 transition-transform group">
              <div className="w-12 h-12 rounded-xl bg-[#3368A0]/10 flex items-center justify-center text-[#254F7A] shrink-0 group-hover:scale-110 transition-transform">
                <FaBullseye className="text-xl" />
              </div>
              <div>
                <h3 className="font-display font-bold text-[#254F7A] text-xl mb-1">Goal</h3>
                <p className="text-[#3368A0] font-medium">Building a Secure Digital Future</p>
                <p className="text-sm text-[#3368A0] mt-1 opacity-80">My long-term aim is to become a top-tier security researcher and protect critical systems.</p>
              </div>
            </GlassCard>

          </div>

        </div>
      </div>
    </div>
  );
};

export default About;