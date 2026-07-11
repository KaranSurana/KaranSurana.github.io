import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'
import { identity, socials } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {new Date().getFullYear()} {identity.name} · Designed & built with React +
          Framer Motion
        </p>
        <div className="footer__socials">
          <a className="icon-btn" href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
            <Github size={18} />
          </a>
          <a className="icon-btn" href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
            <Linkedin size={18} />
          </a>
          <a className="icon-btn" href={`mailto:${identity.email}`} aria-label="Email Karan">
            <Mail size={18} />
          </a>
          <a className="icon-btn" href="#top" aria-label="Back to top">
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
