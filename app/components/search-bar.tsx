"use client"

import { Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface SearchBarProps {
  searchQuery: string
  onSearchChange: (query: string) => void
}

export function SearchBar({ searchQuery, onSearchChange }: SearchBarProps) {
  const clearSearch = () => {
    onSearchChange("")
  }

  return (
    <div className="relative max-w-2xl mx-auto group">
      <div className="relative pixel-container">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-retro-cyan group-focus-within:text-retro-green transition-colors duration-200">
          <Search className="h-5 w-5" />
        </div>
        <Input
          type="text"
          placeholder="> SEARCH ARTICLES..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-12 pr-12 h-14 text-lg font-mono bg-retro-dark text-retro-green border-4 border-retro-cyan focus:border-retro-green pixel-input placeholder:text-retro-cyan/60 transition-all duration-200"
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="icon"
            onClick={clearSearch}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-10 w-10 pixel-button border-2 border-retro-magenta hover:border-retro-red hover:bg-retro-red/20 transition-all duration-200"
          >
            <X className="h-4 w-4 text-retro-magenta" />
          </Button>
        )}

        {/* Animated search indicator */}
        <div className="absolute -top-2 -right-2">
          <div className="w-3 h-3 bg-retro-green pixel-blink"></div>
        </div>
      </div>

      {/* Search results indicator */}
      {searchQuery && (
        <div className="mt-2 text-center">
          <span className="font-mono text-sm text-retro-cyan">[SCANNING DATABASE...]</span>
        </div>
      )}
    </div>
  )
}
