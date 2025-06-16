"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface AnimateFadeInUpProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function AnimateFadeInUp({ children, delay = 0, className = "" }: AnimateFadeInUpProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  )
}
