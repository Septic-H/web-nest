"use client"

import { useState, useEffect } from "react"
import { Navbar } from "./components/navbar"
import { SearchBar } from "./components/search-bar"
import { CategoryFilters } from "./components/category-filters"
import { ArticleGrid } from "./components/article-grid"
import { ArticleCardSkeleton } from "./components/article-card-skeleton"
import { PixelScrollIndicator } from "./components/pixel-scroll-indicator"
import { ThemeStatus } from "./components/theme-status"
import { supabase, type Article } from "@/lib/supabase"

const categories = ["All", "Tech", "Games", "Retro", "Code", "News", "Pixel"]

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [articles, setArticles] = useState<Article[]>([])
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([])

  // Fetch articles from Supabase
  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true)
      try {
        const { data, error } = await supabase.from("articles").select("*").order("created_at", { ascending: false })

        if (error) {
          console.error("Error fetching articles:", error)
          return
        }

        setArticles(data || [])
      } catch (error) {
        console.error("Error:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchArticles()
  }, [])

  // Filter articles based on category and search
  useEffect(() => {
    let filtered = articles

    if (selectedCategory !== "All") {
      filtered = filtered.filter((article) => article.category === selectedCategory)
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (article) =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    setFilteredArticles(filtered)
  }, [selectedCategory, searchQuery, articles])

  return (
    <div className="min-h-screen bg-retro-dark pixel-bg transition-all duration-300 relative">
      <PixelScrollIndicator />
      <div className="pixel-matrix-bg fixed inset-0 pointer-events-none"></div>
      <Navbar />

      <main className="container mx-auto px-4 py-8 space-y-8 relative z-10">
        {/* Header Section */}
        <div className="text-center space-y-6 pixel-fade-in">
          <div className="relative">
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-pixel pixel-text-glow tracking-wider"
              data-text="WEBNEST"
            >
              WEBNEST
            </h1>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-retro-cyan pixel-blink"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-retro-magenta pixel-blink-delayed"></div>
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-retro-yellow pixel-blink"
              style={{ animationDelay: "0.3s" }}
            ></div>
          </div>
          <p className="text-lg font-mono text-retro-cyan max-w-2xl mx-auto pixel-typewriter">
            {"> Loading retro news from the digital frontier"}
            <span className="pixel-loading-dots"></span>
          </p>
          <div className="flex justify-center">
            <div className="pixel-border-animated p-4 bg-retro-darker">
              <div className="text-retro-green font-mono text-sm pixel-text-rainbow">
                [SYSTEM READY] - {filteredArticles.length} ARTICLES LOADED
              </div>
              <div className="pixel-loading-bar mt-2"></div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="space-y-6 pixel-slide-up" style={{ animationDelay: "0.3s" }}>
          <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
          <CategoryFilters
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        {/* Articles Grid */}
        <div className="pixel-slide-up" style={{ animationDelay: "0.6s" }}>
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, index) => (
                <ArticleCardSkeleton key={index} />
              ))}
            </div>
          ) : (
            <ArticleGrid articles={filteredArticles} />
          )}
        </div>
      </main>

      {/* Enhanced Retro Footer */}
      <footer className="mt-16 border-t-4 border-retro-green bg-retro-darker relative overflow-hidden">
        <div className="absolute inset-0 pixel-matrix-bg opacity-20"></div>
        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="text-center space-y-4">
            <div className="font-mono text-retro-green text-sm pixel-glow">
              © 2024 WEBNEST - POWERED BY RETRO TECHNOLOGY
            </div>
            <div className="mt-2 font-mono text-retro-cyan text-xs pixel-blink">[PRESS ANY KEY TO CONTINUE]</div>
            <div className="flex justify-center space-x-4 mt-4">
              <div className="w-2 h-2 bg-retro-green pixel-blink"></div>
              <div className="w-2 h-2 bg-retro-cyan pixel-blink-delayed"></div>
              <div className="w-2 h-2 bg-retro-magenta pixel-blink" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>
        </div>
      </footer>

      {/* Theme Status Indicator */}
      <ThemeStatus />
    </div>
  )
}
