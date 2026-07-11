import { MotionConfig } from 'framer-motion'
import { GhostFXProvider } from './lib/GhostFX.jsx'
import AuroraBackground from './components/AuroraBackground.jsx'
import Ghost from './components/Ghost.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <GhostFXProvider>
        <a className="skip-link" href="#about">
          Skip to content
        </a>
        <AuroraBackground />
        <Navbar />
        <main id="main">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <Ghost />
      </GhostFXProvider>
    </MotionConfig>
  )
}
