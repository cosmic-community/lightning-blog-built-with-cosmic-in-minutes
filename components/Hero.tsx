import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          {/* Hero Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-10 backdrop-blur-sm rounded-full text-sm font-medium mb-8 border border-white border-opacity-20">
            <span className="animate-pulse mr-2">⚡</span>
            Built with Cosmic in under 5 minutes
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Lightning</span>
            <span className="block bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
            Modern web development insights from the future. Experience the power of 
            <span className="text-yellow-400 font-semibold"> headless CMS</span> with 
            blazing-fast performance and developer-first approach.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link 
              href="#latest-posts" 
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <span>Read Latest Posts</span>
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            <a 
              href="https://www.cosmicjs.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-8 py-4 bg-white bg-opacity-10 backdrop-blur-sm text-white font-semibold rounded-full border border-white border-opacity-30 hover:bg-opacity-20 transition-all duration-300"
            >
              <span>Try Cosmic Free</span>
              <svg className="ml-2 w-5 h-5 group-hover:rotate-45 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-300">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span>Next.js 15</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
              <span>TypeScript</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></div>
              <span>Tailwind CSS</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-pink-400 rounded-full mr-2 animate-pulse"></div>
              <span>Cosmic CMS</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-12 fill-current text-gray-50" viewBox="0 0 1440 74" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,74L1392,74C1344,74,1248,74,1152,74C1056,74,960,74,864,74C768,74,672,74,576,74C480,74,384,74,288,74C192,74,96,74,48,74L0,74Z"/>
        </svg>
      </div>
    </section>
  )
}