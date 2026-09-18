import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaCode, FaBriefcase, FaFileAlt, FaEnvelope, FaBars, FaTimes, FaSun, FaMoon, FaArrowRight } from 'react-icons/fa';

// Palette: #3368A0 · #66A3BF · #C8DFDB · #F2EFE7
const NAVY  = '#3368A0';
const CREAM = '#F2EFE7';

const NAV_ITEMS = [
  { path: '/',         icon: FaHome,      label: 'Home'     },
  { path: '/about',    icon: FaUser,      label: 'About'    },
  { path: '/skills',   icon: FaCode,      label: 'Skills'   },
  { path: '/projects', icon: FaBriefcase, label: 'Projects' },
  { path: '/resume',   icon: FaFileAlt,   label: 'Resume'   },
  { path: '/social',   icon: FaEnvelope,  label: 'Contact'  },
];

export default function Navigation() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location              = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <>
      {/* ── fixed top bar ── */}
      <nav style={{
        position: 'fixed', top: 16, left: 0, right: 0, zIndex: 1000,
        display: 'flex', justifyContent: 'center', padding: '0 20px',
      }}>
        <div style={{
          width: '100%', maxWidth: 1100,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '10px 22px',
          borderRadius: 40,
          background: 'rgba(242,239,231,0.93)',
          boxShadow: '0 4px 32px rgba(51,104,160,0.15)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.80)',
          minHeight: 64,
        }}>

          {/* Logo */}
          <Link to="/" style={{ display:'flex', alignItems:'center', gap:10, textDecoration:'none', flexShrink:0 }}>
            <div style={{
              width:44, height:44, borderRadius:'50%',
              background:'#3368A0', display:'flex', alignItems:'center', justifyContent:'center',
              boxShadow:'0 4px 12px rgba(51,104,160,0.35)',
            }}>
              <span style={{ color:'#fff', fontWeight:900, fontSize:20, fontFamily:'Outfit,sans-serif' }}>P</span>
            </div>
            <span style={{ color:'#3368A0', fontWeight:900, fontSize:20, fontFamily:'Outfit,sans-serif', letterSpacing:'-0.5px' }}>Portfolio</span>
          </Link>

          {/* Desktop nav */}
          <div style={{ display:'flex', alignItems:'center', gap:4 }} className="nav-desktop">
            {NAV_ITEMS.map(({ path, icon: Icon, label }) => {
              const active = location.pathname === path;
              return (
                <Link key={path} to={path} style={{
                  display:'flex', alignItems:'center', gap:7,
                  padding:'9px 18px', borderRadius:30,
                  background: active ? '#3368A0' : 'transparent',
                  color: active ? '#fff' : '#3368A0',
                  fontWeight:600, fontSize:14,
                  textDecoration:'none',
                  transition:'all 0.2s',
                  whiteSpace:'nowrap',
                }}>
                  <Icon style={{ fontSize:14, color: active ? '#fff' : '#164E82' }} />
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Right controls */}
          <div style={{ display:'flex', alignItems:'center', gap:10, flexShrink:0 }} className="nav-right">
            {/* Sun/Moon toggle */}
            <div style={{
              display:'flex', alignItems:'center', gap:4,
              background:'rgba(255,255,255,0.65)', borderRadius:30,
              padding:4, border:'1px solid rgba(255,255,255,0.85)',
            }}>
              <div style={{ width:32, height:32, borderRadius:'50%', background:'#fff', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 2px 8px rgba(0,0,0,0.10)' }}>
                <FaSun style={{ color:'#F59E0B', fontSize:13 }} />
              </div>
              <div style={{ width:32, height:32, borderRadius:'50%', background:'#3368A0', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <FaMoon style={{ color:'#fff', fontSize:13 }} />
              </div>
            </div>

            {/* Let's Talk */}
            <Link to="/social" style={{
              display:'flex', alignItems:'center', gap:7,
              padding:'10px 20px', borderRadius:30,
              background:'#3368A0', color:'#fff',
              fontWeight:700, fontSize:14, textDecoration:'none',
              boxShadow:'0 4px 16px rgba(51,104,160,0.35)',
              whiteSpace:'nowrap',
            }}>
              Let's Talk <FaArrowRight style={{ fontSize:11 }} />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(v => !v)}
            className="nav-hamburger"
            style={{
              display:'none', background:'none', border:'none',
              color:'#3368A0', fontSize:22, cursor:'pointer', padding:6,
            }}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div style={{
            position:'absolute', top:82, left:20, right:20,
            borderRadius:24, overflow:'hidden',
            background:'rgba(242,239,231,0.97)',
            boxShadow:'0 8px 40px rgba(51,104,160,0.20)',
            border:'1px solid rgba(255,255,255,0.80)',
            zIndex:999,
          }}>
            <div style={{ padding:16, display:'flex', flexDirection:'column', gap:6 }}>
              {NAV_ITEMS.map(({ path, icon: Icon, label }) => {
                const active = location.pathname === path;
                return (
                  <Link key={path} to={path} style={{
                    display:'flex', alignItems:'center', gap:12,
                    padding:'12px 16px', borderRadius:16,
                    background: active ? '#3368A0' : 'transparent',
                    color: active ? '#fff' : '#3368A0',
                    fontWeight:600, textDecoration:'none',
                  }}>
                    <Icon /> {label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Responsive: hide desktop nav on small screens */}
      <style>{`
        @media (max-width: 1023px) {
          .nav-desktop { display: none !important; }
          .nav-right   { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
