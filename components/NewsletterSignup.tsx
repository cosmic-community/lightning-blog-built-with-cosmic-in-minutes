'use client'

import { useState } from 'react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubscribed(true)
    setIsLoading(false)
    setEmail('')
  }

  return (
    <section className="py-16">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-20 translate-y-20"></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white rounded-full transform -translate-y-1/2"></div>
        </div>
        
        <div className="relative text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-2xl mb-6">
            <span className="text-2xl">📧</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Stay in the Loop
          </h2>
          
          <p className="text-lg lg:text-xl opacity-90 mb-8">
            Get the latest insights on modern web development, headless CMS tips, 
            and behind-the-scenes content delivered to your inbox.
          </p>
          
          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 rounded-2xl text-gray-900 placeholder-gray-500 border-0 focus:ring-4 focus:ring-white focus:ring-opacity-30 outline-none"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-2xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:transform-none"
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Subscribing...
                  </span>
                ) : (
                  'Subscribe'
                )}
              </button>
            </form>
          ) : (
            <div className="bg-white bg-opacity-20 rounded-2xl p-6 max-w-md mx-auto">
              <div className="text-2xl mb-2">🎉</div>
              <h3 className="text-xl font-semibold mb-2">Welcome aboard!</h3>
              <p className="opacity-90">
                Thanks for subscribing! You'll receive our next newsletter soon.
              </p>
            </div>
          )}
          
          <p className="text-sm opacity-75 mt-6">
            No spam, unsubscribe at any time. Built with ❤️ using Cosmic CMS.
          </p>
        </div>
      </div>
    </section>
  )
}