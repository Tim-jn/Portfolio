import './ContactContent.scss'
import Button from '../Button/Button'

export default function ContactContent() {
  return (
    <div className="contact-content">
      <Button
        className="button"
        text="LinkedIn"
        href="https://www.linkedin.com/in/timjeanmart/"
      />
      <Button
        className="button"
        text="Email"
        href="mailto:tim.jeanmart@hotmail.com"
      />
    </div>
  )
}
