import { footer } from '../data'

export default function Footer() {
  return (
    <footer>
      <p>{footer.text}</p>
      <p className="footer-sub">{footer.subtext}</p>
    </footer>
  )
}
