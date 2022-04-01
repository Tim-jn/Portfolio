import './App.scss'
import SideBar from './Components/SideBar'
import Title from './Components/Title'

function App() {
  return (
    <main className="App">
      <section className="home">
        <Title />
        <SideBar />
      </section>
    </main>
  )
}

export default App
