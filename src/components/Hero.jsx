import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Bot, Github, Linkedin, Mail } from 'lucide-react'
import { identity, marqueeTech, socials } from '../data/content.js'
import { EASE, fadeUp, stagger } from '../lib/motion.js'
import { useGhostFX } from '../lib/GhostFX.jsx'

// When KARAN.EXE seizes the headline, type its words in live.
function GhostHeadline({ text }) {
  const [shown, setShown] = useState('')
  useEffect(() => {
    setShown('')
    let i = 0
    const id = setInterval(() => {
      i += 1
      setShown(text.slice(0, i))
      if (i >= text.length) clearInterval(id)
    }, 28)
    return () => clearInterval(id)
  }, [text])
  return (
    <span className="ghost-headline">
      {shown}
      <span className="ghost-headline__caret" aria-hidden="true" />
    </span>
  )
}

export default function Hero() {
  const { headline, setGhostOpen } = useGhostFX()

  // Ambient self-glitch: the name flickers with an RGB-split every ~5s,
  // like the site is quietly alive. Respects reduced-motion.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let removeTimer
    const interval = setInterval(() => {
      const el = document.getElementById('hero-name')
      if (!el || document.hidden) return
      el.classList.add('ghost-glitch')
      removeTimer = setTimeout(() => el.classList.remove('ghost-glitch'), 900)
    }, 5000)
    return () => {
      clearInterval(interval)
      clearTimeout(removeTimer)
      document.getElementById('hero-name')?.classList.remove('ghost-glitch')
    }
  }, [])
  return (
    <section className="hero" id="top">
      <div className="container">
        <motion.div variants={stagger(0.12, 0.15)} initial="hidden" animate="visible">
          <motion.p className="hero__badge" variants={fadeUp}>
            <span className="hero__badge-dot" aria-hidden="true" />
            {identity.location} · {identity.role}
          </motion.p>

          <motion.h1 className="display hero__title" id="hero-name" variants={fadeUp}>
            Karan
            <br />
            <span className="gradient-text">Surana</span>
          </motion.h1>

          <motion.p className="hero__headline" variants={fadeUp}>
            {headline ? (
              <GhostHeadline text={headline} />
            ) : (
              <>
                I build <strong>scalable, production-grade web applications</strong> —
                from responsive interfaces to robust backend systems, with system
                design and architecture at the core.{' '}
                <button
                  type="button"
                  className="ghost-invite"
                  onClick={() => setGhostOpen(true)}
                >
                  Interact with my AI chatbot.
                </button>
              </>
            )}
          </motion.p>

          <motion.div className="hero__actions" variants={fadeUp}>
            <motion.a
              href="#experience"
              className="btn btn--primary"
              whileTap={{ scale: 0.97 }}
            >
              View Experience
            </motion.a>
            <motion.button
              type="button"
              className="btn btn--ghost"
              onClick={() => setGhostOpen(true)}
              whileTap={{ scale: 0.97 }}
            >
              <Bot size={18} aria-hidden="true" />
              Interact with my AI
            </motion.button>
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
      </div>

      <motion.div
        className="marquee"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8, ease: EASE }}
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
          opacity: { delay: 1.3, duration: 0.8 },
          y: { delay: 1.6, duration: 2, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  )
}
