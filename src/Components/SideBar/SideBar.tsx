import profilePic from '../../assets/PP-Tim.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSignal,
  faLaptopCode,
  faAddressCard,
  faFolderOpen,
  faEnvelope,
  faHome,
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
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
      <div className="close" onClick={toggleSidebar}></div>
      <button className="home-contact">
        <a href="#contact">Contact</a>
      </button>
      {/* <ul className="nav-list">
        <li>
          <a href="#home">
            <FontAwesomeIcon className="icons" icon={faHome} />
            <span className="link-name">Accueil</span>
          </a>
          <span className="tooltip">Accueil</span>
        </li>
        <li>
          <a href="#about">
            <FontAwesomeIcon className="icons" icon={faAddressCard} />
            <span className="link-name">À propos</span>
          </a>
          <span className="tooltip">À propos</span>
        </li>
        <li>
          <a href="#skills">
            <FontAwesomeIcon className="icons" icon={faLaptopCode} />
            <span className="link-name">Compétences</span>
          </a>
          <span className="tooltip">Compétences</span>
        </li>
        <li>
          <a href="#work">
            <FontAwesomeIcon className="icons" icon={faFolderOpen} />
            <span className="link-name">Projets</span>
          </a>
          <span className="tooltip">Projets</span>
        </li>
        <li>
          <a href="#contact">
            <FontAwesomeIcon className="icons" icon={faEnvelope} />
            <div className="link-sidebar">
              <div className="slide-sidebar"></div>
              <span className="link-name">Contact</span>
            </div>
          </a>
          <span className="tooltip">Contact</span>
        </li>
      </ul> */}
      <div className="profile-content">
        <div className="profile">
          <div className="profile-details">
            <img src={profilePic} alt="Tim Jeanmart" />
            <div className="name-job">
              <div className="name">Tim Jeanmart</div>
              <div className="job">Développeur Front-End</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
