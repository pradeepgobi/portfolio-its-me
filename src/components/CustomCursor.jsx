import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const [isMobile, setIsMobile] = useState(false);
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(hover: none) and (pointer: coarse)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (isMobile) return;

    // Set initial position out of view
    gsap.set([cursorDotRef.current, cursorRingRef.current], { xPercent: -50, yPercent: -50, opacity: 0 });

    const moveCursor = (e) => {
      gsap.to(cursorDotRef.current, {
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
        duration: 0.1,
        ease: 'power2.out'
      });
      gsap.to(cursorRingRef.current, {
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
        duration: 0.4,
        ease: 'power3.out'
      });
    };

    const handleMouseEnter = () => {
      gsap.to(cursorDotRef.current, { scale: 1.5, duration: 0.3 });
      gsap.to(cursorRingRef.current, { scale: 1.8, borderColor: 'rgba(239, 68, 68, 0.4)', duration: 0.3 });
    };
    
    const handleMouseLeave = () => {
      gsap.to(cursorDotRef.current, { scale: 1, duration: 0.3 });
      gsap.to(cursorRingRef.current, { scale: 1, borderColor: 'rgba(239, 68, 68, 0.6)', duration: 0.3 });
    };

    window.addEventListener('mousemove', moveCursor);

    // Initial binding
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // MutationObserver to catch dynamically added interactive elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) { // Element node
              const newEls = node.querySelectorAll ? node.querySelectorAll('a, button, input, textarea, [role="button"]') : [];
              const allEls = node.matches && node.matches('a, button, input, textarea, [role="button"]') ? [node, ...newEls] : newEls;
              
              allEls.forEach((el) => {
                el.addEventListener('mouseenter', handleMouseEnter);
                el.addEventListener('mouseleave', handleMouseLeave);
              });
            }
          });
        }
      });
    });
    
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('resize', checkMobile);
      observer.disconnect();
      document.querySelectorAll('a, button, input, textarea, [role="button"]').forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9999]" style={{ background: '#0D2E55' }}
      />
      
      {/* Cursor ring */}
      <div
        ref={cursorRingRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9998]" style={{ border: '1px solid rgba(13,46,85,0.6)' }}
      />
    </>
  );
};

export default CustomCursor;
