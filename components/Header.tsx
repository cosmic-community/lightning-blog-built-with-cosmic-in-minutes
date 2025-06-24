import Link from 'next/link'
import { getAllCategories } from '@/lib/cosmic'

export default async function Header() {
  const categories = await getAllCategories()

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-primary-600 transition-colors">
              ⚡ Lightning Blog
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Home
            </Link>
            {categories && categories.slice(0, 4).map((category) => (
              <Link 
                key={category.id}
                href={`/categories/${category.slug}`}
                className="text-gray-700 hover:text-primary-600 transition-colors"
              >
                {category.metadata?.name || category.title}
              </Link>
            ))}
            <a 
              href="https://www.cosmicjs.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
            >
              Try Cosmic
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}