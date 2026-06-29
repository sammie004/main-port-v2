import React, { useEffect } from 'react'
import '../css/projectSection.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6'

const projects = [
  {
    number: '01',
    tag: 'Full-stack',
    title: 'Result Upload Automation System',
    description:
      'A web-based solution that replaces manual paperwork with digital approvals — automating the result upload and multi-step sign-off workflow for university administrators.',
    role: 'Developer',
    tech: ['Node.js', 'MySQL', 'HTML/CSS', 'JavaScript'],
    github: '#',
    demo: '#'
  },
  {
    number: '02',
    tag: 'Product / Design',
    title: 'Event Management System',
    description:
      'Oversaw design and planning for an event scheduling and attendee management platform — coordinating between design and development teams from concept through delivery.',
    role: 'Project Manager & UI Designer',
    tech: ['Figma', 'UI/UX Design', 'HTML/CSS', 'JavaScript'],
    github: '#',
    demo: '#'
  },
  {
    number: '03',
    tag: 'Systems / IoT',
    title: 'Ecobin — Smart Waste Management',
    description:
      'Led concept development and system architecture for an IoT-inspired smart waste solution — from sensor logic to backend design — focused on scalable, sustainable infrastructure.',
    role: 'Project Manager & System Designer',
    tech: ['Node.js', 'HTML/CSS', 'IoT Concepts'],
    github: '#',
    demo: '#'
  }
]

export default function ProjectsSection () {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true
    })
  }, [])

  return (
    <section className='projects-section'>
      <div className='projects-header' data-aos='fade-up'>
        <p className='projects-eyebrow'>Selected work</p>
        <h1 className='projects-title'>Projects &amp; Builds</h1>
        <p className='projects-subtitle'>
          A curated set of things I've engineered and led — from automation
          systems to smart hardware concepts.
        </p>
      </div>

      <div className='projects-grid'>
        {projects.map((project, index) => (
          <article
            key={index}
            className='project-card'
            data-aos='fade-up'
            data-aos-delay={index * 80}
          >
            {/* Left: number + vertical rule */}
            <div className='project-left'>
              <span className='project-number'>{project.number}</span>
              <div className='project-rule' aria-hidden='true' />
            </div>

            {/* Right: content */}
            <div className='project-content'>
              <div className='project-meta'>
                <span className='project-tag'>{project.tag}</span>
                <span className='project-role'>{project.role}</span>
              </div>

              <h2 className='project-title'>{project.title}</h2>
              <p className='project-description'>{project.description}</p>

              <div className='tech-stack'>
                {project.tech.map((tech, i) => (
                  <span key={i} className='tech-item'>
                    {tech}
                  </span>
                ))}
              </div>

              <div className='project-actions'>
                <a
                  href={project.github}
                  className='btn btn-github'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaGithub />
                  GitHub
                </a>
                <a
                  href={project.demo}
                  className='btn btn-demo'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Live demo
                  <FaArrowUpRightFromSquare className='btn-icon' />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className='projects-footer' data-aos='fade-up'>
        <a
          href='https://github.com'
          className='projects-more'
          target='_blank'
          rel='noopener noreferrer'
        >
          More on GitHub →
        </a>
      </div>
    </section>
  )
}