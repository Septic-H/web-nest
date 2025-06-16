export function ArticleSkeleton() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        {/* Back button skeleton */}
        <div className="mb-6">
          <div className="h-10 w-32 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse"></div>
        </div>

        {/* Header skeleton */}
        <div className="space-y-6">
          {/* Category */}
          <div className="h-8 w-24 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse"></div>

          {/* Title */}
          <div className="space-y-3">
            <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse"></div>
            <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse w-3/4"></div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded animate-pulse w-5/6"></div>
          </div>

          {/* Meta info */}
          <div className="flex gap-4">
            <div className="h-6 w-32 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
            <div className="h-6 w-24 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
          </div>

          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
            <div className="space-y-2">
              <div className="h-4 w-32 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
              <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="w-full h-[300px] md:h-[400px] bg-gray-300 dark:bg-gray-700 rounded-xl animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          {/* Content skeleton */}
          <div className="lg:col-span-8">
            <div className="space-y-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="space-y-2">
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded animate-pulse w-4/5"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar skeleton */}
          <div className="lg:col-span-4">
            <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-6">
              <div className="h-6 w-32 bg-gray-300 dark:bg-gray-700 rounded animate-pulse mb-6"></div>
              <div className="space-y-6">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="h-20 w-20 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
                      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded animate-pulse w-3/4"></div>
                      <div className="h-3 w-20 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
