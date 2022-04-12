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
            Skills acquired through my OpenClassrooms training:
            <br />
            <br />
            <ul className="skills-paragraph-ul">
              <li className="skills-paragraph-li">
                Choose a technical solution adapted to your client and work in
                Agile mode
              </li>
              <li className="skills-paragraph-li">
                Create websites with HTML and CSS
              </li>
              <li className="skills-paragraph-li">
                Create dynamic web applications with Javascript and React
              </li>
              <li className="skills-paragraph-li">
                Communicate with the back-end of the application using an API
              </li>
              <li className="skills-paragraph-li">
                Implement unit and integration tests and debug code
              </li>
              <li className="skills-paragraph-li">
                Refactor code to make it more modern and optimized.
              </li>
              <li className="skills-paragraph-li">
                Solve technical problems with a programming language and
                algorithms
              </li>
            </ul>
          </p>
          <p className="skills-paragraph">
            I have several skills in programming languages such as HTML5, CSS3,
            Sass, JavaScript, TypeScript, React but also more modestly
            WordPress, Redux and Jest.
          </p>
          <p className="skills-paragraph">
            You can visit my{' '}
            <a
              href="https://www.github.com/tim-jn/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{' '}
            or my{' '}
            <a
              href="https://www.linkedin.com/in/timjeanmart/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>{' '}
            profile for more details, but if you have a specific question, feel
            free to contact me.
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
