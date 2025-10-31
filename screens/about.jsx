import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import '../css/About.css'
import { FaArrowDown, FaArrowRight } from 'react-icons/fa'
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
    <section className='about-section'>
      {/* Whimsical Floating Swirls */}
      {/* <div className='whimsical-swirl'></div>
      <div className='whimsical-swirl'></div> */}

      <div className='about-wrapper'>
        {/* LEFT: Profile Card */}
        <div className='profile-side' data-aos='fade-right'>
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

        {/* RIGHT: About Text */}
        <div className='about-content' data-aos='fade-left'>
          <h1>
            ABOUT-ME
            <span className='arrow down-arrow'>
              <FaArrowDown />
            </span>
          </h1>

          <p>
            Hi, I’m <strong>Ndih Samuel</strong> — a passionate{' '}
            <strong>Software Engineer</strong> specializing in building{' '}
            <strong>clean, functional, and user-centered</strong> web
            applications. My stack includes <strong>HTML</strong>,{' '}
            <strong>CSS</strong>, <strong>JavaScript</strong>,{' '}
            <strong>React</strong>, <strong>Node.js</strong>,{' '}
            <strong>Vue.js</strong>, <strong>MySQL</strong>, and I design
            interfaces with <strong>Figma</strong>.
            <span className='arrow right-arrow'>
              <FaArrowRight />
            </span>
          </p>

          <p>
            I’ve successfully built software solutions such as a{' '}
            <strong>Result Upload Automation System</strong>, demonstrating my
            ability to turn ideas into functional applications.
          </p>

          <p>
            In addition to development, I’ve managed projects like the{' '}
            <strong>Event Management System</strong> and{' '}
            <strong>Ecobin — a Smart Waste Management Solution</strong>, where I
            coordinated tasks, organized teams, and ensured successful delivery.
          </p>

          <p>
            Beyond coding and project management, I enjoy{' '}
            <strong>teaching web development</strong>, exploring{' '}
            <strong>UI/UX design concepts</strong>, and building solutions that
            are both efficient and visually appealing.
          </p>

          <p className='closing'>
            “Let’s build something meaningful — one line of code at a time.”
            <span className='arrow down-arrow'>
              <FaArrowDown />
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
