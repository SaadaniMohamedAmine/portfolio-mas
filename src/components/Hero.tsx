import { hero } from '../data'

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-inner fade-in">
        <p className="hero-greeting">{hero.greeting}</p>

        <h1 className="hero-name">
          {hero.name[0]}<br />
          <span>{hero.name[1]}</span>
        </h1>

        <p className="hero-title">{hero.title}</p>
        <p className="hero-summary">{hero.summary}</p>

        <div className="hero-ctas">
          <a href="#contact" className="btn-primary"
            onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Get in Touch
          </a>
          <a href="#projects" className="btn-outline"
            onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
            View Projects
          </a>
        </div>

        <div className="hero-stats">
          {hero.stats.map(stat => (
            <div key={stat.label}>
              <div className="stat-num">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
