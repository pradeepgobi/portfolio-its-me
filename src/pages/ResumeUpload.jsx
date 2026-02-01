import { useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import { FaUpload, FaCheckCircle, FaSpinner } from 'react-icons/fa'

/**
 * Resume Upload Page (Admin)
 * Upload new resume PDFs to MongoDB
 */
const ResumeUpload = () => {
  const [file, setFile] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile)
      setError('')
      setSuccess(false)
    } else {
      setError('Please select a valid PDF file')
      setFile(null)
    }
  }

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file first')
      return
    }

    setUploading(true)
    setError('')
    setSuccess(false)

    const formData = new FormData()
    formData.append('resume', file)

    try {
      const response = await fetch('http://localhost:5000/api/resume/upload', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setSuccess(true)
        setFile(null)
        // Reset file input
        document.getElementById('file-input').value = ''
      } else {
        setError(data.message || 'Upload failed')
      }
    } catch (err) {
      setError('Error uploading file: ' + err.message)
    } finally {
      setUploading(false)
    }
  }

  return (
    <PageTransition>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-strong rounded-3xl p-8 w-full"
        >
          <h1 className="text-4xl font-bold gradient-text mb-6 text-center">
            Upload Resume
          </h1>
          
          <p className="text-gray-400 text-center mb-8">
            Upload a new resume PDF. This will replace the current active resume.
          </p>

          {/* File Input */}
          <div className="mb-6">
            <label 
              htmlFor="file-input"
              className="block text-gray-300 mb-3 font-semibold"
            >
              Select PDF File
            </label>
            <input
              id="file-input"
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
            />
            {file && (
              <p className="mt-2 text-sm text-green-400">
                Selected: {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
              </p>
            )}
          </div>

          {/* Upload Button */}
          <motion.button
            whileHover={{ scale: uploading ? 1 : 1.02 }}
            whileTap={{ scale: uploading ? 1 : 0.98 }}
            onClick={handleUpload}
            disabled={uploading || !file}
            className={`w-full py-4 rounded-lg font-semibold text-white flex items-center justify-center gap-3 transition-all ${
              uploading || !file
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-gradient-to-r from-purple-500 to-blue-500 hover:shadow-2xl hover:shadow-purple-500/50'
            }`}
          >
            {uploading ? (
              <>
                <FaSpinner className="animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <FaUpload />
                Upload Resume
              </>
            )}
          </motion.button>

          {/* Success Message */}
          {success && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-green-500/20 border border-green-500 rounded-lg flex items-center gap-3"
            >
              <FaCheckCircle className="text-green-400 text-xl" />
              <p className="text-green-400">Resume uploaded successfully!</p>
            </motion.div>
          )}

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-red-500/20 border border-red-500 rounded-lg"
            >
              <p className="text-red-400">{error}</p>
            </motion.div>
          )}

          {/* Instructions */}
          <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
            <h3 className="text-blue-400 font-semibold mb-2">Instructions:</h3>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Only PDF files are accepted</li>
              <li>• Maximum file size: 5MB</li>
              <li>• Uploading a new resume will replace the current one</li>
              <li>• Make sure MongoDB is running before uploading</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  )
}

export default ResumeUpload
