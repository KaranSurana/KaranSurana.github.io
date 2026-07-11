import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView, useReducedMotion } from 'framer-motion'
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react'
import { identity, marqueeTech, socials, stats } from '../data/content.js'
import { EASE, fadeUp, stagger } from '../lib/motion.js'
import { SpotlightCard } from './ui.jsx'

function CountUp({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const reduceMotion = useReducedMotion()
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reduceMotion) {
      setDisplay(value)
      return
    }
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value, reduceMotion])

  return (
    <div ref={ref} className="stat__value">
      {display}
      <span>{suffix}</span>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <motion.div variants={stagger(0.12, 0.15)} initial="hidden" animate="visible">
          <motion.p className="hero__badge" variants={fadeUp}>
            <span className="hero__badge-dot" aria-hidden="true" />
            {identity.location} · {identity.role}
          </motion.p>

          <motion.h1 className="display hero__title" variants={fadeUp}>
            Karan
            <br />
            <span className="gradient-text">Surana</span>
          </motion.h1>

          <motion.p className="hero__headline" variants={fadeUp}>
            I build <strong>scalable, production-grade web applications</strong> — from
            responsive interfaces to robust backend systems, with system design and
            architecture at the core.
          </motion.p>

          <motion.div className="hero__actions" variants={fadeUp}>
            <motion.a
              href="#projects"
              className="btn btn--primary"
              whileTap={{ scale: 0.97 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href={identity.resumeUrl}
              download
              className="btn btn--ghost"
              whileTap={{ scale: 0.97 }}
            >
              <Download size={18} aria-hidden="true" />
              Résumé
            </motion.a>
            <div className="hero__socials">
              <a className="icon-btn" href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
                <Github size={20} />
              </a>
              <a className="icon-btn" href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
                <Linkedin size={20} />
              </a>
              <a className="icon-btn" href={`mailto:${identity.email}`} aria-label="Email Karan">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__stats"
          variants={stagger(0.09, 0.6)}
          initial="hidden"
          animate="visible"
        >
          {stats.map((s) => (
            <SpotlightCard key={s.label} className="stat" variants={fadeUp}>
              <CountUp value={s.value} suffix={s.suffix} />
              <p className="stat__label">{s.label}</p>
            </SpotlightCard>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="marquee"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8, ease: EASE }}
      >
        <div className="marquee__track">
          {[0, 1].map((copy) => (
            <div className="marquee__group" key={copy}>
              {marqueeTech.map((t) => (
                <span key={t} className="marquee__item">
                  {t} <i>✦</i>
                </span>
              ))}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        style={{
          alignSelf: 'center',
          marginTop: 28,
          marginBottom: 20,
          color: 'var(--text-tertiary)',
          display: 'inline-flex',
          padding: 12,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.6, duration: 0.8 },
          y: { delay: 2, duration: 2, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  )
}
