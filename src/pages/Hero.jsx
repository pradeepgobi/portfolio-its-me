import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  FaShieldAlt, FaDownload, FaEye, FaGithub, FaLinkedin, FaTwitter, FaEnvelope,
  FaTrophy, FaCode, FaLock, FaNetworkWired, FaCheckCircle, FaTerminal
} from 'react-icons/fa';
import { BiShield } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import gsap from 'gsap';

/* ═══════════════════════════════════════
   PALETTE: #3368A0 · #66A3BF · #C8DFDB · #F2EFE7
═══════════════════════════════════════ */
const C = {
  navy:   '#3368A0',
  navyDk: '#254F7A',
  mid:    '#66A3BF',
  light:  '#C8DFDB',
  cream:  '#F2EFE7',
  white:  '#FFFFFF',
};

const G_CREAM = { background:`rgba(242,239,231,0.93)`, backdropFilter:'blur(18px)', WebkitBackdropFilter:'blur(18px)', border:`1px solid rgba(255,255,255,0.80)` };
const G_NAVY  = { background:`rgba(51,104,160,0.95)`,  backdropFilter:'blur(18px)', WebkitBackdropFilter:'blur(18px)', border:`1px solid rgba(255,255,255,0.18)` };
const G_LIGHT = { background:`rgba(200,223,219,0.50)`, backdropFilter:'blur(14px)', WebkitBackdropFilter:'blur(14px)', border:`1px solid rgba(255,255,255,0.45)` };

/* ── Name Typewriter for "PRADEEP G" ── */
function useNameTypewriter(target = 'PRADEEP G') {
  const [txt, setTxt] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let t;
    if (!deleting) {
      if (txt.length < target.length) {
        t = setTimeout(() => {
          setTxt(target.slice(0, txt.length + 1));
        }, 130);
      } else {
        t = setTimeout(() => {
          setDeleting(true);
        }, 3600);
      }
    } else {
      if (txt.length > 0) {
        t = setTimeout(() => {
          setTxt(target.slice(0, txt.length - 1));
        }, 65);
      } else {
        t = setTimeout(() => {
          setDeleting(false);
        }, 500);
      }
    }
    return () => clearTimeout(t);
  }, [txt, deleting, target]);

  return txt;
}

/* ── Typewriter (NO cursor) ── */
function useTypewriter(words) {
  const [txt, setTxt] = useState(words[0]);
  const s = useRef({ w:0, c:words[0].length, del:false, pause:false });
  useEffect(() => {
    let t;
    const tick = () => {
      const { w, c, del, pause } = s.current;
      if (pause) { s.current.pause = false; t = setTimeout(tick, 2000); return; }
      const word = words[w];
      if (!del) {
        setTxt(word.slice(0, c + 1));
        if (c + 1 === word.length) { s.current = { w, c: c+1, del:true, pause:true };  t = setTimeout(tick, 80); }
        else                        { s.current = { ...s.current, c: c + 1 };           t = setTimeout(tick, 80); }
      } else {
        setTxt(word.slice(0, c - 1));
        if (c - 1 === 0) { s.current = { w:(w+1)%words.length, c:0, del:false, pause:false }; t = setTimeout(tick, 80); }
        else             { s.current = { ...s.current, c: c - 1 };                             t = setTimeout(tick, 42); }
      }
    };
    t = setTimeout(tick, 2200);
    return () => clearTimeout(t);
  }, [words]);
  return txt;
}

/* ── Floating card ── */
const Card = ({ icon:Icon, title, sub, dark, pos }) => (
  <div style={{ position:'absolute', display:'flex', alignItems:'center', gap:10, padding:'10px 14px', borderRadius:16, minWidth:176, boxShadow:'0 10px 36px rgba(51,104,160,0.26)', zIndex:30, ...(dark ? G_NAVY : G_CREAM), ...pos }}>
    <div style={{ width:36, height:36, borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, background: dark ? 'rgba(255,255,255,0.15)' : `rgba(51,104,160,0.12)` }}>
      <Icon style={{ fontSize:16, color: dark ? C.cream : C.navy }} />
    </div>
    <div>
      <p style={{ fontWeight:700, fontSize:13, lineHeight:1.2, color: dark ? C.white : C.navy }}>{title}</p>
      <p style={{ fontSize:11, color: dark ? '#bfdbfe' : C.mid }}>{sub}</p>
    </div>
  </div>
);

