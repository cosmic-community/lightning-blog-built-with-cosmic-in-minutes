import Link from 'next/link'
import { BlogPost } from '@/types'
import CategoryBadge from './CategoryBadge'
import AuthorInfo from './AuthorInfo'

interface FeaturedPostProps {
  post: BlogPost
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <article className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 group">
      <div className="lg:flex">
        {post.metadata?.featured_image && (
          <div className="lg:w-1/2 relative overflow-hidden">
            <Link href={`/posts/${post.slug}`}>
              <img 
                src={`${post.metadata.featured_image.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`}
                alt={post.title}
                width={400}
                height={250}
                className="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </Link>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        )}
        
        <div className="lg:w-1/2 p-8 lg:p-12">
          <div className="flex items-center gap-3 mb-6">
            {post.metadata?.category && (
              <CategoryBadge category={post.metadata.category} />
            )}
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 text-white shadow-sm">
              ⭐ Featured
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight group-hover:text-purple-600 transition-colors duration-300">
            <Link href={`/posts/${post.slug}`}>
              {post.title}
            </Link>
          </h2>
          
          {post.metadata?.subtitle && (
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              {post.metadata.subtitle}
            </p>
          )}
          
          {post.metadata?.excerpt && (
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              {post.metadata.excerpt}
            </p>
          )}
          
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              {post.metadata?.author && (
                <AuthorInfo author={post.metadata.author} showBio={false} />
              )}
            </div>
            {post.metadata?.published_date && (
              <time dateTime={post.metadata.published_date} className="text-sm text-gray-500 font-medium">
                {new Date(post.metadata.published_date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            )}
          </div>
          
          <div>
            <Link 
              href={`/posts/${post.slug}`}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
            >
              <span>Read Full Article</span>
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}