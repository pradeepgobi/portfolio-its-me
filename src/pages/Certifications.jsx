import React, { useState, useEffect, useRef } from 'react';
import { FaArrowLeft, FaCalendar, FaAward } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import GlassCard from '../components/ui/GlassCard';
import AnimatedText from '../components/ui/AnimatedText';

const Certifications = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const containerRef = useRef(null);

  const certifications = [
    {
      id: 1,
      title: 'Ethical Hacker',
      issuer: 'Cisco Networking Academy',
      date: 'Jan 18, 2026',
      description: 'Ethical hacking & penetration testing methodology',
      skills: ['Penetration Testing', 'Vulnerability Scanning', 'Social Engineering'],
      image: '/cert/1.png',
      certificateId: 'Verified - Cisco Networking Academy'
    },
    {
      id: 2,
      title: 'Front End Web Developer',
      issuer: 'Infosys Springboard',
      date: 'June 28, 2025',
      description: 'Modern web development with React & JavaScript',
      skills: ['HTML & CSS', 'JavaScript', 'React'],
      image: '/cert/3.png',
      certificateId: 'Verified - https://verify.onwingspan.com'
    },
    {
      id: 3,
      title: 'Networking Basics',
      issuer: 'Cisco Networking Academy',
      date: 'Feb 21, 2026',
      description: 'Network fundamentals & infrastructure',
      skills: ['OSI Model', 'TCP/IP', 'IP Addressing'],
      image: '/cert/2.png',
      certificateId: 'Cisco Networking Academy'
    },
    {
      id: 4,
      title: 'Network Defense',
      issuer: 'Cisco Networking Academy',
      date: 'Mar 26, 2026',
      description: 'Network security & defense mechanisms',
      skills: ['Firewall', 'VPN', 'Threat Analysis'],
      image: '/cert/5.png',
      certificateId: 'Cisco Networking Academy'
    },
    {
      id: 5,
      title: 'Endpoint Security',
      issuer: 'Cisco Networking Academy',
      date: 'Mar 20, 2026',
      description: 'Endpoint protection & threat mitigation',
      skills: ['Endpoint Protection', 'Malware Removal', 'Access Control'],
      image: '/cert/7.png',
      certificateId: 'Cisco Networking Academy'
    },
    {
      id: 6,
      title: 'Junior Cybersecurity Analyst',
      issuer: 'Cisco Networking Academy',
      date: 'Apr 22, 2026',
      description: 'Cybersecurity analyst career path exam',
      skills: ['Threat Detection', 'Incident Response', 'Risk Management'],
      image: '/cert/6.png',
      certificateId: 'Cert ID: 895f446e-6a22-42ec-8651-9ead57758132'
    },
    {
      id: 7,
      title: 'Typewriting English',
      issuer: 'Government of Tamil Nadu',
      date: 'August 2023',
      description: '30 WPM typing proficiency (First Class)',
      skills: ['Typing', 'Data Entry', 'Office Work'],
      image: '/cert/4.png',
      certificateId: 'GTE 1391464'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.cert-card',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16 relative z-10" ref={containerRef}>
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Header */}
        <div className="mb-12 text-center relative flex flex-col items-center">
          <button
            onClick={() => navigate('/resume')}
            className="absolute left-0 top-2 flex items-center gap-2 text-text-secondary hover:text-brand-blue font-semibold transition-colors"
          >
            <FaArrowLeft /> Back
          </button>

          <AnimatedText text="Certifications" className="text-4xl md:text-5xl font-display font-bold text-text-main mb-4" />
          <div className="w-20 h-1 bg-brand-gold rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <GlassCard
              key={cert.id}
              onClick={() => setSelectedImage(cert.image)}
              className="cert-card cursor-pointer group hover:-translate-y-2 hover:shadow-premium hover:shadow-brand-blue/10 hover:border-brand-blue/40 transition-all duration-300 flex flex-col !bg-white/60"
            >
              <div className="p-5 flex flex-col h-full">
                {/* Top Section */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shadow-sm flex-shrink-0 border border-brand-blue/10 bg-white">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-text-main font-display leading-tight group-hover:text-brand-blue transition-colors mb-1">
                      {cert.title}
                    </h2>
                    <p className="text-xs font-semibold text-text-secondary flex items-center gap-1">
                      <FaAward className="text-brand-brightGold" /> {cert.issuer}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <p className="text-xs font-medium text-text-secondary/70 flex items-center gap-1 mb-3">
                  <FaCalendar /> {cert.date}
                </p>

                <p className="text-sm text-text-secondary mb-4 line-clamp-2 flex-1 font-medium">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-[10px] uppercase tracking-wider font-bold bg-white/80 border border-slate-200 text-text-secondary px-2 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* ID Footer */}
                <div className="mt-auto pt-4 border-t border-slate-200/50">
                  <p className="text-[10px] text-text-secondary/60 font-mono truncate">
                    ID: {cert.certificateId}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-slate-900/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full flex items-center justify-center">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 md:-right-12 text-white text-3xl hover:text-brand-brightGold transition-colors"
              >
                ✕
              </button>
              <img
                src={selectedImage}
                alt="Certificate Full"
                className="max-h-[85vh] w-auto rounded-xl shadow-2xl border border-white/20"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Certifications;