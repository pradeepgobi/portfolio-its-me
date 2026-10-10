import React, { useState } from 'react';
import { FaShieldAlt, FaLock, FaEnvelope, FaTimes, FaKey, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import { useAuth } from '../../contexts/AuthContext';

export default function AdminLoginModal() {
  const { isLoginModalOpen, closeLoginModal, login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isLoginModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      const res = login(email, password);
      setLoading(false);
      if (res.success) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 1200);
      } else {
        setError(res.message || 'Invalid credentials');
      }
    }, 450);
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={closeLoginModal}></div>

      {/* Modal Dialog */}
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-[#F2EFE7] border-2 border-[#3368A0]/40 shadow-2xl shadow-[#3368A0]/30 z-10">
        {/* Terminal Header */}
        <div className="bg-[#254F7A] px-5 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center text-cyan-300">
              <FaShieldAlt className="text-base" />
            </div>
            <div>
              <h3 className="font-mono text-sm font-bold tracking-wider text-white">
                ADMIN PORTAL // LOGIN
              </h3>
              <p className="text-[11px] font-mono text-cyan-200/80">
                SYSTEM VERIFICATION GATEWAY
              </p>
            </div>
          </div>
          <button
            onClick={closeLoginModal}
            className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center transition-colors"
          >
            <FaTimes className="text-sm" />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
          {error && (
            <div className="p-3.5 rounded-xl bg-red-100/90 border border-red-300 text-red-700 text-xs flex items-center gap-2.5 animate-shake">
              <FaExclamationTriangle className="text-sm shrink-0 text-red-500" />
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div className="p-3.5 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs flex items-center gap-2.5">
              <FaCheckCircle className="text-sm shrink-0 text-emerald-600" />
              <span>Identity Verified. Launching Live Website Editor...</span>
            </div>
          )}

          {/* Email input */}
          <div>
            <label className="block text-xs font-mono font-bold text-[#254F7A] uppercase tracking-wider mb-2">
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
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#3368A0]/30 text-[#254F7A] text-sm focus:outline-none focus:ring-2 focus:ring-[#3368A0]/40 transition-all font-mono"
              />
            </div>
          </div>

          {/* Password input */}
          <div>
            <label className="block text-xs font-mono font-bold text-[#254F7A] uppercase tracking-wider mb-2">
              Passphrase
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
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#3368A0]/30 text-[#254F7A] text-sm focus:outline-none focus:ring-2 focus:ring-[#3368A0]/40 transition-all font-mono"
              />
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading || success}
            className="w-full py-3 rounded-xl bg-[#254F7A] hover:bg-[#3368A0] text-white font-mono font-bold text-sm tracking-wide shadow-lg shadow-[#3368A0]/30 flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-60 cursor-pointer"
          >
            {loading ? (
              <span>VERIFYING CREDENTIALS...</span>
            ) : success ? (
              <>
                <FaCheckCircle /> ACCESS GRANTED
              </>
            ) : (
              <>
                <FaKey /> AUTHENTICATE & LAUNCH EDITOR
              </>
            )}
          </button>

          {/* Security footnote */}
          <div className="pt-2 border-t border-[#3368A0]/15 flex items-center justify-between text-[11px] font-mono text-[#3368A0]/70">
            <span>PORTAL PROTOCOL: TLS 1.3</span>
            <span>ENV: PRADEEP_SEC_AUTH</span>
          </div>
        </form>
      </div>
    </div>
  );
}
