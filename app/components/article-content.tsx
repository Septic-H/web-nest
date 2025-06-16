"use client"

import type { Article } from "@/lib/supabase"

interface ArticleContentProps {
  article: Article
}

export function ArticleContent({ article }: ArticleContentProps) {
  return (
    <div className="bg-retro-darker border-4 border-retro-green p-8 pixel-border-animated relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-retro-green via-retro-cyan to-retro-magenta"></div>

      <article className="prose prose-lg max-w-none font-mono text-retro-cyan">
        <style jsx>{`
          article :global(h2) {
            color: var(--retro-green);
            font-family: 'Courier New', monospace;
            font-weight: bold;
            text-transform: uppercase;
            border-bottom: 2px solid var(--retro-cyan);
            padding-bottom: 0.5rem;
            margin-top: 2rem;
            margin-bottom: 1rem;
          }
          
          article :global(h3) {
            color: var(--retro-cyan);
            font-family: 'Courier New', monospace;
            font-weight: bold;
            text-transform: uppercase;
            margin-top: 1.5rem;
            margin-bottom: 0.75rem;
          }
          
          article :global(p) {
            color: var(--retro-cyan);
            font-family: 'Courier New', monospace;
            line-height: 1.7;
            margin-bottom: 1rem;
          }
          
          article :global(ul) {
            color: var(--retro-cyan);
            font-family: 'Courier New', monospace;
            margin-left: 1.5rem;
          }
          
          article :global(li) {
            margin-bottom: 0.5rem;
            position: relative;
          }
          
          article :global(li::marker) {
            color: var(--retro-green);
          }
          
          article :global(strong) {
            color: var(--retro-green);
            font-weight: bold;
          }
          
          article :global(code) {
            background: var(--retro-dark);
            color: var(--retro-yellow);
            padding: 0.2rem 0.4rem;
            border: 1px solid var(--retro-green);
            font-family: 'Courier New', monospace;
          }
          
          article :global(a) {
            color: var(--retro-magenta);
            text-decoration: underline;
          }
          
          article :global(a:hover) {
            color: var(--retro-yellow);
          }
        `}</style>

        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </article>

      <div className="absolute bottom-4 right-4">
        <div className="w-2 h-2 bg-retro-green pixel-blink"></div>
      </div>
    </div>
  )
}
