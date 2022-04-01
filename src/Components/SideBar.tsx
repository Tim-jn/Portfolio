import logo from '../assets/logo.png'
import profilePic from '../assets/PP-Tim.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faLaptopCode,
  faAddressCard,
  faFolderOpen,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function SideBar() {
  const [toggle, setToggle] = useState(false)

  const toggleSidebar = () => {
    setToggle(!toggle)
  }

  return (
    <div className={!toggle ? 'sidebar' : 'sidebar sidebar-active'}>
      <div className="logo-content">
        <div className="logo">
          {/* <img src={logo} alt="Tim Jeanmart Logo" /> */}
        </div>
        <FontAwesomeIcon
          className="btn icons"
          icon={faBars}
          onClick={toggleSidebar}
        />
      </div>
      <ul className="nav-list">
        <li>
          <a href="#about-me">
            <FontAwesomeIcon className="icons" icon={faAddressCard} />
            <span className="link-name">About me</span>
          </a>
          <span className="tooltip">About me</span>
        </li>
        <li>
          <a href="#skills">
            <FontAwesomeIcon className="icons" icon={faLaptopCode} />
            <span className="link-name">My hard skills</span>
          </a>
          <span className="tooltip">My hard skills</span>
        </li>
        <li>
          <a href="#work">
            <FontAwesomeIcon className="icons" icon={faFolderOpen} />
            <span className="link-name">My work</span>
          </a>
          <span className="tooltip">My work</span>
        </li>
        <li>
          <a href="#contact">
            <FontAwesomeIcon className="icons" icon={faEnvelope} />
            <span className="link-name">Contact</span>
          </a>
          <span className="tooltip">Contact</span>
        </li>
      </ul>
      <div className="profile-content">
        <div className="profile">
          <div className="profile-details">
            <img src={profilePic} alt="Tim Jeanmart" />
            <div className="name-job">
              <div className="name">Tim Jeanmart</div>
              <div className="job">Front end developer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
