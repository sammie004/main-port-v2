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
            title='Software Engineer @ Remita'
            handle='that_d3v'
            status='Active'
            contactText='$ contact --me'
            avatarUrl='https://res.cloudinary.com/dugd9t1q4/image/upload/fl_preserve_transparency/v1782742434/avatar-removebg-preview_lwbpxd.jpg?_s=public-apps'
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
                {Array.from({ length: 22 }, (_, i) => (
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
                  &nbsp;&nbsp;<span className='tok-type'>company</span>
                  <span className='tok-punct'>:</span>{' '}
                  <span className='tok-str'>"Remita"</span>
                  <span className='tok-punct'>,</span>
                </p>

                <p className='cl'>
                  &nbsp;&nbsp;<span className='tok-type'>location</span>
                  <span className='tok-punct'>:</span>{' '}
                  <span className='tok-str'>"Lagos, Nigeria"</span>
                  <span className='tok-punct'>,</span>
                </p>

                <p className='cl'>
                  &nbsp;&nbsp;<span className='tok-type'>experience</span>
                  <span className='tok-punct'>:</span>{' '}
                  <span className='tok-str'>"2+ years"</span>
                  <span className='tok-punct'>,</span>
                </p>

                <p className='cl'>
                  &nbsp;&nbsp;<span className='tok-type'>stack</span>
                  <span className='tok-punct'>:</span>{' '}
                  <span className='tok-punct'>[</span>
                  {['React', 'Node.js', 'Java/Spring Boot', 'PHP', 'MySQL','HTML/CSS'].map((t, i, arr) => (
                    <span key={t}>
                      <span className='tok-str'>"{t}"</span>
                      {i < arr.length - 1 && <span className='tok-punct'>, </span>}
                    </span>
                  ))}
                  <span className='tok-punct'>]</span>
                  <span className='tok-punct'>,</span>
                </p>

                <p className='cl'>
                  &nbsp;&nbsp;<span className='tok-type'>expertise</span>
                  <span className='tok-punct'>:</span>{' '}
                  <span className='tok-punct'>[</span>
                  {['Backend Engineering', 'API Design', 'Payment Systems', 'SDK Development'].map((t, i, arr) => (
                    <span key={t}>
                      <span className='tok-str'>"{t}"</span>
                      {i < arr.length - 1 && <span className='tok-punct'>, </span>}
                    </span>
                  ))}
                  <span className='tok-punct'>]</span>
                  <span className='tok-punct'>,</span>
                </p>

                <p className='cl'>
                  &nbsp;&nbsp;<span className='tok-type'>mindset</span>
                  <span className='tok-punct'>:</span>{' '}
                  <span className='tok-punct'>[</span>
                  {['clarity over cleverness', 'systems thinking', 'maintainability first'].map((t, i, arr) => (
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
                  Backend engineer by calling, frontend dev by necessity, and
                  UI/UX designer when nobody else will. I build APIs, payment
                  systems, and SDKs — then obsess over why the button looks
                  slightly off. I write code that's meant to be maintained by
                  humans (including future me, who will have no memory of this).
                  I debug with patience, deploy with prayer, and somehow it
                  always works in production. Mostly.
                </p>

                <p className='cl'>
                  &nbsp;&nbsp;<span className='tok-str'>`</span>
                  <span className='tok-punct'>,</span>
                </p>

                <p className='cl'>
                  &nbsp;&nbsp;<span className='tok-type'>projects</span>
                  <span className='tok-punct'>:</span>{' '}
                  <span className='tok-punct'>[</span>
                  <span className='tok-str'>"RUAS (yes, it automates things)"</span>
                  <span className='tok-punct'>, </span>
                  <span className='tok-str'>"Event Mgmt Sys (nobody showed up to test it)"</span>
                  <span className='tok-punct'>, </span>
                  <span className='tok-str'>"Zoho Billing SDK (money stuff, handled)"</span>
                  <span className='tok-punct'>, ...]</span>
                  <span className='tok-punct'>,</span>
                </p>

                <p className='cl'>
                  &nbsp;&nbsp;<span className='tok-type'>industries</span>
                  <span className='tok-punct'>:</span>{' '}
                  <span className='tok-punct'>[</span>
                  {['FinTech', 'Education', 'Enterprise Software'].map((t, i, arr) => (
                    <span key={t}>
                      <span className='tok-str'>"{t}"</span>
                      {i < arr.length - 1 && <span className='tok-punct'>, </span>}
                    </span>
                  ))}
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
                  {'// "I write clean code. Git blame says otherwise."'}
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