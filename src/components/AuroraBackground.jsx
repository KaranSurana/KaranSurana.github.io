import { motion, useReducedMotion } from 'framer-motion'

// Cinematic ambient backdrop: three slow-drifting aurora blobs,
// a fading engineering grid, and film-grain noise.
export default function AuroraBackground() {
  const reduceMotion = useReducedMotion()

  const drift = (x, y, duration) =>
    reduceMotion
      ? {}
      : {
          animate: { x, y, scale: [1, 1.12, 0.96, 1] },
          transition: { duration, repeat: Infinity, ease: 'easeInOut' },
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
