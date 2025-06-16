"use client"

import { useState, useEffect } from "react"
import { Terminal, Cpu, Database, Wifi } from "lucide-react"

interface StartupLoaderProps {
  onComplete: () => void
}

export function StartupLoader({ onComplete }: StartupLoaderProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)

  const bootSequence = [
    { text: "INITIALIZING WEBNEST SYSTEM...", icon: Terminal, delay: 800 },
    { text: "LOADING RETRO PROTOCOLS...", icon: Cpu, delay: 600 },
    { text: "CONNECTING TO DATABASE...", icon: Database, delay: 700 },
    { text: "ESTABLISHING DIGITAL FRONTIER...", icon: Wifi, delay: 500 },
    { text: "SYSTEM READY - WELCOME TO WEBNEST", icon: Terminal, delay: 400 },
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < bootSequence.length - 1) {
        setCurrentStep(currentStep + 1)
        setProgress(((currentStep + 1) / bootSequence.length) * 100)
      } else {
        setTimeout(() => {
          onComplete()
        }, 1000)
      }
    }, bootSequence[currentStep]?.delay || 500)

    return () => clearTimeout(timer)
  }, [currentStep, onComplete])

  const CurrentIcon = bootSequence[currentStep]?.icon || Terminal

  return (
    <div className="fixed inset-0 bg-retro-dark z-50 flex items-center justify-center pixel-bg">
      <div className="pixel-matrix-bg fixed inset-0 opacity-20"></div>

      <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
        {/* WebNest Logo */}
        <div className="mb-8 pixel-fade-in">
          <div className="pixel-logo-container mx-auto mb-4 pixel-glow-intense">
            <div className="pixel-logo scale-150">
              <div className="pixel-row">
                <div className="pixel bg-retro-green"></div>
                <div className="pixel bg-retro-green"></div>
                <div className="pixel bg-retro-green"></div>
                <div className="pixel bg-retro-cyan"></div>
                <div className="pixel bg-retro-cyan"></div>
              </div>
              <div className="pixel-row">
                <div className="pixel bg-retro-green"></div>
                <div className="pixel bg-transparent"></div>
                <div className="pixel bg-retro-green"></div>
                <div className="pixel bg-retro-cyan"></div>
                <div className="pixel bg-transparent"></div>
              </div>
              <div className="pixel-row">
                <div className="pixel bg-retro-green"></div>
                <div className="pixel bg-retro-green"></div>
                <div className="pixel bg-retro-green"></div>
                <div className="pixel bg-retro-cyan"></div>
                <div className="pixel bg-retro-cyan"></div>
              </div>
              <div className="pixel-row">
                <div className="pixel bg-retro-green"></div>
                <div className="pixel bg-transparent"></div>
                <div className="pixel bg-retro-green"></div>
                <div className="pixel bg-retro-cyan"></div>
                <div className="pixel bg-transparent"></div>
              </div>
              <div className="pixel-row">
                <div className="pixel bg-retro-green"></div>
                <div className="pixel bg-retro-green"></div>
                <div className="pixel bg-retro-green"></div>
                <div className="pixel bg-retro-cyan"></div>
                <div className="pixel bg-retro-cyan"></div>
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-pixel text-retro-green pixel-text-glow mb-2">WEBNEST</h1>
          <p className="text-sm font-mono text-retro-cyan">RETRO COMPUTING SYSTEM v2.024</p>
        </div>

        {/* Boot Terminal */}
        <div className="bg-retro-darker border-4 border-retro-green pixel-glow p-6 font-mono text-left mb-6">
          <div className="flex items-center gap-2 mb-4 text-retro-green">
            <Terminal className="h-4 w-4" />
            <span className="text-sm">WEBNEST BOOT SEQUENCE</span>
          </div>

          <div className="space-y-2 text-sm">
            {bootSequence.slice(0, currentStep + 1).map((step, index) => {
              const StepIcon = step.icon
              const isCurrentStep = index === currentStep

              return (
                <div
                  key={index}
                  className={`flex items-center gap-2 ${
                    isCurrentStep ? "text-retro-yellow" : "text-retro-cyan"
                  } ${isCurrentStep ? "pixel-typewriter" : ""}`}
                >
                  <StepIcon className={`h-3 w-3 ${isCurrentStep ? "pixel-blink" : ""}`} />
                  <span>{step.text}</span>
                  {index < currentStep && <span className="text-retro-green ml-auto">✓</span>}
                  {isCurrentStep && <span className="text-retro-yellow ml-auto pixel-loading-dots"></span>}
                </div>
              )
            })}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-retro-darker border-2 border-retro-cyan h-6 relative overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-retro-green to-retro-cyan transition-all duration-500 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 pixel-loading-animation opacity-50"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-mono text-retro-dark font-bold">{Math.round(progress)}%</span>
          </div>
        </div>

        {/* System Status */}
        <div className="mt-4 flex justify-center space-x-4">
          <div className="w-3 h-3 bg-retro-green pixel-blink"></div>
          <div className="w-3 h-3 bg-retro-cyan pixel-blink-delayed"></div>
          <div className="w-3 h-3 bg-retro-magenta pixel-blink" style={{ animationDelay: "1s" }}></div>
        </div>
      </div>
    </div>
  )
}
