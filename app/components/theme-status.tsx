"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeStatus() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-retro-darker border-2 border-retro-green pixel-glow p-3 font-mono text-sm">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 pixel-blink ${theme === "dark" ? "bg-retro-cyan" : "bg-retro-yellow"}`}></div>
          <span className="text-retro-green">{theme === "dark" ? "DARK_MODE_ACTIVE" : "LIGHT_MODE_ACTIVE"}</span>
        </div>
        <div className="text-xs text-retro-cyan mt-1">SYSTEM_STATUS: OPTIMAL</div>
      </div>
    </div>
  )
}
