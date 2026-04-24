import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projects">
      <div className="fade-in">
        <p className="section-label">What I've Built</p>
        <h2 className="section-title">Projects</h2>
        <div className="divider" />
      </div>

      <div className="projects-grid fade-in">
        {projects.map((proj, i) => (
          <div key={i} className="project-card">
            <div className="proj-icon">{proj.icon}</div>
            <div className="proj-title">{proj.title}</div>
            <p className="proj-desc">{proj.description}</p>
            <div className="proj-metrics">
              {proj.metrics.map(m => <span key={m} className="metric">{m}</span>)}
            </div>
            <div className="proj-stack">
              {proj.stack.map(s => <span key={s} className="tag">{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
