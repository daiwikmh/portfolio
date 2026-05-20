"use client"

import { useEffect, useState } from "react"
import ProfilePanel from "@/components/ProfilePanel"
import ProjectsGrid from "@/components/ProjectsGrid"

export type Theme = "light" | "mono"

export default function ResumePage() {
  const [theme, setTheme] = useState<Theme>("light")

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("theme")) as Theme | null
    if (stored === "mono" || stored === "light") setTheme(stored)
  }, [])

  function cycleTheme() {
    const order: Theme[] = ["light", "mono"]
    const next = order[(order.indexOf(theme) + 1) % order.length]
    setTheme(next)
    document.documentElement.setAttribute("data-theme", next)
    try { localStorage.setItem("theme", next) } catch {}
  }

  return (
    <div
      className="flex flex-col md:flex-row gap-2.5 sm:gap-3 p-2.5 sm:p-3 min-h-screen md:h-screen md:overflow-hidden overflow-y-auto"
      style={{ background: "var(--bg)", color: "var(--fg)" }}
    >
      <div className="w-full md:w-[40%] md:h-full">
        <ProfilePanel theme={theme} onToggleTheme={cycleTheme} />
      </div>
      <div className="w-full md:w-[60%] md:h-full">
        <ProjectsGrid />
      </div>
    </div>
  )
}
