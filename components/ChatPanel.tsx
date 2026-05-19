"use client"

import { useChat } from "@ai-sdk/react"
import { useRef, useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import type { Theme } from "@/app/page"

const SAMPLE_PROMPTS = [
  "What does daiwik build?",
  "Tell me about his projects",
  "Where has he worked?",
  "What are his skills?",
]

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
                    if (part.type !== "text") return null
                    if (m.role === "assistant") {
                      return (
                        <ReactMarkdown key={i} remarkPlugins={[remarkGfm]} components={{
                          p: ({ children }) => <p className="mb-1 last:mb-0">{children}</p>,
                          strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                          ul: ({ children }) => <ul className="list-disc pl-4 mb-1 space-y-0.5">{children}</ul>,
                          ol: ({ children }) => <ol className="list-decimal pl-4 mb-1 space-y-0.5">{children}</ol>,
                          li: ({ children }) => <li>{children}</li>,
                          a: ({ href, children }) => (
                            <a href={href} target="_blank" rel="noopener noreferrer" className="underline opacity-70 hover:opacity-100">{children}</a>
                          ),
                          code: ({ children }) => (
                            <code className="font-mono text-[0.85em] px-1 rounded" style={{ background: "var(--surface-soft)" }}>{children}</code>
                          ),
                          pre: ({ children }) => (
                            <pre className="font-mono text-[0.82em] p-2 rounded overflow-x-auto mb-1" style={{ background: "var(--surface-soft)" }}>{children}</pre>
                          ),
                          h1: ({ children }) => <p className="font-semibold mb-0.5">{children}</p>,
                          h2: ({ children }) => <p className="font-semibold mb-0.5">{children}</p>,
                          h3: ({ children }) => <p className="font-medium mb-0.5">{children}</p>,
                          hr: () => <hr className="my-1 opacity-20" />,
                        }}>
                          {part.text}
                        </ReactMarkdown>
                      )
                    }
                    return <p key={i}>{part.text}</p>
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
