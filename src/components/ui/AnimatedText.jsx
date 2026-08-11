import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = ({ text, className = '', delay = 0 }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    // Split text into words for staggered animation
    const words = el.innerText.split(' ');
    el.innerHTML = '';
    
    words.forEach(word => {
      const span = document.createElement('span');
      span.innerText = word + ' ';
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      span.style.transform = 'translateY(20px)';
      el.appendChild(span);
    });

    const spans = el.querySelectorAll('span');

    gsap.to(spans, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.05,
      ease: 'power3.out',
      delay: delay,
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [text, delay]);

  return (
    <div ref={textRef} className={className}>
      {text}
    </div>
  );
};

export default AnimatedText;
