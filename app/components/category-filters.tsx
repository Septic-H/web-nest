"use client"

import { Button } from "@/components/ui/button"

interface CategoryFiltersProps {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export function CategoryFilters({ categories, selectedCategory, onCategoryChange }: CategoryFiltersProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {categories.map((category, index) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className={`
            px-6 py-3 font-mono font-bold tracking-wider transition-all duration-300 transform hover:scale-105 pixel-category-button
            ${
              selectedCategory === category
                ? "bg-retro-green text-retro-dark border-4 border-retro-green pixel-glow pixel-shadow-intense"
                : "bg-retro-dark text-retro-cyan border-4 border-retro-cyan hover:border-retro-green hover:text-retro-green hover:bg-retro-green/10"
            }
          `}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <span className="relative">
            {category.toUpperCase()}
            {selectedCategory === category && (
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-retro-cyan pixel-blink"></div>
            )}
          </span>
        </Button>
      ))}
    </div>
  )
}
