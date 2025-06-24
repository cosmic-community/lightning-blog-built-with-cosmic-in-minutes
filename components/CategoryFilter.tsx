'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Category } from '@/types'

interface CategoryFilterProps {
  categories: Category[]
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  const [showAll, setShowAll] = useState(false)
  const displayCategories = showAll ? categories : categories.slice(0, 6)

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Browse by Category</h3>
      
      <div className="flex flex-wrap gap-3">
        {displayCategories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.slug}`}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors"
          >
            <span>{category.metadata?.icon || '📝'}</span>
            <span>{category.metadata?.name || category.title}</span>
          </Link>
        ))}
        
        {categories.length > 6 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center px-4 py-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
          >
            {showAll ? 'Show Less' : `+${categories.length - 6} More`}
          </button>
        )}
      </div>
    </div>
  )
}