"use client"

import { useState } from "react"
import ChatPanel from "@/components/ChatPanel"
import CVPanel from "@/components/CVPanel"

export default function ResumePage() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  return (
    <div className="relative h-screen overflow-hidden flex">
      <CVPanel isDarkMode={isDarkMode} onToggle={() => setIsDarkMode(!isDarkMode)} />
      <div className="w-1/2 h-full flex flex-col overflow-hidden">
        <ChatPanel isDarkMode={isDarkMode} />
      </div>
    </div>
  )
}
