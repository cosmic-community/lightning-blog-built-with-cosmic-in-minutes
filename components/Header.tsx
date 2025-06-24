import Link from 'next/link'
import { getAllCategories } from '@/lib/cosmic'

export default async function Header() {
  const categories = await getAllCategories()

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-gray-900 hover:text-purple-600 transition-colors group">
              <span className="text-3xl group-hover:animate-pulse">⚡</span>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Lightning Blog
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            {categories && categories.slice(0, 4).map((category) => (
              <Link 
                key={category.id}
                href={`/categories/${category.slug}`}
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors relative group"
              >
                {category.metadata?.name || category.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <a 
              href="https://www.cosmicjs.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Try Cosmic
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}