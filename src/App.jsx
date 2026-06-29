import { useState, useEffect } from 'react'
import TextType from '../components/type'
import About from '../screens/about'
import SkillsSection from '../screens/skills'
import DotGrid from '../components/dotgrid'
import ProjectsSection from '../screens/projects'
import ContactSection from '../screens/contact'
import './App.css'

const NAV_LINKS = [
  { label: 'about()',     href: '#about'    },
  { label: 'skills[]',   href: '#skills'   },
  { label: 'projects{}', href: '#projects' },
  { label: 'contact()',  href: '#contact'  },
]

const CHIPS = [
  { label: 'React',       hi: true  },
  { label: 'Node.js',     hi: true  },
  { label: 'Ships Fast™', hi: true  },
  { label: 'MySQL',       hi: false },
  { label: 'Figma',       hi: false },
  { label: 'TypeScript',  hi: false },
]

/* Status-bar ticker — the one loud element on an otherwise quiet page */
const TICKER_ITEMS = [
  'SHIPS FAST',
  'FULL-STACK ENERGY',
  '10X COMMITS',
  "MOVE FAST, DON'T BREAK PROD",
  'ASYNC BY DEFAULT',
  'OPEN TO WORK',
  '99 LITTLE BUGS',
  'COMPILES ON THE FIRST TRY*',
  '*TERMS AND CONDITIONS APPLY',
  'NO BUGS, ONLY FEATURES',
  '404: BUG NOT FOUND',
  'COMMIT EARLY. COMMIT OFTEN.',
  'SEMICOLONS SAVE LIVES',
  'THERE IS NO PLACE LIKE 127.0.0.1',
  'RUBBER DUCK APPROVED',
  'PUSH. PRAY. REPEAT.',
  'TURNING COFFEE INTO SOFTWARE',
  'THE CACHE STRIKES AGAIN',
  'OFF BY ONE',
  'THIS IS FINE 🔥',
  'TODO: REMOVE TODOs',
  'RUNS ON HOPE',
  'FEATURE COMING SOON™',
  'WELCOME TO THE STACK',
]

export default function App () {
  const [theme, setTheme]       = useState('dark')
  const [scrolled, setScrolled] = useState(false)

  /* Apply theme attribute to <html> — every CSS var picks it up */
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  /* Compact nav on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <div className='app'>

      {/* ── Navbar ── */}
      <nav className={`site-nav${scrolled ? ' site-nav--scrolled' : ''}`}>
        <span className='nav-logo'>
          ndih<span className='nav-logo__dot'>_</span>samuel
        </span>

        <ul className='nav-links'>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a className='nav-link' href={href}>{label}</a>
            </li>
          ))}
        </ul>

        <div className='nav-actions'>
          <button
            className='theme-toggle'
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? '☀' : '☽'}
          </button>
          <a className='nav-cta' href='#contact'>$ hire --me</a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className='hero' id='home'>
        {/* Buzzword status ticker — infinite scroll, pauses on hover */}
        <div className='hero__ticker' aria-hidden='true'>
          <div className='hero__ticker-track'>
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span className='hero__ticker-item' key={i}>{item}</span>
            ))}
          </div>
        </div>

        {/* Interactive dot-grid background */}
        <DotGrid theme={theme} className='hero__bg' />

        <div className='hero__content'>
          {/* Status tag */}
          <div className='hero__tag'>
            <span className='hero__tag-dot' aria-hidden='true' />
            availability: true
          </div>

          {/* Name */}
          <h1 className='hero__name'>
            Ndih<br />Samuel<span className='hero__accent'>.</span>
          </h1>

          {/*
            Typewriter — height is FIXED via CSS so no layout shift.
            The container never changes size regardless of string length.
          */}
          <div className='hero__typewriter'>
            <TextType
              text={[
                'full-stack & full-send_',
                'ships fast, fixes faster_',
                'turns coffee into commits_',
                'open to work →',
              ]}
              typingSpeed={65}
              pauseDuration={1400}
              showCursor={false}   /* cursor baked into strings as _ */
            />
          </div>

          {/* Tech chips */}
          <div className='hero__chips'>
            {CHIPS.map(({ label, hi }) => (
              <span key={label} className={`chip${hi ? ' chip--hi' : ''}`}>
                {label}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className='hero__actions'>
            <a className='btn btn--primary' href='#projects'>view projects →</a>
            <a className='btn btn--ghost'   href='#contact'>$ say hello</a>
          </div>
        </div>

        {/* Stats — right side */}
        <aside className='hero__stats' aria-label='Quick stats'>
          <div className='stat'>
            <span className='stat__n'>2<span>+</span></span>
            <span className='stat__l'>years shipping</span>
          </div>
          <div className='stat'>
            <span className='stat__n'>10<span>+</span></span>
            <span className='stat__l'>projects shipped</span>
          </div>
          <div className='stat'>
            <span className='stat__n'>∞</span>
            <span className='stat__l'>coffee consumed</span>
          </div>
        </aside>

        <span className='hero__location'>// Lagos, NG · open to remote</span>

        <div className='hero__scroll' aria-hidden='true'>
          {/* <span className='hero__scroll-line' /> */}
          <span className='hero__scroll-label'>scroll</span>
        </div>
      </section>

      {/* ── Page sections ── */}
      <section className='page-section' id='about'>    <About />           </section>
      <section className='page-section' id='skills'>   <SkillsSection />   </section>
      <section className='page-section' id='projects'> <ProjectsSection /> </section>
      <section className='page-section' id='contact'>  <ContactSection />  </section>
    </div>
  )
}