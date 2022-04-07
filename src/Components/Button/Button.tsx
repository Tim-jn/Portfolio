import './Button.scss'

export default function Button({ className, text, href }: Props) {
  return (
    <a href={href} className="btn-slice">
      <div className={className} id="top">
        <span>{text}</span>
      </div>
      <div className={className} id="bottom">
        <span>{text}</span>
      </div>
    </a>
  )
}

type Props = {
  className: string
  text: string
  href: string
}
