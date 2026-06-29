import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../css/About.css'
import ProfileCard from '../components/Profile'

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: 'ease-out' })
  }, [])

  return (
    <section className='about-section' id='about'>
      <h2 className='sr-only'>About Me</h2>

      <div className='about-wrapper'>

        {/* ── Left: Profile card ── */}
        <div className='profile-side' data-aos='fade-right'>
          <span className='profile-side__tag'>// profile.json</span>
          <ProfileCard
            name='Ndih Samuel'
            title='Software Engineer'
            handle='d3v'
            status='Active'
            contactText='$ contact --me'
            avatarUrl='/path/to/avatar.jpg'
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log('Contact clicked')}
          />
        </div>

        {/* ── Right: Code editor window ── */}
        <div className='about-content' data-aos='fade-left'>
          <div className='code-window'>

            {/* Tab bar */}
            <div className='code-window__tabbar'>
              <span className='code-window__tab'>
                <span className='code-window__tab-dot' aria-hidden='true' />
                about.me.js
              </span>
            </div>

            {/* Body: line numbers + code */}
            <div className='code-window__body'>
              <div className='code-window__gutter' aria-hidden='true'>
                {Array.from({ length: 16 }, (_, i) => (
                  <span key={i} className='line-num'>{String(i + 1).padStart(2, '0')}</span>
                ))}
              </div>

              <div className='code-window__code'>
                <p className='cl'>
                  <span className='tok-kw'>const</span> aboutMe{' '}
                  <span className='tok-punct'>=</span>{' '}
                  <span className='tok-punct'>{'{'}</span>
                </p>

                <p className='cl'>
                  &nbsp;&nbsp;<span className='tok-type'>name</span>
                  <span className='tok-punct'>:</span>{' '}
                  <span className='tok-str'>"Ndih Samuel"</span>
                  <span className='tok-punct'>,</span>
                </p>

                <p className='cl'>
                  &nbsp;&nbsp;<span className='tok-type'>role</span>
                  <span className='tok-punct'>:</span>{' '}
                  <span className='tok-str'>"Software Engineer"</span>
                  <span className='tok-punct'>,</span>
                </p>

                <p className='cl'>
                  &nbsp;&nbsp;<span className='tok-type'>stack</span>
                  <span className='tok-punct'>:</span>{' '}
                  <span className='tok-punct'>[</span>
                  {['React', 'Node.js', 'MySQL', 'Figma'].map((t, i, arr) => (
                    <span key={t}>
                      <span className='tok-str'>"{t}"</span>
                      {i < arr.length - 1 && <span className='tok-punct'>, </span>}
                    </span>
                  ))}
                  <span className='tok-punct'>]</span>
                  <span className='tok-punct'>,</span>
                </p>

                <p className='cl'>
                  &nbsp;&nbsp;<span className='tok-type'>bio</span>
                  <span className='tok-punct'>:</span>{' '}
                  <span className='tok-str'>`</span>
                </p>

                <p className='cl cl--prose'>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  Passionate about building clean, functional, and
                  user-centered web applications. I ship full-stack
                  products and lead design systems end-to-end.
                </p>

                <p className='cl'>
                  &nbsp;&nbsp;<span className='tok-str'>`</span>
                  <span className='tok-punct'>,</span>
                </p>

                <p className='cl'>
                  &nbsp;&nbsp;<span className='tok-type'>projects</span>
                  <span className='tok-punct'>:</span>{' '}
                  <span className='tok-punct'>[</span>
                  <span className='tok-str'>"Result Upload System"</span>
                  <span className='tok-punct'>, </span>
                  <span className='tok-str'>"Ecobin"</span>
                  <span className='tok-punct'>, ...]</span>
                  <span className='tok-punct'>,</span>
                </p>

                <p className='cl'>
                  &nbsp;&nbsp;<span className='tok-type'>interests</span>
                  <span className='tok-punct'>:</span>{' '}
                  <span className='tok-punct'>[</span>
                  <span className='tok-str'>"teaching"</span>
                  <span className='tok-punct'>, </span>
                  <span className='tok-str'>"UI/UX"</span>
                  <span className='tok-punct'>, </span>
                  <span className='tok-str'>"open source"</span>
                  <span className='tok-punct'>]</span>
                  <span className='tok-punct'>,</span>
                </p>

                <p className='cl'>
                  &nbsp;&nbsp;<span className='tok-type'>available</span>
                  <span className='tok-punct'>:</span>{' '}
                  <span className='tok-kw'>true</span>
                  <span className='tok-punct'>,</span>
                </p>

                <p className='cl'>
                  <span className='tok-punct'>{'};'}</span>
                </p>

                <p className='cl'>&nbsp;</p>

                <p className='cl cl--comment'>
                  {'// "Let\'s build something meaningful — one line at a time."'}
                </p>

                <p className='cl'>&nbsp;</p>

                <p className='cl'>
                  <span className='tok-kw'>export default</span> aboutMe
                  <span className='tok-punct'>;</span>
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default About