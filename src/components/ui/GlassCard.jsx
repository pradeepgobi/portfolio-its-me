import React, { forwardRef } from 'react';

const GlassCard = forwardRef(({ children, className = '', ...props }, ref) => {
  return (
    <div 
      ref={ref}
      className={`glass-premium ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});

GlassCard.displayName = 'GlassCard';

export default GlassCard;
