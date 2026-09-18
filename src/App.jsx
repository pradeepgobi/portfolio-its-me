import ThreeBackground from './components/ThreeBackground'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden bg-transparent">
      
      {/* Cybersecurity Canvas Background (Rendered at z-0) */}
      <ThreeBackground />

      {/* Page Content (Layered above background at z-10) */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <AppRoutes />
      </div>

    </div>
  )
}

export default App