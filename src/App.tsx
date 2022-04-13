import './App.scss'
import SideBar from './Components/SideBar/SideBar'
import SocialBar from './Components/SocialBar/SocialBar'
import Title from './Components/HomeContent/HomeContent'
import AboutContent from './Components/AboutContent/AboutContent'
import SkillsContent from './Components/SkillsContent/SkillsContent'
import WorkGallery from './Components/WorkGallery/WorkGallery'
import ContactContent from './Components/ContactContent/ContactContent'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useMediaQuery } from 'react-responsive'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const homeRef = useRef(null)
  const revealRefs = useRef([])
  revealRefs.current = []

  const isLargerScreen = useMediaQuery({ query: '(max-width: 2300px)' })

  useEffect(() => {
    gsap.fromTo(
      homeRef.current,
      {
        autoAlpha: 0,
        ease: 'none',
        y: -20,
      },
      {
        autoAlpha: 1,
        y: 0,
        delay: 0.5,
      }
    )

    revealRefs.current.forEach((el) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
          y: -20,
        },
        {
          y: 0,
          autoAlpha: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top center+=100',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })
  }, [])

  const addToRefs = (el: never) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }

  return (
    <main className="App">
      <SideBar />
      <SocialBar />
      <section id="home" className="home" ref={homeRef}>
        <div className="home-section">
          <Title />
        </div>
      </section>
      <section id="about" className="about">
        <div className="about-section" ref={addToRefs}>
          <AboutContent />
        </div>
      </section>
      <section id="skills" className="skills">
        <div className="skills-section" ref={addToRefs}>
          <SkillsContent />
        </div>
      </section>
      <section id="work" className="work">
        <div className="work-section" ref={addToRefs}>
          <WorkGallery />
        </div>
      </section>
      <section
        id="contact"
        className="contact"
        ref={isLargerScreen ? addToRefs : null}
      >
        <div className="contact-section">
          <ContactContent />
        </div>
      </section>
      <footer className="footer">
        Copyright © 2022 - Designed and created by Tim Jeanmart.
      </footer>
    </main>
  )
}

export default App
