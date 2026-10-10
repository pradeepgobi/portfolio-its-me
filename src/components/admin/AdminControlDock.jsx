import React, { useState } from 'react';
import { FaShieldAlt, FaEdit, FaSave, FaDownload, FaUndo, FaSignOutAlt, FaChevronUp, FaChevronDown, FaCheck } from 'react-icons/fa';
import { useAuth } from '../../contexts/AuthContext';
import { useSiteData } from '../../contexts/SiteDataContext';

export default function AdminControlDock() {
  const { isAuthenticated, isEditorOpen, openEditor, closeEditor, logout } = useAuth();
  const { exportData, resetToDefaults, lastSaved } = useSiteData();
  const [minimized, setMinimized] = useState(false);
  const [savedToast, setSavedToast] = useState(false);

  if (!isAuthenticated) return null;

  const handleQuickPublish = () => {
    setSavedToast(true);
    setTimeout(() => {
      setSavedToast(false);
    }, 2400);
  };

  const handleReset = () => {
    if (window.confirm('Reset all website content back to factory default? Any custom changes will be replaced with defaults.')) {
      resetToDefaults();
      setSavedToast(true);
      setTimeout(() => setSavedToast(false), 2000);
    }
  };

  return (
    <>
      {/* Toast Notification */}
      {savedToast && (
        <div className="fixed top-20 right-6 z-[10000] px-5 py-3 rounded-2xl bg-[#254F7A] text-white text-xs font-mono font-bold shadow-2xl border border-cyan-400 flex items-center gap-2.5 animate-bounce">
          <FaCheck className="text-emerald-400 text-sm" />
          <span>PORTAL PUBLISHED! All changes active across website.</span>
        </div>
      )}

      {/* Floating Control Dock */}
      <aside 
        aria-label="Admin Control Dock"
        className="fixed bottom-6 right-6 z-[9990] flex flex-col items-end gap-2 pointer-events-auto"
      >
        <div className="rounded-2xl bg-[#F2EFE7]/95 border-2 border-[#3368A0]/60 shadow-2xl shadow-[#3368A0]/30 backdrop-blur-xl p-2.5 flex items-center gap-2 font-mono text-xs">
          
          {/* Status Badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#254F7A] text-white">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse inline-block shadow-[0_0_8px_#34d399]" />
            <span className="font-bold text-[11px] tracking-wider uppercase hidden sm:inline">
              PORTAL ACTIVE
            </span>
          </div>

          {!minimized && (
            <>
              {/* Toggle Live Editor Drawer */}
              <button
                onClick={() => (isEditorOpen ? closeEditor() : openEditor('hero'))}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#3368A0] hover:bg-[#254F7A] text-white font-bold transition-all shadow-sm cursor-pointer"
                title="Open In-Website Visual Editor"
              >
                <FaEdit className="text-xs" />
                <span>{isEditorOpen ? 'Close Editor' : 'Edit Website'}</span>
              </button>

              {/* Publish / Save Feedback */}
              <button
                onClick={handleQuickPublish}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-emerald-50 text-emerald-700 border border-emerald-400/60 font-bold transition-all shadow-sm cursor-pointer"
                title="Publish changes to website storage"
              >
                <FaSave className="text-xs" />
                <span className="hidden md:inline">Publish</span>
              </button>

              {/* Export JSON config */}
              <button
                onClick={exportData}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-slate-100 text-[#254F7A] border border-[#3368A0]/30 font-semibold transition-all shadow-sm cursor-pointer"
                title="Export siteData.json for Git commit"
              >
                <FaDownload className="text-xs" />
                <span className="hidden lg:inline">Export</span>
              </button>

              {/* Revert / Reset */}
              <button
                onClick={handleReset}
                className="p-2 rounded-xl bg-white hover:bg-amber-50 text-amber-700 border border-amber-300 font-semibold transition-all shadow-sm cursor-pointer"
                title="Reset to original defaults"
              >
                <FaUndo className="text-xs" />
              </button>

              {/* Logout */}
              <button
                onClick={logout}
                className="flex items-center gap-1 p-2 rounded-xl bg-red-100/80 hover:bg-red-200 text-red-700 transition-all shadow-sm cursor-pointer"
                title="Log out of Admin Portal"
              >
                <FaSignOutAlt className="text-xs" />
              </button>
            </>
          )}

          {/* Minimize toggle */}
          <button
            onClick={() => setMinimized(!minimized)}
            className="p-2 rounded-xl hover:bg-black/5 text-[#254F7A] transition-colors"
            title={minimized ? 'Expand Admin Dock' : 'Minimize Admin Dock'}
          >
            {minimized ? <FaChevronUp className="text-xs" /> : <FaChevronDown className="text-xs" />}
          </button>
        </div>
      </aside>
    </>
  );
}
