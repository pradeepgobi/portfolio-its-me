import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Hero from './pages/Hero'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import SocialLinks from './pages/SocialLinks'
import ResumeUpload from './pages/ResumeUpload'

function App() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 transition-colors duration-300 p-4">
      {/* Frame Container - No border, just scrollbar */}
      <div className="h-[calc(100vh-2rem)] overflow-hidden rounded-3xl shadow-2xl bg-gray-900">
        {/* Navigation */}
        <Navigation />
        
        {/* Page Content - Scrollable */}
        <div className="h-full overflow-y-auto">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/social" element={<SocialLinks />} />
            <Route path="/admin/upload" element={<ResumeUpload />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
