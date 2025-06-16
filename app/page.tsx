"use client"

import { useState, useEffect } from "react"
import { Navbar } from "./components/navbar"
import { SearchBar } from "./components/search-bar"
import { CategoryFilters } from "./components/category-filters"
import { ArticleGrid } from "./components/article-grid"
import { ArticleCardSkeleton } from "./components/article-card-skeleton"

const categories = ["All", "Business", "Tech", "World", "Sports", "Health", "Science"]

// Mock articles data
const mockArticles = [
  {
    id: 1,
    title: "Revolutionary AI Technology Transforms Healthcare Industry",
    description:
      "New artificial intelligence breakthrough promises to revolutionize patient care and medical diagnostics worldwide.",
    image: "/placeholder.svg?height=200&width=300",
    publishDate: "2024-01-15",
    category: "Tech",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Global Markets Show Strong Recovery Signs",
    description:
      "International financial markets demonstrate resilience as economic indicators point toward sustained growth.",
    image: "/placeholder.svg?height=200&width=300",
    publishDate: "2024-01-14",
    category: "Business",
    readTime: "3 min read",
  },
  {
    id: 3,
    title: "Climate Summit Reaches Historic Agreement",
    description:
      "World leaders unite on comprehensive climate action plan with ambitious targets for carbon reduction.",
    image: "/placeholder.svg?height=200&width=300",
    publishDate: "2024-01-13",
    category: "World",
    readTime: "7 min read",
  },
  {
    id: 4,
    title: "Championship Finals Set Record Viewership",
    description: "Sports fans worldwide tune in for the most-watched championship game in television history.",
    image: "/placeholder.svg?height=200&width=300",
    publishDate: "2024-01-12",
    category: "Sports",
    readTime: "4 min read",
  },
  {
    id: 5,
    title: "Breakthrough in Renewable Energy Storage",
    description: "Scientists develop new battery technology that could solve renewable energy storage challenges.",
    image: "/placeholder.svg?height=200&width=300",
    publishDate: "2024-01-11",
    category: "Science",
    readTime: "6 min read",
  },
  {
    id: 6,
    title: "New Study Reveals Health Benefits of Mediterranean Diet",
    description:
      "Comprehensive research confirms long-term health advantages of traditional Mediterranean eating patterns.",
    image: "/placeholder.svg?height=200&width=300",
    publishDate: "2024-01-10",
    category: "Health",
    readTime: "4 min read",
  },
]

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [filteredArticles, setFilteredArticles] = useState(mockArticles)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    let filtered = mockArticles

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
  }, [selectedCategory, searchQuery])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">News Reader</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Stay informed with the latest news from around the world
          </p>
        </div>

        {/* Search and Filters */}
        <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

          <CategoryFilters
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        {/* Articles Grid */}
        <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
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
    </div>
  )
}
