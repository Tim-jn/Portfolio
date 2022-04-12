import Button from '../Button/Button'
import './HomeContent.scss'
import { useMediaQuery } from 'react-responsive'

export default function Title() {
  const isMobile = useMediaQuery({ query: '(max-width: 634px)' })

  return (
    <div className="main-title">
      <h1 className="main-title-content">
        <span className="title-letter first-capital">H</span>
        <span className="title-letter" data-content="i">
          i
        </span>
        <span className="title-letter" data-content=",">
          ,
        </span>
        <br />
        <span className="title-letter" data-content="I">
          I
        </span>
        <span className="title-letter" data-content="'">
          '
        </span>
        <span className="title-letter letter-spaced" data-content="m">
          m
        </span>
        <span className="title-letter" data-content="T">
          T
        </span>
        <span className="title-letter" data-content="i">
          i
        </span>
        <span className="title-letter" data-content="m">
          m
        </span>
        <span className="title-letter" data-content=",">
          ,
        </span>
        <br />
        <span className="title-letter letter-spaced" data-content="a">
          a
        </span>
        <span className="title-letter" data-content="w">
          w
        </span>
        <span className="title-letter" data-content="e">
          e
        </span>
        <span className="title-letter letter-spaced" data-content="b">
          b
        </span>
        {isMobile ? (
          <div className="text-developer">
            <span className="title-letter" data-content="d">
              d
            </span>
            <span className="title-letter" data-content="e">
              e
            </span>
            <span className="title-letter" data-content="v">
              v
            </span>
            <span className="title-letter" data-content="e">
              e
            </span>
            <span className="title-letter" data-content="l">
              l
            </span>
            <span className="title-letter" data-content="o">
              o
            </span>
            <span className="title-letter" data-content="p">
              p
            </span>
            <span className="title-letter" data-content="e">
              e
            </span>
            <span className="title-letter" data-content="r">
              r
            </span>
          </div>
        ) : (
          <>
            <span className="title-letter" data-content="d">
              d
            </span>
            <span className="title-letter" data-content="e">
              e
            </span>
            <span className="title-letter" data-content="v">
              v
            </span>
            <span className="title-letter" data-content="e">
              e
            </span>
            <span className="title-letter" data-content="l">
              l
            </span>
            <span className="title-letter" data-content="o">
              o
            </span>
            <span className="title-letter" data-content="p">
              p
            </span>
            <span className="title-letter" data-content="e">
              e
            </span>
            <span className="title-letter" data-content="r">
              r
            </span>
          </>
        )}
      </h1>
      <Button
        className="button contact-btn"
        text="Contact me"
        href="#contact"
        target="_self"
      />
    </div>
  )
}
