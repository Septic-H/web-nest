import Image from "next/image"
import { Calendar, Clock } from "lucide-react"

interface Author {
  name: string
  avatar: string
  role: string
}

interface ArticleHeaderProps {
  article: {
    title: string
    description: string
    image: string
    publishDate: string
    readTime: string
    category: string
    author: Author
  }
}

export function ArticleHeader({ article }: ArticleHeaderProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Category */}
      <div className="inline-block px-4 py-1 bg-blue-600 text-white font-medium rounded-full text-sm">
        {article.category}
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
        {article.title}
      </h1>

      {/* Description */}
      <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">{article.description}</p>

      {/* Meta info */}
      <div className="flex flex-wrap items-center gap-6 text-gray-500 dark:text-gray-400 text-sm">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <span>{formatDate(article.publishDate)}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <span>{article.readTime}</span>
        </div>
      </div>

      {/* Author */}
      <div className="flex items-center gap-4 pt-2">
        <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-700">
          <Image src={article.author.avatar || "/placeholder.svg"} alt={article.author.name} width={48} height={48} />
        </div>
        <div>
          <div className="font-medium text-gray-900 dark:text-white">{article.author.name}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{article.author.role}</div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 shadow-md">
        <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" priority />
      </div>
    </div>
  )
}
