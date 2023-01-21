import './WorkGallery.scss'
// import Button from '../Button/Button'
import Fylo from './work-images/fylo.svg'
import Jeanmartth from './work-images/jeanmartth.svg'
import Shortly from './work-images/shortly.svg'
import Rimarok from './work-images/rimarok.svg'
import PrevRimarok from './work-images/rimarok.webp'
import PrevJeanmartth from './work-images/jeanmartth.webp'
import PrevFylo from './work-images/fylo.webp'
import PrevShortly from './work-images/shortly.webp'
import { useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   faChevronLeft,
//   faChevronRight,
// } from '@fortawesome/free-solid-svg-icons'

const data = [
  {
    id: 1,
    name: 'Rimarok.com',
    image: Rimarok,
    preview: PrevRimarok,
    live: 'https://rimarok.com/',
    source: 'https://github.com/Skaant/rimarok',
    description:
      'Refonte du site web professionel Rimarok.com en partenariat avec Romaric Ruga, développeur Fullstack freelance.',
    languages: 'React, TypeScript, JAMStack, Bootstrap/SCSS',
  },
  {
    id: 2,
    name: 'Shortly',
    image: Shortly,
    preview: PrevShortly,
    live: 'https://timjn-shortly.netlify.app',
    source: 'https://github.com/Tim-jn/shortly',
    description:
      "Ce projet fait partie des challenges Frontend Mentor. Le défi consiste à reproduire cette page, à y intégrer l'API de raccourcissement d'URL et à la faire ressembler autant que possible à la maquette.",
    languages: 'React, TypeScript, Sass',
  },
  {
    id: 3,
    name: 'Jeanmartth.be',
    image: Jeanmartth,
    preview: PrevJeanmartth,
    live: 'https://jeanmartth.be',
    description:
      "Création et gestion du site web professionel d'une entreprise de chauffage.",
    languages: 'WordPress',
  },
  {
    id: 4,
    name: 'Fylo',
    image: Fylo,
    preview: PrevFylo,
    live: 'https://timjn-fylo.netlify.app/',
    source: 'https://github.com/Tim-jn/Fylo',
    description:
      'Ce projet fait partie des challenges Frontend Mentor. Le défi consiste à reproduire cette page et à la faire ressembler autant que possible à la maquette.',
    languages: 'React, TypeScript, Sass',
  },
]

export default function WorkGallery() {
  const [showModal, setShowModal] = useState(false)
  const [active, setActive] = useState<any | null>(null)

  function getClass(index: Number) {
    return index === active?.id ? 'active' : 'inactive'
  }

  const Modal = ({ object }: any) => (
    <div className="work-modal">
      <div
        className="background-modal"
        style={{
          backgroundImage: `url(${object.preview})`,
        }}
      ></div>
      <div className="text-modal">
        <span className="title">{object.name}</span>
        <span className="description">
          {object.description}
          <br />
          Technologie(s) utilisée(s) : {object.languages}.
        </span>
        <div className="links-modal">
          <a href={object.live} target="_blank" rel="noreferrer">
            Version live
          </a>
          {object.source ? (
            <a href={object.source} target="_blank" rel="noreferrer">
              Code source
            </a>
          ) : (
            ''
          )}
        </div>
      </div>

      <div className="close" onClick={() => setShowModal(false)}></div>
    </div>
  )

  return (
    <div className="gallery-content">
      <h2 className="work-title">Projets récents</h2>
      <div className="work-content">
        {data.map(
          ({
            id,
            name,
            preview,
            image,
            description,
            live,
            source,
            languages,
          }) => {
            return (
              <>
                <div
                  key={id}
                  className={`work-item work-item-${id} ` + getClass(id)}
                  onClick={() => {
                    setActive({
                      id,
                      name,
                      preview,
                      description,
                      live,
                      source,
                      languages,
                    })
                    setShowModal(true)
                  }}
                >
                  <div className="work-miniature">
                    <p className="more-info">Informations</p>
                    <img
                      src={image}
                      alt={name + ' project'}
                      className="work-image"
                    />
                  </div>
                </div>
                {showModal ? <Modal object={active} /> : null}
                {/* {showModal ? (
                <div
                  className={
                    !setShowModal
                      ? `work-modal`
                      : `work-modal work-modal-active`
                  }
                >
                  <img src={image} alt={description} />
                  <div
                    className="close"
                    onClick={() => setShowModal(false)}
                  ></div>
                </div>
              ) : null} */}
              </>
            )
          }
        )}
      </div>
      <div className="more-work">
        <div className="more-work-text">
          Intéressé(e) par mon travail ? Cliquez sur le lien ci-dessous !
        </div>
        <button className="see-more">
          <a
            href="https://github.com/Tim-jn"
            target="_blank"
            className="see-more-link"
            rel="noreferrer"
          >
            Plus de projets
          </a>
        </button>
      </div>
    </div>
  )
}
