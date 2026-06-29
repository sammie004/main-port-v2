import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUpRightFromSquare } from 'react-icons/fa6'
import '../css/contact.css'

// ─── EmailJS config ────────────────────────────────────────────────────────────
// 1. Sign up at https://emailjs.com (free tier: 200 emails/month)
// 2. Create a Service → get SERVICE_ID
// 3. Create a Template with these variables: {{from_name}}, {{from_email}},
//    {{subject}}, {{message}}  → get TEMPLATE_ID
// 4. Copy your Public Key from Account → API Keys
const EMAILJS_SERVICE_ID  = 'service_ip57m3q'
const EMAILJS_TEMPLATE_ID = 'template_oel5vci'
const EMAILJS_PUBLIC_KEY  = 'N3jKsI2hZSUC0gJdX'
// ───────────────────────────────────────────────────────────────────────────────

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' }

export default function ContactSection () {
  const formRef = useRef(null)
  const [fields,  setFields]  = useState(INITIAL_FORM)
  const [status,  setStatus]  = useState('idle') // idle | sending | success | error
  const [popup,   setPopup]   = useState(false)

  const handleChange = e =>
    setFields(prev => ({ ...prev, [e.target.id]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setPopup(true)
      setFields(INITIAL_FORM)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  const closePopup = () => {
    setPopup(false)
    setStatus('idle')
  }

  const isSending = status === 'sending'

  return (
    <section className='contact-section'>

      {/* ── Success Popup ── */}
      {popup && (
        <div className='popup-overlay' onClick={closePopup} role='dialog' aria-modal='true' aria-label='Message sent'>
          <div className='popup-card' onClick={e => e.stopPropagation()}>
            <div className='popup-icon-wrap' aria-hidden='true'>
              <svg className='popup-check' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <circle cx='12' cy='12' r='11' stroke='currentColor' strokeWidth='1.5' />
                <path d='M7 12.5l3.5 3.5 6.5-7' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' />
              </svg>
            </div>
            <p className='popup-eyebrow'>message_sent()</p>
            <h2 className='popup-title'>Got it<span className='popup-dot'>.</span></h2>
            <p className='popup-body'>
              Your message landed in my inbox. I'll reply within 24 hrs — usually much sooner.
            </p>
            <button className='popup-close' onClick={closePopup}>
              close() <FaArrowUpRightFromSquare size={10} />
            </button>
          </div>
        </div>
      )}

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
          <form ref={formRef} onSubmit={handleSubmit}>
            {/* EmailJS reads these name attrs to map to template vars */}
            <div className='form-row'>
              <label className='form-label' htmlFor='name'>name</label>
              <input
                id='name' name='from_name' type='text'
                placeholder='your_full_name'
                value={fields.name} onChange={handleChange}
                required disabled={isSending}
              />
            </div>

            <div className='form-row'>
              <label className='form-label' htmlFor='email'>email</label>
              <input
                id='email' name='from_email' type='email'
                placeholder='you@example.com'
                value={fields.email} onChange={handleChange}
                required disabled={isSending}
              />
            </div>

            <div className='form-row'>
              <label className='form-label' htmlFor='subject'>subject</label>
              <input
                id='subject' name='subject' type='text'
                placeholder="// what's this about?"
                value={fields.subject} onChange={handleChange}
                disabled={isSending}
              />
            </div>

            <div className='form-row'>
              <label className='form-label' htmlFor='message'>message</label>
              <textarea
                id='message' name='message'
                rows={4}
                placeholder='// tell me about your project...'
                value={fields.message} onChange={handleChange}
                required disabled={isSending}
              />
            </div>

            <div className='form-footer'>
              {status === 'error' ? (
                <span className='form-note form-note--error'>// send failed — try again</span>
              ) : (
                <span className='form-note'>// replies within 24 hrs</span>
              )}

              <button
                className={`contact-submit${isSending ? ' contact-submit--sending' : ''}`}
                type='submit'
                disabled={isSending}
              >
                {isSending
                  ? <><span className='send-spinner' /> sending…</>
                  : <>send() <FaArrowUpRightFromSquare size={11} /></>
                }
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