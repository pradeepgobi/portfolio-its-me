import { useState } from 'react'
import {
  FaReact, FaPython, FaHtml5, FaCss3Alt, FaJs,
  FaShieldAlt, FaSearch, FaLock, FaBug, FaKey,
  FaBaseballBall, FaTableTennis, FaKeyboard, FaCircle
} from 'react-icons/fa'
import {
  SiTailwindcss, SiMongodb, SiKalilinux,
  SiWireshark, SiMetasploit, SiFirebase, SiFlutter
} from 'react-icons/si'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const skillCategories = {
    frontend: [
      { name: 'Flutter', icon: SiFlutter, level: 88 },
      { name: 'React', icon: FaReact, level: 95 },
      { name: 'Tailwind', icon: SiTailwindcss, level: 95 },
      { name: 'HTML', icon: FaHtml5, level: 98 },
      { name: 'CSS', icon: FaCss3Alt, level: 95 },
      { name: 'JS', icon: FaJs, level: 93 },
    ],
    backend: [
      { name: 'Python', icon: FaPython, level: 85 },
      { name: 'MongoDB', icon: SiMongodb, level: 85 },
      { name: 'Firebase', icon: SiFirebase, level: 82 },
    ],
    security: [
      { name: 'Kali', icon: SiKalilinux, level: 88 },
      { name: 'Wireshark', icon: SiWireshark, level: 85 },
      { name: 'Metasploit', icon: SiMetasploit, level: 80 },
      { name: 'Burp', icon: FaLock, level: 85 },
      { name: 'Nmap', icon: FaSearch, level: 90 },
      { name: 'Nessus', icon: FaShieldAlt, level: 80 },
    ],
    activities: [
      { name: 'Cricket', icon: FaBaseballBall, level: 85 },
      { name: 'Carrom', icon: FaCircle, level: 80 },
      { name: 'Badminton', icon: FaTableTennis, level: 82 },
      { name: 'Typing', icon: FaKeyboard, level: 90 },
    ],
  }

  const getSkills = () => {
    if (activeCategory === 'all') {
      return Object.values(skillCategories).flat()
    }
    return skillCategories[activeCategory] || []
  }

  return (
    <div className="min-h-screen pt-20 bg-transparent">
      <div className="container mx-auto px-4 max-w-6xl py-10">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-amber-400">Skills</h1>
          <div className="w-16 h-1 bg-white mx-auto mt-2 rounded"></div>
        </div>

        {/* 🔥 FILTER */}
        <div className="flex justify-center gap-2 mb-6 flex-wrap">
          {['all', 'frontend', 'backend', 'security', 'activities'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded text-sm ${
                activeCategory === cat
                  ? 'bg-amber-500 text-white'
                  : 'bg-gray-700 text-gray-300'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* 🔥 COMPACT GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {getSkills().map((skill, i) => {
            const Icon = skill.icon
            return (
              <div
                key={i}
                className="bg-gray-800/60 p-3 rounded border border-gray-700"
              >
                <div className="flex items-center gap-2">
                  <Icon className="text-lg text-amber-400" />
                  <span className="text-sm text-white font-medium">
                    {skill.name}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}

export default Skills