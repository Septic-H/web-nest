"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Loader2, Terminal } from "lucide-react"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false)
  const [displayChildren, setDisplayChildren] = useState(children)

  useEffect(() => {
    setIsLoading(true)

    const timer = setTimeout(() => {
      setDisplayChildren(children)
      setIsLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [pathname, children])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-retro-dark pixel-bg flex items-center justify-center relative">
        <div className="pixel-matrix-bg fixed inset-0 opacity-20"></div>

        <div className="relative z-10 text-center">
          {/* Loading Animation */}
          <div className="mb-6">
            <div className="relative">
              <Loader2 className="h-16 w-16 text-retro-green animate-spin mx-auto" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-retro-cyan pixel-blink"></div>
              </div>
            </div>
          </div>

          {/* Loading Terminal */}
          <div className="bg-retro-darker border-4 border-retro-cyan pixel-glow p-6 font-mono max-w-md">
            <div className="flex items-center gap-2 mb-4 text-retro-cyan">
              <Terminal className="h-4 w-4 pixel-blink" />
              <span className="text-sm">PAGE_TRANSITION</span>
            </div>

            <div className="text-left space-y-1 text-sm">
              <div className="text-retro-yellow">
                <span className="text-retro-cyan">webnest@system:~$</span> navigate {pathname}
              </div>
              <div className="text-retro-green">Loading page components...</div>
              <div className="text-retro-cyan">Initializing retro interface...</div>
              <div className="text-retro-magenta">
                Status: LOADING<span className="pixel-loading-dots"></span>
              </div>
            </div>
          </div>

          {/* Loading Indicators */}
          <div className="mt-6 flex justify-center space-x-2">
            <div className="w-2 h-2 bg-retro-green pixel-blink"></div>
            <div className="w-2 h-2 bg-retro-cyan pixel-blink-delayed"></div>
            <div className="w-2 h-2 bg-retro-magenta pixel-blink" style={{ animationDelay: "1s" }}></div>
          </div>
        </div>
      </div>
    )
  }

  return <div className="animate-fade-in">{displayChildren}</div>
}
