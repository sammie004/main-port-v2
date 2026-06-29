import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import '../css/About.css'
import ProfileCard from '../components/Profile'

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    })
  }, [])

  return (
    <section className='about-section' id='about'>
      <h2 className='sr-only'>About Me</h2>

      <div className='about-wrapper'>
        {/* LEFT: Profile Card */}
        <div className='profile-side' data-aos='fade-right'>
          <span className='profile-side__tag' aria-hidden='true'>
            // profile.json
          </span>
          <ProfileCard
            name='Ndih Samuel'
            title='Software Engineer'
            handle='d3v'
            status='Active'
            contactText='Contact Me'
            avatarUrl='/path/to/avatar.jpg'
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log('Contact clicked')}
          />
        </div>

        {/* RIGHT: About content, styled as a code editor window */}
        <div className='about-content' data-aos='fade-left'>
          <div className='code-window'>
            <div className='code-window__tabbar'>
              <span className='code-window__tab'>
                <span className='code-window__dot' aria-hidden='true' />
                about.me.js
              </span>
            </div>

            <div className='code-window__body'>
              <p className='code-line code-line--decl'>
                <span className='tok-kw'>const</span> aboutMe{' '}
                <span className='tok-punct'>=</span>{' '}
                <span className='tok-punct'>{'{'}</span>
              </p>

              <div className='code-block'>
                <span className='code-block__no' aria-hidden='true'>
                  01
                </span>
                <p className='code-block__text'>
                  Hi, I’m <span className='tok-str'>Ndih Samuel</span> — a
                  passionate{' '}
                  <span className='tok-str'>Software Engineer</span>{' '}
                  specializing in building clean, functional, and
                  user-centered web applications. My stack includes{' '}
                  <span className='tok-type'>HTML</span>,{' '}
                  <span className='tok-type'>CSS</span>,{' '}
                  <span className='tok-type'>JavaScript</span>,{' '}
                  <span className='tok-type'>React</span>,{' '}
                  <span className='tok-type'>Node.js</span>,{' '}
                  <span className='tok-type'>Vue.js</span>,{' '}
                  <span className='tok-type'>MySQL</span>, and I design
                  interfaces with <span className='tok-type'>Figma</span>.
                </p>
              </div>

              <div className='code-block'>
                <span className='code-block__no' aria-hidden='true'>
                  02
                </span>
                <p className='code-block__text'>
                  I’ve successfully built software solutions such as a{' '}
                  <span className='tok-str'>
                    Result Upload Automation System
                  </span>
                  , demonstrating my ability to turn ideas into functional
                  applications.
                </p>
              </div>

              <div className='code-block'>
                <span className='code-block__no' aria-hidden='true'>
                  03
                </span>
                <p className='code-block__text'>
                  In addition to development, I’ve managed projects like the{' '}
                  <span className='tok-str'>Event Management System</span>{' '}
                  and{' '}
                  <span className='tok-str'>
                    Ecobin — a Smart Waste Management Solution
                  </span>
                  , where I coordinated tasks, organized teams, and ensured
                  successful delivery.
                </p>
              </div>

              <div className='code-block'>
                <span className='code-block__no' aria-hidden='true'>
                  04
                </span>
                <p className='code-block__text'>
                  Beyond coding and project management, I enjoy{' '}
                  <span className='tok-str'>teaching web development</span>,
                  exploring{' '}
                  <span className='tok-str'>UI/UX design concepts</span>, and
                  building solutions that are both efficient and visually
                  appealing.
                </p>
              </div>

              <p className='code-line code-line--close'>
                <span className='tok-punct'>{'}'}</span>
                <span className='tok-punct'>;</span>
              </p>

              <p className='code-comment'>
                // “Let’s build something meaningful — one line of code at a
                time.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About