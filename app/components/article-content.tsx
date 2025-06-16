interface ArticleContentProps {
  article: {
    content: string
  }
}

export function ArticleContent({ article }: ArticleContentProps) {
  return (
    <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-img:rounded-xl prose-a:text-blue-600 dark:prose-a:text-blue-400">
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </article>
  )
}
