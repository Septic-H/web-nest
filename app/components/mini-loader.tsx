"use client"

import { Loader2 } from "lucide-react"

interface MiniLoaderProps {
  text?: string
  size?: "sm" | "md" | "lg"
}

export function MiniLoader({ text = "LOADING", size = "md" }: MiniLoaderProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  }

  const textSizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  }

  return (
    <div className="flex items-center justify-center gap-3 font-mono">
      <div className="relative">
        <Loader2 className={`${sizeClasses[size]} text-retro-green animate-spin`} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-retro-cyan pixel-blink"></div>
        </div>
      </div>
      <span className={`${textSizeClasses[size]} text-retro-cyan`}>
        {text}
        <span className="pixel-loading-dots"></span>
      </span>
    </div>
  )
}
