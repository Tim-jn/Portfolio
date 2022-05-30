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
          Passionate about the world of the web, I started my training in an
          OpenClassrooms course, and I train today mainly as an autodidact. I
          have a particular interest in clean interfaces and user experience (UX
          Design).
        </p>
        <p className="about-paragraph">
          Traveler, I had the opportunity to visit dozens of countries, and I
          lived 6 months in Japan in 2021, in Sapporo.
        </p>
        <p className="about-paragraph">
          You can see my resume by clicking on this
          <a
            href="https://cvdesignr.com/p/61f0091f46d5e"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            link
          </a>
          .
        </p>
        <p className="about-paragraph">
          <a href="#contact">
            I would love to work together! Send me an email to get in touch.
          </a>
        </p>
      </div>
    </div>
  )
}
