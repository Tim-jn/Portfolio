import ChartSkills from './Components/ChartSkills/ChartSkills'
import './App.scss'
import SideBar from './Components/SideBar/SideBar'
import SocialBar from './Components/SocialBar/SocialBar'
import Title from './Components/HomeContent/HomeContent'
import AboutContent from './Components/AboutContent/AboutContent'

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
        {/* <h1 className="skills-title">Skills</h1>
        <div className="skills-text">
          <p className="skills-paragraph">
            Visit my LinkedIn profile for more details or just contact me.
          </p>
        </div> */}
        <ChartSkills />
      </section>
      <section id="work" className="work"></section>
      <section id="contact" className="contact"></section>
    </main>
  )
}

export default App
