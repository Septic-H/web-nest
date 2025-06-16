import Link from "next/link"
import Image from "next/image"
import { Calendar, ArrowRight } from "lucide-react"
import type { Article } from "@/lib/supabase"

interface RelatedArticlesProps {
  articles: Article[]
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date
      .toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
      .toUpperCase()
  }

  // Generate descriptive alt text for related article thumbnails
  const getRelatedImageAlt = (article: Article) => {
    return `Thumbnail for related article: ${article.title}`
  }

  if (articles.length === 0) {
    return (
      <div className="bg-retro-darker border-4 border-retro-red pixel-glow p-6">
        <h2 className="text-lg font-mono font-bold text-retro-red mb-4 pixel-text-glow">NO_RELATED_ARTICLES</h2>
        <p className="font-mono text-retro-cyan text-sm">SEARCH_DATABASE_RETURNED_EMPTY</p>
        <div className="flex justify-center mt-4 space-x-2" aria-hidden="true">
          <div className="w-2 h-2 bg-retro-red pixel-blink"></div>
          <div className="w-2 h-2 bg-retro-yellow pixel-blink-delayed"></div>
          <div className="w-2 h-2 bg-retro-red pixel-blink" style={{ animationDelay: "1s" }}></div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-retro-darker border-4 border-retro-magenta pixel-glow p-6">
      <h2 className="text-lg font-mono font-bold text-retro-magenta mb-6 pixel-text-glow">RELATED_ARTICLES</h2>
      <div className="space-y-6">
        {articles.map((article, index) => (
          <Link
            href={`/article/${article.id}`}
            key={article.id}
            className="group block"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex gap-4 p-3 border-2 border-retro-cyan hover:border-retro-green bg-retro-dark hover:bg-retro-green/10 transition-all duration-200 pixel-button">
              <div className="relative h-20 w-20 flex-shrink-0 border-2 border-retro-green overflow-hidden">
                <Image
                  src={article.image_url || "/placeholder.svg?height=80&width=80"}
                  alt={getRelatedImageAlt(article)}
                  fill
                  className="object-cover pixel-image transition-transform duration-300 group-hover:scale-110"
                  style={{ imageRendering: "pixelated" }}
                  loading="lazy"
                  sizes="80px"
                />
                <div className="absolute top-1 right-1 w-2 h-2 bg-retro-cyan pixel-blink" aria-hidden="true"></div>
              </div>
              <div className="flex-1">
                <h3 className="font-mono font-bold text-retro-green line-clamp-2 group-hover:text-retro-cyan transition-colors duration-200 text-sm leading-tight">
                  {article.title.toUpperCase()}
                </h3>
                <div className="flex items-center gap-2 mt-2 text-xs text-retro-cyan/60 font-mono">
                  <Calendar className="h-3 w-3" aria-hidden="true" />
                  <span>{formatDate(article.publish_date)}</span>
                </div>
                <div className="flex items-center gap-1 mt-1 text-xs text-retro-magenta font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span>READ_MORE</span>
                  <ArrowRight className="h-3 w-3" aria-hidden="true" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-6 space-x-2" aria-hidden="true">
        <div className="w-2 h-2 bg-retro-magenta pixel-blink"></div>
        <div className="w-2 h-2 bg-retro-cyan pixel-blink-delayed"></div>
        <div className="w-2 h-2 bg-retro-green pixel-blink" style={{ animationDelay: "1s" }}></div>
      </div>
    </div>
  )
}
