import { useState, useRef, useEffect } from 'react'
import { chatSuggestions } from '../data'

interface Message {
  role: 'bot' | 'user'
  text: string
}

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: "Hi! I'm an AI assistant trained on Mohamed Amine's portfolio. Ask me anything about his experience, skills or projects!" }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const send = async (text: string) => {
    const msg = text.trim()
    if (!msg || loading) return

    setMessages(prev => [...prev, { role: 'user', text: msg }])
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: msg }),
      })
      const data = await res.json() as { reply?: string; error?: string }
      setMessages(prev => [...prev, { role: 'bot', text: data.reply ?? data.error ?? 'Sorry, something went wrong.' }])
    } catch {
      setMessages(prev => [...prev, { role: 'bot', text: 'Network error. Please try again.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="chat">
      <div className="fade-in">
        <p className="section-label">Ask Anything</p>
        <h2 className="section-title">AI Assistant</h2>
        <div className="divider" />
      </div>

      <div className="chat-wrap fade-in">
        <div className="chat-box">
          {/* Header */}
          <div className="chat-header">
            <div className="chat-avatar">AI</div>
            <div className="chat-header-info">
              <div className="chat-name">Portfolio Assistant</div>
              <div className="chat-status">● Online</div>
            </div>
          </div>

          {/* Messages */}
          <div className="chat-messages">
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.role}`}>{m.text}</div>
            ))}
            {loading && (
              <div className="msg bot typing">
                <span /><span /><span />
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="chat-input-row">
            <input
              className="chat-input"
              placeholder="Ask about Mohamed Amine's experience…"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send(input)}
              disabled={loading}
            />
            <button className="chat-send" onClick={() => send(input)} disabled={loading || !input.trim()}>
              Send
            </button>
          </div>
        </div>

        {/* Suggestions */}
        <div className="suggested">
          {chatSuggestions.map(s => (
            <button key={s} className="sug-btn" onClick={() => send(s)} disabled={loading}>
              {s}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
