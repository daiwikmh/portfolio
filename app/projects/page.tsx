"use client"

import Link from "next/link"

const PROJECTS = [
  {
    name: "Brahma",
    tagline: "Autonomous cross-chain yield optimizer",
    description:
      "Watches your USDC across chains 24/7, finds the best Aave V3 yield, and moves funds automatically via LI.FI bridges. Includes a Uniswap V3 LP Guardian that evacuates liquidity when risk thresholds are breached.",
    tags: ["Aave V3", "LI.FI", "Uniswap V3", "DeFi"],
    award: "Winner — LI.FI Vibeathon",
    url: "https://brahma-five.vercel.app",
    accent: "hsl(270, 80%, 65%)",
  },
  {
    name: "Moly",
    tagline: "Lido for AI Agents",
    description:
      "A complete platform for AI agents to interact with the Lido liquid staking protocol. Stake ETH, manage withdrawals, wrap/unwrap stETH, and vote on governance — all from natural language.",
    tags: ["Lido", "AI Agents", "Ethereum", "Staking"],
    url: "https://moly-lido.vercel.app",
    accent: "hsl(200, 100%, 60%)",
  },
  {
    name: "OWL",
    tagline: "Multi-agent coordination for the Open Wallet Standard",
    description:
      "Extends MoonPay's OWS from a single-agent wallet into infrastructure where multiple AI agents coordinate around shared wallets. Keys never leave the host.",
    tags: ["MoonPay", "OWS", "Multi-agent", "Wallets"],
    url: "https://owl-moonpay.vercel.app",
    accent: "hsl(40, 100%, 60%)",
  },
  {
    name: "Polo",
    tagline: "AI yield agent on YO Protocol",
    description:
      "Autonomously manages deposits across YO Protocol vaults using Biconomy smart accounts. Real-time Telegram alerts and in-chat trading.",
    tags: ["Biconomy", "Telegram", "Yield", "AI Agents"],
    url: "https://polo-x.vercel.app",
    accent: "hsl(160, 80%, 55%)",
  },
  {
    name: "SoBro",
    tagline: "Home base for crypto nomads",
    description:
      "A one-stop platform for crypto nomads to find each other, mint shared memories as NFTs, and transact in crypto.",
    tags: ["NFTs", "Social", "Crypto"],
    award: "Winner — Camp Network Hack",
    accent: "hsl(320, 80%, 65%)",
  },
  {
    name: "Filedrop",
    tagline: "Telegram to Filecoin storage",
    description:
      "Send files in Telegram and have them pinned permanently to Filecoin via Pinata and Storacha. Zero-config decentralized storage from chat.",
    tags: ["Filecoin", "Pinata", "Storacha", "Telegram"],
    award: "Filecoin Grants",
    accent: "hsl(220, 90%, 65%)",
  },
  {
    name: "Plutus",
    tagline: "Social-sentiment market aggregator",
    description:
      "A market aggregator on Ethereum that reads sentiment from social platforms to inform DeFi positions. Integrated Aave and other lending platforms.",
    tags: ["Ethereum", "Aave", "Sentiment", "DeFi"],
    award: "Winner — ETHGlobal",
    accent: "hsl(15, 90%, 60%)",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <div className="px-8 pt-10 pb-4 max-w-6xl mx-auto">
        <Link href="/" className="text-xs opacity-30 hover:opacity-60 transition-opacity tracking-widest uppercase">
          ← back
        </Link>
        <h1 className="text-2xl font-normal mt-6 mb-1 tracking-tight">Projects</h1>
        <p className="text-xs opacity-30 mb-12">things i've shipped</p>
      </div>

      <div className="px-8 pb-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {PROJECTS.map((p) => (
          <div
            key={p.name}
            className="relative group flex flex-col border border-white/8 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 overflow-hidden"
            style={{ "--accent": p.accent } as React.CSSProperties}
          >
            {/* top accent bar */}
            <div
              className="h-px w-full opacity-60"
              style={{ background: p.accent }}
            />

            <div className="flex flex-col flex-1 p-5 gap-4">
              {/* header */}
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="text-base font-normal tracking-tight"
                      style={{ color: p.accent }}
                    >
                      {p.name}
                    </span>
                    {p.url && (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-0 group-hover:opacity-40 hover:!opacity-80 transition-opacity text-xs"
                        aria-label={`Visit ${p.name}`}
                      >
                        ↗
                      </a>
                    )}
                  </div>
                  <p className="text-xs opacity-40 leading-snug">{p.tagline}</p>
                </div>
              </div>

              {/* description */}
              <p className="text-xs opacity-60 leading-relaxed flex-1">{p.description}</p>

              {/* footer */}
              <div className="flex flex-col gap-2 mt-auto pt-3 border-t border-white/8">
                {p.award && (
                  <span
                    className="text-xs px-2 py-0.5 self-start"
                    style={{
                      color: p.accent,
                      border: `1px solid ${p.accent}40`,
                      background: `${p.accent}10`,
                    }}
                  >
                    {p.award}
                  </span>
                )}
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[10px] opacity-25 border border-white/10 px-1.5 py-0.5 tracking-wide">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
