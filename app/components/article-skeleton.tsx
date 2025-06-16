import { PixelScrollIndicator } from "./pixel-scroll-indicator"

export function ArticleSkeleton() {
  return (
    <div className="min-h-screen bg-retro-dark pixel-bg transition-all duration-300 relative">
      <PixelScrollIndicator />
      <div className="pixel-matrix-bg fixed inset-0 pointer-events-none"></div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Terminal Header Skeleton */}
        <div className="mb-8">
          <div className="bg-retro-darker border-4 border-retro-green/50 p-4 animate-pulse">
            <div className="flex items-center justify-between mb-2">
              <div className="h-4 bg-retro-green/30 w-48 pixel-border"></div>
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-retro-cyan/30 pixel-blink"></div>
                <div className="w-3 h-3 bg-retro-magenta/30 pixel-blink-delayed"></div>
              </div>
            </div>
            <div className="h-3 bg-retro-cyan/30 w-64 pixel-border"></div>
            <div className="h-3 bg-retro-yellow/30 w-32 pixel-border mt-1"></div>
          </div>
        </div>

        {/* Back Button Skeleton */}
        <div className="mb-6">
          <div className="h-10 w-40 bg-retro-cyan/30 border-2 border-retro-cyan/50 pixel-border animate-pulse"></div>
        </div>

        {/* Header Skeleton */}
        <div className="space-y-6">
          {/* Category */}
          <div className="h-10 w-32 bg-retro-green/30 border-4 border-retro-dark/50 animate-pulse"></div>

          {/* Title */}
          <div className="space-y-3">
            <div className="h-12 bg-retro-green/30 w-full pixel-border animate-pulse"></div>
            <div className="h-12 bg-retro-green/30 w-3/4 pixel-border animate-pulse"></div>
          </div>

          {/* Description */}
          <div className="bg-retro-darker border-4 border-retro-cyan/50 p-6 animate-pulse">
            <div className="space-y-2">
              <div className="h-6 bg-retro-cyan/30 w-full pixel-border"></div>
              <div className="h-6 bg-retro-cyan/30 w-5/6 pixel-border"></div>
            </div>
          </div>

          {/* Meta Info */}
          <div className="bg-retro-darker border-2 border-retro-magenta/50 p-4 animate-pulse">
            <div className="flex gap-6">
              <div className="h-4 w-32 bg-retro-cyan/30 pixel-border"></div>
              <div className="h-4 w-24 bg-retro-cyan/30 pixel-border"></div>
              <div className="h-4 w-28 bg-retro-cyan/30 pixel-border"></div>
            </div>
          </div>

          {/* Author */}
          <div className="bg-retro-darker border-4 border-retro-yellow/50 p-6 animate-pulse">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 bg-retro-green/30 border-4 border-retro-green/50"></div>
              <div className="space-y-2">
                <div className="h-5 w-32 bg-retro-green/30 pixel-border"></div>
                <div className="h-4 w-24 bg-retro-cyan/30 pixel-border"></div>
                <div className="h-3 w-20 bg-retro-yellow/30 pixel-border"></div>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="border-4 border-retro-green/50 bg-retro-dark animate-pulse">
            <div className="w-full h-[300px] md:h-[400px] bg-retro-green/20 relative overflow-hidden">
              <div className="absolute inset-0 pixel-loading-animation"></div>
              <div className="absolute top-4 right-4 w-4 h-4 bg-retro-magenta/50 pixel-blink"></div>
              <div className="absolute bottom-4 left-4 w-3 h-3 bg-retro-yellow/50 pixel-blink-delayed"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          {/* Content Skeleton */}
          <div className="lg:col-span-8">
            <div className="bg-retro-darker border-4 border-retro-green/50 p-8 animate-pulse">
              <div className="space-y-4">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="space-y-2">
                    <div className="h-4 bg-retro-cyan/30 w-full pixel-border"></div>
                    <div className="h-4 bg-retro-cyan/30 w-full pixel-border"></div>
                    <div className="h-4 bg-retro-cyan/30 w-4/5 pixel-border"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Skeleton */}
          <div className="lg:col-span-4">
            <div className="space-y-6">
              {/* Stats Skeleton */}
              <div className="bg-retro-darker border-4 border-retro-cyan/50 p-6 animate-pulse">
                <div className="h-6 w-32 bg-retro-green/30 pixel-border mb-4"></div>
                <div className="space-y-3">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="flex justify-between">
                      <div className="h-4 w-20 bg-retro-cyan/30 pixel-border"></div>
                      <div className="h-4 w-16 bg-retro-green/30 pixel-border"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Articles Skeleton */}
              <div className="bg-retro-darker border-4 border-retro-magenta/50 p-6 animate-pulse">
                <div className="h-6 w-40 bg-retro-magenta/30 pixel-border mb-6"></div>
                <div className="space-y-6">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="flex gap-4 p-3 border-2 border-retro-cyan/50">
                      <div className="h-20 w-20 bg-retro-green/30 border-2 border-retro-green/50"></div>
                      <div className="flex-1 space-y-2">
                        <div className="h-4 bg-retro-green/30 w-full pixel-border"></div>
                        <div className="h-4 bg-retro-green/30 w-3/4 pixel-border"></div>
                        <div className="h-3 w-20 bg-retro-cyan/30 pixel-border"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
