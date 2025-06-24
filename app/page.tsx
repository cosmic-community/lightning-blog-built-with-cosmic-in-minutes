import { getAllBlogPosts, getFeaturedPosts, getAllCategories } from '@/lib/cosmic'
import { BlogPost, Category } from '@/types'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PostCard from '@/components/PostCard'
import FeaturedPost from '@/components/FeaturedPost'
import CategoryFilter from '@/components/CategoryFilter'
import Hero from '@/components/Hero'
import StatsSection from '@/components/StatsSection'
import NewsletterSignup from '@/components/NewsletterSignup'
import TestimonialsSection from '@/components/TestimonialsSection'

export default async function HomePage() {
  const [allPosts, featuredPosts, categories] = await Promise.all([
    getAllBlogPosts(),
    getFeaturedPosts(), 
    getAllCategories()
  ])

  // If no posts exist, show empty state
  if (!allPosts || allPosts.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center py-24">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-8">
              <span className="text-3xl">⚡</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Lightning Blog
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              This blog was built with Cosmic AI in under 5 minutes. Pretty cool, right?
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <span className="animate-pulse mr-2">🚀</span>
              Content is loading... Check back soon!
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const latestPosts = allPosts.slice(0, 6)
  const featuredPost = featuredPosts && featuredPosts.length > 0 ? featuredPosts[0] : null

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      <Header />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Stats Section */}
      <StatsSection 
        totalPosts={allPosts.length}
        totalCategories={categories?.length || 0}
        featuredPosts={featuredPosts?.length || 0}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Post */}
        {featuredPost && (
          <section className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Featured Article
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
            </div>
            <FeaturedPost post={featuredPost} />
          </section>
        )}

        {/* Category Filter */}
        {categories && categories.length > 0 && (
          <section className="py-8">
            <CategoryFilter categories={categories} />
          </section>
        )}

        {/* Latest Posts */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest Posts
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Discover our most recent insights and tutorials
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Newsletter Signup */}
        <NewsletterSignup />
      </main>

      <Footer />
    </div>
  )
}