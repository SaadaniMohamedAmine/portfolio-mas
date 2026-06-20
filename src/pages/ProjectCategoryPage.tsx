import { useEffect } from 'react'
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

export default function ProjectCategoryPage() {
  const { categorySlug } = useParams<{ categorySlug: string }>()
  const navigate = useNavigate()

  const category = projectCategories.find(c => toSlug(c.label) === categorySlug)

  useEffect(() => {
    if (!category) { navigate('/'); return }
    window.scrollTo({ top: 0 })
  }, [category, navigate])

  if (!category) return null

  const catProjects = projects.filter(p => p.category === category.id && p.published)

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
          <span className="proj-breadcrumb-current">{category.label}</span>
        </div>

        {/* Category hero */}
        <div className="proj-cat-hero fade-in visible">
          <div className="proj-cat-hero-icon">
            <ProjectIcon name={category.iconName} size={36} />
          </div>
          <div>
            <p className="section-label">{catProjects.length} project{catProjects.length !== 1 ? 's' : ''}</p>
            <h1 className="proj-cat-hero-title">{category.label}</h1>
            <div className="divider" />
            <p className="proj-cat-hero-desc">{category.description}</p>
          </div>
        </div>

        {/* Project cards */}
        {catProjects.length === 0 ? (
          <div className="cat-empty fade-in visible">
            <ProjectIcon name="Clock" size={36} />
            <p>Projects coming soon</p>
          </div>
        ) : (
          <div className="projects-grid fade-in visible">
            {catProjects.map((proj, i) => (
              <Link
                key={i}
                to={`/projects/${categorySlug}/${toSlug(proj.title)}`}
                className="project-card proj-card-link"
              >
                {/* Logo + metrics side by side */}
                <div className="proj-card-top-row">
                  {proj.logoImage ? (
                    <img src={proj.logoImage} alt={proj.title} className="proj-logo-img" />
                  ) : (
                    <div className="proj-icon-wrap">
                      <ProjectIcon name={proj.icon} size={24} />
                    </div>
                  )}
                  <div className="proj-metrics">
                    {proj.metrics.map(m => <span key={m} className="metric">{m}</span>)}
                  </div>
                </div>
                <div className="proj-title">{proj.title}</div>
                <p className="proj-desc">{proj.description}</p>
                <div className="proj-stack">
                  {proj.stack.map(s => <span key={s} className="tag">{s}</span>)}
                </div>
                <div className="proj-view-more">View Details →</div>
              </Link>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
