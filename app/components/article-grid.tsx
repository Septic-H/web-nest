"use client"

import { ArticleCard } from "./article-card"

interface Article {
  id: number
  title: string
  description: string
  image: string
  publishDate: string
  category: string
  readTime: string
}

interface ArticleGridProps {
  articles: Article[]
}

export function ArticleGrid({ articles }: ArticleGridProps) {
  if (articles.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">📰</div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No articles found</h3>
        <p className="text-gray-600 dark:text-gray-400">Try adjusting your search or filter criteria</p>
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
