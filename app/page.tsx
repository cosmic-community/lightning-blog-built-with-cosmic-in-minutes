import { getAllBlogPosts, getFeaturedPosts, getAllCategories } from '@/lib/cosmic'
import { BlogPost, Category } from '@/types'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PostCard from '@/components/PostCard'
import FeaturedPost from '@/components/FeaturedPost'
import CategoryFilter from '@/components/CategoryFilter'

export default async function HomePage() {
  const [allPosts, featuredPosts, categories] = await Promise.all([
    getAllBlogPosts(),
    getFeaturedPosts(), 
    getAllCategories()
  ])

  // If no posts exist, show empty state
  if (!allPosts || allPosts.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center py-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to Lightning Blog! ⚡
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              This blog was built with Cosmic AI in under 5 minutes. Pretty cool, right?
            </p>
            <p className="text-gray-500">
              Content is being set up... Check back soon for amazing posts about modern web development!
            </p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const latestPosts = allPosts.slice(0, 6)
  const featuredPost = featuredPosts && featuredPosts.length > 0 ? featuredPosts[0] : null

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-12 lg:py-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Lightning Blog ⚡
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Modern web development insights from the future. Built with Cosmic in under 5 minutes, 
              because life's too short for WordPress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#latest-posts" 
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
              >
                Read Latest Posts
              </a>
              <a 
                href="https://www.cosmicjs.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-medium rounded-lg border border-primary-200 hover:border-primary-300 transition-colors"
              >
                Try Cosmic Free
              </a>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Post</h2>
            <FeaturedPost post={featuredPost} />
          </section>
        )}

        {/* Category Filter */}
        {categories && categories.length > 0 && (
          <section className="mb-12">
            <CategoryFilter categories={categories} />
          </section>
        )}

        {/* Latest Posts */}
        <section id="latest-posts" className="pb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}