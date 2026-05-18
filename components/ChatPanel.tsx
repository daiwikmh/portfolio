"use client"

import { useChat } from "@ai-sdk/react"
import { Dithering } from "@paper-design/shaders-react"
import { useRef, useEffect, useState } from "react"
import type { Theme } from "@/app/page"

const SAMPLE_PROMPTS = [
  "What does daiwik build?",
  "Tell me about his projects",
  "Where has he worked?",
  "What are his skills?",
]

const MIDNIGHT_SHADER = { back: "#0a3a25", front: "#9ec591" }

export default function ChatPanel({
  theme,
  embedded = false,
}: {
  theme: Theme
  embedded?: boolean
}) {
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
    <div className={`chat-panel chat-panel--${theme}${embedded ? " chat-panel--embedded" : ""}`}>
      {theme === "midnight" && (
        <>
          <Dithering
            className="chat-bg"
            colorBack={MIDNIGHT_SHADER.back}
            colorFront={MIDNIGHT_SHADER.front}
            shape="dots"
            type="4x4"
            pxSize={3}
            scale={0.8}
            speed={0.1}
          />
          <div className="chat-overlay" />
          <div className="chat-grid grid-bg" />
        </>
      )}

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
              autoFocus={!embedded}
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
