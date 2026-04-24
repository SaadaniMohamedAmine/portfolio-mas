import { about } from '../data'

export default function About() {
  return (
    <section id="about">
      <div className="fade-in">
        <p className="section-label">Who I Am</p>
        <h2 className="section-title">About Me</h2>
        <div className="divider" />
      </div>

      <div className="about-grid fade-in">
        {/* Left — bio text */}
        <div className="about-text">
          {about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}

          <div className="langs">
            {about.languages.map(lang => (
              <span key={lang.name} className={`lang-badge${lang.highlight ? ' native' : ''}`}>
                {lang.name} · {lang.level}
              </span>
            ))}
          </div>
        </div>

        {/* Right — detail cards */}
        <div className="about-meta">
          {about.details.map(d =>
            d.href
              ? (
                <a key={d.label} href={d.href} target={d.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="meta-item">
                  <span className="meta-icon">{d.icon}</span>
                  <div>
                    <div className="meta-label">{d.label}</div>
                    <div className="meta-val">{d.value}</div>
                  </div>
                </a>
              ) : (
                <div key={d.label} className="meta-item">
                  <span className="meta-icon">{d.icon}</span>
                  <div>
                    <div className="meta-label">{d.label}</div>
                    <div className="meta-val">{d.value}</div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </section>
  )
}
