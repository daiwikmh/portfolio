"use client"

import Image from "next/image"
import { useState } from "react"
import { Github, Twitter, Mail, Linkedin, Sun, Moon } from "lucide-react"
import ChatModal from "@/components/ChatModal"
import { SECTIONS, type Theme } from "@/app/page"

const SOCIALS = [
  { href: "https://github.com/daiwikmh", label: "GitHub", Icon: Github },
  { href: "https://x.com/daiwik_mhi", label: "Twitter", Icon: Twitter },
  {
    href: "https://www.linkedin.com/in/daiwik-maheshwari-69a880247/",
    label: "LinkedIn",
    Icon: Linkedin,
  },
  {
    href: "https://mail.google.com/mail/?view=cm&to=daiwikmahesh@gmail.com",
    label: "Email",
    Icon: Mail,
  },
]

export default function Sidebar({
  theme,
  onToggleTheme,
  active,
}: {
  theme: Theme
  onToggleTheme: () => void
  active: string
}) {
  const [chatOpen, setChatOpen] = useState(false)

  function jumpTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <aside className="sidebar">
      <div className="w-14 h-14 rounded-full overflow-hidden mb-4" style={{ border: "1px solid var(--border)" }}>
        <Image
          src="/daiwik.jpg"
          alt="Daiwik Maheshwari"
          width={56}
          height={56}
          className="object-cover w-full h-full"
        />
      </div>

      <h1 className="side-name font-serif">daiwik</h1>
      <p className="side-role">working in ai/llms &amp; finance</p>

      <nav className="side-nav">
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            onClick={() => jumpTo(s.id)}
            className={`side-nav__item${active === s.id ? " is-active" : ""}`}
          >
            {s.label}
          </button>
        ))}
      </nav>

      <div className="side-foot">
        <button className="side-btn" onClick={() => setChatOpen(true)}>
          <span>ask ai</span>
          <span aria-hidden="true">↗</span>
        </button>

        <button className="side-btn" onClick={onToggleTheme}>
          <span>{theme === "dark" ? "light mode" : "dark mode"}</span>
          {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
        </button>

        <div className="side-socials">
          {SOCIALS.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <p className="side-copy">© 2026 daiwik maheshwari</p>
      </div>

      <ChatModal open={chatOpen} onClose={() => setChatOpen(false)} theme={theme} />
    </aside>
  )
}
