import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  FaHome, FaUser, FaCode, FaBriefcase, 
  FaFileAlt, FaShareAlt, FaBars, FaTimes 
} from 'react-icons/fa'

/**
 * Navigation Component
 * Minimal, professional responsive navigation with dark theme
 */
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const navItems = [
    { path: '/', icon: FaHome, label: 'Home' },
    { path: '/about', icon: FaUser, label: 'About' },
    { path: '/skills', icon: FaCode, label: 'Skills' },
    { path: '/projects', icon: FaBriefcase, label: 'Projects' },
    { path: '/resume', icon: FaFileAlt, label: 'Resume' },
    { path: '/social', icon: FaShareAlt, label: 'Social' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 ${
        scrolled ? 'py-2' : 'py-3'
      }`}
    >
      {/* Gold Gradient Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white transition-colors">
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive 
                      ? 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  <Icon className="text-lg" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-2xl text-gray-900 dark:text-white p-2 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-200">
            <div className="py-2">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = location.pathname === item.path
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-3 transition-all duration-200 ${
                      isActive
                        ? 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30'
                        : 'text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    <Icon className="text-lg" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
