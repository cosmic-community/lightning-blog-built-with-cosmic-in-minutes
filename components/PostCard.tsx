import Link from 'next/link'
import { BlogPost } from '@/types'
import CategoryBadge from './CategoryBadge'
import AuthorInfo from './AuthorInfo'

interface PostCardProps {
  post: BlogPost
  showAuthor?: boolean
}

export default function PostCard({ post, showAuthor = true }: PostCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      {post.metadata?.featured_image && (
        <Link href={`/posts/${post.slug}`}>
          <div className="aspect-w-16 aspect-h-9 bg-gray-200">
            <img 
              src={`${post.metadata.featured_image.imgix_url}?w=600&h=340&fit=crop&auto=format,compress`}
              alt={post.title}
              width={300}
              height={170}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </Link>
      )}
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          {post.metadata?.category && (
            <CategoryBadge category={post.metadata.category} />
          )}
          {post.metadata?.featured && (
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
              ⭐ Featured
            </span>
          )}
        </div>
        
        <h2 className="text-xl font-semibold text-gray-900 mb-2 hover:text-primary-600 transition-colors">
          <Link href={`/posts/${post.slug}`}>
            {post.title}
          </Link>
        </h2>
        
        {post.metadata?.subtitle && (
          <p className="text-gray-600 text-sm mb-3">
            {post.metadata.subtitle}
          </p>
        )}
        
        {post.metadata?.excerpt && (
          <p className="text-gray-600 mb-4 line-clamp-3">
            {post.metadata.excerpt}
          </p>
        )}
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            {showAuthor && post.metadata?.author && (
              <AuthorInfo author={post.metadata.author} />
            )}
          </div>
          {post.metadata?.published_date && (
            <time dateTime={post.metadata.published_date}>
              {new Date(post.metadata.published_date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
            </time>
          )}
        </div>
      </div>
    </article>
  )
}