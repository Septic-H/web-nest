"use client"

import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import type { Article } from "@/lib/supabase"

interface ArticleCardProps {
  article: Article
}

export function ArticleCard({ article }: ArticleCardProps) {
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

  return (
    <Card className="group h-full bg-retro-darker border-4 border-retro-cyan hover:border-retro-green pixel-card overflow-hidden transition-all duration-300 pixel-shadow-animated">
      <CardHeader className="p-0 relative">
        <div className="relative overflow-hidden pixel-image-container">
          <div className="absolute inset-0 bg-gradient-to-br from-retro-green/20 to-retro-cyan/20 z-10"></div>
          <Image
            src={article.image_url || "/placeholder.svg"}
            alt={article.title}
            width={400}
            height={200}
            className="w-full h-48 object-cover pixel-image transition-transform duration-300 group-hover:scale-110"
            style={{ imageRendering: "pixelated" }}
          />
          <div className="absolute top-3 left-3 z-20">
            <div className="px-3 py-1 bg-retro-green text-retro-dark font-mono font-bold text-xs border-2 border-retro-dark pixel-tag pixel-glow">
              {article.category.toUpperCase()}
            </div>
          </div>
          <div className="absolute top-3 right-3 z-20">
            <div className="w-3 h-3 bg-retro-magenta pixel-blink"></div>
          </div>
          <div className="absolute bottom-3 right-3 z-20">
            <div className="w-2 h-2 bg-retro-yellow pixel-blink-delayed"></div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 flex-1 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-retro-green via-retro-cyan to-retro-magenta opacity-50"></div>

        <h3 className="text-xl font-bold text-retro-green mb-3 line-clamp-2 group-hover:text-retro-cyan transition-colors duration-200 font-mono leading-tight pixel-text-glow">
          {article.title.toUpperCase()}
        </h3>
        <p className="text-retro-cyan/80 mb-4 line-clamp-3 leading-relaxed font-mono text-sm">{article.description}</p>

        <div className="flex items-center gap-4 text-sm text-retro-cyan/60 font-mono">
          <div className="flex items-center gap-1 pixel-hover-effect">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(article.publish_date)}</span>
          </div>
          <div className="flex items-center gap-1 pixel-hover-effect">
            <Clock className="h-4 w-4" />
            <span>{article.read_time.toUpperCase()}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Link href={`/article/${article.id}`} className="w-full">
          <Button className="w-full group/btn bg-retro-dark text-retro-green border-4 border-retro-green hover:bg-retro-green hover:text-retro-dark font-mono font-bold tracking-wider transition-all duration-200 pixel-button-large relative overflow-hidden">
            <span className="relative z-10 flex items-center justify-center">
              READ_MORE
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
            </span>
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
