import React, { useEffect, useRef } from 'react';
import { FaDownload, FaAward } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import GlassCard from '../components/ui/GlassCard';
import AnimatedText from '../components/ui/AnimatedText';

const Resume = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.resume-element',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/pradeep.pdf';
    link.download = 'Pradeep_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 relative z-10" ref={containerRef}>
      <div className="container mx-auto px-6 max-w-4xl">

        <div className="mb-12 text-center flex flex-col items-center">
          <AnimatedText text="Curriculum Vitae" className="text-4xl md:text-5xl font-display font-bold text-text-main mb-4" />
          <div className="w-20 h-1 bg-brand-gold rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          
          {/* Actions Column */}
          <div className="md:col-span-4 flex flex-col gap-4 resume-element">
            <GlassCard className="p-8 text-center flex flex-col items-center gap-6 !bg-white/60">
              <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue text-2xl mb-2 border border-brand-blue/20">
                <FaDownload />
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-main mb-2 font-display">Download CV</h3>
                <p className="text-sm text-text-secondary mb-6 font-medium">Get a copy of my full resume in PDF format for offline review.</p>
              </div>
              <button
                onClick={handleDownload}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-brand-gradient text-white rounded-xl font-semibold hover:shadow-brand-blue/30 transition-all shadow-premium hover:-translate-y-1"
              >
                Download PDF
              </button>
            </GlassCard>

            <GlassCard className="p-6 !bg-white/60">
              <button
                onClick={() => navigate('/certifications')}
                className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-white/80 border border-brand-blue/20 text-brand-deepBlue rounded-xl font-semibold hover:bg-white transition-colors shadow-sm"
              >
                <FaAward className="text-brand-brightGold text-lg" />
                View Certifications
              </button>
            </GlassCard>
          </div>

          {/* Preview Column */}
          <div className="md:col-span-8 resume-element">
            <GlassCard className="p-2 sm:p-4 !bg-white/40">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-white/80">
                <div className="bg-slate-50 border-b border-slate-100 px-4 py-3 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="ml-4 text-xs font-semibold text-text-secondary font-mono">pradeep_resume.pdf</span>
                </div>
                <div className="p-4">
                  <img
                    src="/pradeep-page1.png"
                    alt="Resume Preview"
                    className="w-full h-auto rounded-lg border border-slate-100"
                  />
                </div>
              </div>
              <p className="text-center text-text-secondary text-xs mt-4 font-medium">
                Document Preview (Page 1)
              </p>
            </GlassCard>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Resume;