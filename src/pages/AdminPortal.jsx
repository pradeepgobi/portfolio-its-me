import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaShieldAlt, FaLock, FaEnvelope, FaKey, FaCheckCircle,
  FaExclamationTriangle, FaEdit, FaHome, FaSignOutAlt, FaDownload
} from 'react-icons/fa';
import { useAuth } from '../contexts/AuthContext';
import { useSiteData } from '../contexts/SiteDataContext';
import GlassCard from '../components/ui/GlassCard';

export default function AdminPortal() {
  const navigate = useNavigate();
  const { isAuthenticated, login, logout, openEditor } = useAuth();
  const { exportData } = useSiteData();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      const res = login(email, password);
      setLoading(false);
      if (res.success) {
        navigate('/');
        openEditor('hero');
      } else {
        setError(res.message || 'Invalid credentials');
      }
    }, 450);
  };

  return (
    <div className="min-h-screen pt-28 pb-16 flex items-center justify-center px-4 relative z-10">
      <div className="w-full max-w-md">
        
        {isAuthenticated ? (
          /* Authenticated State */
          <GlassCard className="p-8 !bg-white/80 shadow-2xl border-2 border-emerald-400/50 rounded-2xl text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl shadow-sm">
              <FaShieldAlt />
            </div>

            <div>
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300">
                ● AUTHORIZED SESSION ACTIVE
              </span>
              <h2 className="text-2xl font-bold font-display text-[#254F7A] mt-3">
                Welcome, Pradeep
              </h2>
              <p className="text-xs font-mono text-slate-500 mt-1">
                Admin: pradeepgobi8@gmail.com
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <button
                onClick={() => {
                  navigate('/');
                  openEditor('hero');
                }}
                className="w-full py-3 rounded-xl bg-[#3368A0] hover:bg-[#254F7A] text-white font-mono font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
              >
                <FaEdit /> Launch In-Website Editor
              </button>

              <button
                onClick={() => navigate('/')}
                className="w-full py-2.5 rounded-xl bg-white hover:bg-slate-50 text-[#254F7A] border border-[#3368A0]/30 font-mono font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <FaHome /> Return to Portfolio
              </button>

              <button
                onClick={exportData}
                className="w-full py-2.5 rounded-xl bg-white hover:bg-slate-50 text-[#254F7A] border border-[#3368A0]/30 font-mono font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <FaDownload /> Download siteData.json Backup
              </button>

              <button
                onClick={logout}
                className="w-full py-2 rounded-xl text-red-600 hover:bg-red-50 font-mono text-xs font-bold transition-all cursor-pointer"
              >
                <FaSignOutAlt className="inline mr-1.5" /> Log Out
              </button>
            </div>
          </GlassCard>
        ) : (
          /* Login Form */
          <GlassCard className="p-8 !bg-white/85 shadow-2xl border-2 border-[#3368A0]/40 rounded-2xl space-y-6">
            <div className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#254F7A] text-cyan-300 flex items-center justify-center mx-auto text-xl shadow-md mb-3">
                <FaShieldAlt />
              </div>
              <h2 className="text-2xl font-bold font-display text-[#254F7A]">
                Portal Login
              </h2>
              <p className="text-xs font-mono text-slate-500 mt-1">
                Enter your administrative credentials to edit this website
              </p>
            </div>

            {error && (
              <div className="p-3.5 rounded-xl bg-red-100 border border-red-300 text-red-700 text-xs flex items-center gap-2.5 font-mono">
                <FaExclamationTriangle className="text-sm shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-bold text-[#254F7A] uppercase mb-1.5">
                  Admin Email
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-3.5 text-[#3368A0]">
                    <FaEnvelope className="text-sm" />
                  </span>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@email.com"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F2EFE7]/40 border border-[#3368A0]/30 text-sm font-mono text-[#254F7A] focus:outline-none focus:ring-2 focus:ring-[#3368A0]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-[#254F7A] uppercase mb-1.5">
                  Password
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-3.5 text-[#3368A0]">
                    <FaLock className="text-sm" />
                  </span>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F2EFE7]/40 border border-[#3368A0]/30 text-sm font-mono text-[#254F7A] focus:outline-none focus:ring-2 focus:ring-[#3368A0]"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-[#254F7A] hover:bg-[#3368A0] text-white font-mono font-bold text-xs tracking-wider uppercase shadow-lg shadow-[#3368A0]/25 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                {loading ? 'Authenticating...' : (
                  <>
                    <FaKey /> Access Website Editor
                  </>
                )}
              </button>
            </form>

            <div className="pt-3 border-t border-[#3368A0]/15 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>SECURITY: HIGH</span>
              <button
                onClick={() => navigate('/')}
                className="text-[#3368A0] hover:underline"
              >
                ← Back to Home
              </button>
            </div>
          </GlassCard>
        )}

      </div>
    </div>
  );
}
