import { useState, useRef, useEffect } from 'react'
import { chatSuggestions } from '../data'

interface Message {
  role: 'bot' | 'user'
  text: string
}

const WELCOME: Message = {
  role: 'bot',
  text: "Hi there 👋 I'm Amine's AI assistant. Ask me anything about his experience, skills or projects!",
}

export default function FloatingChat() {
  const [open, setOpen]       = useState(false)
  const [messages, setMessages] = useState<Message[]>([WELCOME])
  const [input, setInput]     = useState('')
  const [loading, setLoading] = useState(false)
  const [unread, setUnread]   = useState(0)
  const messagesRef           = useRef<HTMLDivElement>(null)
  const inputRef              = useRef<HTMLInputElement>(null)

  /* scroll the messages container to bottom on new message */
  useEffect(() => {
    if (!open) return
    const el = messagesRef.current
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
  }, [messages, loading, open])

  /* focus input when opened */
  useEffect(() => {
    if (open) {
      setUnread(0)
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [open])

  const send = async (text: string) => {
    const msg = text.trim()
    if (!msg || loading) return

    setMessages(prev => [...prev, { role: 'user', text: msg }])
    setInput('')
    setLoading(true)

    try {
      const res  = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: msg }),
      })
      const data = await res.json() as { reply?: string; error?: string }
      const reply = data.reply ?? data.error ?? 'Sorry, something went wrong.'
      setMessages(prev => [...prev, { role: 'bot', text: reply }])
      if (!open) setUnread(n => n + 1)
    } catch {
      setMessages(prev => [...prev, { role: 'bot', text: 'Network error. Please try again.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fc-root">
      {/* ── Chat panel ─────────────────────────────── */}
      <div className={`fc-panel ${open ? 'fc-panel--open' : ''}`}>

        {/* Header */}
        <div className="fc-header">
          <div className="fc-header-left">
            <div className="fc-avatar-wrap">
              <img src="/hero.jpg" alt="Amine" className="fc-avatar-img" />
              <span className="fc-online-dot" />
            </div>
            <div>
              <div className="fc-hname">Mohamed Amine</div>
              <div className="fc-hstatus">● Typically replies instantly</div>
            </div>
          </div>
          <button className="fc-close" onClick={() => setOpen(false)} aria-label="Close chat">✕</button>
        </div>

        {/* Messages */}
        <div className="fc-messages" ref={messagesRef}>
          {messages.map((m, i) => (
            <div key={i} className={`fc-msg fc-msg--${m.role}`}>
              {m.role === 'bot' && (
                <img src="/hero.jpg" alt="bot" className="fc-msg-avatar" />
              )}
              <div className="fc-bubble">{m.text}</div>
            </div>
          ))}
          {loading && (
            <div className="fc-msg fc-msg--bot">
              <img src="/hero.jpg" alt="bot" className="fc-msg-avatar" />
              <div className="fc-bubble fc-bubble--typing">
                <span /><span /><span />
              </div>
            </div>
          )}
        </div>

        {/* Suggestions */}
        <div className="fc-suggestions">
          {chatSuggestions.slice(0, 3).map(s => (
            <button key={s} className="fc-sug" onClick={() => send(s)} disabled={loading}>
              {s}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="fc-input-row">
          <input
            ref={inputRef}
            className="fc-input"
            placeholder="Ask me anything…"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && send(input)}
            disabled={loading}
          />
          <button
            className="fc-send"
            onClick={() => send(input)}
            disabled={loading || !input.trim()}
            aria-label="Send"
          >
            ➤
          </button>
        </div>
      </div>

      {/* ── Floating trigger button ─────────────────── */}
      <button
        className={`fc-trigger ${open ? 'fc-trigger--open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Open chat"
      >
        <img src="/hero.jpg" alt="Chat with Amine" className="fc-trigger-img" />
        {unread > 0 && !open && (
          <span className="fc-badge">{unread}</span>
        )}
      </button>
    </div>
  )
}
