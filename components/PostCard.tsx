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
    <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:border-purple-200 transition-all duration-300 group">
      {post.metadata?.featured_image && (
        <Link href={`/posts/${post.slug}`}>
          <div className="relative overflow-hidden">
            <img 
              src={`${post.metadata.featured_image.imgix_url}?w=600&h=340&fit=crop&auto=format,compress`}
              alt={post.title}
              width={300}
              height={170}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </Link>
      )}
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          {post.metadata?.category && (
            <CategoryBadge category={post.metadata.category} />
          )}
          {post.metadata?.featured && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 text-white">
              ⭐ Featured
            </span>
          )}
        </div>
        
        <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-purple-600 transition-colors duration-300">
          <Link href={`/posts/${post.slug}`}>
            {post.title}
          </Link>
        </h2>
        
        {post.metadata?.subtitle && (
          <p className="text-gray-600 text-sm mb-3 font-medium">
            {post.metadata.subtitle}
          </p>
        )}
        
        {post.metadata?.excerpt && (
          <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
            {post.metadata.excerpt}
          </p>
        )}
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            {showAuthor && post.metadata?.author && (
              <AuthorInfo author={post.metadata.author} />
            )}
          </div>
          {post.metadata?.published_date && (
            <time dateTime={post.metadata.published_date} className="text-gray-500 font-medium">
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