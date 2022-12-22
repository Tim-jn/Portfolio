import './WorkGallery.scss'
import Button from '../Button/Button'
import Fylo from './work-images/fylo.webp'
import Jeanmartth from './work-images/jeanmartth.webp'
import Shortly from './work-images/shortly.webp'
import Rimarok from './work-images/rimarok.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

export default function WorkGallery() {
  const data = [
    {
      name: 'Rimarok.com',
      image: Rimarok,
      live: 'https://rimarok.com/',
      description:
        'Redesign of the website https://rimarok.com in partnership with Romaric Ruga.',
      languages: 'React, TypeScript, JAMStack, Bootstrap/SCSS',
    },
    {
      name: 'Shortly',
      image: Shortly,
      live: 'https://timjn-shortly.netlify.app',
      source: 'https://github.com/Tim-jn/shortly',
      description:
        'This project is part of the Frontend Mentor challenges. Your challenge is to build out this URL shortening API landing page and get it looking as close to the design as possible.',
      languages: 'React, TypeScript and Sass',
    },
    {
      name: 'Jeanmartth.be',
      image: Jeanmartth,
      live: 'https://jeanmartth.be',
      description:
        "This project is a website for a heating company. It was built to develop my wordpress skills. There's no source code for this project.",
      languages: 'WordPress',
    },
    {
      name: 'Fylo',
      image: Fylo,
      live: 'https://timjn-fylo.netlify.app/',
      source: 'https://github.com/Tim-jn/Fylo',
      description:
        'This project is part of the Frontend Mentor challenges. Your challenge is to build out this landing page and get it looking as close to the design as possible.',
      languages: 'React, TypeScript and Sass',
    },
  ]

  return (
    <div className="gallery-content">
      <h2 className="work-title">Projets récents</h2>
      <div className="work-content">
        {data.map((item, key) => {
          return (
            <div key={key} className={`work-item-${key + 1}`}>
              <div className="work-miniature">
                <div className="slide-work">
                  <Button
                    className="button work-button"
                    text="Live preview"
                    href={item.live}
                    target="_blank"
                  />
                  {item.source ? (
                    <Button
                      className="button work-button"
                      text="Source code"
                      href={item.source}
                      target="_blank"
                    />
                  ) : (
                    ''
                  )}
                </div>
                  {/* <img
                    src={item.image}
                    alt={item.name + ' project'}
                    className="work-image"
                  /> */}
              </div>
              {/* <div className="work-text-content">
              <h3 className="work-text-title">
                <FontAwesomeIcon
                  className="work-title-icon"
                  icon={faChevronLeft}
                />
                {item.name}
                <span className="slash">/</span>
                <FontAwesomeIcon
                  className="work-title-icon"
                  icon={faChevronRight}
                />
              </h3>
              <p className="work-text-description">{item.description}</p>
              <p className="work-text-languages">
                I used {item.languages} to create this project.
              </p>
              <p className="more-infos">
                Get more infos by hovering the thumbnail.
              </p>
            </div> */}
            </div>
          )
        })}
      </div>
      <div className="more-work">
        <hr />
        <br />
        <div className="more-work-text">
          Vous voulez voir plus de projets ? Cliquez sur le lien ci-dessous !
        </div>
        <Button
          className="button more-work-button"
          href="https://github.com/Tim-jn"
          text="Voir plus"
          target="_blank"
        />
      </div>
    </div>
  )
}
