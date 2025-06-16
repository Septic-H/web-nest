import Link from "next/link"
import Image from "next/image"
import { Calendar } from "lucide-react"

interface Article {
  id: string
  title: string
  description: string
  image: string
  publishDate: string
  category: string
  readTime: string
}

interface RelatedArticlesProps {
  articles: Article[]
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  if (articles.length === 0) {
    return null
  }

  return (
    <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Related Articles</h2>
      <div className="space-y-6">
        {articles.map((article) => (
          <Link href={`/article/${article.id}`} key={article.id} className="group block">
            <div className="flex gap-4">
              <div className="relative h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {article.title}
                </h3>
                <div className="flex items-center gap-2 mt-2 text-xs text-gray-500 dark:text-gray-400">
                  <Calendar className="h-3 w-3" />
                  <span>{formatDate(article.publishDate)}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
