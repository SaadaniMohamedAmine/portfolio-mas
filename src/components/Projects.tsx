import { Link } from 'react-router-dom'
import { icons } from 'lucide-react'
import { projects, projectCategories, toSlug } from '../data'

function ProjectIcon({ name, size = 22 }: { name: string; size?: number }) {
  const Icon = icons[name as keyof typeof icons]
  if (!Icon) return null
  return <Icon size={size} strokeWidth={1.6} />
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="fade-in">
        <p className="section-label">What I've Built</p>
        <h2 className="section-title">Projects</h2>
        <div className="divider" />
      </div>

      <div className="cat-cards-grid fade-in">
        {projectCategories.map(cat => {
          const count = projects.filter(p => p.category === cat.id && p.published).length
          return (
            <Link
              key={cat.id}
              to={`/projects/${toSlug(cat.label)}`}
              className="cat-card"
            >
              <div className="cat-card-top">
                <div className="cat-card-icon-label">
                  <div className="cat-card-icon">
                    <ProjectIcon name={cat.iconName} size={24} />
                  </div>
                  <div className="cat-card-label">{cat.label}</div>
                </div>
                <div className="cat-card-arrow">→</div>
              </div>
              <div className="cat-card-desc">{cat.description}</div>
              <div className="cat-card-powered">
                <span className="cat-card-powered-label">Powered by</span>
                <div className="cat-card-powered-chips">
                  {cat.poweredBy.map(p => (
                    <div key={p.label} className="cat-card-chip">
                      <ProjectIcon name={p.icon} size={12} />
                      <span>{p.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="cat-card-count">{count} project{count !== 1 ? 's' : ''}</div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
