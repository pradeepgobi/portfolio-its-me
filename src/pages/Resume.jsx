import { FaDownload, FaAward } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Resume = () => {
  const navigate = useNavigate()

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/pradeep.pdf'
    link.download = 'Pradeep_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen pt-20 bg-transparent">
      <div className="container mx-auto px-4 max-w-5xl py-10">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-amber-400">Resume</h1>
          <div className="w-16 h-1 bg-white mx-auto mt-2 rounded"></div>
        </div>

        {/* 🔥 BUTTONS */}
        <div className="flex justify-center gap-3 mb-6 flex-wrap">
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-white rounded text-sm hover:bg-amber-600"
          >
            <FaDownload /> Download
          </button>

          <button
            onClick={() => navigate('/certifications')}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
          >
            <FaAward /> Certifications
          </button>
        </div>

        {/* 🔥 SMALL PREVIEW */}
        <div className="flex justify-center">
          <img
            src="/pradeep-page1.png"
            alt="Resume"
            className="w-full max-w-xl rounded shadow-md border border-gray-700"
          />
        </div>

        {/* Info */}
        <p className="text-center text-gray-500 text-xs mt-4">
          Updated resume preview
        </p>

      </div>
    </div>
  )
}

export default Resume