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

  // Generate descriptive alt text for featured image
  const getFeaturedImageAlt = (article: Article) => {
    return `Featured image for "${article.title}" - ${article.description}`
  }

  // Generate descriptive alt text for author avatar
  const getAuthorAvatarAlt = (article: Article) => {
    return `Professional headshot of ${article.author_name}, ${article.author_role} and technology expert`
  }

  // Ensure we always have valid image URLs
  const getImageUrl = (article: Article) => {
    if (!article.image_url || article.image_url.includes("placeholder")) {
      const categoryDefaults: Record<string, string> = {
        Tech: "/images/retro-computer.png",
        Games: "/images/retro-gaming.png",
        Retro: "/images/vintage-tech.png",
        Code: "/images/coding-screen.png",
        News: "/images/digital-art.png",
        Pixel: "/images/pixel-art-gaming.png",
      }
      return categoryDefaults[article.category] || "/images/retro-computer.png"
    }
    return article.image_url
  }

  const getAvatarUrl = (article: Article) => {
    if (!article.author_avatar || article.author_avatar.includes("placeholder")) {
      return "/images/avatars/tech-guru.png"
    }
    return article.author_avatar
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
            <Calendar className="h-4 w-4" aria-hidden="true" />
            <span>{formatDate(article.publish_date)}</span>
          </div>
          <div className="flex items-center gap-2 pixel-hover-effect">
            <Clock className="h-4 w-4" aria-hidden="true" />
            <span>{article.read_time.toUpperCase()}</span>
          </div>
          <div className="flex items-center gap-2 pixel-hover-effect">
            <User className="h-4 w-4" aria-hidden="true" />
            <span>{article.author_name.toUpperCase()}</span>
          </div>
        </div>
      </div>

      {/* Author Section */}
      <div className="bg-retro-darker border-4 border-retro-yellow p-6 pixel-glow">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="h-16 w-16 border-4 border-retro-green bg-retro-dark flex items-center justify-center overflow-hidden">
              <Image
                src={getAvatarUrl(article) || "/placeholder.svg"}
                alt={getAuthorAvatarAlt(article)}
                width={48}
                height={48}
                className="pixel-image object-cover w-full h-full"
                style={{ imageRendering: "pixelated" }}
                loading="lazy"
              />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-retro-cyan pixel-blink" aria-hidden="true"></div>
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
        <div className="absolute inset-0 pixel-matrix-bg opacity-20" aria-hidden="true"></div>
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
          <Image
            src={getImageUrl(article) || "/placeholder.svg"}
            alt={getFeaturedImageAlt(article)}
            fill
            className="object-cover pixel-image"
            style={{ imageRendering: "pixelated" }}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-br from-retro-green/10 to-retro-cyan/10"
            aria-hidden="true"
          ></div>
          <div className="absolute top-4 right-4">
            <div className="w-4 h-4 bg-retro-magenta pixel-blink" aria-hidden="true"></div>
          </div>
          <div className="absolute bottom-4 left-4">
            <div className="w-3 h-3 bg-retro-yellow pixel-blink-delayed" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
