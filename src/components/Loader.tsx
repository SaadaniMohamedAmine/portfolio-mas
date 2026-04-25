import { useState, useEffect } from 'react'

export default function Loader() {
  const [hiding, setHiding] = useState(false)
  const [done,   setDone]   = useState(false)

  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'

    window.scrollTo({ top: 0, behavior: 'instant' })
    document.documentElement.style.overflow = 'hidden'

    const t1 = setTimeout(() => {
      // Pin to top right before the fade starts so nothing peeks through
      window.scrollTo({ top: 0, behavior: 'instant' })
      setHiding(true)
    }, 3400)

    const t2 = setTimeout(() => {
      document.documentElement.style.overflow = ''
      // Scroll synchronously before setDone so the page is already at 0
      // when React removes the overlay — avoids any one-frame flash.
      window.scrollTo({ top: 0, behavior: 'instant' })
      setDone(true)
    }, 4000)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      document.documentElement.style.overflow = ''
    }
  }, [])

  if (done) return null

  return (
    <div className={`loader-overlay${hiding ? ' loader-hiding' : ''}`}>
      <div className="loader-content">

        {/* Animated hexagon + initials */}
        <div className="loader-hex-wrap">
          <svg viewBox="0 0 110 127" className="loader-hex-svg" aria-hidden="true">
            {/* Glow layer */}
            <polygon
              points="55,6 104,31 104,96 55,121 6,96 6,31"
              className="loader-hex-glow"
            />
            {/* Animated stroke */}
            <polygon
              points="55,6 104,31 104,96 55,121 6,31 6,31"
              className="loader-hex-bg"
            />
            <polygon
              points="55,6 104,31 104,96 55,121 6,96 6,31"
              className="loader-hex-stroke"
            />
          </svg>
          <div className="loader-initials">MAS</div>
        </div>

        {/* Name reveal */}
        <div className="loader-name">Mohamed Amine</div>
        <div className="loader-name loader-name--accent">Saadani</div>
        <div className="loader-role">Senior Front-End Developer · Product Tech Manager</div>

        {/* Progress bar */}
        <div className="loader-bar-track">
          <div className="loader-bar-fill" />
        </div>

      </div>
    </div>
  )
}
