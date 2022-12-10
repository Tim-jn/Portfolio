import Button from '../Button/Button'
import './HomeContent.scss'
import { useMediaQuery } from 'react-responsive'
import SocialBar from '../SocialBar/SocialBar'

export default function Title() {
  const isMobile = useMediaQuery({ query: '(max-width: 634px)' })

  return (
    <div className="title-box">
      <div className="title-box-content">
        <SocialBar />
        <h1 className="main-title">
          <div className="title-name">TIM JEANMART</div>
          <div className="title-text">Développeur Front-End</div>
        </h1>
        <div className="border-box"></div>
      </div>
      <div className="arrow-down"></div>
    </div>
  )
}
