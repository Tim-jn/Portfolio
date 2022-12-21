import { ReactElement } from 'react'
import './MainDualContent.scss'

export default function MainDualContent({
  title,
  paragraphs,
  image,
  link,
}: Props) {
  return (
    <div className="dual-content">
      <>
        <h2 className="content-title">{title}</h2>
        <div className="content-text">
          {paragraphs.map((paragraph, key) => {
            return (
              <p className="content-paragraph" key={key}>
                {paragraph}
              </p>
            )
          })}
          {link}
        </div>
      </>
      <div className="image-content">{image}</div>
    </div>
  )
}

type Props = {
  title: string
  paragraphs: string[]
  link?: ReactElement
  image?: ReactElement
}
