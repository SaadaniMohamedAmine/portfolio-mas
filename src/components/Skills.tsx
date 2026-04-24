import { skills } from '../data'

export default function Skills() {
  return (
    <section id="skills">
      <div className="fade-in">
        <p className="section-label">My Toolkit</p>
        <h2 className="section-title">Skills</h2>
        <div className="divider" />
      </div>

      <div className="skills-grid fade-in">
        {skills.map(cat => (
          <div key={cat.category} className="skill-category">
            <div className="skill-cat-title">{cat.icon} {cat.category}</div>
            <div className="skill-tags">
              {cat.items.map(item => (
                <span key={item} className="skill-tag">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
