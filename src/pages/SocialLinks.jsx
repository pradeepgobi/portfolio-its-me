import { FaLinkedin, FaGithub } from 'react-icons/fa'

const SocialLinks = () => {
  const socialLinks = [
    {
      id: 1,
      name: 'LinkedIn',
      icon: FaLinkedin,
      username: '@pradeep-gobi-899005330',
      link: 'https://linkedin.com/in/pradeep-gobi-899005330',
      color: '#0A66C2',
    },
    {
      id: 2,
      name: 'GitHub',
      icon: FaGithub,
      username: '@PradeepGobi',
      link: 'https://github.com/pradeepgobi/portfolio-its-me',
      color: '#181717',
    },
  ]

  return (
    <div className="min-h-screen pt-20 bg-transparent">
      <div className="container mx-auto px-4 max-w-5xl py-10">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-amber-400">Connect</h1>
          <div className="w-16 h-1 bg-white mx-auto mt-2 rounded"></div>
        </div>

        {/* 🔥 COMPACT GRID */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gray-800/60 p-4 rounded-lg border border-gray-700 hover:border-amber-400 transition"
              >
                <div
                  className="w-10 h-10 flex items-center justify-center rounded"
                  style={{ backgroundColor: social.color }}
                >
                  <Icon className="text-white text-lg" />
                </div>

                <div>
                  <h3 className="text-white text-sm font-semibold">
                    {social.name}
                  </h3>
                  <p className="text-xs text-gray-400">
                    {social.username}
                  </p>
                </div>
              </a>
            )
          })}
        </div>

        {/* 🔥 SMALL CTA */}
        <div className="text-center bg-gray-800/60 p-5 rounded-lg">
          <p className="text-sm text-gray-300 mb-3">
            Open for collaboration 🤝
          </p>

          <div className="flex justify-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-white rounded"
                  style={{ backgroundColor: social.color }}
                >
                  <Icon /> {social.name}
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