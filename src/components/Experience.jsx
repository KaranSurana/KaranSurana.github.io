import { motion } from 'framer-motion'
import { experience } from '../data/content.js'
import { fadeUp, stagger, viewportOnce } from '../lib/motion.js'
import { SectionHeading, SpotlightCard } from './ui.jsx'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHeading
          index="02"
          eyebrow="Experience"
          title="Where I've made an impact"
          sub="Around 3 years across product companies and academia — leading teams, owning products end-to-end, and squeezing performance out of every layer."
        />

        <ol className="timeline">
          {experience.map((job) => (
            <motion.li
              className="timeline-item"
              key={`${job.company}-${job.role}`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <span className="timeline-item__node" aria-hidden="true" />
              <SpotlightCard className="timeline-card">
                <div className="timeline-card__head">
                  <div>
                    <h3 className="timeline-card__role">{job.role}</h3>
                    <p className="timeline-card__company">
                      {job.company} · {job.location}
                    </p>
                  </div>
                  <span className="timeline-card__period">{job.period}</span>
                </div>

                <motion.ul
                  className="timeline-card__bullets"
                  variants={stagger(0.05)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                >
                  {job.bullets.map((b) => (
                    <motion.li key={b.slice(0, 32)} variants={fadeUp}>
                      {b}
                    </motion.li>
                  ))}
                </motion.ul>

                <div className="chip-row">
                  {job.stack.map((t) => (
                    <span className="chip" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
