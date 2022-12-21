import './SkillsContent.scss'
import MainDualContent from '../MainDualContent/MainDualContent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faSass,
  faWordpress,
  faAngular,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons'

export default function SkillsContent() {
  return (
    <MainDualContent
      title={'Compétences'}
      paragraphs={[
        'Développeur Front-End junior de 26 ans, spécialisé en React et basé à Liège, Belgique.',
        "Passionné par le monde du web, j'ai commencé mon apprentissage dans une formation OpenClassrooms, et je me forme aujourd'hui principalement en autodidacte ou par le moyen de formations courtes. J'ai un intérêt particulier pour les interfaces épurées et l'expérience utilisateur (UX Design).",
        "Voyageur, j'ai eu l'occasion de visiter des dizaines de pays, et j'ai vécu 6 mois au Japon en 2021, à Sapporo.",
      ]}
      link={
        <p className="content-paragraph">
          Vous pouvez vous rendre sur mon{' '}
          <a
            href="https://www.github.com/tim-jn/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{' '}
          ou sur mon profil{' '}
          <a
            href="https://www.linkedin.com/in/timjeanmart/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>{' '}
          pour plus de details. Si vous avez une question précise, n'hésitez pas
          à me contacter !
        </p>
      }
      image={
        <div className="skills-icons">
          <FontAwesomeIcon className="skills-icon" icon={faHtml5} />
          <FontAwesomeIcon className="skills-icon" icon={faCss3} />
          <FontAwesomeIcon className="skills-icon" icon={faJs} />
          <FontAwesomeIcon className="skills-icon" icon={faReact} />
          <FontAwesomeIcon className="skills-icon" icon={faSass} />
          <FontAwesomeIcon className="skills-icon" icon={faWordpress} />
          <FontAwesomeIcon className="skills-icon" icon={faAngular} />
          <FontAwesomeIcon className="skills-icon" icon={faNodeJs} />
        </div>
      }
    />
    // <div className="skills-content">
    //   <h2 className="skills-title">Compétences</h2>
    //   <div className="skills-text">
    //     <div className="skills-paragraphs">
    //       <div className="skills-paragraph">
    //         Skills acquired through my OpenClassrooms training:
    //       </div>
    //       <p className="skills-paragraph">
    //         I have skills in programming languages such as HTML5, CSS3, Sass,
    //         JavaScript, TypeScript, React but also more modestly WordPress,
    //         Redux and Jest.
    //       </p>
    //       <p className="skills-paragraph">
    //         You can visit my{' '}
    //         <a
    //           href="https://www.github.com/tim-jn/"
    //           target="_blank"
    //           rel="noreferrer"
    //         >
    //           GitHub
    //         </a>{' '}
    //         or my{' '}
    //         <a
    //           href="https://www.linkedin.com/in/timjeanmart/"
    //           target="_blank"
    //           rel="noreferrer"
    //         >
    //           LinkedIn
    //         </a>{' '}
    //         profile for more details, but if you have a specific question, feel
    //         free to contact me.
    //       </p>
    //     </div>
    //     <div className="skills-icons">
    //       <FontAwesomeIcon className="skills-icon" icon={faHtml5} />
    //       <FontAwesomeIcon className="skills-icon" icon={faCss3} />
    //       <FontAwesomeIcon className="skills-icon" icon={faJs} />
    //       <FontAwesomeIcon className="skills-icon" icon={faReact} />
    //       <FontAwesomeIcon className="skills-icon" icon={faSass} />
    //       <FontAwesomeIcon className="skills-icon" icon={faWordpress} />
    //     </div>
    //   </div>
    // </div>
  )
}
