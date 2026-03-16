import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const About = () => {
  return (
    <div className="min-h-screen pt-20 bg-transparent">
      <div className="container mx-auto px-4 max-w-5xl py-10">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-amber-400">About Me</h1>
          <div className="w-16 h-1 bg-white mx-auto mt-2 rounded"></div>
        </div>

        {/* 🔥 PROFILE SECTION (COMPACT) */}
        <div className="flex flex-col sm:flex-row items-center gap-5 bg-gray-800/60 p-5 rounded-lg mb-8">

          <img
            src="/profile.jpg"
            alt="profile"
            className="w-28 h-28 rounded-full object-cover border-2 border-amber-400"
          />

          <div className="text-gray-300 text-center sm:text-left">
            <h2 className="text-xl font-semibold text-white mb-1">
              Hi, I'm Pradeep 👋
            </h2>
            <p className="text-sm">
              Cybersecurity Professional focused on Network Security & VAPT.
            </p>
          </div>
        </div>

        {/* 🔥 GRID SECTION */}
        <div className="grid sm:grid-cols-2 gap-5">

          {/* Journey */}
          <div className="bg-gray-800/60 p-4 rounded-lg">
            <h3 className="text-amber-400 font-semibold mb-2">Journey</h3>
            <p className="text-sm text-gray-300">
              Working on network security, vulnerability testing, and penetration testing.
            </p>
          </div>

          {/* Education */}
          <div className="bg-gray-800/60 p-4 rounded-lg">
            <h3 className="text-amber-400 font-semibold mb-2">Education</h3>
            <p className="text-sm text-gray-300">
              B.Tech IT (2023-2027) - Anna University <br />
              CGPA: 6.8
            </p>
          </div>

          {/* Skills */}
          <div className="bg-gray-800/60 p-4 rounded-lg">
            <h3 className="text-amber-400 font-semibold mb-2">Interests</h3>
            <div className="flex flex-wrap gap-2">
              {['Security', 'Networking', 'Cricket', 'Tech'].map((item) => (
                <span key={item} className="text-xs bg-amber-500/10 text-amber-300 px-2 py-1 rounded">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gray-800/60 p-4 rounded-lg space-y-3">
            <h3 className="text-amber-400 font-semibold">Contact</h3>

            <div className="flex items-center gap-2 text-sm text-gray-300">
              <FaEnvelope /> pradeepgobi8@gmail.com
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-300">
              <FaPhone /> +91 9025348451
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-300">
              <FaMapMarkerAlt /> Namakkal
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default About