import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const ENV_EMAIL = import.meta.env.VITE_ADMIN_EMAIL || 'pradeepgobi8@gmail.com';
const ENV_PASS = import.meta.env.VITE_ADMIN_PASS || 'pradeep@2006#';

const AUTH_STORAGE_KEY = 'portfolio_admin_session';

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      return localStorage.getItem(AUTH_STORAGE_KEY) === 'true';
    } catch (e) {
      return false;
    }
  });

  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [activeEditorTab, setActiveEditorTab] = useState('hero');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Global keyboard shortcut to open Admin Modal: Ctrl + Shift + A or Alt + A
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'a') || (e.altKey && e.key.toLowerCase() === 'a')) {
        e.preventDefault();
        if (isAuthenticated) {
          setIsEditorOpen((prev) => !prev);
        } else {
          setIsLoginModalOpen((prev) => !prev);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAuthenticated]);

  const login = (email, pass) => {
    const cleanEmail = (email || '').trim().toLowerCase();
    const cleanTargetEmail = (ENV_EMAIL || '').trim().toLowerCase();
    const cleanPass = (pass || '').trim();
    const cleanTargetPass = (ENV_PASS || '').trim();

    if (cleanEmail === cleanTargetEmail && cleanPass === cleanTargetPass) {
      setIsAuthenticated(true);
      try {
        localStorage.setItem(AUTH_STORAGE_KEY, 'true');
      } catch (e) {}
      setIsLoginModalOpen(false);
      setIsEditorOpen(true);
      return { success: true };
    }
    return { success: false, message: 'Invalid Admin Email or Password' };
  };

  const logout = () => {
    setIsAuthenticated(false);
    setIsEditorOpen(false);
    try {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    } catch (e) {}
  };

  const openEditor = (tab = 'hero') => {
    setActiveEditorTab(tab);
    setIsEditorOpen(true);
  };

  const closeEditor = () => {
    setIsEditorOpen(false);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isEditorOpen,
        activeEditorTab,
        setActiveEditorTab,
        isLoginModalOpen,
        login,
        logout,
        openEditor,
        closeEditor,
        openLoginModal,
        closeLoginModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
