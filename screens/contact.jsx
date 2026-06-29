import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUpRightFromSquare } from 'react-icons/fa6'
import '../css/contact.css'

export default function ContactSection () {
  const handleSubmit = e => e.preventDefault()

  return (
    <section className='contact-section'>

      {/* ── Header ── */}
      <div className='contact-top'>
        <p className='contact-eyebrow'>contact()</p>
        <h1 className='contact-title'>
          let's build something<span className='contact-title__dot'>.</span>
        </h1>
        <p className='contact-subtitle'>
          Open to freelance, collabs, and interesting problems.
          Usually replies within 24 hrs.
        </p>
      </div>

      {/* ── Card ── */}
      <div className='contact-card'>

        {/* Left: form */}
        <div className='contact-form-col'>
          <form onSubmit={handleSubmit}>
            <div className='form-row'>
              <label className='form-label' htmlFor='name'>name</label>
              <input id='name' type='text' placeholder='your_full_name' required />
            </div>

            <div className='form-row'>
              <label className='form-label' htmlFor='email'>email</label>
              <input id='email' type='email' placeholder='you@example.com' required />
            </div>

            <div className='form-row'>
              <label className='form-label' htmlFor='subject'>subject</label>
              <input id='subject' type='text' placeholder="// what's this about?" />
            </div>

            <div className='form-row'>
              <label className='form-label' htmlFor='message'>message</label>
              <textarea
                id='message'
                rows={4}
                placeholder='// tell me about your project...'
                required
              />
            </div>

            <div className='form-footer'>
              <span className='form-note'>// replies within 24 hrs</span>
              <button className='contact-submit' type='submit'>
                send() <FaArrowUpRightFromSquare size={11} />
              </button>
            </div>
          </form>
        </div>

        {/* Right: info */}
        <div className='contact-info-col'>
          <div className='contact-note'>
            <p className='contact-note-tag'>// a note</p>
            <p className='contact-note-quote'>
              "The best work comes from<br />
              <span>genuine conversation."</span>
            </p>
          </div>

          <div className='contact-divider' />

          <div className='contact-detail-rows'>
            <div className='detail-row'>
              <span className='detail-label'>email</span>
              <a className='detail-value' href='mailto:samzie12346@gmail.com'>
                samzie12346@gmail.com <FaArrowUpRightFromSquare size={10} />
              </a>
            </div>
            <div className='detail-row'>
              <span className='detail-label'>location</span>
              <span className='detail-value'>Lagos, NG</span>
            </div>
            <div className='detail-row'>
              <span className='detail-label'>status</span>
              <span className='detail-value detail-value--available'>
                <span className='status-dot' aria-hidden='true' />
                open to work
              </span>
            </div>
          </div>

          <div className='contact-socials'>
            <a className='social-icon' href='https://github.com/' target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
              <FaGithub size={15} />
            </a>
            <a className='social-icon' href='https://linkedin.com/' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
              <FaLinkedin size={15} />
            </a>
            <a className='social-icon' href='mailto:samzie12346@gmail.com' aria-label='Email'>
              <FaEnvelope size={15} />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}