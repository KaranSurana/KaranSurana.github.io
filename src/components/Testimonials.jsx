import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { testimonials } from '../data/content.js'
import { fadeUp, stagger, viewportOnce } from '../lib/motion.js'
import { SectionHeading, SpotlightCard } from './ui.jsx'

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <SectionHeading
          index="05"
          eyebrow="Testimonials"
          title="What people say"
          sub="Managers and academics I've worked with, in their own words."
        />

        <motion.div
          className="testimonials-grid"
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {testimonials.map((t) => (
            <SpotlightCard
              as={motion.figure}
              key={t.name}
              className="testimonial-card"
              variants={fadeUp}
            >
              <Quote className="testimonial-card__quote" size={26} aria-hidden="true" />
              <blockquote className="testimonial-card__text">{t.text}</blockquote>
              <figcaption className="testimonial-card__person">
                <img src={t.avatar} alt="" width="44" height="44" />
                <div>
                  <h3>{t.name}</h3>
                  <p>{t.affiliation}</p>
                </div>
              </figcaption>
            </SpotlightCard>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
