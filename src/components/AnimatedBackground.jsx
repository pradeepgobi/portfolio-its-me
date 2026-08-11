import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AnimatedBackground = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Mouse Parallax for different background layers
      const handleMouseMove = (e) => {
        const x = (e.clientX / window.innerWidth - 0.5);
        const y = (e.clientY / window.innerHeight - 0.5);
        
        gsap.to('.bg-parallax-1', { x: x * -15, y: y * -15, duration: 1.5, ease: 'power1.out' });
        gsap.to('.bg-parallax-2', { x: x * 25, y: y * 25, duration: 1.5, ease: 'power1.out' });
        gsap.to('.bg-parallax-3', { x: x * -35, y: y * -35, duration: 1.5, ease: 'power1.out' });
        
        // Very slight shift for the orbit
        gsap.to('.bg-orbit', { 
          rotationX: 65 + (y * 5), 
          rotationY: 10 + (x * 5), 
          duration: 2, 
          ease: 'power1.out' 
        });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, bgRef);

    return () => ctx.revert();
  }, []);

  // Generate some random floating particles
  const particles = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
    isGold: Math.random() > 0.7
  }));

  return (
    <div ref={bgRef} className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#F8FAFC]">
      
      {/* LAYER 1 & 2: BASE + SOFT GRADIENT ATMOSPHERE (Corner Glows) */}
      <div className="absolute top-[-15%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-blue/10 blur-[130px]"></div>
      <div className="absolute top-[-5%] right-[-5%] w-[40%] h-[40%] rounded-full bg-blue-300/10 blur-[100px]"></div>
      <div className="absolute bottom-[-15%] right-[-10%] w-[60%] h-[60%] rounded-full bg-brand-gold/10 blur-[150px]"></div>
      <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] rounded-full bg-slate-400/5 blur-[120px]"></div>

      {/* Profile area ambient glow */}
      <div className="absolute top-[20%] right-[10%] w-[45%] h-[65%] rounded-full bg-brand-blue/5 blur-[140px]"></div>

      {/* LAYER 3: CYBERSECURITY GRID */}
      <div className="absolute inset-0 bg-parallax-1 opacity-[0.03]" style={{
        backgroundImage: `
          linear-gradient(rgba(30, 58, 138, 0.8) 1px, transparent 1px),
          linear-gradient(90deg, rgba(30, 58, 138, 0.8) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 75%)'
      }}></div>

      {/* LAYER 4: DIGITAL CIRCUIT & SECURITY SYMBOLS */}
      <div className="absolute inset-0 opacity-[0.04] bg-parallax-2">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          
          {/* Abstract Shield Outline (Top Left Area) */}
          <g transform="translate(150, 150) scale(0.6)" stroke="#1e3a8a" strokeWidth="3" fill="none">
            <path d="M 100 0 L 200 40 L 200 140 C 200 220 100 280 100 280 C 100 280 0 220 0 140 L 0 40 Z" strokeDasharray="10 6" />
            <path d="M 100 40 L 100 240" strokeWidth="1" opacity="0.5" />
            <path d="M 40 140 L 160 140" strokeWidth="1" opacity="0.5" />
          </g>
          
          {/* Circuit / Network Lines (Spanning across) */}
          <path d="M 0 350 L 200 350 L 300 250 L 500 250 L 550 300 L 800 300" fill="none" stroke="#1e3a8a" strokeWidth="1.5" />
          <circle cx="200" cy="350" r="4" fill="#1e3a8a" />
          <circle cx="300" cy="250" r="4" fill="#f5a623" />
          <circle cx="500" cy="250" r="4" fill="#1e3a8a" />
          <circle cx="550" cy="300" r="4" fill="#1e3a8a" />
          <circle cx="800" cy="300" r="4" fill="#f5a623" />
          
          {/* Hexagonal Pattern (Bottom Left Area) */}
          <g transform="translate(80, 650) scale(0.4)" stroke="#1e3a8a" strokeWidth="3" fill="none">
            <polygon points="50,0 100,25 100,75 50,100 0,75 0,25" />
            <polygon points="100,75 150,100 150,150 100,175 50,150 50,100" />
            <polygon points="150,25 200,50 200,100 150,125 100,100 100,50" />
            <polygon points="200,75 250,100 250,150 200,175 150,150 150,100" />
          </g>

          {/* Network Nodes (Right Side background) */}
          <g stroke="#1e3a8a" strokeWidth="1" opacity="0.8">
            <path d="M 1100 200 L 1300 100 L 1400 250 L 1250 400 Z" fill="none" />
            <path d="M 1300 100 L 1250 400" fill="none" strokeDasharray="4 4" />
          </g>
          <circle cx="1100" cy="200" r="5" fill="#f5a623" opacity="0.8" />
          <circle cx="1300" cy="100" r="5" fill="#1e3a8a" opacity="0.8" />
          <circle cx="1400" cy="250" r="5" fill="#1e3a8a" opacity="0.8" />
          <circle cx="1250" cy="400" r="5" fill="#f5a623" opacity="0.8" />

        </svg>
      </div>

      {/* LAYER 5: (Removed to be placed directly in Hero.jsx around the profile) */}

      {/* LAYER 6: FLOATING PARTICLES */}
      <div className="absolute inset-0 bg-parallax-3">
        {particles.map(p => (
          <div 
            key={p.id}
            className={`absolute rounded-full blur-[1px] ${p.isGold ? 'bg-brand-gold/30' : 'bg-brand-blue/30'} animate-blob`}
            style={{
              width: p.size,
              height: p.size,
              top: `${p.y}%`,
              left: `${p.x}%`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          ></div>
        ))}
      </div>

      {/* EXACT 3D SPHERES FROM PREVIOUS SPEC */}
      <div className="absolute top-[20%] left-[10%] w-[90px] h-[90px] rounded-full animate-bounce bg-parallax-2" style={{ animationDuration: '4s' }}>
        <div className="w-full h-full rounded-full shadow-2xl" style={{
          background: 'radial-gradient(circle at 30% 30%, #ffffff, #60a5fa 50%, #1e3a8a 100%)',
          boxShadow: '0 10px 20px rgba(30, 58, 138, 0.2), inset -5px -5px 15px rgba(26, 42, 108, 0.4)'
        }}></div>
      </div>

      <div className="absolute bottom-[10%] right-[8%] w-[110px] h-[110px] rounded-full animate-bounce bg-parallax-2" style={{ animationDuration: '5s', animationDelay: '1s' }}>
        <div className="w-full h-full rounded-full shadow-2xl" style={{
          background: 'radial-gradient(circle at 30% 30%, #ffffff, #f7b733 50%, #d97706 100%)',
          boxShadow: '0 10px 20px rgba(245, 166, 35, 0.2), inset -5px -5px 15px rgba(217, 119, 6, 0.4)'
        }}></div>
      </div>
      
    </div>
  );
};

export default AnimatedBackground;