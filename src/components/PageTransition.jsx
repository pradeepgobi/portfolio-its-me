import { motion } from 'framer-motion'

/**
 * PageTransition Component
 * Wrapper component for page animations
 * Provides consistent enter/exit animations across all pages
 */
const PageTransition = ({ children, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      }}
      className={`relative z-10 min-h-screen pt-20 pb-10 ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default PageTransition
