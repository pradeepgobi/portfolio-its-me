import { FaArrowLeft, FaCalendar, FaAward } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Certifications = () => {
  const navigate = useNavigate()
  const [selectedImage, setSelectedImage] = useState(null)

  const certifications = [
    {
      id: 1,
      title: 'Ethical Hacker',
      issuer: 'Cisco Networking Academy',
      date: 'Jan 18, 2026',
      description: 'Ethical hacking & penetration testing methodology',
      skills: ['Penetration Testing', 'Vulnerability Scanning', 'Social Engineering'],
      image: '/cert/1.png',
      certificateId: 'Verified - Cisco Networking Academy'
    },
    {
      id: 2,
      title: 'Front End Web Developer',
      issuer: 'Infosys Springboard',
      date: 'June 28, 2025',
      description: 'Modern web development with React & JavaScript',
      skills: ['HTML & CSS', 'JavaScript', 'React'],
      image: '/cert/3.png',
      certificateId: 'Verified - https://verify.onwingspan.com'
    },
    {
      id: 3,
      title: 'Networking Basics',
      issuer: 'Cisco Networking Academy',
      date: 'Feb 21, 2026',
      description: 'Network fundamentals & infrastructure',
      skills: ['OSI Model', 'TCP/IP', 'IP Addressing'],
      image: '/cert/2.png',
      certificateId: 'Cisco Networking Academy'
    },
    {
      id: 4,
      title: 'Network Defense',
      issuer: 'Cisco Networking Academy',
      date: 'Mar 26, 2026',
      description: 'Network security & defense mechanisms',
      skills: ['Firewall', 'VPN', 'Threat Analysis'],
      image: '/cert/5.png',
      certificateId: 'Cisco Networking Academy'
    },
    {
      id: 5,
      title: 'Endpoint Security',
      issuer: 'Cisco Networking Academy',
      date: 'Mar 20, 2026',
      description: 'Endpoint protection & threat mitigation',
      skills: ['Endpoint Protection', 'Malware Removal', 'Access Control'],
      image: '/cert/7.png',
      certificateId: 'Cisco Networking Academy'
    },
    {
      id: 6,
      title: 'Junior Cybersecurity Analyst',
      issuer: 'Cisco Networking Academy',
      date: 'Apr 22, 2026',
      description: 'Cybersecurity analyst career path exam',
      skills: ['Threat Detection', 'Incident Response', 'Risk Management'],
      image: '/cert/6.png',
      certificateId: 'Cert ID: 895f446e-6a22-42ec-8651-9ead57758132'
    },
    {
      id: 7,
      title: 'Typewriting English',
      issuer: 'Government of Tamil Nadu',
      date: 'August 2023',
      description: '30 WPM typing proficiency (First Class)',
      skills: ['Typing', 'Data Entry', 'Office Work'],
      image: '/cert/4.png',
      certificateId: 'GTE 1391464'
    }
  ]

  return (
    <div className="min-h-screen pt-20 bg-transparent">
      <div className="container mx-auto px-4 max-w-6xl py-12">

        {/* Header */}
        <div className="mb-10 text-center">
          <button
            onClick={() => navigate('/resume')}
            className="flex items-center gap-2 text-amber-400 mb-6"
          >
            <FaArrowLeft /> Back
          </button>

          <h1 className="text-4xl font-bold text-white mb-2">
            Certifications
          </h1>
          <p className="text-gray-400">
            My professional certifications
          </p>
        </div>

        {/* 🔥 COMPACT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedImage(cert.image)}
              className="bg-gray-800/60 rounded-lg p-4 hover:scale-[1.03] cursor-pointer transition border border-gray-700 hover:border-amber-400"
            >
              {/* Top */}
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-14 h-14 rounded-md object-cover"
                />

                <div>
                  <h2 className="text-lg text-white font-semibold leading-tight">
                    {cert.title}
                  </h2>
                  <p className="text-xs text-amber-400 flex items-center gap-1">
                    <FaAward /> {cert.issuer}
                  </p>
                </div>
              </div>

              {/* Date */}
              <p className="text-xs text-gray-400 flex items-center gap-1 mb-2">
                <FaCalendar /> {cert.date}
              </p>

              {/* Description */}
              <p className="text-sm text-gray-300 mb-3 line-clamp-2">
                {cert.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-3">
                {cert.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs bg-amber-500/10 text-amber-300 px-2 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* ID */}
              <p className="text-[10px] text-gray-500 truncate">
                {cert.certificateId}
              </p>
            </div>
          ))}
        </div>

        {/* 🔥 IMAGE MODAL */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            
            {/* Close */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 text-white text-3xl"
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={selectedImage}
              alt="Certificate"
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
            />
          </div>
        )}

      </div>
    </div>
  )
}

export default Certifications