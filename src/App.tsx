import './App.scss'
import SideBar from './Components/SideBar/SideBar'
import SocialBar from './Components/SocialBar/SocialBar'
import Title from './Components/Title/Title'

function App() {
  return (
    <main className="App">
      <SideBar />
      <section id="home" className="home">
        <SocialBar />
        <Title />
      </section>
      <section id="about-me" className="about"></section>
      <section id="skills" className="skills"></section>
      <section id="work" className="work"></section>
      <section id="contact" className="contact"></section>
    </main>
  )
}

export default App
