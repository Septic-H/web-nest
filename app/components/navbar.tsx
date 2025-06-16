"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Menu, X, User, Settings, LogOut, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes"
import Link from "next/link"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) {
    return null
  }

  return (
    <nav className="sticky top-0 z-50 bg-retro-darker/95 backdrop-blur-sm border-b-4 border-retro-green pixel-shadow transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Pixelated Logo */}
          <div className="flex items-center space-x-4 group cursor-pointer">
            <div className="relative">
              {/* Pixelated WebNest Logo */}
              <div className="pixel-logo-container group-hover:pixel-glow-intense transition-all duration-300">
                <div className="pixel-logo">
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
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-retro-magenta pixel-blink"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-pixel text-retro-green tracking-wider group-hover:pixel-glow transition-all duration-300">
                WEBNEST
              </span>
              <span className="text-xs font-mono text-retro-cyan">
                {theme === "dark" ? "DARK_MODE" : "LIGHT_MODE"} v2.024
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              <Link
                href="/"
                className="font-mono text-retro-cyan hover:text-retro-green transition-colors duration-200 pixel-hover-effect relative"
              >
                HOME
              </Link>
              <Link
                href="/trending"
                className="font-mono text-retro-cyan hover:text-retro-green transition-colors duration-200 pixel-hover-effect relative"
              >
                TRENDING
              </Link>
              <Link
                href="/archive"
                className="font-mono text-retro-cyan hover:text-retro-green transition-colors duration-200 pixel-hover-effect relative"
              >
                ARCHIVE
              </Link>
            </nav>

            {/* Enhanced Theme Toggle */}
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="pixel-button bg-retro-dark border-2 border-retro-cyan hover:border-retro-green hover:bg-retro-green/20 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="relative z-10">
                  <Sun
                    className={`h-5 w-5 transition-all duration-300 text-retro-cyan ${theme === "dark" ? "rotate-0 scale-100" : "-rotate-90 scale-0"}`}
                  />
                  <Moon
                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-5 w-5 transition-all duration-300 text-retro-cyan ${theme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"}`}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-retro-green/20 to-retro-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="sr-only">Toggle theme</span>
              </Button>

              {/* Theme indicator */}
              <div className="absolute -top-1 -right-1">
                <div
                  className={`w-2 h-2 transition-colors duration-300 pixel-blink ${theme === "dark" ? "bg-retro-cyan" : "bg-retro-yellow"}`}
                ></div>
              </div>
            </div>

            {/* Pixelated User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-12 w-12 pixel-button bg-retro-dark border-2 border-retro-magenta hover:border-retro-cyan transition-all duration-200 group"
                >
                  <div className="pixel-avatar relative">
                    <div className="w-8 h-8 bg-gradient-to-br from-retro-green to-retro-cyan pixel-border transition-all duration-300 group-hover:from-retro-cyan group-hover:to-retro-magenta"></div>
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-retro-yellow pixel-blink"></div>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-56 mt-2 bg-retro-darker border-2 border-retro-green pixel-shadow"
                align="end"
              >
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    <p className="font-mono text-retro-green">USER_001</p>
                    <p className="w-[200px] truncate text-sm font-mono text-retro-cyan">admin@webnest.retro</p>
                    <p className="text-xs font-mono text-retro-magenta">
                      STATUS: {theme === "dark" ? "NIGHT_OWL" : "DAY_WALKER"}
                    </p>
                  </div>
                </div>
                <DropdownMenuSeparator className="bg-retro-green" />
                <DropdownMenuItem className="cursor-pointer font-mono text-retro-cyan hover:text-retro-green hover:bg-retro-green/20">
                  <User className="mr-2 h-4 w-4" />
                  <span>PROFILE</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer font-mono text-retro-cyan hover:text-retro-green hover:bg-retro-green/20">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>CONFIG</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer font-mono text-retro-cyan hover:text-retro-green hover:bg-retro-green/20"
                  onClick={toggleTheme}
                >
                  <Monitor className="mr-2 h-4 w-4" />
                  <span>TOGGLE_THEME</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-retro-green" />
                <DropdownMenuItem className="cursor-pointer font-mono text-retro-magenta hover:text-retro-red hover:bg-retro-red/20">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>LOGOUT</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="pixel-button bg-retro-dark border-2 border-retro-cyan hover:border-retro-green"
            >
              <Sun
                className={`h-4 w-4 transition-all duration-300 text-retro-cyan ${theme === "dark" ? "rotate-0 scale-100" : "-rotate-90 scale-0"}`}
              />
              <Moon
                className={`absolute h-4 w-4 transition-all duration-300 text-retro-cyan ${theme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"}`}
              />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="pixel-button bg-retro-dark border-2 border-retro-cyan hover:border-retro-green"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-retro-cyan" />
              ) : (
                <Menu className="h-6 w-6 text-retro-cyan" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t-2 border-retro-green pixel-slide-down bg-retro-darker">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 font-mono text-retro-cyan hover:bg-retro-green/20 hover:text-retro-green pixel-border-hover transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                HOME
              </Link>
              <Link
                href="/trending"
                className="block px-3 py-2 font-mono text-retro-cyan hover:bg-retro-green/20 hover:text-retro-green pixel-border-hover transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                TRENDING
              </Link>
              <Link
                href="/archive"
                className="block px-3 py-2 font-mono text-retro-cyan hover:bg-retro-green/20 hover:text-retro-green pixel-border-hover transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ARCHIVE
              </Link>
              <div className="flex items-center justify-between px-3 py-2 border-t border-retro-green/30 mt-2 pt-2">
                <span className="font-mono text-retro-cyan">THEME: {theme === "dark" ? "DARK" : "LIGHT"}</span>
                <div
                  className={`w-3 h-3 transition-colors duration-300 pixel-blink ${theme === "dark" ? "bg-retro-cyan" : "bg-retro-yellow"}`}
                ></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
