import { experience } from '../data'

export default function Experience() {
  return (
    <section id="experience">
      <div className="fade-in">
        <p className="section-label">My Journey</p>
        <h2 className="section-title">Experience</h2>
        <div className="divider" />
      </div>

      <div className="timeline fade-in">
        {experience.map((job, i) => (
          <div key={i} className="exp-item">
            <div className="exp-dot" />
            <div className="exp-date">{job.period} · {job.location}</div>
            <div className="exp-role">{job.role}</div>
            <div className="exp-company">{job.company}</div>
            <ul className="exp-bullets">
              {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
