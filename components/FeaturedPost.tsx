import Link from 'next/link'
import { BlogPost } from '@/types'
import CategoryBadge from './CategoryBadge'
import AuthorInfo from './AuthorInfo'

interface FeaturedPostProps {
  post: BlogPost
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <article className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
      <div className="lg:flex">
        {post.metadata?.featured_image && (
          <div className="lg:w-1/2">
            <Link href={`/posts/${post.slug}`}>
              <img 
                src={`${post.metadata.featured_image.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`}
                alt={post.title}
                width={400}
                height={250}
                className="w-full h-64 lg:h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>
        )}
        
        <div className="lg:w-1/2 p-8">
          <div className="flex items-center gap-2 mb-4">
            {post.metadata?.category && (
              <CategoryBadge category={post.metadata.category} />
            )}
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
              ⭐ Featured
            </span>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-primary-600 transition-colors">
            <Link href={`/posts/${post.slug}`}>
              {post.title}
            </Link>
          </h2>
          
          {post.metadata?.subtitle && (
            <p className="text-lg text-gray-600 mb-4">
              {post.metadata.subtitle}
            </p>
          )}
          
          {post.metadata?.excerpt && (
            <p className="text-gray-600 mb-6">
              {post.metadata.excerpt}
            </p>
          )}
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {post.metadata?.author && (
                <AuthorInfo author={post.metadata.author} showBio={false} />
              )}
            </div>
            {post.metadata?.published_date && (
              <time dateTime={post.metadata.published_date} className="text-sm text-gray-500">
                {new Date(post.metadata.published_date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            )}
          </div>
          
          <div className="mt-6">
            <Link 
              href={`/posts/${post.slug}`}
              className="inline-flex items-center px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
            >
              Read More →
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}