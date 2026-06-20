import { useEffect, useState, useCallback } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { icons } from 'lucide-react'
import { projectCategories, projects, toSlug } from '../data'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function ProjectIcon({ name, size = 22 }: { name: string; size?: number }) {
  const Icon = icons[name as keyof typeof icons]
  if (!Icon) return null
  return <Icon size={size} strokeWidth={1.6} />
}

export default function ProjectDetailPage() {
  const { categorySlug, projectSlug } = useParams<{ categorySlug: string; projectSlug: string }>()
  const navigate = useNavigate()

  const category = projectCategories.find(c => toSlug(c.label) === categorySlug)
  const project  = projects.find(p => toSlug(p.title) === projectSlug && p.published)

  useEffect(() => {
    if (!category || !project) { navigate('/'); return }
    window.scrollTo({ top: 0 })
  }, [category, project, navigate])

  if (!category || !project) return null

  const { details } = project
  const statusClass = `proj-detail-status--${details.status.toLowerCase().replace(' ', '-')}`
  const gallery = details.gallery ?? []

  const [lightbox, setLightbox] = useState<number | null>(null)

  const closeLightbox = useCallback(() => setLightbox(null), [])
  const prevImg = useCallback(() => setLightbox(i => i !== null ? (i - 1 + gallery.length) % gallery.length : null), [gallery.length])
  const nextImg = useCallback(() => setLightbox(i => i !== null ? (i + 1) % gallery.length : null), [gallery.length])

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft')  prevImg()
      if (e.key === 'ArrowRight') nextImg()
      if (e.key === 'Escape')     closeLightbox()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, prevImg, nextImg, closeLightbox])

  return (
    <>
      <Navbar />
      <main className="proj-page">

        {/* Breadcrumb */}
        <div className="proj-breadcrumb fade-in visible">
          <Link to="/" className="proj-breadcrumb-link">Home</Link>
          <span className="proj-breadcrumb-sep">›</span>
          <Link to="/#projects" className="proj-breadcrumb-link">Projects</Link>
          <span className="proj-breadcrumb-sep">›</span>
          <Link to={`/projects/${categorySlug}`} className="proj-breadcrumb-link">{category.label}</Link>
          <span className="proj-breadcrumb-sep">›</span>
          <span className="proj-breadcrumb-current">{project.title}</span>
        </div>

        {/* ── HERO ──────────────────────────────────────────────── */}
        <div className="pd-hero fade-in visible">
          {/* Logo + Title + Status — flex row */}
          <div className="pd-hero-left">
            {project.logoImage
              ? <img src={project.logoImage} alt={project.title} className="pd-logo" />
              : <div className="proj-detail-icon"><ProjectIcon name={project.icon} size={40} /></div>
            }
            <div className="pd-title-row">
              <h1 className="pd-title">{project.title}</h1>
              <span className={`proj-detail-status ${statusClass}`}>{details.status}</span>
            </div>
          </div>

          {/* Description + CTAs — full width below */}
          <p className="pd-subtitle">{project.description}</p>
          <div className="pd-ctas">
            {details.live && (
              <a href={details.live} target="_blank" rel="noopener noreferrer" className="pd-cta pd-cta--primary">
                <ProjectIcon name="ExternalLink" size={15} /> Live Platform
              </a>
            )}
            {details.playground && (
              <a href={details.playground} target="_blank" rel="noopener noreferrer" className="pd-cta">
                <ProjectIcon name="Play" size={15} /> Playground
              </a>
            )}
            {details.docs && (
              <a href={details.docs} target="_blank" rel="noopener noreferrer" className="pd-cta">
                <ProjectIcon name="BookOpen" size={15} /> API Docs
              </a>
            )}
            {details.github && (
              <a href={details.github} target="_blank" rel="noopener noreferrer" className="pd-cta">
                <ProjectIcon name="Github" size={15} /> Source Code
              </a>
            )}
          </div>

          {/* Metrics strip */}
          <div className="pd-metrics-strip">
            {project.metrics.map(m => (
              <div key={m} className="pd-metric-pill">
                <span className="pd-metric-dot" />
                {m}
              </div>
            ))}
          </div>
        </div>

        {/* ── MAIN ROW: left col + sidebar ──────────────────────── */}
        <div className="pd-mid-row fade-in visible">

          {/* Left column: video + content */}
          <div className="pd-left-col">

            {details.videoEmbed && (
              <div className="pd-video-wrap">
                <div className="pd-video-label">
                  <ProjectIcon name="PlayCircle" size={16} />
                  <span>Demo Video</span>
                </div>
                <div className="pd-video-frame">
                  <iframe
                    src={details.videoEmbed}
                    title={`${project.title} demo`}
                    allow="autoplay"
                    allowFullScreen
                  />
                </div>
              </div>
            )}

            <div className="pd-main">
              <h3 className="proj-detail-section-title">Overview</h3>
              <p className="proj-detail-long">{details.longDescription}</p>

              {details.capabilities && details.capabilities.length > 0 && (
                <>
                  <h3 className="proj-detail-section-title pd-section-gap">Capability Map</h3>
                  <div className="pd-cap-table">
                    {details.capabilities.map((cap, i) => (
                      <div key={i} className="pd-cap-row">
                        <div className="pd-cap-name">{cap.capability}</div>
                        <div className="pd-cap-what">{cap.what}</div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              <h3 className="proj-detail-section-title pd-section-gap">Key Highlights</h3>
              <ul className="proj-detail-highlights">
                {details.highlights.map((h, i) => (
                  <li key={i}>
                    <span className="proj-detail-check">✓</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="pd-sidebar">

            <div className="proj-detail-card">
              <div className="proj-detail-card-title">Tech Stack</div>
              <div className="proj-stack">
                {project.stack.map(s => <span key={s} className="tag">{s}</span>)}
              </div>
            </div>

            <div className="proj-detail-card">
              <div className="proj-detail-card-title">Category</div>
              <Link to={`/projects/${categorySlug}`} className="proj-cat-chip">
                <ProjectIcon name={category.iconName} size={14} />
                {category.label}
              </Link>
            </div>

            <div className="proj-detail-card">
              <div className="proj-detail-card-title">Links</div>
              <div className="proj-detail-links">
                {details.live && (
                  <a href={details.live} target="_blank" rel="noopener noreferrer" className="proj-link-btn proj-link-btn--primary">
                    <ProjectIcon name="Globe" size={15} /> Live Platform
                  </a>
                )}
                {details.playground && (
                  <a href={details.playground} target="_blank" rel="noopener noreferrer" className="proj-link-btn">
                    <ProjectIcon name="Play" size={15} /> Playground
                  </a>
                )}
                {details.docs && (
                  <a href={details.docs} target="_blank" rel="noopener noreferrer" className="proj-link-btn">
                    <ProjectIcon name="BookOpen" size={15} /> API Docs
                  </a>
                )}
                {details.statusPage && (
                  <a href={details.statusPage} target="_blank" rel="noopener noreferrer" className="proj-link-btn">
                    <ProjectIcon name="Activity" size={15} /> Status
                  </a>
                )}
                {details.github && (
                  <a href={details.github} target="_blank" rel="noopener noreferrer" className="proj-link-btn">
                    <ProjectIcon name="Github" size={15} /> GitHub
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* ── APP GALLERY ───────────────────────────────────── */}
        {gallery.length > 0 && (
          <div className="pd-gallery-section fade-in visible">
            <div className="pd-gallery-header">
              <ProjectIcon name="Images" size={20} />
              <h3 className="pd-gallery-title">App Gallery</h3>
              <span className="pd-gallery-count">{gallery.length} screenshots</span>
            </div>
            <div className="pd-gallery-grid">
              {gallery.map((img, i) => (
                <button type="button" key={i} className="pd-gallery-thumb" aria-label={`View ${img.caption}`} onClick={() => setLightbox(i)}>
                  <img src={img.src} alt={img.caption} loading="lazy" />
                  <div className="pd-gallery-thumb-overlay">
                    <ProjectIcon name="ZoomIn" size={20} />
                  </div>
                  <div className="pd-gallery-thumb-caption">{img.caption}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── LIGHTBOX ──────────────────────────────────────── */}
        {lightbox !== null && (
          <div className="pd-lightbox" onClick={closeLightbox}>
            <button type="button" aria-label="Close gallery" className="pd-lightbox-close" onClick={closeLightbox}>
              <ProjectIcon name="X" size={22} />
            </button>
            <button type="button" aria-label="Previous image" className="pd-lightbox-nav pd-lightbox-prev" onClick={e => { e.stopPropagation(); prevImg() }}>
              <ProjectIcon name="ChevronLeft" size={28} />
            </button>
            <div className="pd-lightbox-content" onClick={e => e.stopPropagation()}>
              <img src={gallery[lightbox].src} alt={gallery[lightbox].caption} />
              <div className="pd-lightbox-caption">
                <span>{gallery[lightbox].caption}</span>
                <span className="pd-lightbox-counter">{lightbox + 1} / {gallery.length}</span>
              </div>
            </div>
            <button type="button" aria-label="Next image" className="pd-lightbox-nav pd-lightbox-next" onClick={e => { e.stopPropagation(); nextImg() }}>
              <ProjectIcon name="ChevronRight" size={28} />
            </button>
          </div>
        )}

      </main>
      <Footer />
    </>
  )
}
