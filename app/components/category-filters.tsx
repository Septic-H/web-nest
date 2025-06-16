"use client"

import { Button } from "@/components/ui/button"

interface CategoryFiltersProps {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export function CategoryFilters({ categories, selectedCategory, onCategoryChange }: CategoryFiltersProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className={`
            px-6 py-2 rounded-full font-medium transition-all duration-200 transform hover:scale-105
            ${
              selectedCategory === category
                ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
                : "bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300"
            }
          `}
        >
          {category}
        </Button>
      ))}
    </div>
  )
}