/* ── Social button ── */
const Soc = ({ icon:Icon, href }) => (
  <a href={href} target="_blank" rel="noreferrer"
    style={{ width:44, height:44, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', ...G_CREAM, boxShadow:'0 4px 14px rgba(51,104,160,0.18)', color:C.navy, transition:'all 0.2s', textDecoration:'none' }}
    onMouseEnter={e=>{ e.currentTarget.style.background=C.navy; e.currentTarget.style.color='#fff'; }}
    onMouseLeave={e=>{ e.currentTarget.style.background='rgba(242,239,231,0.93)'; e.currentTarget.style.color=C.navy; }}>
    <Icon style={{ fontSize:15 }} />
  </a>
);

export default function Hero() {
  const ref       = useRef(null);
  const typedName = useNameTypewriter('PRADEEP G');
  const role      = useTypewriter(['Cybersecurity Engineer','Penetration Tester','CTF Player','Web Developer']);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hf', { opacity:0, y:22 }, { opacity:1, y:0, duration:0.60, stagger:0.10, ease:'power3.out', delay:0.15 });
      gsap.fromTo('.hr', { opacity:0, scale:0.94 }, { opacity:1, scale:1, duration:0.80, ease:'power2.out', delay:0.45 });
    }, ref);
    return () => ctx.revert();
  }, []);

  const stats = [
    { Icon:BiShield, num:'2+',    lbl:'Years Learning' },
    { Icon:FaCode,   num:'3',     lbl:'Projects' },
    { Icon:FaTrophy, num:'100+',  lbl:'CTF Challenges' },
    { Icon:FiUsers,  num:'Focus', lbl:'Security' },
  ];

  return (
    <div ref={ref} style={{ minHeight:'100vh', paddingTop:76, paddingBottom:24, display:'flex', flexDirection:'column', position:'relative', overflow:'hidden' }}>


      {/* ═══════════ TWO-COLUMN ═══════════ */}
      <div style={{ maxWidth:1240, width:'100%', margin:'0 auto', padding:'0 28px', display:'flex', alignItems:'center', gap:28, flex:1, flexWrap:'wrap' }}>

        {/* ══ LEFT ══ */}
        <div style={{ flex:'1 1 440px', maxWidth:560, display:'flex', flexDirection:'column', justifyContent:'center', paddingTop:16 }}>

          {/* Eyebrow */}
          <div className="hf" style={{ display:'flex', alignItems:'center', gap:10, marginBottom:16 }}>
            <span style={{ width:7, height:7, borderRadius:'50%', background:'#fff', boxShadow:'0 0 10px rgba(255,255,255,0.9)', display:'inline-block' }}/>
            <span style={{ color:'#fff', fontWeight:700, fontSize:11.5, letterSpacing:'0.25em', textTransform:'uppercase' }}>Welcome To My Portfolio</span>
          </div>

          {/* Heading with Typewriter for PRADEEP G */}
          <div className="hf" style={{ marginBottom:10 }}>
            <h1 style={{ fontFamily:'Outfit,sans-serif', fontWeight:900, lineHeight:1.02, margin:0 }}>
              <span style={{ display:'block', color:'#fff', fontSize:'clamp(2.6rem,6vw,4.8rem)' }}>Hi, I'm</span>
              <span style={{ display:'inline-flex', alignItems:'center', color:C.navyDk, fontSize:'clamp(2.6rem,6vw,4.8rem)', letterSpacing:'0.02em', textShadow:'0 2px 14px rgba(255,255,255,0.45)', minHeight:'1.05em' }}>
                {typedName}
                <span className="blink-cursor" style={{ color:C.navyDk, marginLeft:4, fontWeight:300, opacity:0.85 }}>|</span>
              </span>
            </h1>
          </div>

          {/* Role — NO cursor */}
          <p className="hf" style={{ color:'#fff', fontWeight:700, fontSize:13.5, letterSpacing:'0.22em', textTransform:'uppercase', marginBottom:16, minHeight:20 }}>
            {role}
          </p>

          {/* Description */}
          <p className="hf" style={{ color:'rgba(255,255,255,0.94)', fontSize:16.5, lineHeight:1.58, marginBottom:28, maxWidth:500 }}>
            Specializing in Network Security and VAPT. I build and break systems to ensure they are robust, secure, and ready for real-world challenges.
          </p>

          {/* Buttons */}
          <div className="hf" style={{ display:'flex', flexWrap:'wrap', gap:12, marginBottom:28 }}>
            <Link to="/projects" style={{ display:'flex', alignItems:'center', gap:10, padding:'13px 24px', borderRadius:30, background:C.navy, color:'#fff', fontWeight:700, fontSize:14.5, textDecoration:'none', boxShadow:`0 6px 22px rgba(51,104,160,0.45)`, minWidth:180 }}>
              <FaShieldAlt style={{ fontSize:13 }}/> View Projects →
            </Link>
            <a href="/pradeep.pdf" download="Pradeep_G_Resume.pdf" style={{ display:'flex', alignItems:'center', gap:9, padding:'13px 22px', borderRadius:30, ...G_CREAM, color:C.navy, fontWeight:700, fontSize:14.5, textDecoration:'none', boxShadow:'0 6px 22px rgba(51,104,160,0.18)', minWidth:180 }}>
              <FaDownload style={{ fontSize:13 }}/> Download Resume
            </a>
            <Link to="/resume" style={{ display:'flex', alignItems:'center', gap:8, padding:'13px 20px', borderRadius:30, background:'rgba(255,255,255,0.85)', color:C.navyDk, fontWeight:700, fontSize:14, textDecoration:'none', boxShadow:'0 4px 16px rgba(51,104,160,0.14)', border:'1px solid rgba(255,255,255,0.9)' }}>
              <FaEye style={{ fontSize:13 }}/> Preview Resume
            </Link>
          </div>

          {/* Stats card */}
          <div className="hf" style={{ ...G_LIGHT, borderRadius:20, padding:'16px 18px', maxWidth:545, boxShadow:'0 8px 32px rgba(51,104,160,0.18)' }}>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)' }}>
              {stats.map(({ Icon, num, lbl }, i) => (
                <div key={lbl} style={{ display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center', padding:'0 6px', borderRight: i<3 ? '1px solid rgba(255,255,255,0.35)' : 'none' }}>
                  <div style={{ width:36, height:36, borderRadius:'50%', background:'rgba(255,255,255,0.32)', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:7 }}>
                    <Icon style={{ fontSize:16, color:C.navyDk }}/>
                  </div>
                  <span style={{ fontWeight:900, fontSize:21, lineHeight:1, color:C.navyDk }}>{num}</span>
                  <span style={{ fontWeight:700, fontSize:8.5, letterSpacing:'0.12em', textTransform:'uppercase', marginTop:3, color:C.navy }}>{lbl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="hf" style={{ display:'flex', alignItems:'center', gap:18, marginTop:18 }}>
            <div style={{ display:'flex', alignItems:'center', gap:7 }}>
              <div style={{ width:26, height:2, borderRadius:2, background:`rgba(37,79,122,0.55)` }}/>
              <span style={{ color:C.navyDk, fontWeight:700, fontSize:13 }}>Connect with me</span>
            </div>
            <div style={{ display:'flex', gap:9 }}>
              <Soc icon={FaGithub}   href="https://github.com/pradeepgobi"/>
              <Soc icon={FaLinkedin} href="https://linkedin.com/in/pradeepgobi"/>
              <Soc icon={FaTwitter}  href="#"/>
              <Soc icon={FaEnvelope} href="mailto:pradeepgobi8@gmail.com"/>
            </div>
          </div>
        </div>

        {/* ══ RIGHT — Profile + Orbit ══ */}
        <div className="hr" style={{ flex:'0 0 auto', width:'min(460px,43vw)', height:'min(460px,43vw)', minWidth:290, minHeight:290, position:'relative', display:'flex', alignItems:'center', justifyContent:'center', marginTop:24 }}>

          {/* ── Outer rings ── */}
          <div style={{ position:'absolute', inset:0, borderRadius:'50%', border:'1px solid rgba(255,255,255,0.16)', pointerEvents:'none' }}/>

          {/* Ring 1 — spinning with glow nodes */}
          <div style={{ position:'absolute', inset:'5%', borderRadius:'50%', border:'1.5px solid rgba(255,255,255,0.30)', animation:'spin 22s linear infinite', pointerEvents:'none' }}>
            <div style={{ position:'absolute', top:-7, left:'50%', transform:'translateX(-50%)', width:13, height:13, borderRadius:'50%', background:'#fff', boxShadow:'0 0 14px rgba(255,255,255,0.95)' }}/>
            <div style={{ position:'absolute', bottom:-5, left:'50%', transform:'translateX(-50%)', width:8, height:8, borderRadius:'50%', background:C.navy }}/>
          </div>

          {/* Ring 2 — reverse */}
          <div style={{ position:'absolute', inset:'10%', borderRadius:'50%', border:'1px solid rgba(255,255,255,0.20)', animation:'spinR 16s linear infinite', pointerEvents:'none' }}>
            <div style={{ position:'absolute', top:-4, right:-4, width:8, height:8, borderRadius:'50%', background:'rgba(255,255,255,0.70)' }}/>
          </div>

          {/* Ring 3 */}
          <div style={{ position:'absolute', inset:'15%', borderRadius:'50%', border:'1px solid rgba(255,255,255,0.12)', pointerEvents:'none' }}/>

          {/* ── Decorative CYBER symbols in orbit area ── */}
          {/* Lock symbol — left of orbit */}
          <div style={{ position:'absolute', left:'7%', top:'30%', width:38, height:38, borderRadius:'50%', background:'rgba(242,239,231,0.20)', border:'1px solid rgba(255,255,255,0.40)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:20, backdropFilter:'blur(6px)', animation:'floatY 4s ease-in-out infinite' }}>
            <FaLock style={{ fontSize:15, color:'#fff' }}/>
          </div>

          {/* Terminal symbol — bottom of orbit */}
          <div style={{ position:'absolute', left:'8%', bottom:'22%', width:38, height:38, borderRadius:'50%', background:'rgba(242,239,231,0.20)', border:'1px solid rgba(255,255,255,0.40)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:20, backdropFilter:'blur(6px)', animation:'floatY 3.5s ease-in-out 0.8s infinite' }}>
            <FaTerminal style={{ fontSize:14, color:'#fff' }}/>
          </div>

          {/* Code icon — left mid */}
          <div style={{ position:'absolute', left:'2%', top:'44%', width:48, height:48, borderRadius:'50%', ...G_CREAM, boxShadow:'0 8px 28px rgba(51,104,160,0.25)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:22, animation:'floatY 3.6s ease-in-out 0.3s infinite' }}>
            <FaCode style={{ fontSize:18, color:C.navy }}/>
          </div>

          {/* ── PORTRAIT circle ── */}
          <div style={{
            position:'relative', width:'66%', height:'66%', borderRadius:'50%', overflow:'hidden',
            background:`linear-gradient(160deg, ${C.light} 0%, ${C.cream} 100%)`,
            border:`3px solid rgba(255,255,255,0.78)`,
            boxShadow:'0 12px 50px rgba(51,104,160,0.32)',
            zIndex:10,
          }}>
            {/* Subtle bg symbols INSIDE portrait circle */}
            <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', opacity:0.06, userSelect:'none', pointerEvents:'none', fontSize:60, color:C.navy, letterSpacing:6 }}>
              <span>🔒</span>
            </div>
            <img
              src="/pradeep.png"
              alt="Pradeep G"
              style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', objectPosition:'top center', mixBlendMode:'multiply', zIndex:5 }}
            />
            {/* Bottom cream fade */}
            <div style={{ position:'absolute', inset:0, background:`linear-gradient(to top,rgba(200,223,219,0.50) 0%,transparent 52%)`, pointerEvents:'none', zIndex:6 }}/>
          </div>

          {/* ── Floating cards ── */}
          <Card icon={FaLock}         title="Cybersecurity"  sub="Secure Tomorrow"      dark={false} pos={{ top:'6%',  left:'-2%',  animation:'floatY 4s ease-in-out infinite' }}/>
          <Card icon={FaCheckCircle}  title="Ethical Hacker" sub="Think • Test • Secure" dark={true}  pos={{ top:'9%',  right:'-5%', animation:'floatY 3.8s ease-in-out 0.5s infinite' }}/>
          <Card icon={FaNetworkWired} title="VAPT"           sub="Find • Fix • Fortify"  dark={false} pos={{ top:'52%', right:'-7%', animation:'floatY 4.2s ease-in-out 1s infinite' }}/>

          {/* ── Script text ── */}
          <div style={{ position:'absolute', bottom:'5%', left:'-9%', transform:'rotate(-5deg)', zIndex:20, pointerEvents:'none', userSelect:'none' }}>
            {['Security','Through','Curiosity'].map(w=>(
              <p key={w} style={{ fontFamily:"'Dancing Script',cursive", fontSize:'1.52rem', fontWeight:700, color:C.navyDk, lineHeight:1.26 }}>{w}</p>
            ))}
            <div style={{ marginTop:5, height:3, width:'72%', borderRadius:2, background:C.navy }}/>
          </div>
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes spin  { from{transform:rotate(0deg)}   to{transform:rotate(360deg)} }
        @keyframes spinR { from{transform:rotate(360deg)} to{transform:rotate(0deg)} }
        @keyframes floatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
      `}</style>
    </div>
  );
}
