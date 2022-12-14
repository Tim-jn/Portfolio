import './AboutContent.scss'
import profilePic from '../../assets/about-pp-bw.png'

export default function AboutContent() {
  return (
    <div className="about-content">
      <>
        <h2 className="about-title">À propos</h2>
        <div className="about-text">
          <p className="about-paragraph">
            Développeur Front-End junior de 26 ans, spécialisé en React et basé
            à Liège, Belgique.
          </p>
          <p className="about-paragraph">
            Passionné par le monde du web, j'ai commencé mon apprentissage dans
            une formation OpenClassrooms, et je me forme aujourd'hui
            principalement en autodidacte ou par le moyen de formations courtes.
            J'ai un intérêt particulier pour les interfaces épurées et
            l'expérience utilisateur (UX Design).
          </p>
          <p className="about-paragraph">
            Voyageur, j'ai eu l'occasion de visiter des dizaines de pays, et
            j'ai vécu 6 mois au Japon en 2021, à Sapporo.
          </p>
          <p className="about-paragraph">
            Cliquez sur
            <a
              href="https://cvdesignr.com/p/61f0091f46d5e"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              ce lien{' '}
            </a>
            pour voir mon CV.
          </p>
        </div>
      </>
      <div className="profile-pic">
        <img src={profilePic} alt="Tim Jeanmart" />
      </div>
    </div>
  )
}
