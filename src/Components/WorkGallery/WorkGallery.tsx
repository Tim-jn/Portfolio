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
    description:
      'Refonte du site web professionel https://rimarok.com en partenariat avec Romaric Ruga, développeur Fullstack freelance.',
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
      'This project is part of the Frontend Mentor challenges. Your challenge is to build out this URL shortening API landing page and get it looking as close to the design as possible.',
    languages: 'React, TypeScript and Sass',
  },
  {
    id: 3,
    name: 'Jeanmartth.be',
    image: Jeanmartth,
    preview: PrevJeanmartth,
    live: 'https://jeanmartth.be',
    description:
      "This project is a website for a heating company. It was built to develop my wordpress skills. There's no source code for this project.",
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
      'This project is part of the Frontend Mentor challenges. Your challenge is to build out this landing page and get it looking as close to the design as possible.',
    languages: 'React, TypeScript and Sass',
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
        <span className="description">{object.description}</span>
      </div>

      <div className="close" onClick={() => setShowModal(false)}></div>
    </div>
  )

  return (
    <div className="gallery-content">
      <h2 className="work-title">Projets récents</h2>
      <div className="work-content">
        {data.map(({ id, name, preview, image, description }) => {
          return (
            <>
              <div
                key={id}
                className={`work-item work-item-${id} ` + getClass(id)}
                onClick={() => {
                  setActive({ id, name, preview, description })
                  setShowModal(true)
                }}
              >
                <div className="work-miniature">
                  <p className="more-info">plus d'infos ?</p>
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
        })}
      </div>
      <div className="more-work">
        <hr />
        <br />
        <div className="more-work-text">
          Vous voulez voir plus de projets ? Cliquez sur le bouton ci-dessous !
        </div>
        <button className="see-more">
          <a
            href="https://github.com/Tim-jn"
            target="_blank"
            className="see-more-link"
            rel="noreferrer"
          >
            Voir plus
          </a>
        </button>
      </div>
    </div>
  )
}
