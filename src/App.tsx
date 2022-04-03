import './App.scss'
import SideBar from './Components/SideBar/SideBar'
import SocialBar from './Components/SocialBar/SocialBar'
import Title from './Components/Title/Title'

function App() {
  return (
    <main className="App">
      <section id="home" className="home">
        <SocialBar />
        <Title />
        <SideBar />
      </section>
    </main>
  )
}

export default App
