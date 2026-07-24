const FOCUS = [
  "defi",
  "ai agents",
  "smart contracts",
  "cross-chain",
  "solana",
  "ethereum",
]

const EXPERIENCE = [
  {
    role: "full stack developer",
    company: "unrealai",
    period: "aug 2025 – nov 2025",
    meta: "remote · 4 months",
    points: [
      "Engineered a custom web-based terminal interface, streamlining access to core platform functionality.",
      "Architected a blockchain-based credit system enabling on-chain transactions for AI service access and resource allocation.",
    ],
  },
  {
    role: "blockchain developer",
    company: "sobro",
    period: "jun 2025 – aug 2025",
    meta: "jaipur · 3 months",
    points: [
      "Deployed smart contracts for a decentralized tourism ecosystem focused on secure on-chain data registration.",
      "Implemented on-chain minting logic, turning user-generated content into permanent, tradable digital assets.",
    ],
  },
]

const PROJECTS = [
  {
    name: "neurus",
    tagline: "portable, owned memory for ai agents",
    description:
      "Memory that lives on Walrus, encrypted with Seal, and anchored on Sui — carried between Claude, Gemini and GPT instead of staying locked in one vendor's servers. Ships as a second brain, a terminal CLI agent, and an HTTP/MCP API for any agent to plug into.",
    url: "https://www.neurus.xyz",
  },
  {
    name: "patentos",
    tagline: "prior art and novelty research, automated",
    description:
      "Searches Google Patents, arXiv, GitHub and company blogs, builds a knowledge graph from what it finds, and returns a novelty verdict with concrete ways to differentiate an idea — or an infringement lead list scoped to a patent's issuing jurisdiction.",
    url: "https://patent-ose.vercel.app",
  },
  {
    name: "brahma",
    tagline: "autonomous defi operations suite",
    description:
      "A cross-chain USDC yielder that uses LI.FI bridges and Aave V3 for non-custodial, automated capital deployment across chains, plus an LP Guardian strategy that continuously monitors Uniswap V3 positions and evacuates liquidity into safer assets when on-chain risk thresholds are breached.",
    award: "winner — li.fi vibeathon",
    url: "https://brahma-five.vercel.app",
  },
  {
    name: "moly",
    tagline: "lido for ai agents",
    description:
      "A complete platform for AI agents to interact with the Lido liquid staking protocol. Stake ETH, manage withdrawals, wrap/unwrap stETH, and vote on governance — all from natural language.",
    url: "https://moly-lido.vercel.app",
  },
  {
    name: "owl",
    tagline: "multi-agent coordination for the open wallet standard",
    description:
      "Multi-agent coordination infrastructure built on the Open Wallet Standard, delivered as a CLI tool that lets multiple autonomous agents safely share terminal wallets. An agent-native interface and secure key-management layer keep private keys on the host while supporting complex multi-agent execution workflows.",
    url: "https://owl-moonpay.vercel.app",
  },
  {
    name: "nyx",
    tagline: "on-chain central limit order book on polkadot",
    description:
      "A fully on-chain CLOB using PolkaVM RISC-V execution and a native Rust matching engine for deterministic, gas-efficient order matching, with Solidity interfaces bridging into the low-level matching logic deployed on Polkadot Asset Hub.",
    url: "https://nyx-trade.vercel.app",
  },
  {
    name: "polo",
    tagline: "ai yield agent on yo protocol",
    description:
      "Autonomously manages deposits across YO Protocol vaults using Biconomy smart accounts. Real-time Telegram alerts and in-chat trading.",
    url: "https://polo-x.vercel.app",
  },
  {
    name: "plutus",
    tagline: "social-sentiment market aggregator",
    description:
      "A market aggregator on Ethereum that reads sentiment from social platforms to inform DeFi positions. Integrated Aave and other lending platforms.",
    award: "winner — ethglobal",
  },
  {
    name: "sobro",
    tagline: "home base for crypto nomads",
    description:
      "A one-stop platform for crypto nomads to find each other, mint shared memories as NFTs, and transact in crypto.",
    award: "winner — camp network hack",
  },
  {
    name: "filedrop",
    tagline: "telegram to filecoin storage",
    description:
      "Send files in Telegram and have them pinned permanently to Filecoin via Pinata and Storacha. Zero-config decentralized storage from chat.",
    award: "filecoin grants",
  },
]

export default function MainContent() {
  return (
    <main className="main">
      <div className="main__inner">
        <section id="about" className="section">
          <h2 className="section__title font-serif reveal">about</h2>
          <p className="lede reveal">
            i&apos;m working in ai/llms &amp; finance, based in bangalore and
            jaipur, india.
          </p>
          <p className="lede reveal">
            working on longer contexts, retrieval and telemetry for autonomous
            agents with guardrails — liquidity management, cross-chain ops
            and agent-native wallet infrastructure.
          </p>
          <div className="tag-row reveal">
            {FOCUS.map((f) => (
              <span key={f} className="tag">{f}</span>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <h2 className="section__title font-serif reveal">experience</h2>
          <div className="timeline">
            {EXPERIENCE.map((e, i) => (
              <div key={e.company} className="tl-item reveal">
                <span className={`tl-dot${i === 0 ? " tl-dot--current" : ""}`} />
                <div className="tl-head">
                  <span className="tl-role">{e.role}</span>
                  <span className="tl-period">{e.period}</span>
                </div>
                <div className="tl-company">{e.company}</div>
                <div className="tl-meta">{e.meta}</div>
                <ul className="tl-points">
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <h2 className="section__title font-serif reveal">projects</h2>
          {PROJECTS.map((p) => {
            const inner = (
              <>
                {p.award && (
                  <span className="badge mb-2 inline-block">{p.award}</span>
                )}
                <div className="flex items-baseline justify-between gap-3">
                  <span className="row__title">
                    {p.name}: {p.tagline}
                  </span>
                  {p.url && <span className="row__arrow">↗</span>}
                </div>
                <p className="row__sub">{p.description}</p>
              </>
            )

            return p.url ? (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="row reveal"
              >
                {inner}
              </a>
            ) : (
              <div key={p.name} className="row reveal">
                {inner}
              </div>
            )
          })}
        </section>

        <section id="github" className="section">
          <h2 className="section__title font-serif reveal">github</h2>
          <a
            href="https://github.com/daiwikmh"
            target="_blank"
            rel="noopener noreferrer"
            className="block reveal"
          >
            <img
              src="https://ghchart.rshah.org/2f6fed/daiwikmh"
              alt="daiwikmh's GitHub contribution graph"
              className="w-full h-auto rounded-lg"
              style={{ border: "1px solid var(--border)" }}
            />
          </a>
        </section>
      </div>
    </main>
  )
}
