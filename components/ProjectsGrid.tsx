"use client"

import Link from "next/link"
import { useState } from "react"

type Project = {
  name: string
  tagline: string
  category: "DeFi" | "Agents" | "Wallets" | "Storage"
  award?: string
  url?: string
  accent: string
  image?: string
}

const PROJECTS: Project[] = [
  {
    name: "Brahma",
    tagline: "Autonomous cross-chain yield optimizer",
    category: "DeFi",
    award: "Winner — LI.FI Vibeathon",
    url: "https://brahma-five.vercel.app",
    accent: "#c7e9b0",
    image: "https://gateway.irys.xyz/4j2fNFpdQXbqmRWjVcWJWrck2KNPfkZ1Co1gsGXFqT6n",
  },
  {
    name: "Moly",
    tagline: "Lido for AI Agents",
    category: "Agents",
    url: "https://moly-lido.vercel.app",
    accent: "#cdd9f5",
    image: "https://gateway.irys.xyz/DShcHgfCxbz2Ksoj3xitALsPdLUzPJNStP5nsHx9kJ44",
  },
  {
    name: "OWL",
    tagline: "Multi-agent wallet coordination",
    category: "Wallets",
    url: "https://owl-moonpay.vercel.app",
    accent: "#f5e6b8",
    image: "https://gateway.irys.xyz/9KHt4bmYDxEEWXfp1AZR7tzSwnfVkB1JFhKSv2EehwRz",
  },
  {
    name: "Polo",
    tagline: "YO Protocol yield agent",
    category: "DeFi",
    url: "https://polo-x.vercel.app",
    accent: "#bde6d4",
  },
  {
    name: "Plutus",
    tagline: "Social-sentiment market aggregator",
    category: "DeFi",
    award: "Winner — ETHGlobal",
    accent: "#f5cdc7",
  },
  {
    name: "Filedrop",
    tagline: "Telegram → Filecoin storage",
    category: "Storage",
    award: "Filecoin Grants",
    accent: "#cfd9e6",
  },
]

const FILTERS = ["All", "DeFi", "Agents", "Wallets", "Storage"] as const
type Filter = typeof FILTERS[number]

export default function ProjectsGrid() {
  const [filter, setFilter] = useState<Filter>("All")

  const visible = filter === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter)

  return (
    <div className="card md:h-full p-4 sm:p-5 flex flex-col md:min-h-0">
      <div className="flex items-center justify-between mb-4 flex-shrink-0">
        <div className="flex items-baseline gap-3">
          <h2 className="text-lg font-semibold tracking-tight">Projects</h2>
          <span className="text-[10px] uppercase tracking-[0.2em] opacity-40">
            {visible.length} {visible.length === 1 ? "project" : "projects"}
          </span>
        </div>
        <Link
          href="/projects"
          className="text-[10px] uppercase tracking-[0.2em] opacity-50 hover:opacity-100 transition-opacity"
        >
          all →
        </Link>
      </div>

      <div className="flex gap-1.5 mb-4 flex-shrink-0 flex-wrap">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`chip chip-btn ${filter === f ? "chip--filled" : ""}`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 md:overflow-y-auto md:min-h-0 pr-1 pb-1">
        {visible.map((p) => (
          <Link
            key={p.name}
            href="/projects"
            className="card card-hover group flex flex-col overflow-hidden cursor-pointer"
            style={{ borderRadius: "0.85rem" }}
          >
            <div
              className="aspect-[4/3] relative overflow-hidden flex items-center justify-center"
              style={{ background: p.accent }}
            >
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <>
                  <svg
                    className="absolute inset-0 w-full h-full opacity-20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <pattern id={`grid-${p.name}`} width="18" height="18" patternUnits="userSpaceOnUse">
                        <circle cx="1" cy="1" r="1" fill="#1a1a1a" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#grid-${p.name})`} />
                  </svg>
                  <span
                    className="relative z-10 font-mono font-bold uppercase tracking-[0.18em] text-lg group-hover:tracking-[0.28em] transition-all duration-300"
                    style={{ color: "#1a1a1a" }}
                  >
                    {p.name}
                  </span>
                </>
              )}
              {p.award && (
                <span
                  className="absolute top-2 left-2 text-[9px] uppercase tracking-[0.15em] px-1.5 py-0.5 font-mono"
                  style={{
                    background: "rgba(26,26,26,0.85)",
                    color: "#ece9d8",
                    borderRadius: "999px",
                  }}
                >
                  ★
                </span>
              )}
              <span
                className="absolute bottom-2 right-2 text-[9px] uppercase tracking-[0.15em] px-1.5 py-0.5 font-mono"
                style={{
                  background: "rgba(255,255,255,0.85)",
                  color: "#1a1a1a",
                  borderRadius: "999px",
                }}
              >
                {p.category}
              </span>
            </div>
            <div className="p-3 flex flex-col gap-1">
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-medium tracking-tight truncate">
                  {p.name}
                </span>
                <span className="text-xs opacity-30 group-hover:opacity-80 group-hover:translate-x-0.5 transition-all">
                  ↗
                </span>
              </div>
              <p className="text-[11px] opacity-55 leading-snug line-clamp-2">
                {p.tagline}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
