"use client"

import Image from "next/image"
import Link from "next/link"
import ChatPanel from "@/components/ChatPanel"
import type { Theme } from "@/app/page"

const TECH_STACK = [
  { label: "Languages", value: "Rust, Solidity, Go, TypeScript, SQL (PostgreSQL)" },
  { label: "Frameworks", value: "Anchor (Solana), Uniswap Hooks, Next.js, Node.js, Foundry" },
  { label: "Specializations", value: "Autonomous AI Agents, DeFi Infrastructure" },
]

const COMPANIES = [
  { name: "unrealai", role: "Blockchain Intern", period: "2025" },
  { name: "SoBro", role: "Integrations & Dev", period: "2025" },
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
  return (
    <div className="flex flex-col h-full gap-3 min-h-0">
      {/* Profile header card */}
      <div className="card p-6 flex-shrink-0">
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

        <h1 className="text-4xl font-semibold tracking-tight mb-3 leading-tight">
          Daiwik Maheshwari
        </h1>
        <p className="text-sm leading-relaxed opacity-70 mb-5 max-w-2xl">
          Blockchain developer and AI agents builder based in India. I build at the intersection
          of DeFi and AI — autonomous systems that interact with on-chain protocols directly.
          Focused on yield optimization, liquidity management, cross-chain ops, and agent-native
          wallet infrastructure.
        </p>

        <div
          className="mb-5 p-4 rounded-xl"
          style={{ background: "var(--surface-soft)", border: "1px solid var(--border)" }}
        >
          <div className="space-y-2.5">
            {TECH_STACK.map(({ label, value }) => (
              <div
                key={label}
                className="grid grid-cols-[110px_1fr] gap-3 items-baseline"
              >
                <span className="font-mono text-[9.5px] uppercase tracking-[0.2em] opacity-55">
                  {label}
                </span>
                <span className="text-[12.5px] leading-relaxed opacity-90">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="flex items-center gap-4 pt-4"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <span className="text-[10px] uppercase tracking-[0.2em] opacity-50">
            Worked at
          </span>
          <div className="flex items-center gap-4 flex-wrap">
            {COMPANIES.map((c, i) => (
              <div key={c.name} className="flex items-center gap-4">
                {i > 0 && <span className="opacity-20">·</span>}
                <div className="flex flex-col leading-tight">
                  <span className="text-sm font-medium">{c.name}</span>
                  <span className="text-[10px] opacity-50">
                    {c.role} · {c.period}
                  </span>
                </div>
              </div>
            ))}
            <span className="opacity-20">·</span>
            <Link
              href="/projects"
              className="text-[11px] uppercase tracking-[0.2em] opacity-50 hover:opacity-100 transition-opacity"
            >
              wins & projects →
            </Link>
          </div>
        </div>
      </div>

      {/* AI Chat agent — below logos */}
      <div className="card flex-1 min-h-0 overflow-hidden flex flex-col">
        <div
          className="flex items-center justify-between px-5 py-3"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div className="flex items-center gap-2">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--fg)" }}
            />
            <span className="text-[11px] uppercase tracking-[0.2em] opacity-60">
              Ask daiwik.ai
            </span>
          </div>
          <span className="text-[10px] opacity-40">
            powered by openrouter
          </span>
        </div>
        <div className="flex-1 min-h-0">
          <ChatPanel theme={theme} embedded />
        </div>
      </div>
    </div>
  )
}
