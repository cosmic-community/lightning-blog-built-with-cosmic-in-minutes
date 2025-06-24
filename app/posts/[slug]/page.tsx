// app/posts/[slug]/page.tsx
import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/cosmic'
import { BlogPost } from '@/types'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PostContent from '@/components/PostContent'
import AuthorCard from '@/components/AuthorCard'
import CategoryBadge from '@/components/CategoryBadge'
import { Metadata } from 'next'

interface PostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts()
  
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.metadata?.excerpt || post.metadata?.subtitle || 'Read this post on Lightning Blog',
    openGraph: {
      title: post.title,
      description: post.metadata?.excerpt || post.metadata?.subtitle || '',
      images: post.metadata?.featured_image ? [post.metadata.featured_image.imgix_url] : [],
    },
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Post Header */}
        <header className="mb-12">
          <div className="mb-4">
            {post.metadata?.category && (
              <CategoryBadge category={post.metadata.category} />
            )}
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          
          {post.metadata?.subtitle && (
            <p className="text-xl text-gray-600 mb-6">
              {post.metadata.subtitle}
            </p>
          )}
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500">
            <div className="mb-2 sm:mb-0">
              {post.metadata?.published_date && (
                <time dateTime={post.metadata.published_date}>
                  {new Date(post.metadata.published_date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long', 
                    day: 'numeric'
                  })}
                </time>
              )}
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {post.metadata?.featured_image && (
          <div className="mb-12">
            <img 
              src={`${post.metadata.featured_image.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
              alt={post.title}
              width={800}
              height={400}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        )}

        {/* Post Content */}
        <div className="prose prose-lg max-w-none">
          <PostContent content={post.metadata?.content || ''} />
        </div>

        {/* Author Card */}
        {post.metadata?.author && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <AuthorCard author={post.metadata.author} />
          </div>
        )}
      </article>

      <Footer />
    </div>
  )
}