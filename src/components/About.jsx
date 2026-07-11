import { motion } from 'framer-motion'
import { BrainCircuit, GraduationCap, MonitorSmartphone, Network, Server } from 'lucide-react'
import { education, identity, services } from '../data/content.js'
import { fadeUp, stagger, viewportOnce } from '../lib/motion.js'
import { SectionHeading, SpotlightCard } from './ui.jsx'

const ICONS = {
  monitor: MonitorSmartphone,
  server: Server,
  brain: BrainCircuit,
  network: Network,
}

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHeading
          index="01"
          eyebrow="About"
          title="Engineering with a product mindset"
        />

        <div className="about__grid">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <SpotlightCard className="about__portrait">
              <div className="about__avatar-ring">
                <img src={identity.avatar} alt="Portrait of Karan Surana" width="168" height="168" />
              </div>
              <h3>{identity.name}</h3>
              <p>
                {identity.role} · {identity.location}
              </p>

              <div className="glass education-card">
                <span className="education-card__icon" aria-hidden="true">
                  <GraduationCap size={22} />
                </span>
                <div>
                  <h4>{education.school}</h4>
                  <p className="edu-degree">{education.degree}</p>
                  <p>{education.detail}</p>
                  <p>{education.period}</p>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          <div>
            <motion.p
              className="about__bio"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {identity.profile}
            </motion.p>

            <motion.ul
              className="services"
              variants={stagger(0.09)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {services.map((s) => {
                const Icon = ICONS[s.icon]
                return (
                  <SpotlightCard as={motion.li} key={s.title} className="service-card" variants={fadeUp}>
                    <span className="service-card__icon" aria-hidden="true">
                      <Icon size={24} />
                    </span>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </SpotlightCard>
                )
              })}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  )
}
