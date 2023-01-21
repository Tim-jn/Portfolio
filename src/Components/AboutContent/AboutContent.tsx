import './AboutContent.scss'
import MainDualContent from '../MainDualContent/MainDualContent'

export default function AboutContent() {
  return (
    <MainDualContent
      title={'À propos'}
      paragraphs={[
        'Développeur Front-End junior de 26 ans, spécialisé en React et basé à Liège, Belgique.',
        "Passionné par le monde du web, j'ai commencé mon apprentissage dans une formation OpenClassrooms, et je me forme aujourd'hui principalement en autodidacte ou par le moyen de formations courtes. J'ai un intérêt particulier pour les interfaces épurées et l'expérience utilisateur (UX Design).",
        "Voyageur, j'ai eu l'occasion de visiter des dizaines de pays, et j'ai vécu 6 mois au Japon en 2021, à Sapporo.",
      ]}
      link={
        <p className="content-paragraph">
          <a
            href="https://cvdesignr.com/p/61f0091f46d5e"
            target="_blank"
            rel="noreferrer"
          >
            🡣 CURRICULUM VITAE
          </a>
        </p>
      }
      // image={<img src={profilePic} alt="Tim Jeanmart" />}
    />
  )
}
