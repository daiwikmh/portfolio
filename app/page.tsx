"use client"

import { useEffect, useState } from "react"
import Sidebar from "@/components/Sidebar"
import MainContent from "@/components/MainContent"

export type Theme = "dark" | "light"

export const SECTIONS = [
  { id: "about", label: "about" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
] as const

export default function ResumePage() {
  const [theme, setTheme] = useState<Theme>("dark")
  const [active, setActive] = useState<string>("about")

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("theme")) as Theme | null
    if (stored === "dark" || stored === "light") setTheme(stored)
  }, [])

  useEffect(() => {
    const sections = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null,
    )

    function onScroll() {
      const line = window.innerHeight * 0.35
      let current = sections[0]?.id ?? "about"
      for (const el of sections) {
        if (el.getBoundingClientRect().top <= line) current = el.id
      }
      setActive(current)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const targets = document.querySelectorAll(".reveal")
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            io.unobserve(entry.target)
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    )
    targets.forEach((t) => io.observe(t))
    return () => io.disconnect()
  }, [])

  function toggleTheme() {
    const next: Theme = theme === "dark" ? "light" : "dark"
    setTheme(next)
    document.documentElement.setAttribute("data-theme", next)
    try { localStorage.setItem("theme", next) } catch {}
  }

  return (
    <div className="shell">
      <Sidebar theme={theme} onToggleTheme={toggleTheme} active={active} />
      <MainContent />
    </div>
  )
}
