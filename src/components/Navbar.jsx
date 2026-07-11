import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { identity, navLinks } from '../data/content.js'
import { EASE } from '../lib/motion.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.4 })

  // Frosted bar once the page moves
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Track which section is in view
  useEffect(() => {
    const sections = navLinks
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX: progress }} aria-hidden="true" />

      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="container navbar__inner">
          <a href="#top" className="navbar__logo" aria-label="Karan Surana — back to top">
            karan<span>.</span>surana
          </a>

          <nav className="navbar__links" aria-label="Primary">
            {navLinks.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`navbar__link ${active === id ? 'navbar__link--active' : ''}`}
              >
                {active === id && (
                  <motion.span
                    className="navbar__pill"
                    layoutId="nav-pill"
                    transition={{ duration: 0.45, ease: EASE }}
                  />
                )}
                {label}
              </a>
            ))}
          </nav>

          <a
            className="btn btn--primary navbar__cta"
            href={identity.resumeUrl}
            download
          >
            Résumé
          </a>

          <button
            className="navbar__burger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            {navLinks.map(({ id, label }, i) => (
              <motion.a
                key={id}
                href={`#${id}`}
                className="mobile-menu__link"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.4, delay: 0.05 * i, ease: EASE }}
              >
                {label}
              </motion.a>
            ))}
            <motion.a
              href={identity.resumeUrl}
              download
              className="btn btn--primary"
              style={{ marginTop: 18 }}
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.28, ease: EASE }}
            >
              Download Résumé
            </motion.a>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
