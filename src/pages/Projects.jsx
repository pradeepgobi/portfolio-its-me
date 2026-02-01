import { useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaCode, FaStar, FaCalendar, FaUsers } from 'react-icons/fa'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [filter, setFilter] = useState('all')

  // Project data - Real projects
  const projects = [
    {
      id: 1,
      title: 'AI-Enabled Cyber Threat Detection & Reporting System',
      description: 'Intelligent web-based system for immediate cyber threat detection and reporting',
      longDescription: 'AI-Enabled Cyber Threat Detection & Reporting System is an intelligent web-based system developed to eliminate the time gap in the existing cyber crime complaint system by providing immediate support through AI. Users can easily lodge complaints regarding cyber threats like phishing, malware files, online fraud, and suspicious activities. The AI immediately scans the URL or file uploaded to check for phishing or viruses and automatically produces the severity level as Low, Medium, High, or Critical. This enables users to have immediate awareness and quick safety advice, making the reporting of cyber threats more efficient and trustworthy.',
      image: '🔒',
      tech: ['Vite', 'HTML', 'AI', 'JavaScript'],
      github: 'https://github.com/pradeepgobi/AI-Enabled-Cyber-Threat-Detection-Reporting-System-',
      category: 'security',
      featured: false,
      color: '#667eea',
      gradient: 'from-indigo-500 to-purple-600',
      stats: {
        stars: '150',
        team: '1',
        year: '2024'
      }
    },
    {
      id: 2,
      title: 'YouTube Summarizer Tamil',
      description: 'AI-powered tool for generating quick summaries of YouTube videos in Tamil',
      longDescription: 'YouTube Summarizer Tamil is an AI-powered tool that helps you generate quick and accurate summaries of any YouTube video in the Tamil language. Just paste a YouTube video link, and the system automatically analyzes the content and provides a short, easy-to-understand Tamil summary within seconds.',
      image: '🎥',
      tech: ['Web', 'AI', 'Python', 'Tamil NLP'],
      github: 'https://github.com/pradeepgobi/youtube_summarizer-tamil',
      category: 'web',
      featured: false,
      color: '#06B6D4',
      stats: {
        stars: '45',
        team: '1',
        year: '2025'
      }
    },
    {
      id: 3,
      title: 'AndroRAT-Anniyan',
      description: 'Cybersecurity research project for understanding Android Remote Access Trojans',
      longDescription: 'AndroRAT-Anniyan is a cybersecurity research and educational project focused on understanding how Android Remote Access Trojans (RATs) operate. This repository is intended only for ethical learning, malware analysis, and security awareness, helping students and researchers study Android security threats and improve defensive techniques.',
      image: '🛡️',
      tech: ['Android', 'Security Research', 'Malware Analysis', 'Python'],
      github: 'https://github.com/pradeepgobi/androrat-anniyan',
      category: 'security',
      featured: false,
      color: '#EF4444',
      stats: {
        stars: '32',
        team: '1',
        year: '2024'
      }
    }
  ]

  const categories = ['all', 'web', 'mobile', 'security', 'other']
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-amber-900/30 text-amber-300 rounded-full mb-4 font-semibold text-sm">
            Portfolio Showcase
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            My Projects
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore my professional work featuring innovative solutions, cutting-edge technologies, and impactful results
          </p>
        </div>

        {/* Category Filter */}
        {projects.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2.5 rounded-lg font-medium transition-colors ${
                  filter === category
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:shadow-amber-500/50 hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="p-8 flex items-center justify-center bg-gray-50 dark:bg-gray-700/50 border-b dark:border-gray-700">
                <div className="text-6xl">{project.image}</div>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/50 hover:scale-110 cursor-pointer">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/50 hover:scale-110 cursor-pointer">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-3 pt-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                    >
                      <FaGithub /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <FaCode className="text-6xl text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-600">Try selecting a different category</p>
          </div>
        )}

        {/* Project Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/50 dark:bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-gray-100 dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 transition-colors duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{selectedProject.title}</h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="text-center mb-6">
                <div className="text-8xl">{selectedProject.image}</div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">{selectedProject.longDescription}</p>

              <div className="mb-6">
                <h3 className="font-bold text-gray-900 dark:text-white mb-3">Technologies Used:</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/50 hover:scale-110 cursor-pointer">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors font-medium w-full justify-center"
                  >
                    <FaGithub /> View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects
