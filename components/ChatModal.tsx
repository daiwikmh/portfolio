"use client"

import { useEffect, useRef } from "react"
import ChatPanel from "@/components/ChatPanel"
import type { Theme } from "@/app/page"

export default function ChatModal({
  open,
  onClose,
  theme,
}: {
  open: boolean
  onClose: () => void
  theme: Theme
}) {
  const dialogRef = useRef<HTMLDivElement>(null)

  // Escape to close + lock body scroll while open
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    // focus the chat input on open
    dialogRef.current?.querySelector("input")?.focus()
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  return (
    <div
      className={`chat-modal${open ? " is-open" : ""}`}
      aria-hidden={!open}
    >
      <div className="chat-modal__backdrop" onClick={onClose} />
      <div
        ref={dialogRef}
        className="chat-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-label="Ask daiwik.ai"
      >
        <div className="chat-modal__header">
          <div className="flex items-center gap-2">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--fg)" }}
            />
            <span className="text-[11px] uppercase tracking-[0.2em] opacity-60">
              Ask daiwik.ai
            </span>
            <span className="text-[10px] opacity-40 hidden sm:inline">
              powered by openrouter
            </span>
          </div>
          <button
            className="chat-modal__close"
            onClick={onClose}
            aria-label="Close chat"
          >
            ✕
          </button>
        </div>
        <div className="chat-modal__body">
          <ChatPanel theme={theme} />
        </div>
      </div>
    </div>
  )
}
