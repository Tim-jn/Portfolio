import './App.scss'
import SideBar from './Components/SideBar/SideBar'
import SocialBar from './Components/SocialBar/SocialBar'
import Title from './Components/HomeContent/HomeContent'
import AboutContent from './Components/AboutContent/AboutContent'
import SkillsContent from './Components/SkillsContent/SkillsContent'
import WorkGallery from './Components/WorkGallery/WorkGallery'
import ContactContent from './Components/ContactContent/ContactContent'

function App() {
  return (
    <main className="App">
      <SideBar />
      <SocialBar />
      <section id="home" className="home">
        <div className="home-section">
          <Title />
        </div>
      </section>
      <section id="about" className="about">
        <div className="about-section">
          <AboutContent />
        </div>
      </section>
      <section id="skills" className="skills">
        <div className="skills-section">
          <SkillsContent />
        </div>
      </section>
      <section id="work" className="work">
        <div className="work-section">
          <WorkGallery />
        </div>
      </section>
      <section id="contact" className="contact">
        <div className="contact-section">
          <ContactContent />
        </div>
      </section>
    </main>
  )
}

export default App
