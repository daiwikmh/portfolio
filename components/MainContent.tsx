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
    name: "brahma",
    tagline: "autonomous cross-chain yield optimizer",
    description:
      "Watches USDC across chains 24/7, finds the best Aave V3 yield, and moves funds automatically via LI.FI bridges. Includes a Uniswap V3 LP Guardian that evacuates liquidity when risk thresholds are breached.",
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
      "Extends MoonPay's OWS from a single-agent wallet into infrastructure where multiple AI agents coordinate around shared wallets. Keys never leave the host.",
    url: "https://owl-moonpay.vercel.app",
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
            i&apos;m a blockchain developer based in jaipur, india, building at the
            intersection of defi and ai.
          </p>
          <p className="lede reveal">
            mostly autonomous agents that talk to on-chain protocols directly —
            yield optimization, liquidity management, cross-chain ops and
            agent-native wallet infrastructure.
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
      </div>
    </main>
  )
}
