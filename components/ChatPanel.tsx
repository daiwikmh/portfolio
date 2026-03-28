"use client"

import { useChat } from "@ai-sdk/react"
import { Dithering } from "@paper-design/shaders-react"
import { useRef, useEffect, useState } from "react"

const SAMPLE_PROMPTS = [
  "What kind of work does daiwik do?",
  "What's his design background?",
  "Where has he worked?",
  "What are his skills?",
]

export default function ChatPanel({ isDarkMode }: { isDarkMode: boolean }) {
  const { messages, sendMessage, status } = useChat()
  const [input, setInput] = useState("")
  const bottomRef = useRef<HTMLDivElement>(null)
  const isLoading = status === "streaming" || status === "submitted"
  const isEmpty = messages.length === 0

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  function submit(text: string) {
    const trimmed = text.trim()
    if (!trimmed || isLoading) return
    sendMessage({ role: "user", parts: [{ type: "text", text: trimmed }] })
    setInput("")
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    submit(input)
  }

  return (
    <div className={`chat-panel ${isDarkMode ? "dark" : "light"}`}>
      <Dithering
        className="chat-bg"
        colorBack={isDarkMode ? "hsl(0, 0%, 0%)" : "hsl(0, 0%, 95%)"}
        colorFront={isDarkMode ? "hsl(291, 97%, 67%)" : "hsl(220, 100%, 70%)"}
        shape="dots"
        type="4x4"
        pxSize={3}
        scale={0.8}
        speed={0.1}
      />
      <div className="chat-overlay" />

      {isEmpty ? (
        <div className="chat-centered">
          <div className="chat-prompts">
            {SAMPLE_PROMPTS.map((p) => (
              <button key={p} className="chat-prompt-pill" onClick={() => submit(p)}>
                {p}
              </button>
            ))}
          </div>
          <form className="chat-form chat-form--centered" onSubmit={handleSubmit}>
            <input
              className="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything about daiwik..."
              disabled={isLoading}
              autoComplete="off"
              autoFocus
            />
            <button className="chat-submit" type="submit" disabled={isLoading || !input.trim()}>
              send
            </button>
          </form>
        </div>
      ) : (
        <>
          <div className="chat-messages">
            {messages.map((m) => (
              <div key={m.id} className={`chat-message chat-message--${m.role}`}>
                <span className="chat-message__role">{m.role === "user" ? "you" : "daiwik.ai"}</span>
                <div className="chat-message__content">
                  {m.parts.map((part, i) => {
                    if (part.type === "text") return <p key={i}>{part.text}</p>
                    return null
                  })}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="chat-message chat-message--assistant">
                <span className="chat-message__role">daiwik.ai</span>
                <p className="chat-message__content chat-message__content--loading">...</p>
              </div>
            )}
            <div ref={bottomRef} />
          </div>
          <form className="chat-form" onSubmit={handleSubmit}>
            <input
              className="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about daiwik..."
              disabled={isLoading}
              autoComplete="off"
            />
            <button className="chat-submit" type="submit" disabled={isLoading || !input.trim()}>
              send
            </button>
          </form>
        </>
      )}
    </div>
  )
}
