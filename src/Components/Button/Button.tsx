import './Button.scss'

export default function ContactBtn({ className, text, href }: Props) {
  return (
    <button className={className}>
      <div id="slide-right"></div>
      <div id="slide-left"></div>
      <a href={href}>{text}</a>
    </button>
  )
}

type Props = {
  className: string
  text: string
  href: string
}
