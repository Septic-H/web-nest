"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { ChevronLeft, Bookmark, Share2, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ArticleHeader } from "@/app/components/article-header"
import { ArticleContent } from "@/app/components/article-content"
import { RelatedArticles } from "@/app/components/related-articles"
import { ArticleSkeleton } from "@/app/components/article-skeleton"

// Mock article data
const mockArticles = [
  {
    id: "1",
    title: "Revolutionary AI Technology Transforms Healthcare Industry",
    description:
      "New artificial intelligence breakthrough promises to revolutionize patient care and medical diagnostics worldwide.",
    content: `
      <p>Artificial intelligence is revolutionizing healthcare in ways previously thought impossible. Recent breakthroughs in machine learning algorithms have enabled computers to diagnose diseases with accuracy rivaling that of experienced physicians.</p>
      
      <p>The technology, developed by a team of researchers at Stanford University, uses deep learning to analyze medical images and patient data. "We've trained our system on millions of anonymized patient records," explains Dr. Sarah Chen, lead researcher on the project. "The results have exceeded our expectations."</p>
      
      <h2>Improving Diagnostic Accuracy</h2>
      
      <p>In clinical trials, the AI system demonstrated a 97% accuracy rate in detecting early-stage cancers, compared to the 86% average for human specialists. This improvement could lead to earlier interventions and better patient outcomes.</p>
      
      <p>Hospitals across the country are beginning to implement this technology. Memorial Hospital in Boston was among the first to adopt the system. "We've seen a significant reduction in diagnostic errors," reports Dr. James Wilson, Chief of Radiology. "It's like having an expert consultant available 24/7."</p>
      
      <h2>Addressing Concerns</h2>
      
      <p>Despite the promising results, some healthcare professionals express concerns about over-reliance on technology. "AI should augment human expertise, not replace it," cautions Dr. Maria Rodriguez of the American Medical Association. "The human element in healthcare remains irreplaceable."</p>
      
      <p>Developers are addressing these concerns by designing systems that work collaboratively with physicians, providing recommendations rather than autonomous decisions.</p>
      
      <h2>The Future of AI in Healthcare</h2>
      
      <p>Looking ahead, researchers are exploring applications beyond diagnostics. Potential uses include personalized treatment planning, drug discovery, and predictive analytics for patient outcomes.</p>
      
      <p>"We're just scratching the surface of what's possible," says Chen. "The next generation of AI could help us tackle some of medicine's most challenging problems."</p>
      
      <p>As the technology continues to evolve, it promises to make healthcare more accurate, accessible, and efficient—potentially saving millions of lives in the process.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    publishDate: "2024-01-15",
    category: "Tech",
    readTime: "5 min read",
    author: {
      name: "Dr. Alex Johnson",
      avatar: "/placeholder.svg?height=80&width=80",
      role: "Technology Editor",
    },
    tags: ["AI", "Healthcare", "Technology", "Medicine"],
  },
  {
    id: "2",
    title: "Global Markets Show Strong Recovery Signs",
    description:
      "International financial markets demonstrate resilience as economic indicators point toward sustained growth.",
    content: `
      <p>Global financial markets are showing remarkable resilience following last year's downturn, with key indicators pointing to sustained economic recovery across major economies.</p>
      
      <p>The S&P 500 has gained over 15% since January, while European and Asian markets have seen similar upward trends. Analysts attribute this recovery to several factors, including stabilizing inflation rates, improved supply chain conditions, and strong consumer spending.</p>
      
      <h2>Economic Indicators</h2>
      
      <p>Recent data from the Bureau of Economic Analysis shows that GDP growth has exceeded expectations for the second consecutive quarter. Unemployment rates have fallen to pre-pandemic levels in many countries, with the U.S. reporting a 3.9% rate last month.</p>
      
      <p>"We're seeing a broad-based recovery that spans multiple sectors," explains Janet Morris, chief economist at Global Financial Partners. "This isn't just a tech-driven bubble—manufacturing, services, and retail are all showing healthy growth patterns."</p>
      
      <h2>Central Bank Policies</h2>
      
      <p>Central banks have played a crucial role in this recovery. After a period of aggressive interest rate hikes to combat inflation, many are now signaling a more moderate approach. The Federal Reserve has indicated it may begin reducing rates by the end of the year if inflation continues to cool.</p>
      
      <p>"The central banks have threaded the needle remarkably well," says Robert Chen, market strategist at Investment Research Group. "They've managed to bring down inflation without triggering a severe recession."</p>
      
      <h2>Challenges Ahead</h2>
      
      <p>Despite the positive outlook, challenges remain. Geopolitical tensions continue to create uncertainty, and some sectors are still struggling to fully recover from pandemic disruptions.</p>
      
      <p>Energy prices remain volatile, and housing affordability issues persist in many markets. Additionally, government debt levels have reached historic highs in several major economies.</p>
      
      <p>"We're not out of the woods yet," cautions Morris. "But the foundation for sustainable growth appears stronger than it has been in several years."</p>
      
      <p>Investors are advised to maintain diversified portfolios and remain vigilant as markets continue to evolve in this dynamic economic environment.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    publishDate: "2024-01-14",
    category: "Business",
    readTime: "3 min read",
    author: {
      name: "Michael Roberts",
      avatar: "/placeholder.svg?height=80&width=80",
      role: "Financial Analyst",
    },
    tags: ["Markets", "Economy", "Finance", "Recovery"],
  },
  {
    id: "3",
    title: "Climate Summit Reaches Historic Agreement",
    description:
      "World leaders unite on comprehensive climate action plan with ambitious targets for carbon reduction.",
    content: `
      <p>In a landmark moment for global climate policy, world leaders have reached a historic agreement at the International Climate Summit, establishing ambitious new targets for carbon reduction and environmental protection.</p>
      
      <p>The agreement, signed by 195 nations, commits signatories to reducing carbon emissions by 60% before 2040 and achieving carbon neutrality by 2050. It also establishes a $100 billion annual fund to help developing nations transition to renewable energy sources.</p>
      
      <h2>Unprecedented Cooperation</h2>
      
      <p>"This represents a new era of international cooperation on climate change," said UN Secretary-General Amara Patel. "For the first time, we have binding commitments from all major carbon emitters, including provisions for transparent monitoring and accountability."</p>
      
      <p>The agreement came after two weeks of intense negotiations, during which several key sticking points threatened to derail the talks. A breakthrough came when China and the United States—the world's two largest carbon emitters—announced a bilateral agreement to accelerate their climate efforts.</p>
      
      <h2>Key Provisions</h2>
      
      <p>The agreement includes several groundbreaking provisions:</p>
      
      <ul>
        <li>A global carbon pricing mechanism to be implemented by 2026</li>
        <li>Elimination of subsidies for fossil fuel industries by 2030</li>
        <li>Protection of 30% of land and ocean ecosystems by 2030</li>
        <li>Creation of an international climate technology transfer program</li>
      </ul>
      
      <p>"These measures represent the minimum necessary action to avoid catastrophic climate change," explained Dr. Elena Rodriguez, climate scientist and advisor to the summit. "The science is clear—we need rapid, transformative change across all sectors of the global economy."</p>
      
      <h2>Economic Implications</h2>
      
      <p>The agreement is expected to accelerate the already booming renewable energy sector. Market analysts predict that investments in clean energy could exceed $3 trillion over the next decade.</p>
      
      <p>"This creates tremendous economic opportunities," said James Chen, CEO of GreenTech Innovations. "Countries and companies that lead the transition will gain competitive advantages in the emerging green economy."</p>
      
      <p>However, industries heavily dependent on fossil fuels face significant challenges. The agreement includes provisions for "just transition" programs to support workers and communities affected by the shift away from carbon-intensive industries.</p>
      
      <p>As nations begin implementing the agreement's provisions, the coming years will be crucial in determining whether this historic commitment translates into meaningful action on the ground.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    publishDate: "2024-01-13",
    category: "World",
    readTime: "7 min read",
    author: {
      name: "Sarah Williams",
      avatar: "/placeholder.svg?height=80&width=80",
      role: "Environmental Correspondent",
    },
    tags: ["Climate", "Environment", "Global Summit", "Carbon Emissions"],
  },
  {
    id: "4",
    title: "Championship Finals Set Record Viewership",
    description: "Sports fans worldwide tune in for the most-watched championship game in television history.",
    content: `
      <p>Last night's championship final shattered all previous viewership records, becoming the most-watched sporting event in television history with an estimated global audience of 2.3 billion viewers.</p>
      
      <p>The thrilling match, which went into overtime before being decided by a last-second play, captivated audiences across the world. Streaming platforms reported unprecedented traffic, with several services experiencing temporary outages due to the surge in viewers.</p>
      
      <h2>Global Phenomenon</h2>
      
      <p>"We've never seen anything like this," said Thomas Rodriguez, media analyst at ViewTrack Research. "The combination of star power, dramatic storylines, and the global reach of digital platforms created a perfect storm for viewership."</p>
      
      <p>Public viewing events in major cities drew massive crowds. In Tokyo, over 100,000 fans gathered in Shibuya Crossing to watch on giant screens, while similar scenes played out in London's Trafalgar Square, Rio's Copacabana Beach, and New York's Times Square.</p>
      
      <h2>Economic Impact</h2>
      
      <p>The economic impact of the event has been equally impressive. Advertisers paid record sums for commercial slots, with 30-second spots during the final quarter selling for $12 million each.</p>
      
      <p>Local economies in the host city benefited significantly, with hotels reporting 100% occupancy and restaurants and retail businesses seeing sales increases of up to 300% during the championship week.</p>
      
      <p>"This event generated approximately $1.2 billion in economic activity for the region," estimated Dr. James Chen, economist at Urban Development Institute. "The investment in infrastructure will continue to benefit the city for years to come."</p>
      
      <h2>Social Media Explosion</h2>
      
      <p>Social media platforms recorded unprecedented engagement during the event. Twitter reported 24 million tweets using the official championship hashtag, while a decisive moment in the final generated 4.2 million posts within a single minute—breaking the previous record by over 40%.</p>
      
      <p>Athletes' social media accounts saw massive growth, with the championship MVP gaining over 5 million new followers across platforms within hours of the victory.</p>
      
      <h2>Looking Ahead</h2>
      
      <p>Sports marketing experts believe this record-breaking event signals a new era for global sports consumption.</p>
      
      <p>"The traditional boundaries between regional sports markets are disappearing," explained Maria Gonzalez, professor of sports management at State University. "Digital platforms are creating truly global fan communities, and we're just beginning to see the potential of this shift."</p>
      
      <p>League officials have already announced expanded international scheduling for next season, including regular-season games in Europe, Asia, and South America.</p>
      
      <p>As the championship celebrations continue, both fans and industry insiders are already looking ahead to next season, wondering if these extraordinary viewership numbers represent a new baseline or if they'll prove to be as exceptional as the historic final itself.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    publishDate: "2024-01-12",
    category: "Sports",
    readTime: "4 min read",
    author: {
      name: "Jason Thompson",
      avatar: "/placeholder.svg?height=80&width=80",
      role: "Sports Editor",
    },
    tags: ["Championship", "Sports", "Television", "Records"],
  },
  {
    id: "5",
    title: "Breakthrough in Renewable Energy Storage",
    description: "Scientists develop new battery technology that could solve renewable energy storage challenges.",
    content: `
      <p>A team of researchers at the National Energy Laboratory has announced a breakthrough in energy storage technology that could solve one of the biggest challenges facing renewable energy adoption.</p>
      
      <p>The new battery system, which uses abundant and non-toxic materials, can store large amounts of energy for extended periods at approximately one-third the cost of current lithium-ion batteries. More importantly, it maintains 90% efficiency even after thousands of charge cycles.</p>
      
      <h2>Technical Innovation</h2>
      
      <p>"We've developed a novel electrolyte composition that dramatically improves stability while using earth-abundant elements," explained Dr. Lisa Chen, lead researcher on the project. "This addresses the fundamental chemistry limitations that have held back grid-scale storage solutions."</p>
      
      <p>The technology employs a sodium-based chemistry rather than relying on lithium, which is increasingly expensive and concentrated in a few global regions. Initial tests show the batteries can deliver consistent power for over 100 hours—far longer than existing commercial solutions.</p>
      
      <h2>Renewable Energy Integration</h2>
      
      <p>Energy experts believe this development could accelerate the transition to renewable energy by solving the intermittency problem that has limited solar and wind power adoption.</p>
      
      <p>"The ability to store energy economically for days rather than hours is a game-changer," said Professor James Wilson of the Institute for Energy Transition. "It means renewable sources could reliably power the grid even during extended periods of low production."</p>
      
      <p>Utility companies have expressed strong interest in the technology. Western Power has already announced plans to deploy a pilot installation using the new batteries at one of its solar facilities next year.</p>
      
      <h2>Economic Implications</h2>
      
      <p>The economic implications extend beyond the energy sector. Manufacturing the new batteries requires materials that are widely available in many countries, potentially democratizing energy storage production.</p>
      
      <p>"This could reshape global supply chains and create manufacturing opportunities in regions currently left out of the battery economy," noted economic analyst Maria Rodriguez.</p>
      
      <p>Investors have taken notice, with energy storage startups seeing a 40% increase in funding since the announcement. Several major manufacturers have already begun discussions about licensing the technology.</p>
      
      <h2>Timeline for Deployment</h2>
      
      <p>While the research team cautions that commercial deployment will take time, they believe the technology could reach markets faster than typical energy innovations.</p>
      
      <p>"We've specifically designed this with manufacturability in mind," said Dr. Chen. "The production processes are compatible with existing facilities, which should accelerate scaling."</p>
      
      <p>The team estimates that grid-scale installations could begin within three years, with residential versions following shortly after. If adoption proceeds as researchers hope, the technology could play a crucial role in meeting climate goals by enabling much higher penetration of renewable energy sources.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    publishDate: "2024-01-11",
    category: "Science",
    readTime: "6 min read",
    author: {
      name: "Dr. Emily Chen",
      avatar: "/placeholder.svg?height=80&width=80",
      role: "Science Correspondent",
    },
    tags: ["Energy", "Science", "Technology", "Batteries"],
  },
  {
    id: "6",
    title: "New Study Reveals Health Benefits of Mediterranean Diet",
    description:
      "Comprehensive research confirms long-term health advantages of traditional Mediterranean eating patterns.",
    content: `
      <p>A landmark 20-year study has provided the strongest evidence yet that the Mediterranean diet significantly reduces the risk of chronic diseases and extends healthy lifespan.</p>
      
      <p>The research, which followed over 100,000 participants across multiple countries, found that those who closely adhered to a traditional Mediterranean eating pattern had a 25% lower risk of cardiovascular disease, 30% reduced risk of type 2 diabetes, and 22% lower overall mortality compared to those following typical Western diets.</p>
      
      <h2>Key Findings</h2>
      
      <p>"What makes this study particularly compelling is its duration and scale," explained Dr. Maria Gonzalez, lead author and professor of nutrition at Mediterranean University. "We were able to track health outcomes across decades and control for numerous variables."</p>
      
      <p>The research identified several specific components of the Mediterranean diet that appear particularly beneficial:</p>
      
      <ul>
        <li>High consumption of olive oil, which was associated with reduced inflammation markers</li>
        <li>Regular intake of fatty fish, linked to improved cognitive function</li>
        <li>Daily consumption of nuts and seeds, correlated with better cardiovascular outcomes</li>
        <li>Moderate red wine consumption with meals, associated with improved lipid profiles</li>
      </ul>
      
      <p>Perhaps most significantly, the study found that even partial adoption of Mediterranean eating patterns produced measurable health benefits.</p>
      
      <h2>Beyond Weight Management</h2>
      
      <p>While many diets focus primarily on weight loss, the researchers emphasized that the Mediterranean diet's benefits extend far beyond weight management.</p>
      
      <p>"We observed improvements in inflammatory markers, insulin sensitivity, and gut microbiome diversity independent of weight changes," noted Dr. James Chen, co-author of the study. "This suggests the diet's composition itself directly influences multiple physiological systems."</p>
      
      <p>Participants who switched from Western diets to Mediterranean patterns showed measurable improvements in biological markers within just three months, with benefits accumulating over time.</p>
      
      <h2>Practical Applications</h2>
      
      <p>The researchers have developed practical guidelines for incorporating Mediterranean principles into diverse culinary traditions.</p>
      
      <p>"It's not about abandoning your cultural foods," emphasized Dr. Gonzalez. "Rather, it's about applying Mediterranean principles—prioritizing plant foods, using healthy fats, limiting processed ingredients—within your own food traditions."</p>
      
      <p>Several hospital systems have already begun implementing Mediterranean-inspired meal programs for patients, and some insurance companies are piloting nutrition incentive programs based on the research findings.</p>
      
      <h2>Economic Considerations</h2>
      
      <p>The researchers acknowledge that food access and affordability remain barriers for many people. They're now collaborating with economists and policy experts to develop strategies for making Mediterranean-style eating more accessible across socioeconomic groups.</p>
      
      <p>"The potential healthcare savings from widespread adoption of these eating patterns would be enormous," noted health economist Dr. Sarah Williams, who was not involved in the study. "Preventive approaches like dietary modification could significantly reduce the burden on our healthcare systems."</p>
      
      <p>As research continues, the team plans to investigate how specific genetic factors might influence individual responses to the Mediterranean diet, potentially opening the door to more personalized nutritional recommendations in the future.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    publishDate: "2024-01-10",
    category: "Health",
    readTime: "4 min read",
    author: {
      name: "Dr. Robert Miller",
      avatar: "/placeholder.svg?height=80&width=80",
      role: "Health Editor",
    },
    tags: ["Health", "Nutrition", "Diet", "Research"],
  },
]

