import { useState, useEffect } from 'react'
import { nav } from '../data'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  // Lock body scroll when drawer is open; don't touch overflow otherwise
  // so we don't fight the Loader's scroll lock on initial mount.
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  const scrollTo = (id: string) => {
    close()
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav>
        <a href="#hero" className="nav-logo" onClick={e => { e.preventDefault(); scrollTo('hero') }}>
          MAS
        </a>

        <ul className="nav-links">
          {nav.map(item => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} onClick={e => { e.preventDefault(); scrollTo(item.toLowerCase()) }}>
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`hamburger${open ? ' open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`mobile-drawer${open ? ' open' : ''}`} onClick={close}>
        {nav.map(item => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={e => { e.preventDefault(); e.stopPropagation(); scrollTo(item.toLowerCase()) }}
          >
            {item}
          </a>
        ))}
        <div className="drawer-contact" onClick={e => e.stopPropagation()}>
          <a href="mailto:mohamedaminesaadani79@gmail.com">Email me</a>
          <a href="https://www.linkedin.com/in/mohamed-amine-saadani/" target="_blank" rel="noreferrer" className="accent-btn">LinkedIn</a>
        </div>
      </div>
    </>
  )
}
