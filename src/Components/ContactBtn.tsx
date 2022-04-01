export default function ContactBtn({ className }: Props) {
  return (
    <button className={className}>
      <div id="slide"></div>
      <a href="#contact">Contact me</a>
    </button>
  )
}

type Props = {
  className: string
}
