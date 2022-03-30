import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faLaptopCode,
  faAddressCard,
  faFolderOpen,
} from '@fortawesome/free-solid-svg-icons'

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="logo-content">
        <div className="logo">
          {/* <img src={logo} alt="Tim Jeanmart Logo" /> */}
        </div>
        <FontAwesomeIcon className="btn icons" icon={faBars} />
      </div>
      <ul className="nav-list">
        <li>
          <a href="#profile">
            <FontAwesomeIcon className="icons" icon={faAddressCard} />
            <span className="link-name">Who am I ?</span>
          </a>
        </li>
        <li>
          <a href="#skills">
            <FontAwesomeIcon className="icons" icon={faLaptopCode} />
            <span className="link-name">My hard skills</span>
          </a>
        </li>
        <li>
          <a href="#work">
            <FontAwesomeIcon className="icons" icon={faFolderOpen} />
            <span className="link-name">My work</span>
          </a>
        </li>
      </ul>
    </div>
  )
}
