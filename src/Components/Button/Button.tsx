import './Button.scss'

export default function ContactBtn({ className, text }: Props) {
  return (
    <button className={className}>
      <div id="slide-right"></div>
      <div id="slide-left"></div>
      <a href="#contact">{text}</a>
    </button>
  )
}

type Props = {
  className: string
  text: string
}
