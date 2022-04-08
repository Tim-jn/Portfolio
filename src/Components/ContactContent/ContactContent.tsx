import './ContactContent.scss'
import Button from '../Button/Button'

export default function ContactContent() {
  return (
    <div className="contact-content">
      <div className="contact-text">
        If you want to work with me or if you have any questions, feel free to
        contact me by mail or linkedin. I will answer you as soon as possible.
      </div>
      <div className="contact-buttons">
        <Button
          className="button contact-button"
          text="LinkedIn"
          href="https://www.linkedin.com/in/timjeanmart/"
          target="_blank"
        />
        <Button
          className="button contact-button"
          text="Email"
          href="mailto:tim.jeanmart@hotmail.com"
          target="_blank"
        />
      </div>
    </div>
  )
}
