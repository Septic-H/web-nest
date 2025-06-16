export function ArticleCardSkeleton() {
  return (
    <div className="bg-retro-darker border-4 border-retro-cyan/50 pixel-card overflow-hidden animate-pulse pixel-shadow-animated">
      {/* Image skeleton */}
      <div className="h-48 bg-retro-dark relative overflow-hidden">
        <div className="absolute inset-0 pixel-loading-animation"></div>
        <div className="absolute top-3 left-3 w-16 h-6 bg-retro-green/30 pixel-border pixel-glow"></div>
        <div className="absolute top-3 right-3 w-3 h-3 bg-retro-magenta/50 pixel-blink"></div>
        <div className="absolute bottom-3 right-3 w-2 h-2 bg-retro-yellow/50 pixel-blink-delayed"></div>
      </div>

      <div className="p-6 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-retro-green/30 via-retro-cyan/30 to-retro-magenta/30"></div>

        {/* Title skeleton */}
        <div className="space-y-2 mb-4">
          <div className="h-6 bg-retro-green/30 pixel-border w-full pixel-glow"></div>
          <div className="h-6 bg-retro-green/30 pixel-border w-3/4 pixel-glow"></div>
        </div>

        {/* Description skeleton */}
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-retro-cyan/30 pixel-border w-full"></div>
          <div className="h-4 bg-retro-cyan/30 pixel-border w-full"></div>
          <div className="h-4 bg-retro-cyan/30 pixel-border w-2/3"></div>
        </div>

        {/* Meta info skeleton */}
        <div className="flex gap-4 mb-6">
          <div className="h-4 bg-retro-cyan/30 pixel-border w-24"></div>
          <div className="h-4 bg-retro-cyan/30 pixel-border w-20"></div>
        </div>

        {/* Button skeleton */}
        <div className="h-12 bg-retro-green/30 pixel-border w-full relative overflow-hidden">
          <div className="absolute inset-0 pixel-loading-wave"></div>
        </div>
      </div>
    </div>
  )
}
