// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   faSignal,
//   faLaptopCode,
//   faAddressCard,
//   faFolderOpen,
//   faEnvelope,
//   faHome,
// } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import SocialBar from '../SocialBar/SocialBar'
import './SideBar.scss'

export default function SideBar() {
  const [toggle, setToggle] = useState(false)

  const toggleSidebar = () => {
    setToggle(!toggle)
  }

  return (
    <div className={!toggle ? 'sidebar' : 'sidebar sidebar-active'}>
      <button className="menu" onClick={toggleSidebar}>
        Menu
      </button>
      <a href="#home" className="home-logo">
        <div className="logo"></div>
      </a>
      <div className="close" onClick={toggleSidebar}></div>
      <button className="home-contact">
        <a href="#contact">Contact</a>
      </button>
      <ul className="nav-list">
        <li>
          <a href="#home">
            <span className="link-name">Accueil</span>
          </a>
        </li>
        <li>
          <a href="#about">
            <span className="link-name">À propos</span>
          </a>
        </li>
        <li>
          <a href="#skills">
            <span className="link-name">Compétences</span>
          </a>
        </li>
        <li>
          <a href="#work">
            <span className="link-name">Projets</span>
          </a>
        </li>
        <li>
          <a href="#contact">
            <div className="link-sidebar">
              <div className="slide-sidebar"></div>
              <span className="link-name">Contact</span>
            </div>
          </a>
        </li>
      </ul>
      <div className="profile-content">
        <SocialBar />
        <div className="profile-details">
          <div className="name">Tim Jeanmart</div>
          <div className="job">Développeur Front-End</div>
        </div>
      </div>
    </div>
  )
}
