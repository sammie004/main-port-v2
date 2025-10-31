import CardNav from '../components/nav'
import TextType from '../components/type'
import About from '../screens/about'
import SkillsSection from '../screens/skills'
import Squares from '../components/back'
import ProjectsSection from '../screens/projects'
import ContactSection from '../screens/contact'
import './App.css'

const App = () => {
  const items = [
    {
      label: 'About',
      bgColor: '#0D0716',
      textColor: '#fff',
      links: [
        { label: 'Company', ariaLabel: 'About Company', href: '#about' },
        { label: 'Careers', ariaLabel: 'About Careers', href: '#about' }
      ]
    },
    {
      label: 'Projects',
      bgColor: '#170D27',
      textColor: '#fff',
      links: [
        {
          label: 'Featured',
          ariaLabel: 'Featured Projects',
          href: '#projects'
        },
        {
          label: 'Case Studies',
          ariaLabel: 'Project Case Studies',
          href: '#projects'
        }
      ]
    },
    {
      label: 'Contact',
      bgColor: '#271E37',
      textColor: '#fff',
      links: [
        { label: 'Email', ariaLabel: 'Email us', href: '#contact' },
        { label: 'Twitter', ariaLabel: 'Twitter', href: '#contact' },
        { label: 'LinkedIn', ariaLabel: 'LinkedIn', href: '#contact' }
      ]
    }
  ]

  return (
    <div>
      <CardNav
        logoAlt='Company Logo'
        items={items}
        baseColor='#fff'
        menuColor='#000'
        buttonBgColor='#111'
        buttonTextColor='#fff'
        ease='power3.out'
        data-aos='slide-right'
      />

      {/* HERO SECTION */}
      <section className='section hero' data-aos='fade-up'>
        {/* Background animation */}
        <Squares
          direction='diagonal'
          speed={0.7}
          borderColor='#ddd'
          hoverFillColor='#111'
          squareSize={50}
          className='squares-hero-bg'
        />

        <div className='hero-content'>
          <TextType
            text={[
              'Hi there!',
              'My name is Ndih Samuel',
              'A web developer',
              'UI/UX designer',
              'Product designer'
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter='|'
          />
        </div>
        <div className='scroll'>
          Scroll down <span className='down'>↓</span>
        </div>
        <div className='shadow'></div>
      </section>

      {/* ABOUT SECTION */}
      <section className='about' id='about'>
        <About />
      </section>

      {/* SKILLS SECTION */}
      <section className='Skills' id='skills'>
        <SkillsSection />
      </section>

      {/* Projects Section */}
      <section className='projects' id='projects'>
        <ProjectsSection />
      </section>

      {/* contact section */}
      <section className='contact' id='contact'>
        <ContactSection />
      </section>
    </div>
  )
}

export default App
