import React, { useEffect, useRef } from 'react';
import { FaDownload, FaExternalLinkAlt, FaAward, FaFilePdf, FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import GlassCard from '../components/ui/GlassCard';
import AnimatedText from '../components/ui/AnimatedText';

const Resume = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.resume-element',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/pradeep.pdf';
    link.download = 'Pradeep_G_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 relative z-10" ref={containerRef}>
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Header */}
        <div className="mb-10 text-center flex flex-col items-center resume-element">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 border border-[#3368A0]/20 mb-3 shadow-sm">
            <FaFilePdf className="text-red-500 text-sm" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#254F7A]">
              Curriculum Vitae
            </span>
          </div>
          <AnimatedText
            text="My Resume"
            className="text-4xl md:text-5xl font-display font-bold text-[#254F7A] mb-4"
          />
          <div className="w-20 h-1 bg-[#3368A0] rounded-full mb-6"></div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-7 py-3 bg-[#3368A0] hover:bg-[#254F7A] text-white rounded-full font-bold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <FaDownload /> Download Resume
            </button>
            <a
              href="/pradeep.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3 bg-white/90 border border-[#3368A0]/30 text-[#254F7A] rounded-full font-bold text-sm shadow-md hover:bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <FaExternalLinkAlt className="text-xs" /> Open in New Tab
            </a>
            <button
              onClick={() => navigate('/certifications')}
              className="flex items-center gap-2 px-7 py-3 bg-white/80 border border-[#3368A0]/20 text-[#254F7A] rounded-full font-bold text-sm shadow-sm hover:bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <FaAward className="text-amber-500 text-base" /> View Certifications (7)
            </button>
          </div>
        </div>

        {/* ── LIVE PDF PREVIEW ───────────────────────────────────────────── */}
        <div className="resume-element">
          <GlassCard className="!bg-white/80 p-3 sm:p-4 shadow-2xl border border-white/80 rounded-2xl overflow-hidden">

            {/* Window bar */}
            <div className="bg-[#254F7A] text-white rounded-t-xl px-4 py-3 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400 inline-block shadow-sm"></span>
                <span className="w-3 h-3 rounded-full bg-amber-400 inline-block shadow-sm"></span>
                <span className="w-3 h-3 rounded-full bg-green-400 inline-block shadow-sm"></span>
                <span className="ml-3 text-xs font-mono text-white/90 font-semibold tracking-wide">
                  pradeep.pdf
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <a
                  href="/pradeep.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white/90 hover:text-white flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-all font-semibold"
                  title="Open Fullscreen"
                >
                  <FaExternalLinkAlt className="text-[11px]" />
                  <span className="hidden sm:inline">Fullscreen</span>
                </a>
                <button
                  onClick={handleDownload}
                  className="text-xs text-[#254F7A] bg-[#F2EFE7] hover:bg-white flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg shadow-sm transition-all font-bold"
                  title="Download File"
                >
                  <FaDownload className="text-[11px]" />
                  <span>Download</span>
                </button>
              </div>
            </div>

            {/* Embedded PDF Viewer */}
            <div className="w-full bg-slate-100 rounded-b-xl overflow-hidden border border-slate-200 border-t-0" style={{ minHeight: '820px' }}>
              <iframe
                src="/pradeep.pdf#view=FitH&toolbar=1"
                title="Pradeep G Resume Preview"
                className="w-full h-[850px] md:h-[1050px] border-0"
              />
            </div>

            {/* Mobile Fallback Helper */}
            <div className="text-center mt-3 text-xs text-slate-500 py-1 flex items-center justify-center gap-2">
              <span>Having trouble viewing the PDF preview?</span>
              <a
                href="/pradeep.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-[#3368A0] font-bold underline hover:text-[#254F7A]"
              >
                Click here to open directly
              </a>
            </div>

          </GlassCard>
        </div>

        {/* Bottom Actions */}
        <div className="text-center mt-10 resume-element flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#3368A0] hover:bg-[#254F7A] text-white rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            <FaDownload /> Download Full PDF
          </button>
          <a
            href="/pradeep.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/90 border border-[#3368A0]/30 text-[#254F7A] rounded-full font-bold shadow-md hover:bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            <FaEye /> Full Preview in New Tab
          </a>
        </div>

      </div>
    </div>
  );
};

export default Resume;