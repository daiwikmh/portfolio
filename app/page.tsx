"use client"

import { useEffect, useState } from "react"
import ProfilePanel from "@/components/ProfilePanel"
import ProjectsGrid from "@/components/ProjectsGrid"

export type Theme = "light" | "mono" | "midnight"

export default function ResumePage() {
  const [theme, setTheme] = useState<Theme>("light")

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("theme")) as Theme | null
    if (stored === "mono" || stored === "midnight" || stored === "light") setTheme(stored)
  }, [])

  function cycleTheme() {
    const order: Theme[] = ["light", "mono", "midnight"]
    const next = order[(order.indexOf(theme) + 1) % order.length]
    setTheme(next)
    document.documentElement.setAttribute("data-theme", next)
    try { localStorage.setItem("theme", next) } catch {}
  }

  return (
    <div
      className="h-screen overflow-hidden flex gap-3 p-3"
      style={{ background: "var(--bg)", color: "var(--fg)" }}
    >
      <div className="w-[40%] h-full min-h-0">
        <ProfilePanel theme={theme} onToggleTheme={cycleTheme} />
      </div>
      <div className="w-[60%] h-full min-h-0">
        <ProjectsGrid />
      </div>
    </div>
  )
}
