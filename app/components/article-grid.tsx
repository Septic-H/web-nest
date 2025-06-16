"use client"

import { ArticleCard } from "./article-card"
import type { Article } from "@/lib/supabase"
import { MiniLoader } from "./mini-loader"

interface ArticleGridProps {
  articles: Article[]
}

export function ArticleGrid({ articles }: ArticleGridProps) {
  if (articles.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4 pixel-text-glow">📰</div>
        <h3 className="text-xl font-mono font-bold text-retro-green mb-2 pixel-glow">NO ARTICLES FOUND</h3>
        <p className="text-retro-cyan font-mono">TRY ADJUSTING YOUR SEARCH OR FILTER CRITERIA</p>
        <div className="flex justify-center mt-4">
          <MiniLoader text="SEARCHING" size="sm" />
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article, index) => (
        <div key={article.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
          <ArticleCard article={article} />
        </div>
      ))}
    </div>
  )
}
