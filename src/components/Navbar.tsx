import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { nav } from '../data'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate  = useNavigate()
  const isHome    = location.pathname === '/'

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  const scrollTo = (id: string) => {
    close()
    if (isHome) {
      const el = document.getElementById(id.toLowerCase())
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(`/#${id.toLowerCase()}`)
    }
  }

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    close()
    if (isHome) {
      const el = document.getElementById('hero')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
    }
  }

  return (
    <>
      <nav>
        <a href="/" className="nav-logo" onClick={handleLogoClick}>
          MAS
        </a>

        <ul className="nav-links">
          {nav.map(item => (
            <li key={item}>
              <a
                href={isHome ? `#${item.toLowerCase()}` : `/#${item.toLowerCase()}`}
                onClick={e => { e.preventDefault(); scrollTo(item.toLowerCase()) }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`hamburger${open ? ' open' : ''}`}
          aria-label="Toggle menu"
          type="button"
          onClick={() => setOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-drawer${open ? ' open' : ''}`} onClick={close}>
        {nav.map(item => (
          <a
            key={item}
            href={isHome ? `#${item.toLowerCase()}` : `/#${item.toLowerCase()}`}
            onClick={e => { e.preventDefault(); e.stopPropagation(); scrollTo(item.toLowerCase()) }}
          >
            {item}
          </a>
        ))}
        <div className="drawer-contact" onClick={e => e.stopPropagation()}>
          <a href="mailto:mohamedaminesaadani79@gmail.com">Email me</a>
          <a href="https://www.linkedin.com/in/mohamed-amine-saadani/" target="_blank" rel="noopener noreferrer" className="accent-btn">LinkedIn</a>
        </div>
      </div>
    </>
  )
}
