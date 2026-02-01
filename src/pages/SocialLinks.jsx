import { 
  FaLinkedin, FaGithub
} from 'react-icons/fa'

/**
 * Social Links Page
 * Display social media profiles
 */
const SocialLinks = () => {
  const socialLinks = [
    {
      id: 1,
      name: 'LinkedIn',
      icon: FaLinkedin,
      username: '@pradeep-gobi-899005330',
      link: 'https://linkedin.com/in/pradeep-gobi-899005330',
      color: '#0A66C2',
      description: 'Professional network & career',
    },
    {
      id: 2,
      name: 'GitHub',
      icon: FaGithub,
      username: '@PradeepGobi',
      link: 'https://github.com/pradeepgobi',
      color: '#181717',
      description: 'Open source contributions & projects',
    },
  ]

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
            Connect With Me
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let's stay connected across different platforms
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl hover:shadow-amber-500/50 hover:scale-105 transition-all duration-300 p-8 group"
              >
                <div className="flex items-center gap-6">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl text-white shrink-0 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: social.color }}
                  >
                    <Icon />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      {social.name}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">{social.username}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{social.description}</p>
                  </div>

                  <div className="text-gray-400 dark:text-gray-500 text-2xl group-hover:translate-x-2 transition-transform">
                    →
                  </div>
                </div>
              </a>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 text-center transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/30">
          <div className="text-5xl mb-4">🤝</div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Let's Collaborate!</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
            Feel free to reach out on any of these platforms!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.slice(0, 2).map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-amber-500/30 hover:scale-105"
                  style={{ backgroundColor: social.color }}
                >
                  <Icon className="text-xl" />
                  Follow on {social.name}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialLinks
