"use client"

import Image from "next/image"
import { useState } from "react"
import ChatModal from "@/components/ChatModal"
import type { Theme } from "@/app/page"

const TECH_STACK = [
  { label: "Languages", value: "Rust, Solidity, Go, TypeScript, SQL (PostgreSQL)" },
  { label: "Frameworks", value: "Anchor (Solana), Uniswap Hooks, Next.js, Node.js, Foundry" },
  { label: "Specializations", value: "Autonomous AI Agents, DeFi Infrastructure" },
]

const EXPERIENCE = [
  {
    company: "unrealai",
    role: "Full Stack Developer",
    location: "Remote",
    period: "Aug 2025 – Nov 2025",
    points: [
      "Engineered a custom web-based terminal interface, streamlining access to core platform functionality.",
      "Architected a blockchain-based credit system enabling on-chain transactions for AI service access and resource allocation.",
    ],
  },
  {
    company: "SoBro",
    role: "Blockchain Developer",
    location: "Jaipur",
    period: "Jun 2025 – Aug 2025",
    points: [
      "Deployed smart contracts for a decentralized tourism ecosystem focused on secure on-chain data registration.",
      "Implemented on-chain minting logic, turning user-generated content into permanent, tradable digital assets.",
    ],
  },
]

const THEME_LABEL: Record<Theme, string> = {
  light: "Light",
  mono: "Mono",
}

export default function ProfilePanel({
  theme,
  onToggleTheme,
}: {
  theme: Theme
  onToggleTheme: () => void
}) {
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <div className="flex flex-col h-full gap-3 min-h-0">
      {/* Profile / daiwik.cv card — grows to fill the column */}
      <div className="card p-6 sm:p-7 flex-1 min-h-0 md:overflow-y-auto">
        <div className="flex items-start justify-between mb-5 gap-3">
          <div className="flex items-center gap-3">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center overflow-hidden"
              style={{ background: "var(--surface-soft)", border: "1px solid var(--border)" }}
            >
              <Image src="https://gateway.irys.xyz/52JT53dYcq7gYha1FBFh1B98iQkaciw1Cojac887kLxK" alt="Daiwik Maheshwari" width={56} height={56} className="object-cover w-full h-full" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.2em] opacity-50">Portfolio</span>
              <span className="text-sm font-mono opacity-80">daiwik.cv</span>
              <span className="text-[10px] font-mono opacity-45 mt-0.5">Jaipur, India</span>
            </div>
          </div>
          <div className="flex gap-2 items-center flex-wrap">
            <a
              href="https://x.com/daiwik_mhi"
              target="_blank"
              rel="noopener noreferrer"
              className="chip chip-btn"
            >
              Twitter ↗
            </a>
            <a
              href="https://github.com/daiwikmh"
              target="_blank"
              rel="noopener noreferrer"
              className="chip chip-btn chip--filled"
            >
              Github ↗
            </a>
            <a
              href="https://www.linkedin.com/in/daiwik-maheshwari-69a880247/"
              target="_blank"
              rel="noopener noreferrer"
              className="chip chip-btn"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=daiwikmahesh@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="chip chip-btn"
            >
              Email ↗
            </a>
            <button
              onClick={onToggleTheme}
              className="chip chip-btn"
              title={`Theme: ${THEME_LABEL[theme]}`}
              aria-label="Cycle theme"
            >
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{ background: "var(--fg)" }}
              />
              {THEME_LABEL[theme]}
            </button>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3 leading-tight">
          Daiwik Maheshwari
        </h1>
        <p className="text-[15px] leading-relaxed opacity-70 mb-7 max-w-2xl">
          Blockchain developer and AI agents builder based in India. I build at the intersection
          of DeFi and AI — autonomous systems that interact with on-chain protocols directly.
          Focused on yield optimization, liquidity management, cross-chain ops, and agent-native
          wallet infrastructure.
        </p>

        {/* Worked at */}
        <section className="mb-7">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[11px] uppercase tracking-[0.25em] opacity-45 font-mono">
              Worked at
            </span>
            <span className="flex-1 h-px" style={{ background: "var(--border)" }} />
          </div>
          {EXPERIENCE.map((e) => (
            <div key={e.company} className="mb-5 last:mb-0">
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-base font-medium">{e.company}</span>
                <span className="text-[11px] font-mono opacity-45 whitespace-nowrap">{e.period}</span>
              </div>
              <div className="text-[13px] opacity-55 mb-2">{e.role} · {e.location}</div>
              <ul className="space-y-1.5">
                {e.points.map((p, i) => (
                  <li key={i} className="flex gap-2 text-[13.5px] leading-relaxed opacity-80">
                    <span className="opacity-40 select-none">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[11px] uppercase tracking-[0.25em] opacity-45 font-mono">
              Skills
            </span>
            <span className="flex-1 h-px" style={{ background: "var(--border)" }} />
          </div>
          <div
            className="p-5 rounded-xl"
            style={{ background: "var(--surface-soft)", border: "1px solid var(--border)" }}
          >
            <div className="space-y-3.5">
              {TECH_STACK.map(({ label, value }) => (
                <div
                  key={label}
                  className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-1 sm:gap-3 sm:items-baseline"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-55">
                    {label}
                  </span>
                  <span className="text-[14px] leading-relaxed opacity-90">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Ask daiwik.ai — launcher that opens the chat popup */}
      <div className="card p-3 sm:p-4 flex-shrink-0">
        <button
          className="ask-launcher"
          onClick={() => setChatOpen(true)}
          aria-label="Open Ask daiwik.ai chat"
        >
          <span className="ask-launcher__dot" aria-hidden="true" />
          <span className="ask-launcher__text">
            <span className="ask-launcher__title">Ask daiwik.ai</span>
            <span className="ask-launcher__sub">chat with an AI that knows his work</span>
          </span>
          <span className="ask-launcher__send">open ↗</span>
        </button>
      </div>

      <ChatModal open={chatOpen} onClose={() => setChatOpen(false)} theme={theme} />
    </div>
  )
}
