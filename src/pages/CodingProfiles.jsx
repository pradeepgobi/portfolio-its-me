import React, { useEffect, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch, FaTrophy } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank, SiCodechef, SiCodeforces } from 'react-icons/si';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GlassCard from '../components/ui/GlassCard';
import AnimatedText from '../components/ui/AnimatedText';

gsap.registerPlugin(ScrollTrigger);

const CodingProfiles = () => {
  const containerRef = useRef(null);

  const profiles = [
    {
      id: 1,
      platform: 'GitHub',
      icon: FaGithub,
      username: '@PradeepGobi',
      link: 'https://github.com/pradeepgobi',
      stats: [
        { label: 'Repositories', value: '15+', icon: FaCodeBranch },
        { label: 'Stars', value: '10+', icon: FaStar },
        { label: 'Followers', value: '5+', icon: FaTrophy },
      ],
      color: 'text-[#254F7A]',
      bgHover: 'group-hover:bg-[#254F7A]/5',
      borderHover: 'hover:border-brand-deepBlue/30'
    },
    {
      id: 2,
      platform: 'LeetCode',
      icon: SiLeetcode,
      username: '@pradeepgobi',
      link: 'https://leetcode.com',
      stats: [
        { label: 'Problems Solved', value: '50+', icon: FaTrophy },
        { label: 'Contest Rating', value: '1200', icon: FaStar },
        { label: 'Global Rank', value: 'Top 30%', icon: FaCodeBranch },
      ],
      color: 'text-[#3368A0]',
      bgHover: 'group-hover:bg-brand-gold/5',
      borderHover: 'hover:border-brand-gold/30'
    },
    {
      id: 3,
      platform: 'HackerRank',
      icon: SiHackerrank,
      username: '@pradeepgobi',
      link: 'https://hackerrank.com',
      stats: [
        { label: 'Stars', value: '3 ⭐', icon: FaStar },
        { label: 'Badges', value: '5+', icon: FaTrophy },
        { label: 'Rank', value: 'Top 20%', icon: FaCodeBranch },
      ],
      color: 'text-green-600',
      bgHover: 'group-hover:bg-green-50',
      borderHover: 'hover:border-green-300'
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cards entrance
      gsap.fromTo('.profile-card',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: '.profile-grid', start: 'top 80%' } }
      );
      
      // Stats entrance
      gsap.fromTo('.overall-stat',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.5)', scrollTrigger: { trigger: '.overall-stats-grid', start: 'top 85%' } }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16 relative z-10" ref={containerRef}>
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <div className="mb-16 text-center flex flex-col items-center">
          <AnimatedText text="Coding Profiles" className="text-4xl md:text-5xl font-display font-bold text-[#254F7A] mb-4" />
          <p className="text-lg text-[#3368A0] max-w-2xl mx-auto mb-4 font-medium">
            My journey across competitive programming platforms
          </p>
          <div className="w-20 h-1 bg-brand-gold rounded-full"></div>
        </div>

        {/* Profiles Grid */}
        <div className="profile-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {profiles.map((profile) => {
            const Icon = profile.icon;
            return (
              <GlassCard
                key={profile.id}
                className={`profile-card group relative p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-premium !bg-white/60 ${profile.borderHover}`}
              >
                {/* Header */}
                <div className="flex flex-col items-center mb-8">
                  <div className={`w-20 h-20 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-4xl mb-4 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 ${profile.color} ${profile.bgHover}`}>
                    <Icon />
                  </div>
                  <h3 className="text-2xl font-bold text-[#254F7A] font-display mb-1">{profile.platform}</h3>
                  <p className="text-sm font-medium text-[#3368A0]">{profile.username}</p>
                </div>

                {/* Stats */}
                <div className="space-y-3 mb-8">
                  {profile.stats.map((stat, index) => {
                    const StatIcon = stat.icon;
                    return (
                      <div key={index} className="flex items-center justify-between bg-white/80 rounded-xl p-3 border border-slate-100 group-hover:bg-white transition-colors">
                        <div className="flex items-center gap-3">
                          <StatIcon className={`text-lg ${profile.color}`} />
                          <span className="text-[#3368A0] text-sm font-medium">{stat.label}</span>
                        </div>
                        <span className={`font-bold text-sm ${profile.color}`}>
                          {stat.value}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Action */}
                <a
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-white/80 border border-slate-200 text-[#254F7A] rounded-xl font-semibold hover:bg-white hover:text-[#3368A0] transition-colors shadow-sm"
                >
                  Visit Profile <FaExternalLinkAlt className="text-xs" />
                </a>
              </GlassCard>
            );
          })}
        </div>

        {/* Overall Stats */}
        <GlassCard className="p-8 md:p-12 text-center !bg-white/60">
          <h2 className="text-3xl font-bold text-[#254F7A] font-display mb-10">
            Overall Achievements
          </h2>
          <div className="overall-stats-grid grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '🏆', value: '100+', label: 'Problems Solved' },
              { icon: '⭐', value: '5+', label: 'Contests Attended' },
              { icon: '🎯', value: '85%', label: 'Success Rate' },
              { icon: '🔥', value: '30+', label: 'Day Streak' },
            ].map((achievement, index) => (
              <div key={index} className="overall-stat bg-white/80 p-6 rounded-2xl border border-white shadow-sm hover:scale-105 hover:shadow-premium hover:border-[#3368A0]/25 transition-all duration-300">
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <div className="text-3xl font-bold text-[#3368A0] font-display mb-1">
                  {achievement.value}
                </div>
                <div className="text-[#3368A0] text-sm font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </GlassCard>

      </div>
    </div>
  );
};

export default CodingProfiles;
