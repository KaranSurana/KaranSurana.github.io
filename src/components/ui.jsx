import { useCallback, useRef } from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '../lib/motion.js'

// Glass card whose border glows where the cursor is.
export function SpotlightCard({ as: Tag = motion.div, className = '', children, ...rest }) {
  const ref = useRef(null)

  const onMouseMove = useCallback((e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }, [])

  return (
    <Tag
      ref={ref}
      onMouseMove={onMouseMove}
      className={`glass spotlight ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}

// Numbered mono eyebrow + display heading + optional sub-copy.
export function SectionHeading({ index, eyebrow, title, sub }) {
  return (
    <motion.header
      className="section-heading"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px 0px' }}
    >
      <p className="mono-label">
        {index} · {eyebrow}
      </p>
      <h2 className="h2">{title}</h2>
      {sub && <p className="section-heading__sub">{sub}</p>}
    </motion.header>
  )
}
