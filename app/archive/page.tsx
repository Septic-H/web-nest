"use client"

import { useState, useEffect } from "react"
import { Navbar } from "../components/navbar"
import { ArticleGrid } from "../components/article-grid"
import { ArticleCardSkeleton } from "../components/article-card-skeleton"
import { PixelScrollIndicator } from "../components/pixel-scroll-indicator"
import { ThemeStatus } from "../components/theme-status"
import { Archive, Database, HardDrive } from "lucide-react"
import { supabase, type Article } from "@/lib/supabase"

export default function ArchivePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [archiveArticles, setArchiveArticles] = useState<Article[]>([])

  // Fetch archive articles (articles with 'archive' tag)
  useEffect(() => {
    const fetchArchiveArticles = async () => {
      setIsLoading(true)
      try {
        const { data, error } = await supabase
          .from("articles")
          .select("*")
          .contains("tags", ["archive"])
          .order("publish_date", { ascending: false })

        if (error) {
          console.error("Error fetching archive articles:", error)
          return
        }

        setArchiveArticles(data || [])
      } catch (error) {
        console.error("Error:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchArchiveArticles()
  }, [])

  return (
    <div className="min-h-screen bg-retro-dark pixel-bg transition-all duration-300 relative">
      <PixelScrollIndicator />
      <div className="pixel-matrix-bg fixed inset-0 pointer-events-none"></div>
      <Navbar />

      <main className="container mx-auto px-4 py-8 space-y-8 relative z-10">
        {/* Header Section */}
        <div className="text-center space-y-6 pixel-fade-in">
          <div className="relative">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Database className="h-8 w-8 text-retro-cyan pixel-blink" />
              <Archive className="h-10 w-10 text-retro-green" />
              <HardDrive className="h-8 w-8 text-retro-magenta pixel-blink-delayed" />
            </div>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-pixel pixel-text-glow tracking-wider"
              data-text="ARCHIVE"
            >
              ARCHIVE
            </h1>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-retro-cyan pixel-blink"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-retro-magenta pixel-blink-delayed"></div>
          </div>
          <p className="text-lg font-mono text-retro-cyan max-w-2xl mx-auto pixel-typewriter">
            {"> Accessing historical data from the digital vault"}
            <span className="pixel-loading-dots"></span>
          </p>
          <div className="flex justify-center">
            <div className="pixel-border-animated p-4 bg-retro-darker">
              <div className="text-retro-cyan font-mono text-sm pixel-text-rainbow">
                [ARCHIVE_ACCESSED] - {archiveArticles.length} HISTORICAL RECORDS
              </div>
              <div className="pixel-loading-bar mt-2"></div>
            </div>
          </div>
        </div>

        {/* Archive Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pixel-slide-up" style={{ animationDelay: "0.3s" }}>
          <div className="bg-retro-darker border-4 border-retro-cyan pixel-glow p-6 text-center">
            <Database className="h-8 w-8 text-retro-cyan mx-auto mb-2 pixel-blink" />
            <div className="text-2xl font-mono font-bold text-retro-cyan">{archiveArticles.length}</div>
            <div className="text-sm font-mono text-retro-green">ARCHIVED_RECORDS</div>
          </div>
          <div className="bg-retro-darker border-4 border-retro-green pixel-glow p-6 text-center">
            <Archive className="h-8 w-8 text-retro-green mx-auto mb-2" />
            <div className="text-2xl font-mono font-bold text-retro-green">PRESERVED</div>
            <div className="text-sm font-mono text-retro-cyan">DIGITAL_HISTORY</div>
          </div>
          <div className="bg-retro-darker border-4 border-retro-magenta pixel-glow p-6 text-center">
            <HardDrive className="h-8 w-8 text-retro-magenta mx-auto mb-2 pixel-blink-delayed" />
            <div className="text-2xl font-mono font-bold text-retro-magenta">LEGACY</div>
            <div className="text-sm font-mono text-retro-cyan">CONTENT</div>
          </div>
        </div>

        {/* Archive Terminal */}
        <div className="pixel-slide-up" style={{ animationDelay: "0.6s" }}>
          <div className="bg-retro-darker border-4 border-retro-cyan pixel-glow p-6 font-mono">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Archive className="h-4 w-4 text-retro-cyan" />
                <span className="text-retro-cyan text-sm">ARCHIVE_SYSTEM v3.141</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-retro-cyan pixel-blink"></div>
                <div className="w-3 h-3 bg-retro-magenta pixel-blink-delayed"></div>
              </div>
            </div>
            <div className="text-retro-green text-xs space-y-1">
              <div>
                <span className="text-retro-cyan">archive@webnest:~$</span> mount /dev/history
              </div>
              <div className="text-retro-yellow">Mounting historical data storage...</div>
              <div className="text-retro-green">✓ Archive system online</div>
              <div className="text-retro-cyan">✓ {archiveArticles.length} records accessible</div>
              <div className="text-retro-magenta">✓ Data integrity: VERIFIED</div>
              <div className="text-retro-yellow mt-2">Status: ARCHIVE_READY 📚</div>
            </div>
          </div>
        </div>

        {/* Archive Articles Grid */}
        <div className="pixel-slide-up" style={{ animationDelay: "0.9s" }}>
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 1 }).map((_, index) => (
                <ArticleCardSkeleton key={index} />
              ))}
            </div>
          ) : archiveArticles.length > 0 ? (
            <ArticleGrid articles={archiveArticles} />
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4 pixel-text-glow">📚</div>
              <h3 className="text-xl font-mono font-bold text-retro-cyan mb-2 pixel-glow">ARCHIVE EMPTY</h3>
              <p className="text-retro-green font-mono">NO HISTORICAL RECORDS FOUND</p>
              <div className="flex justify-center mt-4 space-x-2">
                <div className="w-2 h-2 bg-retro-cyan pixel-blink"></div>
                <div className="w-2 h-2 bg-retro-magenta pixel-blink-delayed"></div>
                <div className="w-2 h-2 bg-retro-cyan pixel-blink" style={{ animationDelay: "1s" }}></div>
              </div>
            </div>
          )}
        </div>

        {/* Archive Information */}
        <div className="mt-12 pixel-fade-in" style={{ animationDelay: "1.2s" }}>
          <div className="bg-retro-darker border-4 border-retro-magenta pixel-glow p-8">
            <h2 className="text-2xl font-mono font-bold text-retro-magenta mb-6 pixel-text-glow">
              DIGITAL_PRESERVATION_NOTICE
            </h2>
            <div className="space-y-4 font-mono text-retro-cyan">
              <p>
                The WebNest Archive contains historical articles and documents preserved for future generations. These
                digital artifacts represent important moments in computing and technology history.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="border-2 border-retro-green p-4">
                  <h3 className="text-retro-green font-bold mb-2">PRESERVATION_STANDARDS</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Original formatting maintained</li>
                    <li>• Metadata preserved</li>
                    <li>• Checksums verified</li>
                    <li>• Multiple backup copies</li>
                  </ul>
                </div>
                <div className="border-2 border-retro-yellow p-4">
                  <h3 className="text-retro-yellow font-bold mb-2">ACCESS_POLICY</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Open access to all users</li>
                    <li>• No modification allowed</li>
                    <li>• Citation required for research</li>
                    <li>• Educational use encouraged</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Enhanced Retro Footer */}
      <footer className="mt-16 border-t-4 border-retro-cyan bg-retro-darker relative overflow-hidden">
        <div className="absolute inset-0 pixel-matrix-bg opacity-20"></div>
        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="text-center space-y-4">
            <div className="font-mono text-retro-cyan text-sm pixel-glow">
              📚 ARCHIVE SECTION - DIGITAL PRESERVATION SYSTEM 📚
            </div>
            <div className="flex justify-center space-x-4 mt-4">
              <div className="w-2 h-2 bg-retro-cyan pixel-blink"></div>
              <div className="w-2 h-2 bg-retro-magenta pixel-blink-delayed"></div>
              <div className="w-2 h-2 bg-retro-cyan pixel-blink" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>
        </div>
      </footer>

      {/* Theme Status Indicator */}
      <ThemeStatus />
    </div>
  )
}
