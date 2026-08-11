import React, { useEffect, useRef, useState } from 'react';
import { FaArrowRight, FaDownload, FaCheckCircle, FaTrophy, FaCrosshairs, FaClock, FaMouse } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';
import { MdSecurity, MdVerified } from 'react-icons/md';
import { BsShieldFillCheck } from 'react-icons/bs';
import gsap from 'gsap';

const Hero = () => {
  const containerRef = useRef(null);
  
  // Typewriter State
  const [hiText, setHiText] = useState('');
  const [nameText, setNameText] = useState('');

  useEffect(() => {
    // Typewriter logic
    const hi = "Hi, I'm";
    const name = "PRADEEP.G";
    let i = 0;
    
    const startTimer = setTimeout(() => {
      const hiInterval = setInterval(() => {
        setHiText(hi.substring(0, i + 1));
        i++;
        if (i === hi.length) {
          clearInterval(hiInterval);
          let j = 0;
          setTimeout(() => {
            const nameInterval = setInterval(() => {
               setNameText(name.substring(0, j + 1));
               j++;
               if (j === name.length) {
                 clearInterval(nameInterval);
               }
            }, 120);
          }, 300);
        }
      }, 90);
      return () => clearInterval(hiInterval);
    }, 600);

    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo('.hero-anim-eyebrow', 
        { opacity: 0, y: -10 }, 
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      )
      .fromTo('.hero-anim-title', 
        { opacity: 0, y: 15 }, 
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
        "-=0.5"
      )
      .fromTo('.hero-anim-desc',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 1.8 },
        "-=0.4"
      )
      .fromTo('.hero-anim-btn',
        { opacity: 0, scale: 0.95, y: 15 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'back.out(1.5)' },
        "-=0.6"
      )
      .fromTo('.hero-anim-visual',
        { opacity: 0, scale: 0.95, filter: 'blur(10px)' },
        { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.2, ease: 'power2.out' },
        "-=0.8"
      )
      .fromTo('.hero-anim-stats',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'back.out(1.2)' },
        "-=0.6"
      );

      // Subtle float animation for visual elements
      gsap.to('.hero-float-badge', {
        y: -8, duration: 3.5, repeat: -1, yoyo: true, ease: 'sine.inOut'
      });

      // Mouse Parallax for desktop
      const handleMouseMove = (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 15;
        const y = (e.clientY / window.innerHeight - 0.5) * 15;
        
        gsap.to('.parallax-layer-1', { x: x * -1, y: y * -1, duration: 1, ease: 'power1.out' });
        gsap.to('.parallax-layer-2', { x: x * 1.5, y: y * 1.5, duration: 1, ease: 'power1.out' });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);

    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  const renderNameText = () => {
    const pra = nameText.substring(0, 3);
    const deep = nameText.substring(3);
    return (
      <>
        <span className="text-[#111827] font-black tracking-tight">{pra}</span>
        {deep && (
          <span className="text-[#F5A623] font-black tracking-tight">
            {deep}
          </span>
        )}
        <span className="inline-block w-[0.1em] h-[0.9em] bg-[#111827] ml-1 animate-pulse align-middle shadow-lg"></span>
      </>
    );
  };

  return (
    <div className="min-h-[95vh] pt-28 pb-20 relative flex flex-col justify-center overflow-hidden" ref={containerRef}>

      {/* ── CORNER GLASS ACCENTS ─────────────────────────────────────────── */}
      {/* Top-left corner */}
      <div className="fixed top-0 left-0 w-48 h-48 pointer-events-none z-0"
        style={{
          background: 'linear-gradient(135deg, rgba(99,102,241,0.18) 0%, transparent 70%)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          borderRight: '1px solid rgba(255,255,255,0.5)',
          borderBottom: '1px solid rgba(255,255,255,0.5)',
          borderBottomRightRadius: '3rem',
        }}
      />
      {/* Top-right corner */}
      <div className="fixed top-0 right-0 w-48 h-48 pointer-events-none z-0"
        style={{
          background: 'linear-gradient(225deg, rgba(245,166,35,0.18) 0%, transparent 70%)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          borderLeft: '1px solid rgba(255,255,255,0.5)',
          borderBottom: '1px solid rgba(255,255,255,0.5)',
          borderBottomLeftRadius: '3rem',
        }}
      />
      {/* Bottom-left corner */}
      <div className="fixed bottom-0 left-0 w-48 h-48 pointer-events-none z-0"
        style={{
          background: 'linear-gradient(45deg, rgba(6,182,212,0.18) 0%, transparent 70%)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          borderRight: '1px solid rgba(255,255,255,0.5)',
          borderTop: '1px solid rgba(255,255,255,0.5)',
          borderTopRightRadius: '3rem',
        }}
      />
      {/* Bottom-right corner */}
      <div className="fixed bottom-0 right-0 w-48 h-48 pointer-events-none z-0"
        style={{
          background: 'linear-gradient(315deg, rgba(168,85,247,0.18) 0%, transparent 70%)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          borderLeft: '1px solid rgba(255,255,255,0.5)',
          borderTop: '1px solid rgba(255,255,255,0.5)',
          borderTopLeftRadius: '3rem',
        }}
      />

      <div className="container mx-auto px-6 max-w-[1150px] relative z-10">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6 lg:gap-4 items-center">
          
          {/* LEFT COLUMN: Content */}
          <div className="max-w-2xl pr-4 mt-8 lg:mt-0">
            
            {/* Eyebrow */}
            <div className="hero-anim-eyebrow flex items-center gap-2.5 mb-5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F5A623] shadow-[0_0_8px_#f7b733]"></span>
              <span className="text-[#1a2a6c] font-bold tracking-[0.15em] text-[11px] uppercase">Welcome To My Portfolio</span>
            </div>
            
            {/* Headline */}
            <h1 className="font-display font-extrabold leading-[1.05] mb-5 min-h-[140px] sm:min-h-[180px] lg:min-h-[220px]">
              <div className="text-4xl sm:text-5xl lg:text-[3.2rem] text-[#111827] tracking-tight mb-2 h-[1.2em] font-black">
                {hiText}
              </div>
              <div className="text-6xl sm:text-7xl lg:text-[4.8rem] pb-1 uppercase h-[1.2em]">
                {renderNameText()}
              </div>
            </h1>

            {/* Title */}
            <h2 className="hero-anim-desc text-lg sm:text-xl font-display font-bold text-[#111827] mb-4 flex items-center flex-wrap gap-x-3">
              Cybersecurity Engineer <span className="text-slate-300 font-light">|</span> Developer
            </h2>

            {/* Description */}
            <p className="hero-anim-desc text-sm sm:text-base text-slate-500 mb-9 leading-relaxed max-w-md font-medium tracking-wide">
              Specializing in Network Security and VAPT. I build and break systems to ensure they are robust, secure, and ready for real-world challenges.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a href="#projects" className="hero-anim-btn group relative flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-[#1d4ed8] via-[#3b82f6] to-[#d97706] rounded-full text-white font-bold text-sm shadow-[0_10px_20px_rgba(37,99,235,0.2)] hover:shadow-[0_15px_30px_rgba(217,119,6,0.3)] transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <span className="relative z-10 flex items-center">
                  View Projects <FaArrowRight className="ml-2 text-[11px] group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              
              <a href="/resume" className="hero-anim-btn group flex items-center justify-center px-7 py-3.5 bg-white/90 backdrop-blur-md rounded-full text-[#111827] font-bold text-sm shadow-[0_10px_20px_rgba(20,43,82,0.05)] hover:bg-white hover:shadow-[0_15px_30px_rgba(20,43,82,0.1)] transition-all duration-300 hover:-translate-y-1 border border-slate-100">
                Download Resume <FaDownload className="ml-2 text-[11px] text-[#1d4ed8] group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: Visual */}
          <div className="hero-anim-visual relative flex items-center justify-center h-[500px] parallax-layer-1 mt-10 lg:mt-0">
            
            {/* FLAT CONCENTRIC ORBIT */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] pointer-events-none flex items-center justify-center z-0">
              
              {/* Core background glow */}
              <div className="absolute w-[60%] h-[60%] bg-blue-100/40 rounded-full blur-[60px]"></div>

              {/* Rings */}
              <div className="absolute inset-0 rounded-full border-[1.5px] border-dashed border-blue-300/30 animate-[spin_60s_linear_infinite]"></div>
              
              <div className="absolute inset-6 rounded-full border-[1.5px] border-blue-400/20"></div>
              
              {/* Highlighted Gradient Ring */}
              <div className="absolute inset-12 rounded-full border-[1.5px] border-transparent border-l-[#F5A623]/60 border-r-[#3b82f6]/60 border-t-[#3b82f6]/20 animate-[spin_40s_linear_infinite]"></div>
              
              <div className="absolute inset-20 rounded-full border-[1.5px] border-blue-400/15"></div>
              
              <div className="absolute inset-28 rounded-full border-[1.5px] border-transparent border-t-[#3b82f6]/50 border-b-[#F5A623]/20 animate-[spin_30s_linear_infinite_reverse]"></div>

              {/* Glowing Nodes */}
              {/* Top Left Blue Node */}
              <div className="absolute top-[12%] left-[22%] w-3.5 h-3.5 bg-[#3b82f6] rounded-full shadow-[0_0_15px_#3b82f6] animate-pulse"></div>
              {/* Center Left Blue Node */}
              <div className="absolute top-[45%] left-[8%] w-2.5 h-2.5 bg-[#60a5fa] rounded-full shadow-[0_0_10px_#60a5fa]"></div>
              {/* Bottom Right Gold Node */}
              <div className="absolute bottom-[20%] right-[18%] w-3 h-3 bg-[#F5A623] rounded-full shadow-[0_0_15px_#F5A623] animate-pulse"></div>
            </div>

            {/* Profile Image — clipped inside orbit circle */}
            <div className="relative w-[380px] h-[380px] rounded-full overflow-hidden parallax-layer-2 group z-20 flex items-end justify-center">
              
              {/* Subtle inner glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-blue-50/20 to-blue-100/30 pointer-events-none z-20"></div>

              <img 
                src="/pradeep.png" 
                alt="Pradeep" 
                className="w-full h-[115%] object-cover object-top relative z-10 transition-transform duration-700 group-hover:scale-[1.03] mix-blend-multiply"
                style={{ 
                  WebkitMaskImage: 'radial-gradient(circle at 50% 40%, rgba(0,0,0,1) 55%, rgba(0,0,0,0.85) 80%, rgba(0,0,0,0) 100%)',
                  maskImage: 'radial-gradient(circle at 50% 40%, rgba(0,0,0,1) 55%, rgba(0,0,0,0.85) 80%, rgba(0,0,0,0) 100%)'
                }}
              />
              
            </div>

            {/* Premium Floating Cybersecurity Badge */}
            <div className="hero-float-badge absolute top-[22%] -right-2 lg:-right-8 bg-white/95 backdrop-blur-md border border-white shadow-[0_15px_30px_rgba(20,43,82,0.08)] rounded-xl px-4 py-2.5 flex items-center gap-3 z-30 parallax-layer-2">
              <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-[#F5A623] text-lg shadow-sm">
                <BsShieldFillCheck />
              </div>
              <div className="pr-1">
                <p className="font-display font-bold text-[#111827] text-[12px] leading-tight tracking-tight">Cybersecurity</p>
                <p className="text-slate-500 text-[10px] font-medium">Specialist</p>
              </div>
              <div className="w-4 h-4 bg-[#1d4ed8] rounded-full flex items-center justify-center ml-1">
                <FaCheckCircle className="text-white text-[10px]" />
              </div>
            </div>

          </div>
        </div>{/* end grid */}
      </div>

      {/* OVERLAPPING PREMIUM STATS CARD */}
      <div className="container mx-auto px-6 max-w-5xl relative z-20 mt-12 lg:-mt-2">
        <div className="hero-anim-stats bg-white border border-white shadow-[0_15px_40px_rgba(20,43,82,0.04)] w-full px-8 py-6 md:py-8 flex flex-row flex-wrap md:flex-nowrap items-center justify-between gap-4 rounded-3xl group">
          
          <div className="flex flex-col items-center text-center w-[40%] md:w-full hover:-translate-y-1 transition-transform duration-300">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-2.5">
               <BsShieldFillCheck className="text-xl text-[#3b82f6]" />
            </div>
            <h3 className="font-display font-bold text-[#111827] text-2xl mb-1">2+</h3>
            <p className="text-[#3b82f6]/80 text-[10px] font-bold uppercase tracking-[0.12em]">Years Learning</p>
          </div>

          <div className="hidden md:block w-px h-16 bg-slate-100"></div>

          <div className="flex flex-col items-center text-center w-[40%] md:w-full hover:-translate-y-1 transition-transform duration-300">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-2.5">
               <BiCodeAlt className="text-xl text-[#3b82f6]" />
            </div>
            <h3 className="font-display font-bold text-[#111827] text-2xl mb-1">3</h3>
            <p className="text-[#3b82f6]/80 text-[10px] font-bold uppercase tracking-[0.12em]">Projects</p>
          </div>

          <div className="hidden md:block w-px h-16 bg-slate-100"></div>

          <div className="flex flex-col items-center text-center w-[40%] md:w-full hover:-translate-y-1 transition-transform duration-300">
             <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center mb-2.5">
               <FaTrophy className="text-lg text-[#F5A623]" />
             </div>
            <h3 className="font-display font-bold text-[#111827] text-2xl mb-1">100+</h3>
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.12em]">CTF Challenges</p>
          </div>

          <div className="hidden md:block w-px h-16 bg-slate-100"></div>

          <div className="flex flex-col items-center text-center w-[40%] md:w-full hover:-translate-y-1 transition-transform duration-300">
            <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center mb-2.5">
               <FaCrosshairs className="text-lg text-[#F5A623]" />
            </div>
            <h3 className="font-display font-bold text-[#111827] text-2xl mb-1">Focus</h3>
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.12em]">Security</p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Hero;
