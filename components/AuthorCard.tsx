import { Author } from '@/types'
import { Globe, Twitter } from 'lucide-react'

interface AuthorCardProps {
  author: Author
}

export default function AuthorCard({ author }: AuthorCardProps) {
  const authorName = author.metadata?.name || author.title
  const authorRole = author.metadata?.role
  const authorBio = author.metadata?.bio
  const authorWebsite = author.metadata?.website
  const authorTwitter = author.metadata?.twitter
  const profilePicture = author.metadata?.profile_picture

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">About the Author</h3>
      
      <div className="flex items-start space-x-4">
        {profilePicture && (
          <img 
            src={`${profilePicture.imgix_url}?w=160&h=160&fit=crop&auto=format,compress`}
            alt={authorName}
            width={80}
            height={80}
            className="w-20 h-20 rounded-full object-cover flex-shrink-0"
          />
        )}
        
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 text-lg">
            {authorName}
          </h4>
          
          {authorRole && (
            <p className="text-primary-600 font-medium mb-2">
              {authorRole}
            </p>
          )}
          
          {authorBio && (
            <p className="text-gray-600 mb-4">
              {authorBio}
            </p>
          )}
          
          <div className="flex items-center space-x-4">
            {authorWebsite && (
              <a 
                href={authorWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-gray-600 hover:text-primary-600 transition-colors"
              >
                <Globe size={16} />
                <span className="text-sm">Website</span>
              </a>
            )}
            
            {authorTwitter && (
              <a 
                href={`https://twitter.com/${authorTwitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-gray-600 hover:text-primary-600 transition-colors"
              >
                <Twitter size={16} />
                <span className="text-sm">@{authorTwitter}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}