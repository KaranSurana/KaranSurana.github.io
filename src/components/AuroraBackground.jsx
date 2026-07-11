import { motion, useReducedMotion } from 'framer-motion'
import { useGhostFX } from '../lib/GhostFX.jsx'

// Cinematic ambient backdrop: three slow-drifting aurora blobs,
// a fading engineering grid, and film-grain noise.
// When KARAN.EXE calls a storm, the drift goes berserk.
export default function AuroraBackground() {
  const reduceMotion = useReducedMotion()
  const { storm } = useGhostFX()

  const drift = (x, y, duration) =>
    reduceMotion
      ? {}
      : {
          animate: {
            x: storm ? x.map((v) => v * 3) : x,
            y: storm ? y.map((v) => v * 3) : y,
            scale: storm ? [1, 1.35, 0.85, 1] : [1, 1.12, 0.96, 1],
          },
          transition: {
            duration: storm ? duration / 6 : duration,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }

  return (
    <div className="aurora" aria-hidden="true">
      <div className="aurora__grid" />
      <motion.div
        className="aurora__blob aurora__blob--emerald"
        {...drift([0, 70, -40, 0], [0, -50, 40, 0], 26)}
      />
      <motion.div
        className="aurora__blob aurora__blob--cyan"
        {...drift([0, -80, 50, 0], [0, 60, -30, 0], 32)}
      />
      <motion.div
        className="aurora__blob aurora__blob--indigo"
        {...drift([0, 60, -60, 0], [0, -40, 50, 0], 38)}
      />
      <div className="aurora__noise" />
    </div>
  )
}
