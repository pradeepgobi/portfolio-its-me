import React, { useRef } from 'react';
import gsap from 'gsap';

const MagneticButton = ({ children, className = '', href, onClick, ...props }) => {
  const buttonRef = useRef(null);
  
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = buttonRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    gsap.to(buttonRef.current, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 1,
      ease: 'power3.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 1,
      ease: 'elastic.out(1, 0.3)',
    });
  };

  const Component = href ? 'a' : 'button';
  const finalProps = href ? { href, ...props } : { onClick, ...props };

  return (
    <div 
      className="inline-block relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Component 
        ref={buttonRef}
        className={`relative inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-colors duration-300 z-10 ${className}`}
        {...finalProps}
      >
        {children}
      </Component>
    </div>
  );
};

export default MagneticButton;
