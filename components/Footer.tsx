export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full translate-x-48 translate-y-48"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-3xl">⚡</span>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Lightning Blog
              </h3>
            </div>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed max-w-md">
              A modern blog built with Cosmic in under 5 minutes. Showcasing the future of 
              headless content management with blazing-fast performance.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.cosmicjs.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <span>Built with Cosmic</span>
                <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3 group-hover:bg-pink-500 transition-colors"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="https://www.cosmicjs.com/docs" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3 group-hover:bg-pink-500 transition-colors"></span>
                  Cosmic Docs
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://www.cosmicjs.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3 group-hover:bg-pink-500 transition-colors"></span>
                  Try Cosmic
                </a>
              </li>
              <li>
                <a href="https://www.cosmicjs.com/docs" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3 group-hover:bg-pink-500 transition-colors"></span>
                  Documentation
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; 2025 Lightning Blog. Built with ❤️ and Cosmic CMS.
            </p>
            <div className="flex items-center space-x-6 text-gray-400">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm">All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}