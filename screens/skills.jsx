import React, { useEffect, useRef, useState } from 'react'
import '../css/SkillsSection.css'

const skills = [
  { name: 'HTML',        level: 95, label: 'expert'     },
  { name: 'CSS',         level: 90, label: 'expert'     },
  { name: 'JavaScript',  level: 85, label: 'advanced'   },
  { name: 'React',       level: 80, label: 'advanced'   },
  { name: 'Node.js',     level: 75, label: 'proficient' },
  { name: 'UI/UX Design',level: 88, label: 'advanced'   },
]

const techLogos = [
  { name: 'HTML5',       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3',        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript',  src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React',       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js',     src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Figma',       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'MySQL',       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'TypeScript',  src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
]

function SkillBar ({ name, level, label, visible }) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (!visible) return
    const raf = requestAnimationFrame(() => setWidth(level))
    return () => cancelAnimationFrame(raf)
  }, [visible, level])

  return (
    <div className='sk-cell'>
      <div className='sk-top'>
        <span className='sk-name'>{name}</span>
        <span className='sk-pct'>{visible ? `${level}%` : '0%'}</span>
      </div>
      <div className='sk-bar-bg' role='progressbar' aria-valuenow={level} aria-valuemin={0} aria-valuemax={100}>
        <div className='sk-bar' style={{ width: `${width}%` }} />
      </div>
      <span className='sk-meta'>// {label}</span>
    </div>
  )
}

export default function SkillsSection () {
  const [visible, setVisible] = useState(false)
  const gridRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.2 }
    )
    if (gridRef.current) observer.observe(gridRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className='skills-page'>

      <p className='skills-eyebrow'>skills[]</p>
      <h2 className='skills-title'>
        skills<span className='skills-title__accent'>.map()</span>
      </h2>
      <p className='skills-subtitle'>
        A runtime snapshot of my technical stack — updated continuously.
      </p>

      {/* Skill bars grid */}
      <div className='skills-grid' ref={gridRef}>
        {skills.map(s => (
          <SkillBar key={s.name} {...s} visible={visible} />
        ))}
      </div>

      {/* Tech logos */}
      <div className='tech-stack'>
        <h3 className='tech-stack__title'>
          <span className='tok-kw'>const</span> techStack{' '}
          <span className='tok-op'>=</span>{' '}
          <span className='tok-str'>[...]</span>
        </h3>
        <div className='tech-logos'>
          {techLogos.map(logo => (
            <div key={logo.name} className='tech-logo'>
              <img src={logo.src} alt={logo.name} loading='lazy' />
              <span>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}