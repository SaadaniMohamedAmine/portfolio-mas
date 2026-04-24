import { useState, FormEvent } from 'react'
import { contact } from '../data'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact">
      <div className="fade-in">
        <p className="section-label">Let's Talk</p>
        <h2 className="section-title">Contact</h2>
        <div className="divider" />
      </div>

      <div className="contact-grid fade-in">
        {/* Info column */}
        <div className="contact-info">
          <a href={`mailto:${contact.email}`} className="contact-item">
            <span className="contact-icon">✉️</span>
            <div>
              <div className="contact-label">Email</div>
              <div className="contact-val">{contact.email}</div>
            </div>
          </a>

          <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="contact-item">
            <span className="contact-icon">📞</span>
            <div>
              <div className="contact-label">Phone</div>
              <div className="contact-val">{contact.phone}</div>
            </div>
          </a>

          <a href={contact.linkedin} target="_blank" rel="noreferrer" className="contact-item">
            <span className="contact-icon">🔗</span>
            <div>
              <div className="contact-label">LinkedIn</div>
              <div className="contact-val">linkedin.com/in/mohamed-amine-saadani</div>
            </div>
          </a>

          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <div>
              <div className="contact-label">Location</div>
              <div className="contact-val">{contact.location}</div>
            </div>
          </div>
        </div>

        {/* Form column */}
        <form
          className="contact-form"
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <input className="form-input" type="text"  name="name"    placeholder="Your Name"    required />
          <input className="form-input" type="email" name="email"   placeholder="Your Email"   required />
          <input className="form-input" type="text"  name="subject" placeholder="Subject"      required />
          <textarea className="form-textarea" name="message" placeholder="Your message…" rows={5} required />

          {status === 'success' && <p className="form-msg success show">✅ Message sent! I'll get back to you soon.</p>}
          {status === 'error'   && <p className="form-msg error show">❌ Something went wrong. Please try again.</p>}

          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}
