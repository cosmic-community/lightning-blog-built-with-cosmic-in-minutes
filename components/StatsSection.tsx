interface StatsSectionProps {
  totalPosts: number
  totalCategories: number
  featuredPosts: number
}

export default function StatsSection({ totalPosts, totalCategories, featuredPosts }: StatsSectionProps) {
  const stats = [
    {
      number: totalPosts,
      label: 'Published Posts',
      icon: '📝',
      description: 'High-quality articles'
    },
    {
      number: totalCategories,
      label: 'Categories',
      icon: '🏷️',
      description: 'Topics covered'
    },
    {
      number: featuredPosts,
      label: 'Featured Articles',
      icon: '⭐',
      description: 'Editor\'s picks'
    },
    {
      number: 5,
      label: 'Minutes to Build',
      icon: '⚡',
      description: 'With Cosmic CMS'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Built for Performance
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what makes this blog lightning fast and developer-friendly
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-semibold text-gray-700 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-gray-500">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
        
        {/* Performance Metrics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100">
            <div className="text-3xl mb-3">🚀</div>
            <div className="text-2xl font-bold text-green-700 mb-1">100</div>
            <div className="text-sm font-medium text-green-600">Lighthouse Score</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
            <div className="text-3xl mb-3">⚡</div>
            <div className="text-2xl font-bold text-blue-700 mb-1">&lt;1s</div>
            <div className="text-sm font-medium text-blue-600">Load Time</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
            <div className="text-3xl mb-3">🎯</div>
            <div className="text-2xl font-bold text-purple-700 mb-1">Zero</div>
            <div className="text-sm font-medium text-purple-600">Config Needed</div>
          </div>
        </div>
      </div>
    </section>
  )
}