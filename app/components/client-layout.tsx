"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { StartupLoader } from "./startup-loader"
import { PageTransition } from "./page-transition"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isStartupComplete, setIsStartupComplete] = useState(false)
  const [showStartup, setShowStartup] = useState(true)

  useEffect(() => {
    // Check if user has seen startup before in this session
    const hasSeenStartup = sessionStorage.getItem("webnest-startup-seen")
    if (hasSeenStartup) {
      setShowStartup(false)
      setIsStartupComplete(true)
    }
  }, [])

  const handleStartupComplete = () => {
    sessionStorage.setItem("webnest-startup-seen", "true")
    setIsStartupComplete(true)
  }

  if (showStartup && !isStartupComplete) {
    return <StartupLoader onComplete={handleStartupComplete} />
  }

  return <PageTransition>{children}</PageTransition>
}
