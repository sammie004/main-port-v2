import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import '../css/contact.css'

export default function ContactSection () {
  return (
    <div className='contact-section'>
      <h1 className='contact-title'>Get In Touch</h1>
      <p className='contact-subtitle'>
        Have a question, idea, or project in mind? Let’s connect!
      </p>

      <form className='contact-form'>
        <input type='text' placeholder='Your Name' required />
        <input type='email' placeholder='Your Email' required />
        <textarea placeholder='Your Message' rows='5' required></textarea>
        <button type='submit'>Send Message</button>
      </form>

      <div className='contact-socials'>
        <a href='https://github.com/' target='_blank' rel='noopener noreferrer'>
          <FaGithub />
        </a>
        <a
          href='https://linkedin.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedin />
        </a>
      
      </div>
    </div>
  )
}
