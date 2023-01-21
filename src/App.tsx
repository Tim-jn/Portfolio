import './App.scss'
import SideBar from './Components/SideBar/SideBar'
import Title from './Components/HomeContent/HomeContent'
import AboutContent from './Components/AboutContent/AboutContent'
import SkillsContent from './Components/SkillsContent/SkillsContent'
import WorkGallery from './Components/WorkGallery/WorkGallery'
import ContactContent from './Components/ContactContent/ContactContent'
import BackToTop from './Components/BackToTop/BackToTop'
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
      <BackToTop />
      <section id="home" className="home" ref={homeRef}>
        <div className="home-section">
          <Title />
        </div>
      </section>
      <section id="about" className="about">
        <div className="about-section" ref={addToRefs}>
          <AboutContent />
        </div>
        <div className="custom-shape-divider-bottom-1674235994">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            ></path>
          </svg>
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
        <div className="arrow-down"></div>
        <div className="custom-square"></div>
        <div className="custom-shape-divider-bottom-1674235557">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
      <section id="contact" className="contact">
        <div
          className="contact-section"
          ref={isLargerScreen ? addToRefs : null}
        >
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
