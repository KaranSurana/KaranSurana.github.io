import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink, Github, Landmark, X } from 'lucide-react'
import { projectCategories, projects } from '../data/content.js'
import { EASE, fadeUp, viewportOnce } from '../lib/motion.js'
import { SectionHeading, SpotlightCard } from './ui.jsx'

function Cover({ project, isModal = false }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={isModal ? `${project.title} screenshot` : ''}
        loading="lazy"
      />
    )
  }
  return (
    <div className="gradient-cover" role="img" aria-label={`${project.title} cover art`}>
      <Landmark size={isModal ? 72 : 56} strokeWidth={1.25} />
    </div>
  )
}

function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null)
  const modalRef = useRef(null)

  // Esc to close + minimal focus trap
  useEffect(() => {
    closeRef.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab') {
        const focusables = modalRef.current?.querySelectorAll(
          'button, a[href], [tabindex]:not([tabindex="-1"])',
        )
        if (!focusables?.length) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  // Scroll lock
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <motion.div
        ref={modalRef}
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        layoutId={`project-${project.id}`}
        transition={{ duration: 0.5, ease: EASE }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__media">
          <Cover project={project} isModal />
          <button
            ref={closeRef}
            className="modal__close"
            onClick={onClose}
            aria-label="Close project details"
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal__body">
          <p className="modal__category">{project.categoryLabel}</p>
          <h3 className="modal__title" id="project-modal-title">
            {project.title}
          </h3>
          <p className="modal__tagline">{project.tagline}</p>

          <ul className="modal__bullets">
            {project.bullets.map((b) => (
              <li key={b.slice(0, 32)}>{b}</li>
            ))}
          </ul>

          <div className="modal__actions">
            {project.live && (
              <a className="btn btn--primary" href={project.live} target="_blank" rel="noreferrer">
                <ExternalLink size={18} aria-hidden="true" />
                Live App
              </a>
            )}
            {project.github && (
              <a className="btn btn--ghost" href={project.github} target="_blank" rel="noreferrer">
                <Github size={18} aria-hidden="true" />
                View Code
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [openId, setOpenId] = useState(null)
  const triggerRef = useRef(null)

  const visible = projects.filter((p) => filter === 'all' || p.category === filter)
  const openProject = projects.find((p) => p.id === openId)

  const openModal = (id, e) => {
    triggerRef.current = e.currentTarget
    setOpenId(id)
  }

  const closeModal = () => {
    setOpenId(null)
    // return focus to the card that opened the modal
    requestAnimationFrame(() => triggerRef.current?.focus())
  }

  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeading
          index="04"
          eyebrow="Projects"
          title="Selected work"
          sub="Things I've designed, built, and shipped — from live production platforms to ML experiments."
        />

        <motion.div
          className="filter-row"
          role="group"
          aria-label="Filter projects by category"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              aria-pressed={filter === cat.id}
              className={`filter-btn ${filter === cat.id ? 'filter-btn--active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              {filter === cat.id && (
                <motion.span
                  className="filter-btn__bg"
                  layoutId="filter-pill"
                  transition={{ duration: 0.45, ease: EASE }}
                />
              )}
              {cat.label}
            </button>
          ))}
        </motion.div>

        <motion.ul className="projects-grid" layout>
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.li
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                <SpotlightCard
                  as={motion.button}
                  className="project-card"
                  layoutId={`project-${p.id}`}
                  onClick={(e) => openModal(p.id, e)}
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  aria-haspopup="dialog"
                >
                  <span className="project-card__media">
                    {p.live && <span className="project-card__live">Live</span>}
                    <Cover project={p} />
                  </span>
                  <span className="project-card__body">
                    <span>
                      <span className="h3 project-card__title">{p.title}</span>
                      <span className="project-card__category">{p.categoryLabel}</span>
                    </span>
                    <ArrowUpRight className="project-card__arrow" size={20} aria-hidden="true" />
                  </span>
                </SpotlightCard>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>

      <AnimatePresence>
        {openProject && <ProjectModal project={openProject} onClose={closeModal} />}
      </AnimatePresence>
    </section>
  )
}
