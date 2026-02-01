import { FaDownload } from 'react-icons/fa'

/**
 * Resume Page
 * Display and download resume PDF
 */
const Resume = () => {
  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a')
    link.href = '/pradeep.pdf'
    link.download = 'Pradeep_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-12">
        
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-3">
            My Resume
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-300 max-w-xl mx-auto">
            Download my professional resume
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors duration-300">
          {/* Download Button */}
          <div className="flex justify-center mb-6">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-lg font-semibold hover:from-amber-600 hover:to-yellow-700 transition-all shadow-lg"
            >
              <FaDownload />
              Download Resume PDF
            </button>
          </div>

          {/* Resume Image Preview - Both Pages in Single Scrollable Box */}
          <div className="border-2 border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden max-w-2xl mx-auto bg-white dark:bg-gray-900 shadow-sm transition-colors duration-300">
            <div className="max-h-64 overflow-y-auto">
              <img 
                src="/pradeep-page1.jpg" 
                alt="Resume Page 1 - Pradeep" 
                className="w-full h-auto mb-2"
              />
              <img 
                src="/pradeep-page2.jpg" 
                alt="Resume Page 2 - Pradeep" 
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Info Section */}
          <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg transition-colors duration-300">
            <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
              📄 This resume is regularly updated with my latest experience and skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
