import './SkillsContent.scss'
import ChartSkills from '../ChartSkills/ChartSkills'

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
      </div>
      <div className="chart-skills">
        <ChartSkills />
      </div>
    </div>
  )
}
