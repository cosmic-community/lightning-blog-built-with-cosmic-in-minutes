import { Author } from '@/types'

interface AuthorInfoProps {
  author: Author
  showBio?: boolean
}

export default function AuthorInfo({ author, showBio = false }: AuthorInfoProps) {
  const authorName = author.metadata?.name || author.title
  const authorRole = author.metadata?.role
  const authorBio = author.metadata?.bio
  const profilePicture = author.metadata?.profile_picture

  return (
    <div className="flex items-center space-x-3">
      {profilePicture && (
        <img 
          src={`${profilePicture.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
          alt={authorName}
          width={40}
          height={40}
          className="w-10 h-10 rounded-full object-cover"
        />
      )}
      
      <div>
        <p className="font-medium text-gray-900">
          {authorName}
        </p>
        {authorRole && (
          <p className="text-sm text-gray-500">
            {authorRole}
          </p>
        )}
        {showBio && authorBio && (
          <p className="text-sm text-gray-600 mt-1">
            {authorBio}
          </p>
        )}
      </div>
    </div>
  )
}