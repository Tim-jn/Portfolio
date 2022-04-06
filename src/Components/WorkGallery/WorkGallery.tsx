import './WorkGallery.scss'
import Button from '../Button/Button'
import Fylo from './work-images/fylo.png'
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
  ]

  return (
    <div className="gallery-content">
      {data.map((item, key) => {
        return (
          <div key={key} className="work-item">
            <div className="slide-work">
              <Button
                className="button preview-button"
                text="Live preview"
                href={item.live}
              />
              <Button
                className="button source-button"
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
        )
      })}
    </div>
  )
}
