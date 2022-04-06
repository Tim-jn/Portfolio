import './AboutContent.scss'

export default function AboutContent() {
  return (
    <div className="about-content">
      <h2 className="about-title">
        <span className="about-title-letter-capital">A</span>
        <span className="title-letter" data-content="b">
          b
        </span>
        <span className="title-letter" data-content="o">
          o
        </span>
        <span className="title-letter" data-content="u">
          u
        </span>
        <span className="title-letter" data-content="t">
          t
        </span>
      </h2>
      <div className="about-text">
        <p className="about-paragraph">
          I'm a 25 years old junior front-end developer, specialized in React
          and based in Liège, Belgium.
        </p>
        <p className="about-paragraph">
          Passionate about the world of the web, I had the opportunity to start
          my training as part of an OpenClassrooms course, and I train today as
          an autodidact.
        </p>
        <p className="about-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          pariatur ex debitis necessitatibus blanditiis repellendus laboriosam
          fugit, similique adipisci nobis! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dolor, sed. Iure praesentium suscipit id
          eum amet, corporis expedita error blanditiis.
        </p>
        <p className="about-paragraph">
          I would love to work together! Send me an email to get in touch.
        </p>
      </div>
    </div>
  )
}