export default function ArticlePage() {
  const params = useParams()
  const router = useRouter()
  const [article, setArticle] = useState(null)
  const [relatedArticles, setRelatedArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate API call to fetch article data
    const fetchArticle = async () => {
      setIsLoading(true)
      try {
        // In a real app, this would be an API call
        await new Promise((resolve) => setTimeout(resolve, 1000))
        const foundArticle = mockArticles.find((a) => a.id === params.id)

        if (!foundArticle) {
          router.push("/")
          return
        }

        setArticle(foundArticle)

        // Get related articles from the same category
        const related = mockArticles
          .filter((a) => a.category === foundArticle.category && a.id !== foundArticle.id)
          .slice(0, 3)
        setRelatedArticles(related)
      } catch (error) {
        console.error("Error fetching article:", error)
      } finally {
        setIsLoading(false)
      }
    }

    if (params.id) {
      fetchArticle()
    }
  }, [params.id, router])

  if (isLoading) {
    return <ArticleSkeleton />
  }

  if (!article) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        {/* Back button */}
        <div className="mb-6 animate-fade-in">
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Back to articles</span>
          </Button>
        </div>

        {/* Article Header */}
        <ArticleHeader article={article} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          {/* Main Content */}
          <div className="lg:col-span-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <ArticleContent article={article} />

            {/* Article Actions */}
            <div className="flex flex-wrap justify-between items-center mt-12 pt-6 border-t-2 border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap gap-3 mb-4 md:mb-0">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full transition-colors duration-200 hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Bookmark className="h-4 w-4" />
                  <span className="hidden sm:inline">Save</span>
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Share2 className="h-4 w-4" />
                  <span className="hidden sm:inline">Share</span>
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Printer className="h-4 w-4" />
                  <span className="hidden sm:inline">Print</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="sticky top-24">
              <RelatedArticles articles={relatedArticles} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
