import './SkillsContent.scss'
import ChartSkills from '../ChartSkills/ChartSkills'

export default function SkillsContent() {
  return (
    <div className="skills-content">
      <h2 className="skills-title">
        <span className="skills-title-letter-capital">S</span>
        <span className="skills-title-letter">k</span>
        <span className="skills-title-letter">i</span>
        <span className="skills-title-letter">l</span>
        <span className="skills-title-letter">l</span>
        <span className="skills-title-letter">s</span>
      </h2>
      <div className="chart-skills">
        <ChartSkills />
      </div>
    </div>
  )
}
