import { Navigate, Route, Routes } from 'react-router-dom'
import Navigation from '../components/Navigation'
import About from '../pages/About'
import Certifications from '../pages/Certifications'
import CodingProfiles from '../pages/CodingProfiles'
import FeaturedProject from '../pages/FeaturedProject'
import Hero from '../pages/Hero'
import Projects from '../pages/Projects'
import Resume from '../pages/Resume'
import ResumeUpload from '../pages/ResumeUpload'
import Skills from '../pages/Skills'
import SocialLinks from '../pages/SocialLinks'

const AppRoutes = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/featured-project" element={<FeaturedProject />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/coding-profiles" element={<CodingProfiles />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/resume-upload" element={<ResumeUpload />} />
        <Route path="/social" element={<SocialLinks />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default AppRoutes
