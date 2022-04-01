import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function SocialBar() {
  return (
    <div className="social-bar">
      <a
        className="social-icon"
        href="https://www.linkedin.com/in/timjeanmart/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="social-icons" icon={faLinkedin} />
      </a>
      <a
        className="social-icon"
        href="https://github.com/Tim-jn"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="social-icons" icon={faGithub} />
      </a>
    </div>
  )
}
