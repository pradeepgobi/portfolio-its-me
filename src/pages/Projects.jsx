import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'AI Cyber Threat Detection',
      description: 'AI system for detecting cyber threats instantly',
      longDescription: 'AI-based system for detecting phishing, malware, and cyber threats instantly.',
      tech: ['Vite', 'HTML', 'AI'],
      github: 'https://github.com/pradeepgobi/AI-Enabled-Cyber-Threat-Detection-Reporting-System-',
      category: 'security',
      image: '🔒'
    },
    {
      id: 2,
      title: 'YouTube Summarizer Tamil',
      description: 'AI tool for summarizing YouTube videos',
      longDescription: 'Generates Tamil summaries from YouTube videos using AI.',
      tech: ['Web', 'AI', 'Python'],
      github: 'https://github.com/pradeepgobi/youtube_summarizer-tamil',
      category: 'web',
      image: '🎥'
    },
    {
      id: 3,
      title: 'AndroRAT-Anniyan',
      description: 'Android malware research project',
      longDescription: 'Research project to understand Android RAT malware.',
      tech: ['Android', 'Security', 'Python'],
      github: 'https://github.com/pradeepgobi/androrat-anniyan',
      category: 'security',
      image: '🛡️'
    },
    {
      id: 4,
      title: 'AI Web Analyzer',
      description: 'AI tool for analyzing websites',
      longDescription: 'Analyzes website performance, SEO, and security.',
      tech: ['AI', 'Web', 'Python'],
      github: 'https://github.com/pradeepgobi/Ai-Web_ananlayer',
      category: 'web',
      image: '🌐'
    },
    {
      id: 5,
      title: 'Password Strengthener',
      description: 'Password security analyzer tool',
      longDescription: 'Checks password strength and suggests improvements.',
      tech: ['JavaScript', 'Security', 'React'],
      github: 'https://github.com/pradeepgobi/password_strengther',
      category: 'security',
      image: '🔐'
    }
  ]

  const categories = ['all', 'web', 'security']

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.category === filter)

  return (
    <div className="min-h-screen pt-20 bg-transparent">
      <div className="container mx-auto px-4 max-w-6xl py-10">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-amber-400">Projects</h1>
          <div className="w-16 h-1 bg-white mx-auto mt-2 rounded"></div>
        </div>

        {/* Filter */}
        <div className="flex justify-center gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded text-sm ${
                filter === cat
                  ? 'bg-amber-500 text-white'
                  : 'bg-gray-700 text-gray-300'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* 🔥 COMPACT GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-gray-800/60 p-4 rounded-lg border border-gray-700 hover:border-amber-400 cursor-pointer transition"
            >
              <div className="text-3xl mb-2">{project.image}</div>

              <h3 className="text-lg text-white font-semibold mb-1">
                {project.title}
              </h3>

              <p className="text-sm text-gray-400 mb-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-amber-500/10 text-amber-300 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-sm flex items-center gap-2 text-white bg-gray-900 px-3 py-1.5 rounded hover:bg-gray-700"
              >
                <FaGithub /> Code
              </a>
            </div>
          ))}
        </div>

        {/* 🔥 MODAL */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-gray-800 p-6 rounded-lg max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl text-white font-bold mb-3">
                {selectedProject.title}
              </h2>

              <p className="text-gray-300 mb-4">
                {selectedProject.longDescription}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tech.map((t, i) => (
                  <span key={i} className="text-xs bg-amber-500/10 text-amber-300 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="block text-center bg-amber-500 text-white py-2 rounded"
              >
                View Code
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default Projects