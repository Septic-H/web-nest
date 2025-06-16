"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { ChevronLeft, Bookmark, Share2, Printer, Terminal, Cpu, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ArticleHeader } from "@/app/components/article-header"
import { ArticleContent } from "@/app/components/article-content"
import { RelatedArticles } from "@/app/components/related-articles"
import { ArticleSkeleton } from "@/app/components/article-skeleton"
import { PixelScrollIndicator } from "@/app/components/pixel-scroll-indicator"
import { supabase, type Article } from "@/lib/supabase"

export default function ArticlePage() {
  const params = useParams()
  const router = useRouter()
  const [article, setArticle] = useState<Article | null>(null)
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchArticle = async () => {
      if (!params.id) return

      setIsLoading(true)
      try {
        // Fetch the main article
        const { data: articleData, error: articleError } = await supabase
          .from("articles")
          .select("*")
          .eq("id", params.id)
          .single()

        if (articleError) {
          console.error("Error fetching article:", articleError)
          router.push("/")
          return
        }

        setArticle(articleData)

        // Fetch related articles from the same category
        const { data: relatedData, error: relatedError } = await supabase
          .from("articles")
          .select("*")
          .eq("category", articleData.category)
          .neq("id", articleData.id)
          .limit(3)
          .order("created_at", { ascending: false })

        if (relatedError) {
          console.error("Error fetching related articles:", relatedError)
        } else {
          setRelatedArticles(relatedData || [])
        }
      } catch (error) {
        console.error("Error:", error)
        router.push("/")
      } finally {
        setIsLoading(false)
      }
    }

    fetchArticle()
  }, [params.id, router])

  if (isLoading) {
    return <ArticleSkeleton />
  }

  if (!article) {
    return null
  }

  return (
    <div className="min-h-screen bg-retro-dark pixel-bg transition-all duration-300 relative">
      <PixelScrollIndicator />
      <div className="pixel-matrix-bg fixed inset-0 pointer-events-none"></div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Retro Terminal Header */}
        <div className="mb-8 pixel-fade-in">
          <div className="bg-retro-darker border-4 border-retro-green pixel-glow p-4 font-mono">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-retro-green" />
                <span className="text-retro-green text-sm">WEBNEST_TERMINAL v2.024</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="h-3 w-3 text-retro-cyan pixel-blink" />
                <Database className="h-3 w-3 text-retro-magenta pixel-blink-delayed" />
              </div>
            </div>
            <div className="text-retro-cyan text-xs">
              <span className="text-retro-green">user@webnest:~$</span> cat article/{article.id}
            </div>
            <div className="text-retro-yellow text-xs mt-1 pixel-typewriter">
              Loading article data<span className="pixel-loading-dots"></span>
            </div>
          </div>
        </div>

        {/* Back Navigation */}
        <div className="mb-6 animate-fade-in">
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="flex items-center gap-2 text-retro-cyan hover:text-retro-green transition-colors duration-200 font-mono pixel-button border-2 border-retro-cyan hover:border-retro-green bg-retro-darker"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>BACK_TO_ARTICLES</span>
          </Button>
        </div>

        {/* Article Header */}
        <ArticleHeader article={article} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          {/* Main Content */}
          <div className="lg:col-span-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <ArticleContent article={article} />

            {/* Article Actions */}
            <div className="mt-12 pt-6 border-t-4 border-retro-green bg-retro-darker pixel-border-animated p-6">
              <div className="flex flex-wrap justify-between items-center">
                <div className="flex flex-wrap gap-3 mb-4 md:mb-0">
                  {article.tags.map((tag, index) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-retro-dark text-retro-cyan text-sm font-mono border-2 border-retro-cyan hover:border-retro-green hover:text-retro-green transition-all duration-200 cursor-pointer pixel-button"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      #{tag.toUpperCase()}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 font-mono bg-retro-dark border-2 border-retro-magenta text-retro-magenta hover:bg-retro-magenta hover:text-retro-dark pixel-button"
                  >
                    <Bookmark className="h-4 w-4" />
                    <span className="hidden sm:inline">SAVE</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 font-mono bg-retro-dark border-2 border-retro-cyan text-retro-cyan hover:bg-retro-cyan hover:text-retro-dark pixel-button"
                  >
                    <Share2 className="h-4 w-4" />
                    <span className="hidden sm:inline">SHARE</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 font-mono bg-retro-dark border-2 border-retro-yellow text-retro-yellow hover:bg-retro-yellow hover:text-retro-dark pixel-button"
                  >
                    <Printer className="h-4 w-4" />
                    <span className="hidden sm:inline">PRINT</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="sticky top-24 space-y-6">
              {/* Article Stats */}
              <div className="bg-retro-darker border-4 border-retro-cyan pixel-glow p-6">
                <h3 className="text-lg font-mono font-bold text-retro-green mb-4 pixel-text-glow">ARTICLE_STATS</h3>
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex justify-between">
                    <span className="text-retro-cyan">CATEGORY:</span>
                    <span className="text-retro-green">{article.category.toUpperCase()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-retro-cyan">READ_TIME:</span>
                    <span className="text-retro-green">{article.read_time.toUpperCase()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-retro-cyan">PUBLISHED:</span>
                    <span className="text-retro-green">
                      {new Date(article.publish_date).toLocaleDateString().toUpperCase()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-retro-cyan">TAGS:</span>
                    <span className="text-retro-green">{article.tags.length}</span>
                  </div>
                </div>
                <div className="mt-4 flex justify-center space-x-2">
                  <div className="w-2 h-2 bg-retro-green pixel-blink"></div>
                  <div className="w-2 h-2 bg-retro-cyan pixel-blink-delayed"></div>
                  <div className="w-2 h-2 bg-retro-magenta pixel-blink" style={{ animationDelay: "1s" }}></div>
                </div>
              </div>

              {/* Related Articles */}
              <RelatedArticles articles={relatedArticles} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
