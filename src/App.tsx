import './App.scss'
import SideBar from './Components/SideBar'
import SocialBar from './Components/SocialBar'
import Title from './Components/Title'

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
