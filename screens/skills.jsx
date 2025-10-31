import React, { useEffect, useState, useRef } from 'react'
import '../css/SkillsSection.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

// use effect for animation

const skills = [
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'UI/UX Design', level: 88 }
]

// ✅ Tech logos for the Tech Stack section
const techLogos = [
  {
    name: 'HTML5',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
  },
  {
    name: 'CSS3',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
  },
  {
    name: 'JavaScript',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  },
  {
    name: 'React',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  },
  {
    name: 'Node.js',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
  },
  {
    name: 'Figma',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
  },
  {
    name: 'MySQL',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
  }
]

function SkillGauge ({ skill, level, trigger }) {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    AOS.init({
      duration: 1000,
      mirror: false,
      easing: 'ease-in-out',
      once: true
    })
  })
  useEffect(() => {
    if (trigger) {
      let start = 0
      const step = () => {
        start += 2
        if (start <= level) {
          setProgress(start)
          requestAnimationFrame(step)
        } else {
          setProgress(level)
        }
      }
      requestAnimationFrame(step)
    }
  }, [trigger, level])

  return (
    <div className='skill-card'>
      <div className='gauge-container'>
        <svg viewBox='0 0 36 36' className='gauge'>
          <path
            className='gauge-bg'
            d='M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831'
          />
          <path
            className='gauge-progress'
            strokeDasharray={`${progress}, 100`}
            d='M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831'
          />
          <text x='18' y='20.35' className='gauge-text'>
            {progress}%
          </text>
        </svg>
      </div>
      <h3 className='skill-name'>{skill}</h3>
    </div>
  )
}

export default function SkillsSection () {
  const [visibleSkills, setVisibleSkills] = useState({})
  const containerRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const index = entry.target.getAttribute('data-index')
          if (entry.isIntersecting) {
            setVisibleSkills(prev => ({ ...prev, [index]: true }))
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.4 }
    )

    containerRefs.current.forEach(ref => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className='skills-page'>
      <h1 className='skills-title'>My Skills</h1>
      <p className='skills-subtitle'>
        A visual overview of my technical strengths.
      </p>

      <div className='skills-grid'>
        {skills.map((s, index) => (
          <div
            key={s.name}
            data-index={index}
            ref={el => (containerRefs.current[index] = el)}
          >
            <SkillGauge
              skill={s.name}
              level={s.level}
              trigger={visibleSkills[index]}
            />
          </div>
        ))}
      </div>

      {/* ✅ Tech Stack and Tools Section */}
      <div className='tech-stack'>
        <h2>Tech Stack & Tools</h2>
        <div className='tech-logos' data-aos='zoom-in-up'>
          {techLogos.map(logo => (
            <div key={logo.name} className='tech-logo'>
              <img src={logo.src} alt={logo.name} />
              <p>{logo.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
