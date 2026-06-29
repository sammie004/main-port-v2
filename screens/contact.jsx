import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUpRightFromSquare } from 'react-icons/fa6'
import '../css/contact.css'

export default function ContactSection () {
  const handleSubmit = e => e.preventDefault()

  return (
    <section className='contact-section'>

      {/* ── Header ── */}
      <div className='contact-top'>
        <div className='contact-kicker'>
          <span className='contact-kicker-line' />
          <span className='contact-kicker-text'>Get in touch</span>
          <span className='contact-kicker-line' />
        </div>
        <h1 className='contact-title'>
          Let's build something<br />
          <em>worth remembering</em>
        </h1>
        <p className='contact-subtitle'>
          Open to freelance work, collaborations, and interesting problems.
          Drop a message and I'll get back to you within a day.
        </p>
      </div>

      {/* ── Card ── */}
      <div className='contact-card'>

        {/* Left: form */}
        <div className='contact-form-col'>
          <form onSubmit={handleSubmit}>
            <div className='form-row'>
              <label className='form-label' htmlFor='name'>Name</label>
              <input id='name' type='text' placeholder='Your full name' required />
            </div>

            <div className='form-row'>
              <label className='form-label' htmlFor='email'>Email</label>
              <input id='email' type='email' placeholder='you@example.com' required />
            </div>

            <div className='form-row'>
              <label className='form-label' htmlFor='subject'>Subject</label>
              <input id='subject' type='text' placeholder="What's this about?" />
            </div>

            <div className='form-row'>
              <label className='form-label' htmlFor='message'>Message</label>
              <textarea
                id='message'
                rows={5}
                placeholder='Tell me about your project, idea, or question…'
                required
              />
            </div>

            <div className='form-footer'>
              <span className='form-note'>Usually replies within 24 hrs</span>
              <button className='contact-submit' type='submit'>
                Send <FaArrowUpRightFromSquare size={12} />
              </button>
            </div>
          </form>
        </div>

        {/* Right: info */}
        <div className='contact-info-col'>
          <div>
            <p className='contact-note-tag'>A note</p>
            <p className='contact-note-quote'>
              "The best work comes from<br />
              <span>genuine conversation."</span>
            </p>
          </div>

          <div className='contact-divider' />

          <div className='contact-detail-rows'>
            <div className='detail-row'>
              <span className='detail-label'>Email</span>
              <a className='detail-value' href='mailto:samzie12346@gmail.com'>
                samzie12346@gmail.com <FaArrowUpRightFromSquare size={10} />
              </a>
            </div>
            <div className='detail-row'>
              <span className='detail-label'>Location</span>
              <span className='detail-value'>Lagos, Nigeria</span>
            </div>
            <div className='detail-row'>
              <span className='detail-label'>Availability</span>
              <span className='detail-value detail-value--available'><span className='pill'></span>Open to work</span>
            </div>
          </div>

          <div className='contact-socials'>
            <a
              className='social-icon'
              href='https://github.com/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'
            >
              <FaGithub size={16} />
            </a>
            <a
              className='social-icon'
              href='https://linkedin.com/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
            >
              <FaLinkedin size={16} />
            </a>
            <a
              className='social-icon'
              href='mailto:hello@yourname.dev'
              aria-label='Email'
            >
              <FaEnvelope size={16} />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}