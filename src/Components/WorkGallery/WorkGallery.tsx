import './WorkGallery.scss'
import Button from '../Button/Button'
import Fylo from './work-images/fylo.png'
import ToDoApp from './work-images/todoapp.png'
import SpaceTourism from './work-images/spaceTourism.png'
import Jeanmartth from './work-images/jeanmartth.png'

export default function WorkGallery() {
  const data = [
    {
      name: 'Freelance WordPress project',
      image: Jeanmartth,
      live: 'https://jeanmartth.be',
      source: '',
      description:
        'This project is a website for a heating company. It was built to develop my wordpress skills.',
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
    {
      name: 'To Do App',
      image: ToDoApp,
      live: 'https://timjn-todoapp.netlify.app/',
      source: 'https://github.com/Tim-jn/to-do-app',
      description:
        'This project is part of the Frontend Mentor challenges. Your challenge is to build out this todo app and get it looking as close to the design as possible.',
      languages: 'React',
    },
    {
      name: 'Space Tourism',
      image: SpaceTourism,
      live: 'https://timjn-space-tourism.netlify.app/',
      source: 'https://github.com/Tim-jn/space-tourism',
      description:
        'This project is part of the Frontend Mentor challenges. Your challenge is to build out this multi-page space tourism website and get it looking as close to the design as possible.',
      languages: 'React',
    },
  ]

  return (
    <div className="gallery-content">
      <h2 className="work-title">
        <span className="work-title-letter-capital">L</span>
        <span className="title-letter" data-content="a">
          a
        </span>
        <span className="title-letter" data-content="t">
          t
        </span>
        <span className="title-letter" data-content="e">
          e
        </span>
        <span className="title-letter" data-content="s">
          s
        </span>
        <span className="title-letter letter-spaced" data-content="t">
          t
        </span>
        <span className="title-letter" data-content="P">
          P
        </span>
        <span className="title-letter" data-content="r">
          r
        </span>
        <span className="title-letter" data-content="o">
          o
        </span>
        <span className="title-letter" data-content="j">
          j
        </span>
        <span className="title-letter" data-content="e">
          e
        </span>
        <span className="title-letter" data-content="c">
          c
        </span>
        <span className="title-letter" data-content="t">
          t
        </span>
      </h2>
      {data.map((item, key) => {
        return (
          <div key={key} className="work-item">
            <div className="work-miniature">
              <div className="slide-work">
                <Button
                  className="button work-button"
                  text="Live preview"
                  href={item.live}
                />
                <Button
                  className="button work-button"
                  text="Source code"
                  href={item.source}
                />
              </div>
              <img
                src={item.image}
                alt={item.name + ' project'}
                className="work-image"
              />
            </div>
            <div className="work-text-content">
              <h3 className="work-text-title">{item.name}</h3>
              <p className="work-text-description">{item.description}</p>
              <p className="work-text-languages">
                I used {item.languages} to create this project.
              </p>
              <p className="more-infos">
                Get more infos by hovering the thumbnail.
              </p>
            </div>
          </div>
        )
      })}
      <div className="more-work">
        <div className="more-work-text">
          You want to see more work ? Take a look here :
        </div>
        <Button
          className="button more-work-button"
          href="https://github.com/Tim-jn"
          text="
          See more"
        />
      </div>
    </div>
  )
}
