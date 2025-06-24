import Link from 'next/link'
import { Category } from '@/types'

interface CategoryBadgeProps {
  category: Category
  size?: 'small' | 'medium' | 'large'
}

export default function CategoryBadge({ category, size = 'small' }: CategoryBadgeProps) {
  const sizeClasses = {
    small: 'px-2 py-1 text-xs',
    medium: 'px-3 py-1.5 text-sm',
    large: 'px-4 py-2 text-base'
  }

  const iconClasses = {
    small: 'text-xs',
    medium: 'text-sm', 
    large: 'text-lg'
  }

  const categoryColor = category.metadata?.color || '#3B82F6'
  const categoryIcon = category.metadata?.icon || '📝'
  const categoryName = category.metadata?.name || category.title

  return (
    <Link 
      href={`/categories/${category.slug}`}
      className={`inline-flex items-center gap-1 rounded-full font-medium transition-colors hover:opacity-80 ${sizeClasses[size]}`}
      style={{ 
        backgroundColor: `${categoryColor}20`,
        color: categoryColor,
        borderColor: `${categoryColor}40`
      }}
    >
      <span className={iconClasses[size]}>
        {categoryIcon}
      </span>
      {categoryName}
    </Link>
  )
}