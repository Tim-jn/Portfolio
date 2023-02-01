import './AboutContent.scss'
import MainDualContent from '../MainDualContent/MainDualContent'

export default function AboutContent() {
  return (
    <MainDualContent
      title={'À propos'}
      paragraphs={[
        "Je suis Tim, un développeur web passionné, principalement axé Front-End et spécialisé en React. J'ai 26 ans et je suis basé à Liège, en Belgique.",
        'Autodidacte, organisé et rigoureux, je réalise toujours les projets qui me sont confiés avec professionalisme et minutie.',
        "J'aime voyager. J'ai eu la chance de pouvoir visiter des dizaines de pays, et mon intérêt pour la culture asiatique (plus particulièrement la culture Japonaise) m'a amené à vivre 6 mois au Japon en 2021, à Sapporo.",
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
    />
  )
}
