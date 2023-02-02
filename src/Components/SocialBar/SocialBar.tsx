import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import './SocialBar.scss'

export default function SocialBar() {
  return (
    <div className="social-side social-bar">
      <a
        className="social-icon"
        href="https://www.linkedin.com/in/timjeanmart/"
        target="_blank"
        rel="noreferrer"
      >
        <span className="social-text">LinkedIn</span>
        <FontAwesomeIcon className="linkedin social-icons" icon={faLinkedinIn} />
      </a>
      <a
        className="social-icon"
        href="https://github.com/Tim-jn"
        target="_blank"
        rel="noreferrer"
      >
        <span className="social-text"> GitHub</span>
        <FontAwesomeIcon className="social-icons" icon={faGithub} />
      </a>
    </div>
  )
}
