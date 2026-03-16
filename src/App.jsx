import AnimatedBackground from './components/AnimatedBackground'
import AppRoutes from './routes/AppRoutes' // your routes file

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900">

      {/* 🔥 GLOBAL BACKGROUND */}
      <AnimatedBackground />

      {/* 🔥 ALL PAGES CONTENT */}
      <div className="relative z-10">
        <AppRoutes />
      </div>

    </div>
  )
}

export default App