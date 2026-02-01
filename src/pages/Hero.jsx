import { Link } from 'react-router-dom'
import { FaArrowRight, FaDownload } from 'react-icons/fa'

/**
 * Hero/Landing Page
 * Professional and clean landing page
 */
const Hero = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 transition-colors duration-300">
      {/* Decorative Gold Horizontal Bar */}
      <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 py-12">
          
          {/* Content */}
          <div className="flex-1 text-center lg:text-left space-y-8 max-w-3xl">
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-white">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                 Pradeep
                </span>
              </h1>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-300">
                Cyber Security & Network Security
              </h2>
            </div>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0">
              Motivated Cybersecurity Enthusiast with foundational knowledge in network security and VAPT operations. 
              Eager to apply problem-solving abilities and technical skills to real-world security challenges while continuously learning and growing in a professional environment.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                to="/projects"
                className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:from-amber-600 hover:to-yellow-700 transition-all shadow-lg hover:shadow-xl"
              >
                View Projects
                <FaArrowRight />
              </Link>

              <Link
                to="/resume"
                className="bg-gray-800 text-amber-400 px-8 py-4 rounded-lg font-semibold flex items-center gap-2 border-2 border-amber-500 hover:bg-gray-700 transition-colors shadow-md"
              >
                Download Resume
                <FaDownload />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
