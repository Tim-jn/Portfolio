import ContactBtn from '../Button/Button'
import './HomeContent.scss'

export default function Title() {
  return (
    <div className="main-title">
      <h1 className="main-title-content">
        <span className="title-letter first-capital">H</span>
        <span className="title-letter">i</span>
        <span className="title-letter">,</span>
        <br />
        <span className="title-letter">I</span>
        <span className="title-letter">'</span>
        <span className="title-letter letter-spaced">m</span>
        <span className="title-letter">T</span>
        <span className="title-letter">i</span>
        <span className="title-letter">m</span>
        <span className="title-letter">,</span>
        <br />
        <span className="title-letter letter-spaced">a</span>
        <span className="title-letter">w</span>
        <span className="title-letter">e</span>
        <span className="title-letter letter-spaced">b</span>
        <span className="title-letter">d</span>
        <span className="title-letter">e</span>
        <span className="title-letter">v</span>
        <span className="title-letter">e</span>
        <span className="title-letter">l</span>
        <span className="title-letter">o</span>
        <span className="title-letter">p</span>
        <span className="title-letter">e</span>
        <span className="title-letter">r</span>
      </h1>
      <ContactBtn className="contact-btn" text="Contact me" />
    </div>
  )
}
