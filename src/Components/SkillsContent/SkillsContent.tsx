import './SkillsContent.scss'
import ChartSkills from '../ChartSkills/ChartSkills'

export default function SkillsContent() {
  return (
    <div className="skills-content">
      <div className="skills-text">
        <h2 className="skills-title">
          <span className="skills-title-letter-capital">S</span>
          <span className="skills-title-letter">k</span>
          <span className="skills-title-letter">i</span>
          <span className="skills-title-letter">l</span>
          <span className="skills-title-letter">l</span>
          <span className="skills-title-letter">s</span>
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
