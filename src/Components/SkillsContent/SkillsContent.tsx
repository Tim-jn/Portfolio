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
        "Depuis le début de mon parcours en tant que développeur, j'ai pu enchaîner différentes formations au sein d'organismes reconnus tels qu'OpenClassrooms, Udemy, Udacity, Dyma et bien d'autres, afin de monter en compétences.",
        'Je construit des sites Web avec les meilleures pratiques, réactifs, rapides et faciles à utiliser. Le principal domaine de mon expertise est le développement Front-End, HTML, CSS, JS (React).',
        "J'ai également une expérience de développeur Full-Stack, plus modeste, avec NodeJS et PostgreSQL, ainsi qu'avec un CMS, WordPress.",
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
          pour plus de details, et si vous avez une question, n'hésitez pas à me
          contacter !
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
