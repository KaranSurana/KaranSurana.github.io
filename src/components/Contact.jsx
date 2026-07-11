import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { identity, socials } from '../data/content.js'
import { fadeUp, stagger, viewportOnce } from '../lib/motion.js'
import { SpotlightCard } from './ui.jsx'

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <SpotlightCard
          className="contact__panel"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p className="mono-label" variants={fadeUp}>
            06 · Contact
          </motion.p>

          <motion.h2 className="h2" style={{ marginTop: 12 }} variants={fadeUp}>
            Let's build something <span className="gradient-text">great</span> together
          </motion.h2>

          <motion.p className="contact__sub" variants={fadeUp}>
            I'm always open to discussing interesting problems, new opportunities, or
            just talking shop. My inbox is open.
          </motion.p>

          <motion.div className="contact__actions" variants={fadeUp}>
            <motion.a
              className="btn btn--primary"
              href={`mailto:${identity.email}`}
              whileTap={{ scale: 0.97 }}
            >
              <Mail size={18} aria-hidden="true" />
              {identity.email}
            </motion.a>
            <div className="hero__socials">
              <a className="icon-btn" href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
                <Github size={20} />
              </a>
              <a className="icon-btn" href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div className="contact__meta" variants={fadeUp}>
            <a href={identity.phoneHref}>
              <Phone size={17} aria-hidden="true" />
              {identity.phone}
            </a>
            <span>
              <MapPin size={17} aria-hidden="true" />
              {identity.location}
            </span>
          </motion.div>
        </SpotlightCard>
      </div>
    </section>
  )
}
