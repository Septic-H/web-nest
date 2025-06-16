"use client"

import { useState, useEffect } from "react"
import { Navbar } from "../components/navbar"
import { ArticleGrid } from "../components/article-grid"
import { ArticleCardSkeleton } from "../components/article-card-skeleton"
import { PixelScrollIndicator } from "../components/pixel-scroll-indicator"
import { ThemeStatus } from "../components/theme-status"
import { TrendingUp, FlameIcon as Fire, Zap } from "lucide-react"
import { supabase, type Article } from "@/lib/supabase"

export default function TrendingPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [trendingArticles, setTrendingArticles] = useState<Article[]>([])

  // Fetch trending articles (articles with 'trending' tag)
  useEffect(() => {
    const fetchTrendingArticles = async () => {
      setIsLoading(true)
      try {
        const { data, error } = await supabase
          .from("articles")
          .select("*")
          .contains("tags", ["trending"])
          .order("created_at", { ascending: false })

        if (error) {
          console.error("Error fetching trending articles:", error)
          return
        }

        setTrendingArticles(data || [])
      } catch (error) {
        console.error("Error:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTrendingArticles()
  }, [])

  return (
    <div className="min-h-screen bg-retro-dark pixel-bg transition-all duration-300 relative">
      <PixelScrollIndicator />
      <div className="pixel-matrix-bg fixed inset-0 pointer-events-none"></div>
      <Navbar />

      <main className="container mx-auto px-4 py-8 space-y-8 relative z-10">
        {/* Header Section */}
        <div className="text-center space-y-6 pixel-fade-in">
          <div className="relative">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Fire className="h-8 w-8 text-retro-red pixel-blink" />
              <TrendingUp className="h-10 w-10 text-retro-green" />
              <Zap className="h-8 w-8 text-retro-yellow pixel-blink-delayed" />
            </div>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-pixel pixel-text-glow tracking-wider"
              data-text="TRENDING"
            >
              TRENDING
            </h1>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-retro-red pixel-blink"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-retro-yellow pixel-blink-delayed"></div>
          </div>
          <p className="text-lg font-mono text-retro-cyan max-w-2xl mx-auto pixel-typewriter">
            {"> Hottest articles burning up the digital frontier"}
            <span className="pixel-loading-dots"></span>
          </p>
          <div className="flex justify-center">
            <div className="pixel-border-animated p-4 bg-retro-darker">
              <div className="text-retro-red font-mono text-sm pixel-text-rainbow">
                [TRENDING NOW] - {trendingArticles.length} HOT ARTICLES
              </div>
              <div className="pixel-loading-bar mt-2"></div>
            </div>
          </div>
        </div>

        {/* Trending Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pixel-slide-up" style={{ animationDelay: "0.3s" }}>
          <div className="bg-retro-darker border-4 border-retro-red pixel-glow p-6 text-center">
            <Fire className="h-8 w-8 text-retro-red mx-auto mb-2 pixel-blink" />
            <div className="text-2xl font-mono font-bold text-retro-red">{trendingArticles.length}</div>
            <div className="text-sm font-mono text-retro-cyan">HOT_ARTICLES</div>
          </div>
          <div className="bg-retro-darker border-4 border-retro-green pixel-glow p-6 text-center">
            <TrendingUp className="h-8 w-8 text-retro-green mx-auto mb-2" />
            <div className="text-2xl font-mono font-bold text-retro-green">RISING</div>
            <div className="text-sm font-mono text-retro-cyan">POPULARITY</div>
          </div>
          <div className="bg-retro-darker border-4 border-retro-yellow pixel-glow p-6 text-center">
            <Zap className="h-8 w-8 text-retro-yellow mx-auto mb-2 pixel-blink-delayed" />
            <div className="text-2xl font-mono font-bold text-retro-yellow">VIRAL</div>
            <div className="text-sm font-mono text-retro-cyan">STATUS</div>
          </div>
        </div>

        {/* Trending Articles Grid */}
        <div className="pixel-slide-up" style={{ animationDelay: "0.6s" }}>
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 3 }).map((_, index) => (
                <ArticleCardSkeleton key={index} />
              ))}
            </div>
          ) : trendingArticles.length > 0 ? (
            <ArticleGrid articles={trendingArticles} />
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4 pixel-text-glow">🔥</div>
              <h3 className="text-xl font-mono font-bold text-retro-red mb-2 pixel-glow">NO TRENDING ARTICLES</h3>
              <p className="text-retro-cyan font-mono">CHECK BACK LATER FOR HOT CONTENT</p>
              <div className="flex justify-center mt-4 space-x-2">
                <div className="w-2 h-2 bg-retro-red pixel-blink"></div>
                <div className="w-2 h-2 bg-retro-yellow pixel-blink-delayed"></div>
                <div className="w-2 h-2 bg-retro-red pixel-blink" style={{ animationDelay: "1s" }}></div>
              </div>
            </div>
          )}
        </div>

        {/* Trending Terminal */}
        <div className="mt-12 pixel-fade-in" style={{ animationDelay: "0.9s" }}>
          <div className="bg-retro-darker border-4 border-retro-red pixel-glow p-6 font-mono">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Fire className="h-4 w-4 text-retro-red" />
                <span className="text-retro-red text-sm">TRENDING_TERMINAL v1.024</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-retro-red pixel-blink"></div>
                <div className="w-3 h-3 bg-retro-yellow pixel-blink-delayed"></div>
              </div>
            </div>
            <div className="text-retro-cyan text-xs space-y-1">
              <div>
                <span className="text-retro-red">trending@webnest:~$</span> analyze_hot_content
              </div>
              <div className="text-retro-yellow">Scanning digital frontier for viral content...</div>
              <div className="text-retro-green">✓ {trendingArticles.length} trending articles detected</div>
              <div className="text-retro-cyan">✓ Community engagement: HIGH</div>
              <div className="text-retro-magenta">✓ Viral coefficient: MAXIMUM</div>
              <div className="text-retro-yellow mt-2">Status: CONTENT_IS_FIRE 🔥</div>
            </div>
          </div>
        </div>
      </main>

      {/* Enhanced Retro Footer */}
      <footer className="mt-16 border-t-4 border-retro-red bg-retro-darker relative overflow-hidden">
        <div className="absolute inset-0 pixel-matrix-bg opacity-20"></div>
        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="text-center space-y-4">
            <div className="font-mono text-retro-red text-sm pixel-glow">
              🔥 TRENDING SECTION - WEBNEST DIGITAL FRONTIER 🔥
            </div>
            <div className="flex justify-center space-x-4 mt-4">
              <div className="w-2 h-2 bg-retro-red pixel-blink"></div>
              <div className="w-2 h-2 bg-retro-yellow pixel-blink-delayed"></div>
              <div className="w-2 h-2 bg-retro-red pixel-blink" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>
        </div>
      </footer>

      {/* Theme Status Indicator */}
      <ThemeStatus />
    </div>
  )
}
