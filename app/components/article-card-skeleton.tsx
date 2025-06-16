export function ArticleCardSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden animate-pulse">
      {/* Image skeleton */}
      <div className="h-48 bg-gray-300 dark:bg-gray-600"></div>

      <div className="p-6">
        {/* Category skeleton */}
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded-full w-20 mb-3"></div>

        {/* Title skeleton */}
        <div className="space-y-2 mb-4">
          <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
          <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
        </div>

        {/* Description skeleton */}
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-2/3"></div>
        </div>

        {/* Meta info skeleton */}
        <div className="flex gap-4 mb-6">
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-24"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-20"></div>
        </div>

        {/* Button skeleton */}
        <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded-lg w-full"></div>
      </div>
    </div>
  )
}
