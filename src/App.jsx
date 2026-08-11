import ThreeBackground from './components/ThreeBackground'
import AppRoutes from './routes/AppRoutes'
import CustomCursor from './components/CustomCursor'

function App() {
  return (
    <div className="relative min-h-screen flex flex-col bg-ambient-light overflow-hidden text-slate-800 font-sans">
      
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Subtle Grain Overlay */}
      <div className="noise-overlay"></div>

      {/* Global 3D Background */}
      <ThreeBackground />

      {/* Pages Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <AppRoutes />
      </div>

    </div>
  )
}

export default App