import { motion } from 'framer-motion'
import { Cloud, Database, MonitorSmartphone, Server, Sparkles } from 'lucide-react'
import { skillGroups } from '../data/content.js'
import { fadeUp, stagger, viewportOnce } from '../lib/motion.js'
import { SectionHeading, SpotlightCard } from './ui.jsx'

const ICONS = {
  monitor: MonitorSmartphone,
  server: Server,
  cloud: Cloud,
  database: Database,
  sparkles: Sparkles,
}

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHeading
          index="03"
          eyebrow="Skills"
          title="The toolkit"
          sub="The technologies I reach for to ship reliable products — front to back, laptop to cloud."
        />

        <motion.div
          className="skills-grid"
          variants={stagger(0.09)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {skillGroups.map((group) => {
            const Icon = ICONS[group.icon]
            return (
              <SpotlightCard key={group.title} className="skill-card" variants={fadeUp}>
                <div className="skill-card__head">
                  <span className="skill-card__icon" aria-hidden="true">
                    <Icon size={22} />
                  </span>
                  <h3 className="h3">{group.title}</h3>
                </div>
                <div className="chip-row">
                  {group.skills.map((s) => (
                    <span className="chip" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
