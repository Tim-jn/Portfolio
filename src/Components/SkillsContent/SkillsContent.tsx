import './SkillsContent.scss'
import ChartSkills from '../ChartSkills/ChartSkills'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faSass,
  faWordpress,
} from '@fortawesome/free-brands-svg-icons'

export default function SkillsContent() {
  return (
    <div className="skills-content">
      <div className="skills-text">
        <h2 className="skills-title">
          <span className="about-title-letter-capital">S</span>
          <span className="title-letter" data-content="k">
            k
          </span>
          <span className="title-letter" data-content="i">
            i
          </span>
          <span className="title-letter" data-content="l">
            l
          </span>
          <span className="title-letter" data-content="l">
            l
          </span>
          <span className="title-letter" data-content="s">
            s
          </span>
        </h2>
        <div className="skills-paragraphs">
          <p className="skills-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            pariatur ex debitis necessitatibus blanditiis repellendus laboriosam
            fugit, similique adipisci nobis! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Dolor, sed. Iure praesentium suscipit
            id eum amet, corporis expedita error blanditiis.
          </p>
          <p className="skills-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            pariatur ex debitis necessitatibus blanditiis repellendus laboriosam
            fugit, similique adipisci nobis! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Dolor, sed. Iure praesentium suscipit
            id eum amet, corporis expedita error blanditiis.
          </p>
        </div>
        <div className="skills-icons">
          <FontAwesomeIcon className="skills-icon" icon={faHtml5} />
          <FontAwesomeIcon className="skills-icon" icon={faCss3} />
          <FontAwesomeIcon className="skills-icon" icon={faJs} />
          <FontAwesomeIcon className="skills-icon" icon={faReact} />
          <FontAwesomeIcon className="skills-icon" icon={faSass} />
          <FontAwesomeIcon className="skills-icon" icon={faWordpress} />
        </div>
      </div>
      <div className="chart-skills">
        <ChartSkills />
      </div>
    </div>
  )
}
