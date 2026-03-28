"use client"

import Link from "next/link"

export default function CVPanel({ isDarkMode, onToggle }: { isDarkMode: boolean; onToggle: () => void }) {
  return (
    <div
      className={`w-1/2 p-8 font-mono relative z-10 h-full overflow-auto ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <button
        onClick={onToggle}
        className={`absolute top-8 right-8 p-2 rounded-full transition-colors ${
          isDarkMode ? "hover:bg-white/10" : "hover:bg-black/10"
        }`}
        aria-label="Toggle theme"
      >
        {isDarkMode ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </button>

      <div className="mb-12">
        <h1 className="text-lg font-normal mb-8">daiwik.cv</h1>
        <div className="mb-8">
          <h2 className="text-lg font-normal">DAIWIK MAHESHWARI</h2>
          <h3 className="text-lg font-normal">BLOCKCHAIN DEV & AGENTS</h3>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-normal mb-4">Experience</h2>
      </div>

      <div className="mb-12 space-y-1">
        <div className="flex">
          <span className="w-20">unrealai</span>
          <span className="mx-2">Blockchain Intern</span>
          <span className="mx-4">July, 2025 → October, 2025</span>
        </div>
        <div className="flex">
          <span className="w-20">SoBro</span>
          <span className="mx-2">Integrations and Development</span>
          <span className="mx-4">2025 → 2025</span>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-normal mb-4">Wins</h2>
      </div>

      <div className="mb-12 space-y-1">
        <div>
          <span className="w-20">Stellar Builders Camp</span>
          <span className="mx-2">Winner</span>
          <span className="mx-4">March, 25</span>
        </div>
        <div>
          <span className="w-20">ETHGlobal Agentic</span>
          <span className="mx-2">Track Winner</span>
          <span className="mx-4">Feb, 26</span>
        </div>
      </div>

      <div className="absolute bottom-8 left-8">
        <div className="flex gap-16">

          {[
            {
              label: "Projects",
              el: (
                <Link href="/projects" className="opacity-40 hover:opacity-100 transition-all duration-200 block" aria-label="Projects">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
                  </svg>
                </Link>
              ),
            },
            {
              label: "Twitter",
              el: (
                <a href="https://x.com/daiwik_mhi" target="_blank" rel="noopener noreferrer" className="opacity-40 hover:opacity-100 transition-all duration-200 block" aria-label="Twitter">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.261 5.632 5.903-5.632Zm-1.161 17.52h1.833L7.084 4.126H5.117Z" />
                  </svg>
                </a>
              ),
            },
            {
              label: "Email",
              el: (
                <a href="mailto:daiwikmahesh@gmail.com" className="opacity-40 hover:opacity-100 transition-all duration-200 block" aria-label="Email">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m2 7 10 7 10-7" />
                  </svg>
                </a>
              ),
            },
            {
              label: "LinkedIn",
              el: (
                <a href="https://www.linkedin.com/in/daiwik-maheshwari-69a880247/" target="_blank" rel="noopener noreferrer" className="opacity-40 hover:opacity-100 transition-all duration-200 block" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              ),
            },
            {
              label: "Medium",
              el: (
                <a href="https://medium.com/@daiwikmaheshwari" target="_blank" rel="noopener noreferrer" className="opacity-40 hover:opacity-100 transition-all duration-200 block" aria-label="Medium">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                  </svg>
                </a>
              ),
            },
          ].map(({ label, el }) => (
            <div key={label} className="relative group/tip">
              {el}
              <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-4 flex flex-col items-center opacity-0 scale-95 group-hover/tip:opacity-100 group-hover/tip:scale-100 transition-all duration-150 ease-out origin-bottom">
                <div className="relative px-3 py-1.5 font-mono text-[11px] tracking-widest uppercase text-white/80 bg-black overflow-hidden">
                  <span className="absolute inset-0 border border-white/20" />
                  <span className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                  {label}
                </div>
                <div className="w-px h-2 bg-white/20" />
                <div className="w-1 h-1 rounded-full bg-white/30" />
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}
