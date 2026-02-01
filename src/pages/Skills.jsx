import { useState } from 'react'
import { 
  FaReact, FaPython, FaHtml5, FaCss3Alt, FaJs, FaJava,
  FaShieldAlt, FaSearch, FaLock, FaBug, FaKey, FaChartLine, FaUserLock, FaUserSecret,
  FaExclamationTriangle, FaBaseballBall, FaTableTennis, FaKeyboard, FaCircle
} from 'react-icons/fa'
import { 
  SiTailwindcss, SiMongodb, SiKalilinux,
  SiWireshark, SiMetasploit, SiFirebase, SiFlutter
} from 'react-icons/si'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const skillCategories = {
    frontend: [
      { name: 'Flutter', icon: SiFlutter, level: 88, color: '#02569B' },
      { name: 'React', icon: FaReact, level: 95, color: '#61DAFB' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 95, color: '#06B6D4' },
      { name: 'HTML5', icon: FaHtml5, level: 98, color: '#E34F26' },
      { name: 'CSS3', icon: FaCss3Alt, level: 95, color: '#1572B6' },
      { name: 'JavaScript', icon: FaJs, level: 93, color: '#F7DF1E' },
    ],
    backend: [
      { name: 'Python', icon: FaPython, level: 85, color: '#3776AB' },
      { name: 'MongoDB', icon: SiMongodb, level: 85, color: '#47A248' },
      { name: 'Firebase', icon: SiFirebase, level: 82, color: '#FFCA28' },
      { name: 'Java', icon: FaJava, level: 60, color: '#DC382D' },
    ],
    security: [
      { name: 'Kali Linux', icon: SiKalilinux, level: 88, color: '#557C94' },
      { name: 'Wireshark', icon: SiWireshark, level: 85, color: '#1679A7' },
      { name: 'Metasploit', icon: SiMetasploit, level: 80, color: '#2596CD' },
      { name: 'Maltego', icon: FaBug, level: 78, color: '#E74C3C' },
      { name: 'Burp Suite', icon: FaLock, level: 85, color: '#FF6633' },
      { name: 'Nmap', icon: FaSearch, level: 90, color: '#00D9FF' },
      { name: 'OWASP Top 10', icon: FaExclamationTriangle, level: 85, color: '#FF9800' },
      { name: 'Hydra', icon: FaKey, level: 82, color: '#9C27B0' },
      { name: 'Nessus', icon: FaShieldAlt, level: 80, color: '#00C853' },
      { name: 'Splunk', icon: FaChartLine, level: 83, color: '#00A86B' },
      { name: 'John the Ripper', icon: FaUserLock, level: 84, color: '#FF5722' },
      { name: 'Tor', icon: FaUserSecret, level: 87, color: '#984646' },
    ],
    activities: [
      { name: 'Cricket', icon: FaBaseballBall, level: 85, color: '#E74C3C' },
      { name: 'Carrom', icon: FaCircle, level: 80, color: '#3498DB' },
      { name: 'Badminton', icon: FaTableTennis, level: 82, color: '#2ECC71' },
      { name: 'Junior Typewriting English', icon: FaKeyboard, level: 90, color: '#F39C12' },
    ],
  }

  const getAllSkills = () => {
    return [...skillCategories.frontend, ...skillCategories.backend, ...skillCategories.security, ...skillCategories.activities]
  }

  const getFilteredSkills = () => {
    if (activeCategory === 'all') return getAllSkills()
    return skillCategories[activeCategory] || []
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">My Skills</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiencies
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['all', 'frontend', 'backend', 'security', 'activities'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-lg font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {getFilteredSkills().map((skill, index) => {
            const Icon = skill.icon
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="text-4xl p-3 rounded-lg"
                    style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
                  >
                    <Icon />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white">{skill.name}</h3>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${skill.level}%`,
                      backgroundColor: skill.color,
                    }}
                  />
                </div>
              </div>
            )
          })}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transition-colors duration-300">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {skillCategories.frontend.length}
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">Frontend Skills</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transition-colors duration-300">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
              {skillCategories.backend.length}
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">Backend Skills</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transition-colors duration-300">
            <div className="text-4xl font-bold text-red-600 dark:text-red-400 mb-2">
              {skillCategories.security.length}
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">Security Tools</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transition-colors duration-300">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              {skillCategories.activities.length}
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">Activities</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
