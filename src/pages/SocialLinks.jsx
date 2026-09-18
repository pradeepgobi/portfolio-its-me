import React, { useEffect, useRef } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import gsap from 'gsap';
import GlassCard from '../components/ui/GlassCard';
import AnimatedText from '../components/ui/AnimatedText';

const SocialLinks = () => {
  const containerRef = useRef(null);

  const socialLinks = [
    {
      id: 1,
      name: 'LinkedIn',
      icon: FaLinkedin,
      username: '@pradeep-gobi-899005330',
      link: 'https://linkedin.com/in/pradeep-gobi-899005330',
      color: 'bg-[#3368A0]/10 text-[#3368A0] border-[#3368A0]/25',
      hoverBorder: 'hover:border-[#3368A0]/50'
    },
    {
      id: 2,
      name: 'GitHub',
      icon: FaGithub,
      username: '@PradeepGobi',
      link: 'https://github.com/pradeepgobi/portfolio-its-me',
      color: 'bg-[#3368A0]/10 text-[#254F7A] border-brand-deepBlue/20',
      hoverBorder: 'hover:border-brand-deepBlue/50'
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.social-card',
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.15, ease: 'back.out(1.5)' }
      );
      
      gsap.fromTo('.social-cta',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: 'power2.out' }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16 relative z-10 flex flex-col justify-center" ref={containerRef}>
      <div className="container mx-auto px-6 max-w-4xl">

        <div className="mb-12 text-center flex flex-col items-center">
          <AnimatedText text="Let's Connect" className="text-4xl md:text-5xl font-display font-bold text-[#254F7A] mb-4" />
          <div className="w-20 h-1 bg-brand-gold rounded-full"></div>
        </div>

        {/* Links Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <GlassCard className={`social-card flex items-center gap-6 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-premium !bg-white/60 ${social.hoverBorder}`}>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 border ${social.color}`}>
                    <Icon />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#254F7A] font-display mb-1 group-hover:text-[#3368A0] transition-colors">
                      {social.name}
                    </h3>
                    <p className="text-sm text-[#3368A0] font-medium">
                      {social.username}
                    </p>
                  </div>
                </GlassCard>
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <div className="social-cta flex justify-center">
          <GlassCard className="p-8 max-w-xl w-full text-center flex flex-col items-center !bg-white/60">
            <div className="w-16 h-16 rounded-full bg-[#66A3BF]/15 border border-brand-gold/20 text-[#3368A0] flex items-center justify-center text-2xl mb-4">
              <FaEnvelope />
            </div>
            <h3 className="text-2xl font-bold text-[#254F7A] font-display mb-2">Open for collaboration</h3>
            <p className="text-[#3368A0] mb-8 leading-relaxed font-medium">
              I'm always interested in hearing about new projects, opportunities, or just having a chat about cybersecurity and tech.
            </p>
            <a
              href="mailto:pradeepgobi8@gmail.com"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#3368A0] text-white rounded-full font-semibold hover:shadow-premium transition-all hover:scale-105 hover:-translate-y-1"
            >
              Say Hello
            </a>
          </GlassCard>
        </div>

      </div>
    </div>
  );
};

export default SocialLinks;