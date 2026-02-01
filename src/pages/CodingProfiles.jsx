import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PageTransition from '../components/PageTransition'
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch, FaTrophy } from 'react-icons/fa'
import { SiLeetcode, SiHackerrank, SiCodechef, SiCodeforces } from 'react-icons/si'

/**
 * Coding Profiles Page
 * Display coding platform profiles with stats and 3D effects
 */
const CodingProfiles = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  const profiles = [
    {
      id: 1,
      platform: 'GitHub',
      icon: FaGithub,
      username: '@yourusername',
      link: 'https://github.com/yourusername',
      stats: [
        { label: 'Repositories', value: '150+', icon: FaCodeBranch },
        { label: 'Stars', value: '2.5K', icon: FaStar },
        { label: 'Followers', value: '500+', icon: FaTrophy },
      ],
      color: '#333',
      bgGradient: 'from-gray-700 to-gray-900',
    },
    {
      id: 2,
      platform: 'LeetCode',
      icon: SiLeetcode,
      username: '@yourusername',
      link: 'https://leetcode.com/yourusername',
      stats: [
        { label: 'Problems Solved', value: '450+', icon: FaTrophy },
        { label: 'Contest Rating', value: '1850', icon: FaStar },
        { label: 'Global Rank', value: 'Top 5%', icon: FaCodeBranch },
      ],
      color: '#FFA116',
      bgGradient: 'from-orange-600 to-yellow-500',
    },
    {
      id: 3,
      platform: 'HackerRank',
      icon: SiHackerrank,
      username: '@yourusername',
      link: 'https://hackerrank.com/yourusername',
      stats: [
        { label: 'Stars', value: '5 ⭐', icon: FaStar },
        { label: 'Badges', value: '25+', icon: FaTrophy },
        { label: 'Rank', value: 'Top 10%', icon: FaCodeBranch },
      ],
      color: '#00EA64',
      bgGradient: 'from-green-600 to-emerald-500',
    },
    {
      id: 4,
      platform: 'CodeChef',
      icon: SiCodechef,
      username: '@yourusername',
      link: 'https://codechef.com/users/yourusername',
      stats: [
        { label: 'Rating', value: '1920', icon: FaStar },
        { label: 'Stars', value: '4 ⭐', icon: FaTrophy },
        { label: 'Problems', value: '300+', icon: FaCodeBranch },
      ],
      color: '#5B4638',
      bgGradient: 'from-amber-700 to-orange-800',
    },
    {
      id: 5,
      platform: 'Codeforces',
      icon: SiCodeforces,
      username: '@yourusername',
      link: 'https://codeforces.com/profile/yourusername',
      stats: [
        { label: 'Rating', value: '1650', icon: FaStar },
        { label: 'Rank', value: 'Expert', icon: FaTrophy },
        { label: 'Contests', value: '75+', icon: FaCodeBranch },
      ],
      color: '#1F8ACB',
      bgGradient: 'from-blue-600 to-cyan-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, rotateY: -90, scale: 0.8 },
    visible: {
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <PageTransition>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl font-bold gradient-text mb-4">
            Coding Profiles
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My journey across competitive programming platforms
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Profiles Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {profiles.map((profile) => {
            const Icon = profile.icon
            return (
              <motion.div
                key={profile.id}
                variants={cardVariants}
                whileHover={{
                  y: -15,
                  rotateY: 10,
                  rotateX: 10,
                  scale: 1.05,
                  boxShadow: `0 30px 80px ${profile.color}60`,
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                }}
                className="glass-strong rounded-3xl p-6 relative overflow-hidden group cursor-pointer"
              >
                {/* Background Gradient */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${profile.bgGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Platform Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="text-7xl mb-6 flex justify-center"
                    style={{ color: profile.color }}
                  >
                    <Icon />
                  </motion.div>

                  {/* Platform Name */}
                  <h3 className="text-2xl font-bold text-white mb-2 text-center">
                    {profile.platform}
                  </h3>

                  {/* Username */}
                  <p className="text-gray-400 text-center mb-6">{profile.username}</p>

                  {/* Stats */}
                  <div className="space-y-4 mb-6">
                    {profile.stats.map((stat, index) => {
                      const StatIcon = stat.icon
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center justify-between glass rounded-lg p-3"
                        >
                          <div className="flex items-center gap-3">
                            <StatIcon 
                              className="text-xl" 
                              style={{ color: profile.color }}
                            />
                            <span className="text-gray-300 text-sm">{stat.label}</span>
                          </div>
                          <span 
                            className="font-bold text-lg"
                            style={{ color: profile.color }}
                          >
                            {stat.value}
                          </span>
                        </motion.div>
                      )
                    })}
                  </div>

                  {/* Visit Profile Button */}
                  <motion.a
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all"
                    style={{ 
                      background: `linear-gradient(135deg, ${profile.color}, ${profile.color}99)` 
                    }}
                  >
                    Visit Profile
                    <FaExternalLinkAlt />
                  </motion.a>
                </div>

                {/* 3D Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

                {/* Magnetic Effect Lines */}
                <motion.div
                  className="absolute -top-1 -right-1 w-20 h-20 opacity-0 group-hover:opacity-30 transition-opacity"
                  style={{ 
                    background: `radial-gradient(circle, ${profile.color} 0%, transparent 70%)`,
                    filter: 'blur(15px)',
                  }}
                />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Overall Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 glass-strong rounded-3xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="gradient-text">Overall Achievements</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '🏆', value: '1000+', label: 'Problems Solved' },
              { icon: '⭐', value: '50+', label: 'Contests Won' },
              { icon: '🎯', value: '95%', label: 'Success Rate' },
              { icon: '🔥', value: '200+', label: 'Day Streak' },
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  delay: 1 + index * 0.1, 
                  type: 'spring',
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <div className="text-5xl mb-3">{achievement.icon}</div>
                <div className="text-3xl font-bold gradient-text mb-2">
                  {achievement.value}
                </div>
                <div className="text-gray-400 text-sm">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageTransition>
  )
}

export default CodingProfiles
