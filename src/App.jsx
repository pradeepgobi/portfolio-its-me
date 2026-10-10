import ThreeBackground from './components/ThreeBackground'
import AppRoutes from './routes/AppRoutes'
import { SiteDataProvider } from './contexts/SiteDataContext'
import { AuthProvider } from './contexts/AuthContext'
import AdminControlDock from './components/admin/AdminControlDock'
import LiveWebsiteEditor from './components/admin/LiveWebsiteEditor'
import AdminLoginModal from './components/admin/AdminLoginModal'

function App() {
  return (
    <SiteDataProvider>
      <AuthProvider>
        <div className="relative min-h-screen flex flex-col overflow-x-hidden bg-transparent">
          
          {/* Cybersecurity Canvas Background (Rendered at z-0) */}
          <ThreeBackground />

          {/* Page Content (Layered above background at z-10) */}
          <div className="relative z-10 flex flex-col min-h-screen">
            <AppRoutes />
          </div>

          {/* In-Website Admin & Live Editor System */}
          <AdminControlDock />
          <LiveWebsiteEditor />
          <AdminLoginModal />

        </div>
      </AuthProvider>
    </SiteDataProvider>
  )
}

export default App