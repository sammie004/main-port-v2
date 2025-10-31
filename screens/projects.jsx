import React, { useEffect } from 'react'
import '../css/projectSection.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'Result Upload Automation System',
    description:
      'A web-based solution that automates the result upload and approval workflow for universities, replacing manual paperwork with digital approvals.',
    role: 'Full-stack Developer',
    tech: ['Node.js', 'MySQL', 'HTML', 'CSS', 'Javascript'],
    image: '../src/images/Screenshot (127).png'
  },
  {
    title: 'Event Management System',
    description:
      'A project management gig where I oversaw the design and planning of an event scheduling and attendee management system, ensuring smooth coordination between design and development teams.',
    role: 'Project Manager / UI Designer',
    tech: ['Figma', 'UI/UX Design', 'HTML', 'CSS', 'JavaScript'],
    image:
      'https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=800&q=60'
  },
  {
    title: 'Ecobin — Smart Waste Management',
    description:
      'A project management task focused on leading the concept development and system architecture for a smart waste management solution using IoT-inspired ideas.',
    role: 'Project Manager / System Designer',
    tech: ['HTML', 'CSS', 'Node.js'],
    image:
      'https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=60'
  }
]

export default function ProjectsSection () {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      mirror: false,
      easing: 'ease-in-out',
      once: true
    })
  }, []) // ✅ only initialize once

  return (
    <div className='projects-section'>
      <h1 className='projects-title'>My Projects</h1>
      <p className='projects-subtitle'>
        A showcase of the work and ideas I’ve built and managed along my
        journey.
      </p>

      <div className='projects-grid'>
        {projects.map((project, index) => (
          <div key={index} className='project-card' data-aos='fade-right'>
            <div className='project-image'>
              <img src={project.image} alt={project.title} />
            </div>

            <div className='project-content'>
              <h2 className='project-title'>{project.title}</h2>
              <p className='project-description'>{project.description}</p>
              <p className='project-role'>
                <strong>Role:</strong> {project.role}
              </p>

              <div className='tech-stack'>
                <h4 className='label'>Tech Stack Used:</h4>
                <div className='tech-list'>
                  {project.tech.map((tech, i) => (
                    <div key={i} className='tech-item'>
                      {tech}
                    </div>
                  ))}
                </div>

                <div className='view'>
                  <button>
                    View on Github <FaGithub className='icon' />
                  </button>
                  <button>
                    Live Demo <FaExternalLinkAlt className='icon' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
