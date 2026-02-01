import { FaGithub, FaExternalLinkAlt, FaStar, FaUsers, FaCalendar } from 'react-icons/fa'

const FeaturedProject = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16">
        
        {/* Featured Project */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-12 p-8 md:p-16 items-center">
            
            {/* Left Side - Icon/Illustration */}
            <div className="flex items-center justify-center">
              <div className="relative">
                {/* Lock Icon */}
                <div className="w-64 h-64 flex items-center justify-center">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    {/* Lock Shackle */}
                    <path
                      d="M 70 80 Q 70 40, 100 40 Q 130 40, 130 80"
                      fill="none"
                      stroke="#9CA3AF"
                      strokeWidth="12"
                      strokeLinecap="round"
                    />
                    {/* Lock Body */}
                    <rect
                      x="60"
                      y="80"
                      width="80"
                      height="90"
                      rx="12"
                      fill="url(#lockGradient)"
                    />
                    {/* Keyhole */}
                    <circle cx="100" cy="115" r="10" fill="#4B5563" />
                    <rect x="95" y="115" width="10" height="25" rx="2" fill="#4B5563" />
                    
                    {/* Gradient Definition */}
                    <defs>
                      <linearGradient id="lockGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#FBBF24" />
                        <stop offset="100%" stopColor="#F59E0B" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6">
              {/* Featured Badge */}
              <div className="inline-block">
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold">
                  Featured Project
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Security Audit Tool
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                A comprehensive security audit tool that performs automated network scanning, 
                vulnerability assessment, and generates detailed reports. Built with Python and 
                integrated with popular security frameworks.
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium text-sm">
                  Python
                </span>
                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium text-sm">
                  Nmap
                </span>
                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium text-sm">
                  Burp Suite
                </span>
                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium text-sm">
                  Flask
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="https://github.com/yourusername/security-audit-tool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors shadow-lg"
                >
                  <FaGithub className="text-xl" />
                  View Code
                </a>
                <a
                  href="https://yourproject-demo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
                >
                  <FaExternalLinkAlt className="text-lg" />
                  Live Demo
                </a>
              </div>

              {/* Project Stats */}
              <div className="flex flex-wrap gap-6 pt-4 text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-500" />
                  <span className="font-medium">150 stars</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUsers className="text-gray-500 dark:text-gray-400" />
                  <span className="font-medium">1 team</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendar className="text-gray-500 dark:text-gray-400" />
                  <span className="font-medium">2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Projects Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            More Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
              <div className="text-5xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Portfolio Website
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Modern responsive portfolio showcasing projects and skills with clean design.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs font-medium">
                  React
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs font-medium">
                  Tailwind
                </span>
              </div>
              <div className="flex gap-3">
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <FaGithub className="text-xl" />
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  <FaExternalLinkAlt className="text-lg" />
                </a>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
              <div className="text-5xl mb-4">🔐</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Penetration Testing Suite
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Advanced VAPT tools for comprehensive security assessment and reporting.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded text-xs font-medium">
                  Kali Linux
                </span>
                <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded text-xs font-medium">
                  Python
                </span>
              </div>
              <div className="flex gap-3">
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <FaGithub className="text-xl" />
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  <FaExternalLinkAlt className="text-lg" />
                </a>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Mobile Security App
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Cross-platform mobile application for security monitoring and alerts.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-xs font-medium">
                  Flutter
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-xs font-medium">
                  Firebase
                </span>
              </div>
              <div className="flex gap-3">
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <FaGithub className="text-xl" />
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  <FaExternalLinkAlt className="text-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProject
