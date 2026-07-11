import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Ghost as GhostIcon, Send, X } from 'lucide-react'
import { useGhostFX } from '../lib/GhostFX.jsx'
import { EASE } from '../lib/motion.js'

const API = import.meta.env.VITE_GHOST_API || 'http://localhost:8787'

const SUGGESTIONS = [
  'do something crazy',
  'give me the tour',
  'why should I hire Karan?',
  'party mode',
  'make it rain code',
]

const TOUR_SECTIONS = ['about', 'experience', 'skills', 'projects', 'testimonials', 'contact']

// ── theme repainting ─────────────────────────────────────────
const THEME_VARS = ['--accent', '--accent-strong', '--accent-2', '--gradient-accent', '--ring']

function setHue(h) {
  const hue = ((Number(h) % 360) + 360) % 360
  const root = document.documentElement.style
  root.setProperty('--accent', `hsl(${hue} 68% 56%)`)
  root.setProperty('--accent-strong', `hsl(${hue} 72% 45%)`)
  root.setProperty('--accent-2', `hsl(${(hue + 45) % 360} 78% 60%)`)
  root.setProperty(
    '--gradient-accent',
    `linear-gradient(120deg, hsl(${hue} 68% 56%) 0%, hsl(${(hue + 45) % 360} 78% 60%) 100%)`,
  )
  root.setProperty('--ring', `hsl(${hue} 68% 56% / 0.7)`)
}

function clearHue() {
  const root = document.documentElement.style
  THEME_VARS.forEach((v) => root.removeProperty(v))
}

function accentColor() {
  return getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#34d399'
}

const clampSeconds = (param, fallback, max) => {
  const n = Number(param)
  return Math.min(Number.isFinite(n) && n > 0 ? n : fallback, max) * 1000
}

// ── matrix rain canvas (behind content) ──────────────────────
function MatrixCanvas({ until }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!until || until < Date.now()) return
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const glyphs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/{};=+*#$'
    let raf
    let drops = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drops = Array.from({ length: Math.ceil(canvas.width / 16) }, () =>
        Math.random() * -40,
      )
    }
    resize()
    window.addEventListener('resize', resize)

    const color = accentColor()
    let last = 0
    const draw = (t) => {
      if (Date.now() > until) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        return
      }
      raf = requestAnimationFrame(draw)
      if (t - last < 50) return
      last = t
      // fade previous glyphs without darkening the page
      ctx.globalCompositeOperation = 'destination-out'
      ctx.fillStyle = 'rgba(0, 0, 0, 0.14)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.globalCompositeOperation = 'source-over'
      ctx.font = '15px "JetBrains Mono", monospace'
      ctx.fillStyle = color
      drops.forEach((y, i) => {
        const ch = glyphs[Math.floor(Math.random() * glyphs.length)]
        ctx.fillText(ch, i * 16, y * 16)
        drops[i] = y * 16 > canvas.height && Math.random() > 0.975 ? 0 : y + 1
      })
    }
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
  }, [until])

  if (!until || until < Date.now()) return null
  return <canvas ref={ref} className="ghost-canvas ghost-canvas--matrix" aria-hidden="true" />
}

// ── confetti canvas (above content) ──────────────────────────
function ConfettiCanvas({ burst }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!burst) return
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const colors = [accentColor(), '#22d3ee', '#f8fafc', '#a5b4fc', '#fbbf24']
    const parts = Array.from({ length: 170 }, () => ({
      x: canvas.width * (0.2 + Math.random() * 0.6),
      y: canvas.height * 0.25,
      vx: (Math.random() - 0.5) * 14,
      vy: -6 - Math.random() * 9,
      w: 5 + Math.random() * 6,
      h: 8 + Math.random() * 8,
      rot: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 170,
    }))

    let raf
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      let alive = false
      for (const p of parts) {
        if (p.life <= 0) continue
        alive = true
        p.life -= 1
        p.vy += 0.22
        p.x += p.vx
        p.y += p.vy
        p.rot += p.vr
        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rot)
        ctx.globalAlpha = Math.min(1, p.life / 60)
        ctx.fillStyle = p.color
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h)
        ctx.restore()
      }
      if (alive) raf = requestAnimationFrame(draw)
      else ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
    raf = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(raf)
  }, [burst])

  if (!burst) return null
  return <canvas ref={ref} className="ghost-canvas ghost-canvas--confetti" aria-hidden="true" />
}

// ── the ghost ────────────────────────────────────────────────
export default function Ghost() {
  const { setStorm, setHeadline, ghostOpen: open, setGhostOpen: setOpen } = useGhostFX()
  const [booted, setBooted] = useState(false)
  const [mode, setMode] = useState(null) // 'live' | 'mock' | 'offline'
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [pending, setPending] = useState(false)
  const [crt, setCrt] = useState(false)
  const [matrixUntil, setMatrixUntil] = useState(0)
  const [confettiBurst, setConfettiBurst] = useState(0)

  const bodyRef = useRef(null)
  const inputRef = useRef(null)
  const timers = useRef([])
  const partyInterval = useRef(null)
  const apiHistory = useRef([])

  const later = useCallback((fn, ms) => {
    const id = setTimeout(fn, ms)
    timers.current.push(id)
    return id
  }, [])

  const reducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // ── individual effects ─────────────────────────────────────
  const doGlitch = useCallback(() => {
    const el = document.getElementById('hero-name')
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    el.classList.add('ghost-glitch')
    later(() => el.classList.remove('ghost-glitch'), 4800)
  }, [later])

  const doTilt = useCallback(() => {
    const cards = document.querySelectorAll('.glass:not(.project-card)')
    cards.forEach((el) => {
      const r = (Math.random() - 0.5) * 14
      const x = (Math.random() - 0.5) * 28
      const y = (Math.random() - 0.5) * 20
      el.style.transform = `rotate(${r}deg) translate(${x}px, ${y}px)`
    })
    later(() => cards.forEach((el) => (el.style.transform = '')), 5500)
  }, [later])

  const doSpin = useCallback(() => {
    const el = document.getElementById('ghost-avatar')
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    el.classList.add('ghost-spin')
    later(() => el.classList.remove('ghost-spin'), 2800)
  }, [later])

  const doTour = useCallback(
    (section) => {
      const id = TOUR_SECTIONS.includes(section) ? section : 'about'
      const el = document.getElementById(id)
      if (!el) return
      el.scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth', block: 'start' })
      el.classList.add('ghost-tour-glow')
      later(() => el.classList.remove('ghost-tour-glow'), 3500)
    },
    [later],
  )

  const stopParty = useCallback(() => {
    if (partyInterval.current) {
      clearInterval(partyInterval.current)
      partyInterval.current = null
    }
  }, [])

  const doReset = useCallback(() => {
    stopParty()
    timers.current.forEach(clearTimeout)
    timers.current = []
    setStorm(false)
    setHeadline(null)
    setCrt(false)
    setMatrixUntil(0)
    clearHue()
    document.getElementById('hero-name')?.classList.remove('ghost-glitch')
    document.getElementById('ghost-avatar')?.classList.remove('ghost-spin')
    document.querySelectorAll('.ghost-tour-glow').forEach((el) => el.classList.remove('ghost-tour-glow'))
    document.querySelectorAll('.glass').forEach((el) => (el.style.transform = ''))
  }, [setStorm, setHeadline, stopParty])

  const doParty = useCallback(
    (ms) => {
      stopParty()
      setStorm(true)
      setConfettiBurst((b) => b + 1)
      doTilt()
      setMatrixUntil(Date.now() + Math.min(ms, 5000))
      let hue = Math.floor(Math.random() * 360)
      partyInterval.current = setInterval(() => {
        hue = (hue + 47) % 360
        setHue(hue)
      }, 350)
      later(() => {
        stopParty()
        setStorm(false)
        clearHue()
      }, ms)
    },
    [doTilt, later, setStorm, stopParty],
  )

  const execute = useCallback(
    (action) => {
      const { type, param = '' } = action || {}
      const reduced = reducedMotion()

      switch (type) {
        case 'glitch':
          if (!reduced) doGlitch()
          break
        case 'theme':
          setHue(Number.parseInt(param, 10) || 285)
          break
        case 'storm':
          if (reduced) break
          setStorm(true)
          later(() => setStorm(false), clampSeconds(param, 10, 30))
          break
        case 'matrix':
          if (!reduced) setMatrixUntil(Date.now() + clampSeconds(param, 10, 30))
          break
        case 'confetti':
          if (!reduced) setConfettiBurst((b) => b + 1)
          break
        case 'tilt':
          if (!reduced) doTilt()
          break
        case 'crt':
          setCrt(param !== 'off')
          break
        case 'spin':
          if (!reduced) doSpin()
          break
        case 'rewrite':
          if (param) setHeadline(String(param).slice(0, 120))
          document.getElementById('top')?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' })
          break
        case 'tour':
          doTour(param)
          break
        case 'party':
          if (reduced) setHue(Math.floor(Math.random() * 360))
          else doParty(clampSeconds(param, 8, 15))
          break
        case 'reset':
          doReset()
          break
        default:
          break
      }
    },
    [doGlitch, doParty, doReset, doSpin, doTilt, doTour, later, setHeadline, setStorm],
  )

  const runActions = useCallback(
    (actions) => {
      ;(actions || []).slice(0, 4).forEach((a, i) => later(() => execute(a), i * 500))
    },
    [execute, later],
  )

  // ── chat plumbing ──────────────────────────────────────────
  const pushGhost = useCallback((text) => {
    setMessages((m) => [...m, { role: 'ghost', text }])
    apiHistory.current.push({ role: 'assistant', content: text })
  }, [])

  const send = useCallback(
    async (raw) => {
      const text = raw.trim().slice(0, 400)
      if (!text || pending) return
      setInput('')
      setMessages((m) => [...m, { role: 'user', text }])
      apiHistory.current.push({ role: 'user', content: text })
      setPending(true)

      try {
        const res = await fetch(`${API}/chat`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: apiHistory.current.slice(-8) }),
        })
        const data = await res.json()
        pushGhost(data.reply || '...')
        runActions(data.actions)
      } catch {
        setMode('offline')
        pushGhost(
          import.meta.env.DEV
            ? 'my brain server is offline (run: cd server && node index.mjs). my body still works, though — watch.'
            : "hm. I can't reach my brain right now — the server must be napping. my body still works, though — watch.",
        )
        runActions([
          [{ type: 'glitch', param: '' }],
          [{ type: 'theme', param: String(Math.floor(Math.random() * 360)) }],
          [{ type: 'confetti', param: '' }],
        ][Math.floor(Math.random() * 3)])
      } finally {
        setPending(false)
      }
    },
    [pending, pushGhost, runActions],
  )

  // ── first-open boot sequence ───────────────────────────────
  useEffect(() => {
    if (!open || booted) return
    setBooted(true)

    fetch(`${API}/health`)
      .then((r) => r.json())
      .then((d) => setMode(d.mode))
      .catch(() => setMode('offline'))

    later(() => pushGhost('oh. a visitor.'), 500)
    later(() => {
      pushGhost(
        "I'm KARAN.EXE — I live inside this website. ask me anything about Karan. or dare me to redecorate.",
      )
      if (!reducedMotion()) doGlitch()
    }, 1600)
  }, [open, booted, doGlitch, later, pushGhost])

  // autoscroll chat
  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight
  }, [messages, pending])

  // focus input + Esc to close
  useEffect(() => {
    if (!open) return
    inputRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  // cleanup on unmount
  useEffect(
    () => () => {
      timers.current.forEach(clearTimeout)
      stopParty()
    },
    [stopParty],
  )

  const showSuggestions = messages.filter((m) => m.role === 'user').length === 0

  return (
    <>
      <MatrixCanvas until={matrixUntil} />
      <ConfettiCanvas burst={confettiBurst} />
      {crt && <div className="ghost-crt" aria-hidden="true" />}

      <div className="ghost-root">
        <AnimatePresence>
          {open && (
            <motion.section
              className="ghost-panel"
              role="dialog"
              aria-label="KARAN.EXE — the AI living in this site"
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.95 }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              <header className="ghost-panel__head">
                <span className="ghost-panel__dot" aria-hidden="true" />
                <span className="ghost-panel__title">karan.exe</span>
                <span className="ghost-panel__mode">
                  {mode === 'live' && 'sentient'}
                  {mode === 'mock' && 'demo brain'}
                  {mode === 'offline' && 'brain offline'}
                </span>
                <button
                  className="ghost-panel__close"
                  onClick={() => setOpen(false)}
                  aria-label="Close KARAN.EXE"
                >
                  <X size={16} />
                </button>
              </header>

              <div className="ghost-panel__body" ref={bodyRef} aria-live="polite">
                {messages.map((m, i) => (
                  <div key={i} className={`ghost-msg ghost-msg--${m.role}`}>
                    {m.role === 'ghost' && <span className="ghost-msg__tag">▚</span>}
                    {m.text}
                  </div>
                ))}
                {pending && (
                  <div className="ghost-msg ghost-msg--ghost">
                    <span className="ghost-msg__tag">▚</span>
                    <span className="ghost-typing">thinking</span>
                  </div>
                )}

                {showSuggestions && !pending && (
                  <div className="ghost-suggestions">
                    {SUGGESTIONS.map((s) => (
                      <button key={s} className="ghost-chip" onClick={() => send(s)}>
                        {s}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <form
                className="ghost-panel__input"
                onSubmit={(e) => {
                  e.preventDefault()
                  send(input)
                }}
              >
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="talk to the machine…"
                  maxLength={400}
                  aria-label="Message KARAN.EXE"
                />
                <button type="submit" aria-label="Send message" disabled={pending}>
                  <Send size={16} />
                </button>
              </form>
            </motion.section>
          )}
        </AnimatePresence>

        {!open && (
          <motion.button
            className="ghost-dock"
            onClick={() => setOpen(true)}
            aria-label="Open KARAN.EXE — the AI living in this site"
            // fade in place — no vertical travel, so it's at its final
            // position from the very first painted frame
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: booted ? 0 : 2.2, duration: booted ? 0.2 : 0.6, ease: EASE }}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <GhostIcon size={18} aria-hidden="true" />
            <span>karan.exe</span>
            <span className="ghost-dock__cursor" aria-hidden="true" />
          </motion.button>
        )}
      </div>
    </>
  )
}
