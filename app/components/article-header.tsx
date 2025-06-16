import Image from "next/image"
import { Calendar, Clock, User } from "lucide-react"
import type { Article } from "@/lib/supabase"

interface ArticleHeaderProps {
  article: Article
}

export function ArticleHeader({ article }: ArticleHeaderProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date
      .toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
      .toUpperCase()
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Category Badge */}
      <div className="inline-block">
        <div className="px-4 py-2 bg-retro-green text-retro-dark font-mono font-bold border-4 border-retro-dark pixel-glow">
          [{article.category.toUpperCase()}]
        </div>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-retro-green leading-tight pixel-text-glow">
        {article.title.toUpperCase()}
      </h1>

      {/* Description */}
      <div className="bg-retro-darker border-4 border-retro-cyan p-6 pixel-border-animated">
        <p className="text-xl text-retro-cyan leading-relaxed font-mono">{article.description}</p>
      </div>

      {/* Meta Info */}
      <div className="bg-retro-darker border-2 border-retro-magenta p-4">
        <div className="flex flex-wrap items-center gap-6 text-retro-cyan font-mono text-sm">
          <div className="flex items-center gap-2 pixel-hover-effect">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(article.publish_date)}</span>
          </div>
          <div className="flex items-center gap-2 pixel-hover-effect">
            <Clock className="h-4 w-4" />
            <span>{article.read_time.toUpperCase()}</span>
          </div>
          <div className="flex items-center gap-2 pixel-hover-effect">
            <User className="h-4 w-4" />
            <span>{article.author_name.toUpperCase()}</span>
          </div>
        </div>
      </div>

      {/* Author Section */}
      <div className="bg-retro-darker border-4 border-retro-yellow p-6 pixel-glow">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="h-16 w-16 border-4 border-retro-green bg-retro-dark flex items-center justify-center">
              <Image
                src={article.author_avatar || "/placeholder.svg"}
                alt={article.author_name}
                width={48}
                height={48}
                className="pixel-image"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-retro-cyan pixel-blink"></div>
          </div>
          <div className="font-mono">
            <div className="text-retro-green font-bold text-lg">{article.author_name.toUpperCase()}</div>
            <div className="text-retro-cyan text-sm">{article.author_role.toUpperCase()}</div>
            <div className="text-retro-yellow text-xs mt-1">AUTHENTICATED_USER</div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative border-4 border-retro-green pixel-glow overflow-hidden bg-retro-dark">
        <div className="absolute inset-0 pixel-matrix-bg opacity-20"></div>
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
          <Image
            src={article.image_url || "/placeholder.svg"}
            alt={article.title}
            fill
            className="object-cover pixel-image"
            style={{ imageRendering: "pixelated" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-retro-green/10 to-retro-cyan/10"></div>
          <div className="absolute top-4 right-4">
            <div className="w-4 h-4 bg-retro-magenta pixel-blink"></div>
          </div>
          <div className="absolute bottom-4 left-4">
            <div className="w-3 h-3 bg-retro-yellow pixel-blink-delayed"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
