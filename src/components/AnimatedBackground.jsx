import { useMemo, useCallback } from 'react'
import Particles from 'react-particles'
import { loadSlim } from 'tsparticles-slim'

const AnimatedBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  const options = useMemo(() => ({
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' },
        resize: true,
      },
      modes: {
        repulse: { distance: 120, duration: 0.3 },
      },
    },
    particles: {
      color: { value: ['#4facfe', '#00f2fe', '#667eea'] },
      links: {
        color: '#4facfe',
        distance: 120,
        enable: true,
        opacity: 0.15,
        width: 1,
      },
      move: { enable: true, speed: 0.8 },
      number: { value: 60 },
      opacity: { value: 0.3 },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  }), [])

  return (
    <div className="fixed inset-0 -z-10">

      {/* Particles */}
      <Particles
        init={particlesInit}
        options={options}
        className="w-full h-full opacity-40"
      />

      {/* Blue glow layers for a dark-blue shining effect */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[120px] animate-pulse"></div>

      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/25 rounded-full blur-[120px] animate-pulse delay-1000"></div>

      <div className="absolute top-1/2 right-1/3 w-[420px] h-[420px] bg-sky-500/25 rounded-full blur-[110px] animate-pulse delay-2000"></div>

    </div>
  )
}

export default AnimatedBackground