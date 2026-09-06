import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function RouteTransitionLoader() {
  const { pathname } = useLocation()
  const isFirstRender = useRef(true)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    window.scrollTo({ top: 0, behavior: 'instant' })
    setVisible(true)
    const t = setTimeout(() => setVisible(false), 550)
    return () => clearTimeout(t)
  }, [pathname])

  if (!visible) return null

  return (
    <div className="route-loader-overlay">
      <div className="route-loader" />
    </div>
  )
}
