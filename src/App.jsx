import { useState, useEffect } from 'react'
import TextType from '../components/type'
import About from '../screens/about'
import SkillsSection from '../screens/skills'
import Squares from '../components/back'
import ProjectsSection from '../screens/projects'
import ContactSection from '../screens/contact'
import './App.css'

const NAV_LINKS = [
  { label: 'about()',    href: '#about' },
  { label: 'skills[]',  href: '#skills' },
  { label: 'projects{}',href: '#projects' },
  { label: 'contact()', href: '#contact' },
]

const CHIPS = [
  { label: 'React',       hi: true },
  { label: 'Node.js',     hi: true },
  { label: 'UI / UX',     hi: true },
  { label: 'MySQL',       hi: false },
  { label: 'Figma',       hi: false },
  { label: 'TypeScript',  hi: false },
]

export default function App () {
  const [theme, setTheme]     = useState('dark')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <div className={`app theme-${theme}`}>

      {/* ── Nav ── */}
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
        {/* Squares bg — untouched, sits behind everything */}
        <Squares
          direction='diagonal'
          speed={0.5}
          borderColor='var(--sq-border)'
          hoverFillColor='var(--sq-hover)'
          squareSize={56}
          className='hero__squares'
        />

        <div className='hero__content'>
          <div className='hero__tag'>
            <span className='hero__tag-dot' aria-hidden='true' />
            available for work
          </div>

          <h1 className='hero__name'>
            Ndih<br />Samuel<span className='hero__accent'>.</span>
          </h1>

          <p className='hero__typewriter'>
            <TextType
              text={[
                'full-stack developer',
                'UI/UX designer',
                'product thinker',
                'open to work →',
              ]}
              typingSpeed={65}
              pauseDuration={1400}
              showCursor
              cursorCharacter='_'
            />
          </p>

          <div className='hero__chips'>
            {CHIPS.map(({ label, hi }) => (
              <span key={label} className={`chip${hi ? ' chip--hi' : ''}`}>
                {label}
              </span>
            ))}
          </div>

          <div className='hero__actions'>
            <a className='btn btn--primary' href='#projects'>view projects →</a>
            <a className='btn btn--ghost'   href='#contact'>get in touch</a>
          </div>
        </div>

        {/* Side stats */}
        <aside className='hero__stats' aria-label='Quick stats'>
          <div className='stat'>
            <span className='stat__n'>3<span>+</span></span>
            <span className='stat__l'>years shipping</span>
          </div>
          <div className='stat'>
            <span className='stat__n'>10<span>+</span></span>
            <span className='stat__l'>projects built</span>
          </div>
          <div className='stat'>
            <span className='stat__n'>∞</span>
            <span className='stat__l'>coffee consumed</span>
          </div>
        </aside>

        <span className='hero__location'>// Lagos, NG · open to remote</span>

        <div className='hero__scroll' aria-hidden='true'>
          <span className='hero__scroll-line' />
          <span className='hero__scroll-label'>scroll</span>
        </div>
      </section>

      {/* ── Sections ── */}
      <section className='page-section' id='about'>   <About />          </section>
      <section className='page-section' id='skills'>  <SkillsSection />  </section>
      <section className='page-section' id='projects'><ProjectsSection /></section>
      <section className='page-section' id='contact'> <ContactSection /> </section>
    </div>
  )
}