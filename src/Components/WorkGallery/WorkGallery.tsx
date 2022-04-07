import './WorkGallery.scss'
import Button from '../Button/Button'
import Fylo from './work-images/fylo.png'
import ToDoApp from './work-images/todoapp.png'
import SpaceTourism from './work-images/spaceTourism.png'

export default function WorkGallery() {
  const data = [
    {
      name: 'Fylo',
      image: Fylo,
      live: 'https://timjn-fylo.netlify.app/',
      source: 'https://github.com/Tim-jn/Fylo',
    },
    {
      name: 'Space Tourism',
      image: SpaceTourism,
      live: 'https://timjn-space-tourism.netlify.app/',
      source: 'https://github.com/Tim-jn/space-tourism',
    },
    {
      name: 'To Do App',
      image: ToDoApp,
      live: 'https://timjn-todoapp.netlify.app/',
      source: 'https://github.com/Tim-jn/to-do-app',
    },
  ]

  return (
    <div className="gallery-content">
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
            <div className="work-text"></div>
          </div>
        )
      })}
    </div>
  )
}
