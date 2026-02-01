import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">About Me</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 mx-auto rounded-full"></div>
        </div>

        <div className="mb-16">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-8 md:p-12 transition-colors duration-300">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Profile Image */}
              <div className="w-48 h-48 rounded-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 p-1 flex-shrink-0">
                <div className="w-full h-full rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                  <img
                    src="/profile.jpg"
                    alt="Profile"
                    className={`w-full h-full object-cover ${imageLoaded ? 'block' : 'hidden'}`}
                    onLoad={() => setImageLoaded(true)}
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                  {!imageLoaded && (
                    <div className="text-6xl">👤</div>
                  )}
                </div>
              </div>

              {/* Introduction */}
              <div className="flex-1 space-y-4 text-gray-700 dark:text-gray-300">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Hi, I'm Pradeep! 👋</h2>
                <p className="text-lg leading-relaxed">
                  A passionate <span className="text-amber-600 dark:text-amber-400 font-semibold">Cybersecurity Professional</span> with expertise in Network Security and VAPT Operations.
                </p>
                <p className="leading-relaxed">
                  I specialize in identifying vulnerabilities, securing networks, and implementing robust security solutions. My journey in cybersecurity combines technical expertise with a commitment to continuous learning and staying ahead of emerging threats.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Professional Journey</h2>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-amber-500 dark:border-amber-400 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/50 hover:scale-105 cursor-pointer">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Current Role</h3>
              <p className="text-amber-600 dark:text-amber-400 font-semibold">Cybersecurity Specialist</p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Focused on network security assessments, vulnerability analysis, and penetration testing operations.
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Education</h2>
          <div className="space-y-6">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-amber-500 dark:border-amber-400 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/50 hover:scale-105 cursor-pointer">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">B.Tech - Information Technology</h3>
              <p className="text-amber-600 dark:text-amber-400 font-semibold">Anna University</p>
              <p className="text-gray-600 dark:text-gray-300">Year: 2023-2027</p>
              <p className="text-gray-900 dark:text-white font-semibold mt-2">Current CGPA: 6.8</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-amber-500 dark:border-amber-400 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/50 hover:scale-105 cursor-pointer">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">12th Standard - Higher Secondary</h3>
              <p className="text-amber-600 dark:text-amber-400 font-semibold">Bharathi HR. Secondary School</p>
              <p className="text-gray-900 dark:text-white font-semibold mt-2">Percentage: 74%</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-amber-500 dark:border-amber-400 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/50 hover:scale-105 cursor-pointer">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">10th Standard - SSLC</h3>
              <p className="text-amber-600 dark:text-amber-400 font-semibold">Bharathi HR. Secondary School</p>
              <p className="text-gray-900 dark:text-white font-semibold mt-2">Result: Pass</p>
            </div>
          </div>
        </div>

        {/* Interests */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Interests & Hobbies</h2>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/30">
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="px-4 py-2 bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full font-medium transition-all duration-300 hover:bg-amber-100 dark:hover:bg-amber-800/50 hover:shadow-lg hover:shadow-amber-500/50 hover:scale-110 cursor-pointer">Security Research</span>
              <span className="px-4 py-2 bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full font-medium transition-all duration-300 hover:bg-amber-100 dark:hover:bg-amber-800/50 hover:shadow-lg hover:shadow-amber-500/50 hover:scale-110 cursor-pointer">Network Analysis</span>
              <span className="px-4 py-2 bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full font-medium transition-all duration-300 hover:bg-amber-100 dark:hover:bg-amber-800/50 hover:shadow-lg hover:shadow-amber-500/50 hover:scale-110 cursor-pointer">Cricket</span>
              <span className="px-4 py-2 bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full font-medium transition-all duration-300 hover:bg-amber-100 dark:hover:bg-amber-800/50 hover:shadow-lg hover:shadow-amber-500/50 hover:scale-110 cursor-pointer">Badminton</span>
              <span className="px-4 py-2 bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full font-medium transition-all duration-300 hover:bg-amber-100 dark:hover:bg-amber-800/50 hover:shadow-lg hover:shadow-amber-500/50 hover:scale-110 cursor-pointer">Technology</span>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Contact Information</h2>
          <div className="space-y-6">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/50 hover:scale-105 cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="text-3xl text-amber-600 dark:text-amber-400">
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className="text-sm text-gray-400 dark:text-gray-400 mb-1">Email</h3>
                  <a className="text-white font-semibold text-lg">
                    pradeepgobi8@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/50 hover:scale-105 cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="text-3xl text-amber-600 dark:text-amber-400">
                  <FaPhone />
                </div>
                <div>
                  <h3 className="text-sm text-gray-400 dark:text-gray-400 mb-1">Phone</h3>
                  <a className="text-white font-semibold text-lg">
                    +91 9025348451
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/50 hover:scale-105 cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="text-3xl text-amber-600 dark:text-amber-400">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3 className="text-sm text-gray-400 dark:text-gray-400 mb-1">Location</h3>
                  <p className="text-white font-semibold text-lg">Namakkal, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
